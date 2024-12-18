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
        _conf = _.merge( Notes._defaults, _conf, o );
        Notes._conf.set( _conf );
        _verbose( Notes.C.Verbose.CONFIGURE, 'pwix:notes configure() with', o );
    }
    // also acts as a getter
    return Notes._conf.get();
}

_conf = _.merge( {}, Notes._defaults );
Notes._conf.set( _conf );
