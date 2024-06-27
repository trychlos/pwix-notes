/*
 * pwix:notes/src/common/js/trace.js
 */

_verbose = function( level ){
    if( Notes.configure().verbosity & level ){
        let args = [ ...arguments ];
        args.shift();
        console.debug( ...args );
    }
};

_trace = function( functionName ){
    _verbose( Notes.C.Verbose.FUNCTIONS, ...arguments );
};
