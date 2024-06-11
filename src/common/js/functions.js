/*
 * pwix:notes/src/common/js/functions.js
 */

import SimpleSchema from 'meteor/aldeed:simple-schema';

/**
 * @summary Let the target collection schema be extended with a 'notes' field
 * @param {String} field an optional field name, defaulting to the corresponding configured value
 * @returns {SimpleSchema} a new instance to be added to the target collection
 */
Notes.schema = function( field ){
    field = field || Notes._conf.field;
    let o = {};
    o[field] = {
        type: String,
        optional: true
    }
    return new SimpleSchema( o );
};
