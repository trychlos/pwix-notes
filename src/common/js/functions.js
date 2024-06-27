/*
 * pwix:notes/src/common/js/functions.js
 */

import _ from 'lodash';

import { pwixI18n } from 'meteor/pwix:i18n';

/**
 * Default Field.Def definition
 */
Notes.defaultFieldDef = {
    name: Notes.configure().name,
    type: String,
    optional: true,
    dt_title: pwixI18n.label( I18N, 'dt_title' ),
    dt_template: Meteor.isClient && Template.NotesTd,
    dt_templateContext( rowData ){
        return {
            item: rowData
        };
    },
    dt_className: 'dt-center',
    form_title: pwixI18n.label( I18N, 'form_title' ),
    form_label: pwixI18n.label( I18N, 'form_label' ),
    form_placeholder: pwixI18n.label( I18N, 'form_placeholder' )
};

/**
 * @summary Provide a 'Field.Def'-valid field definition
 * @param {Object} arg an optional object to configure the field
 * @returns {Object} an object suitable to the Field.Def instanciation
 */
Notes.fieldDef = function( arg ){
    let o = {};
    return _.merge( o, Notes.defaultFieldDef, arg );
};
