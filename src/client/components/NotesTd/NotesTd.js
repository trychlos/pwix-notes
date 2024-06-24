/*
 * /imports/common/init/NotesTd.js
 */

import _ from 'lodash';

import './NotesTd.html';

Template.NotesTd.onRendered( function(){
    console.debug( this );
});

Template.NotesTd.helpers({
    notesIndicator(){
        let haveNotes = false;
        /*
        const field = this.notesField || 'notes';
        const array = _.isArray( this.item ) ? this.item : [ this.item ];
        array.every(( it ) => {
            if( it[field] && it[field].length ){
                haveNotes = true;
            }
            return !haveNotes;
        });
        */
        return haveNotes ? '' : 'ui-transparent';
    }
});
