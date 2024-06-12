/*
 * pwix:notes/src/common/js/functions.js
 */

import SimpleSchema from 'meteor/aldeed:simple-schema';

/**
 * @summary Provide a Forms-valid field definition
 * @param {Object} arg an optional object to configure the field
 * @returns {Object} an object suitable to the Forms definitions
 */
Notes.field = function( arg ){
    let have_field = false;
    let have_type = false;
    let have_optional = false;
    let have_dt_title = false;
    let have_dt_temmplate = false;
    let res = {};
    Object.keys( arg ).every(( key ) => {
        if( key === 'field' ){
            have_field = true;
            res[key] = arg[key];
        } else if( key === 'type' ){
            have_type = true;
            res[key] = arg[key];
        } else if( key == 'optional' ){
            have_optional = true;
            res[key] = arg[key];
        } else if( key == 'dt_title' ){
            have_dt_title = true;
            res[key] = arg[key];
        } else if( key == 'dt_temmplate' ){
            have_dt_temmplate = true;
            res[key] = arg[key];
        } else {
            console.warn( 'pwix:notes.field() doesn\' manage \''+key+'\' key' );
        }
        return true;
    });
    if( !have_field ){
        res.field = Notes._conf.field;
    }
    if( !have_type ){
        res.type = String;
    }
    if( !have_optional ){
        res.optional = true;
    }
    if( !have_dt_title ){
        res.dt_title = Notes._conf.dt_title;
    }
    if( !have_dt_temmplate ){
        res.dt_template = Notes.template;
    }
    return res;
};

/**
 * @summary Let the target collection schema be extended with a 'notes' field
 * @param {String} field an optional field name, defaulting to the corresponding configured value
 * @returns {SimpleSchema} a new instance to be added to the target collection
 */
Notes.schema = function( field ){
    field = field || Notes._conf.field;
    let res = {};
    res[field] = {
        type: String,
        optional: true
    }
    return new SimpleSchema( res );
};
