/*
 * /imports/common/init/NotesEdit.js
 *
 * Parms:
 * - item: the edited document, either a raw document or a ReactiveVar
 * - field: the Field.Def definition of the field
 */

import _ from 'lodash';

import { Random } from 'meteor/random';
import { ReactiveVar } from 'meteor/reactive-var';

import './NotesEdit.html';

Template.NotesEdit.onCreated( function(){
    const self = this;

    self.PCK = {
        // have a unique identifier for this component instance
        noteId: Random.id(),

        // advertize of the NotesEdit panel content
        advertize( dataContext ){
            const o = { ...dataContext };
            o.content = self.$( '.NotesEdit textarea' ).val() || null;
            self.$( '.NotesEdit' ).trigger( 'notes-data', o );
        },

        // update the item
        updateItem( dataContext ){
            let item = dataContext.item;
            let isRv = false;
            if( item instanceof ReactiveVar ){
                item = item.get();
                isRv = true;
            }
            const field = dataContext.field;
            const value = self.$( '.NotesEdit textarea' ).val();
            item[field.name()] = value;
            //console.debug( field.name(), value, 'item', item[field.name()] );
            if( isRv ){
                dataContext.item.set( item );
            }
        }
    };
});

Template.NotesEdit.onRendered( function(){
    const self = this;

    // init the data and the validity status
    self.PCK.advertize( Template.currentData());

    // setup the area context
    self.autorun(() => {
        let item = Template.currentData().item;
        if( item instanceof ReactiveVar ){
            item = item.get();
        }
        const field = Template.currentData().field;
        self.$( '.NotesEdit textarea' ).val( item[field.name()] || '' );
    });
});

Template.NotesEdit.helpers({
    // the label on the left of the textarea
    label(){
        return this.field.toForm().label;
    },
    // give a unique identifier to the text area
    noteId(){
        return Template.instance().PCK.noteId;
    },
    // a placeholder for the notes
    placeholder(){
        return this.field.toForm().placeholder;
    }
});

Template.NotesEdit.events({
    'clear-panel .NotesEdit'( event, instance ){
        instance.$( '.NotesEdit textarea' ).val( '' );
        instance.PCK.advertize( this );
    },

    'input .NotesEdit'( event, instance ){
        instance.PCK.updateItem( this );
        instance.PCK.advertize( this );
    }
});
