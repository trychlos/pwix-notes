/*
 * /imports/common/init/NotesTd.js
 *
 * Data context:
 * - item: the item being edited
 * - field: the Field.Def definition
 */

import _ from 'lodash';

import './NotesTd.html';

Template.NotesTd.helpers({
    notesIndicator(){
        //console.debug( 'this', this );
        let haveNotes = this.item && this.field && Object.keys( this.item ).includes ( this.field.name()) && this.item[this.field.name()] && this.item[this.field.name()].length > 0;
        return haveNotes ? 'notes-set' : 'notes-unset ui-transparent';
    }
});
