/*
 * pwix:notes/src/common/js/configure.js
 */

import _ from 'lodash';

import { ReactiveVar } from 'meteor/reactive-var';

let _conf = {};

Notes._conf = new ReactiveVar( _conf );

Notes._defaults = {
    name: 'notes',
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
        _.merge( _conf, Notes._defaults, o );
        Notes._conf.set( _conf );
        // be verbose if asked for
        if( _conf.verbosity & Notes.C.Verbose.CONFIGURE ){
            //console.log( 'pwix:notes configure() with', o, 'building', Notes._conf );
            console.log( 'pwix:notes configure() with', o );
        }
    }
    // also acts as a getter
    return Notes._conf.get();
}

_.merge( _conf, Notes._defaults );
Notes._conf.set( _conf );
