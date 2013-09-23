// Mobile Router
// =============

// Includes file dependencies
//define([ "jquery","backbone", "../models/CategoryModel", "../collections/CategoriesCollection", "../views/CategoryView","../views/jqt", "../views/ContactoView" ], function( $, Backbone, CategoryModel, CategoriesCollection, CategoryView, JqtView  ) {
define([ "jquery","backbone"], function( $, Backbone ) {
    var CategoryRouter = Backbone.Router.extend( {
        initialize: function() {
            //this.animalsView = new CategoryView( { el: "#animals", collection: new CategoriesCollection( [] , { type: "animals" , query: "type|like|contact" } ) } );
            //this.colorsView = new CategoryView( { el: "#colors", collection: new CategoriesCollection( [] , { type: "colors" , query: "type|like|contact" } ) } );
            //this.vehiclesView = new CategoryView( { el: "#vehicles", collection: new CategoriesCollection( [] , { type: "vehicles" , query: "type|like|contact" } ) } );
            //this.jqtView = new JqtView( { el: "#jqt", collection: new CategoriesCollection( [] , { type: "res.partner" , query: "type|like|contact" } ) }  );
            //this.contactoView = new ContactoView( { el: "#contacto", collection: new CategoriesCollection( [] , { type: "res.partner" , query: "type|like|contact" } ) }  );

            Backbone.history.start();
        }
        /*,routes: {
            "": "home",
            "category?:type": "category",
            "form/:type/:clave": "form",
            "save/:type/:clave": "save"
        },
        home: function() {
            $('.sidebar-left').animate({left: '-270'}, 300, 'easeOutExpo', function () {});
            $('.sidebar-right').animate({right: '-280px'}, 300, 'easeInOutExpo', function () {});
            $.mobile.changePage( "#categories" , { reverse: false, changeHash: false } );
        },
        category: function(type) {
            var currentView = this[ type + "View" ];
            $('.sidebar-left').animate({left: '-270'}, 300, 'easeOutExpo', function () {});
            $('.sidebar-right').animate({right: '-280px'}, 300, 'easeInOutExpo', function () {});
            if(!currentView.collection.length) {
                // Show's the jQuery Mobile loading icon
                $.mobile.loading( "show" );
                currentView.collection.fetch().done( function(data) {
                    this.jqtView = new JqtView( { el: "#" + type, collection: currentView.collection }  );
                 $.mobile.changePage( "#" + type, { reverse: false, changeHash: false } );
                } );
            } else {
                $.mobile.changePage( "#" + type, { reverse: false, changeHash: false } );
            }
        },form: function(type, clave) {
            var currentView = this[ type + "View" ];
            $.mobile.loading( "show" );

            currentView.collection.initialize([] , { type: "res.partner" , query: "id|=|" + clave });
            currentView.collection.fetch().done( function(data) {
                currentView.initialize();
                //this.contactoView = new ContactoView({ el: "#" + type, collection: currentView.collection});
                $.mobile.changePage( "#" + type, { reverse: false, changeHash: false} );
                $('body').trigger('create');
            } );
        },save: function(type, clave) {
            var currentView = this[ type + "View" ];
            $.mobile.loading( "show" );
            currentView.collection.initialize([] , { type: "res.partner" , query: "id|=|" + clave });
            $.mobile.loading( "show" );
            var userDetails = {
                id:2,
                name: 'Thomas'
            };

            modelCategory = new CategoryModel([]);
            modelCategory.save(userDetails, {
                error: function (model, response) {
                    console.log('error', model, response);
                },
                success: function () {
                    $.mobile.changePage( "#jqt", { reverse: false, changeHash: false } );
                }
            })
        }*/
    } );

    return CategoryRouter;
} );