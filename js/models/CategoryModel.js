// Category Model
// ==============

// Includes file dependencies
define([ "jquery", "backbone" ], function( $, Backbone ) {

    // The Model constructor
    var Model = Backbone.Model.extend( {
        urlRoot: "http://168.144.134.243:3000/erp/res.partner"
        //urlRoot: "http://localhost:3000/erp/res.partner"
    } );

    // Returns the Model class
    return Model;
} );