/*
 * pwix:notes/src/common/js/functions.js
 */

import _ from 'lodash';

/**
 * Default Field.Def definition
 */
Notes.defaultFieldDef = {
    name: 'notes',
    type: String,
    optional: true,
    dt_title: pwixI18n.label( I18N, 'dt_title' )
};

/**
 * @summary Provide a Forms-valid field definition
 * @param {Object} arg an optional object to configure the field
 * @returns {Object} an object suitable to the Field.Def instanciation
 */
Notes.fieldDef = function( arg ){
    let o = {};
    return _.merge( o, Notes.defaultFieldDef, arg );
};
