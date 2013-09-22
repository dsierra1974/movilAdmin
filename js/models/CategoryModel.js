// Category Model
// ==============

// Includes file dependencies
define([ "jquery", "backbone" ], function( $, Backbone ) {

    // The Model constructor
    var Model = Backbone.Model.extend( {
        urlRoot: "http://168.144.134.243:3001/erp/res.partner"


        //initialize: function () {
            //this.reports = new CategoriesCollection( [] , { type: "animals" } ) ;
            //this.reports.url = this.urlRoot + "/" + this.id + "/reports";
            //this.reports.url = this.urlRoot + "/" + this.id ;
            //this.reports.url = this.urlRoot ;

            //this.reports = new Collection([] , { type: "colors" } );
            //this.reports.url = this.urlRoot + "/" + this.id + "/reports";
            //this.reports.url = this.urlRoot + "?query=id|=|5";
        //}
    } );

    // Returns the Model class
    return Model;
} );