// Category Collection
// ===================
// Includes file dependencies
define([ "jquery","backbone","models/CategoryModel" ], function( $, Backbone, CategoryModel ) {
    // Extends Backbone.Router
    Collection = Backbone.Collection.extend( {
        // The Collection constructor
        initialize: function( models, options ) {
            this.types = options.type;
            this.url = "http://168.144.134.243:3000/erp/find/"+ this.types +"?query=" + options.query;
        },
        // Sets the Collection model property to be a Category Model
        model: CategoryModel
       // url: "http://localhost:3000/erp/find/"+ this.types +"?name=Daniel"
    } );
    // Returns the Model class
    return Collection;
} );