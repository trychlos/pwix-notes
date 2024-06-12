/*
 * pwix:notes/src/common/js/configure.js
 */

import _ from 'lodash';

Notes._conf = {};

Notes._defaults = {
    field: 'notes',
    dt_title: 'Notes',
    verbosity: Notes.C.Verbose.CONFIGURE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server.
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
Notes.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( Notes._conf, Notes._defaults, o );
        // be verbose if asked for
        if( Notes._conf.verbosity & Notes.C.Verbose.CONFIGURE ){
            //console.log( 'pwix:notes configure() with', o, 'building', Notes._conf );
            console.log( 'pwix:notes configure() with', o );
        }
    }
    // also acts as a getter
    return Notes._conf;
}

_.merge( Notes._conf, Notes._defaults );
