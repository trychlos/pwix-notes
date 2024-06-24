/*
 * /imports/common/init/NotesEdit.js
 *
 * Parms:
 */

import _ from 'lodash';

import { pwixI18n } from 'meteor/pwix:i18n';
import { Random } from 'meteor/random';

import './NotesEdit.html';

Template.NotesEdit.onCreated( function(){
    const self = this;

    self.PCK = {
        // have a unique identifier for this component instance
        noteId: Random.id(),

        // advertize of the NotesEdit panel content
        advertize( dataContext ){
            const o = { ...dataContext };
            o.content = self.$( '.notes-edit textarea' ).val();
            self.$( '.notes-edit' ).trigger( 'notes-data', o );
        }
    };
});

Template.NotesEdit.onRendered( function(){
    const self = this;
    // init the data and the validity status
    self.PCK.advertize( Template.currentData());
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
    'clear-panel .notes-edit'( event, instance ){
        instance.$( '.notes-edit textarea' ).val( '' );
        instance.PCK.advertize( this );
    },

    'input .notes-edit'( event, instance ){
        instance.PCK.advertize( this );
    }
});
