/*
 * /imports/common/init/NotesTd.js
 */

import _ from 'lodash';

Template.NotesTd.helpers({
    notesIndicator(){
        const field = this.notesField || 'notes';
        const array = _.isArray( this.item ) ? this.item : [ this.item ];
        let haveNotes = false;
        array.every(( it ) => {
            if( it[field] && it[field].length ){
                haveNotes = true;
            }
            return !haveNotes;
        });
        return haveNotes ? '' : 'ui-transparent';
    }
});
