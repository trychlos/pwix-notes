/*
 * /imports/common/init/NotesEdit.js
 *
 * Parms:
 */

import _ from 'lodash';

import { pwixI18n } from 'meteor/pwix:i18n';
import { Random } from 'meteor/random';

Template.ext_notes_panel.onCreated( function(){
    const self = this;

    self.PCK = {
        // have a unique identifier for this component instance
        noteId: Random.id(),

        // advertize of the ExtNotes panel content
        event( dataContext ){
            //console.debug( 'dataContext', dataContext );
            self.$( '.notes-edit' ).trigger( dataContext.event || 'notes-data', {
                ok: true,
                ...dataContext.data || {},
                data: self.$( '.c-NotesEdit-panel textarea' ).val()
            });
        }
    };
});

Template.ext_notes_panel.onRendered( function(){
    const self = this;

    // init the data and the validity status
    self.$( '.notes-edit textarea' ).val( Template.currentData().notes || '' );
    self.PCK.event( Template.currentData());
});

Template.ext_notes_panel.helpers({
    // string translation
    i18n( arg ){
        return pwixI18n.label( I18N, arg.hash.key );
    },
    // give a unique identifier to the text area
    noteId(){
        return Template.instance().PCK.noteId;
    }
});

Template.ext_notes_panel.events({
    'clear-panel .c-NotesEdit-panel'( event, instance ){
        this.notes = '';
    },
    'input .c-NotesEdit-panel'( event, instance ){
        event.originalEvent['FormChecker'] = { handled: true };
        instance.PCK.event( this );
    }
});
