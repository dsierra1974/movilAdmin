// Mobile Router
// =============

// Includes file dependencies
define([ "jquery","backbone", "../models/CategoryModel", "../collections/CategoriesCollection", "../views/CategoryView","../views/jqt", "../views/ContactoView" ], function( $, Backbone, CategoryModel, CategoriesCollection, CategoryView, JqtView  ) {
    var CategoryRouter = Backbone.Router.extend( {
        initialize: function() {
            this.animalsView = new CategoryView( { el: "#animals", collection: new CategoriesCollection( [] , { type: "animals" , query: "type|like|contact" } ) } );
            this.colorsView = new CategoryView( { el: "#colors", collection: new CategoriesCollection( [] , { type: "colors" , query: "type|like|contact" } ) } );
            this.vehiclesView = new CategoryView( { el: "#vehicles", collection: new CategoriesCollection( [] , { type: "vehicles" , query: "type|like|contact" } ) } );
            this.jqtView = new JqtView( { el: "#jqt", collection: new CategoriesCollection( [] , { type: "res.partner" , query: "type|like|contact" } ) }  );
            this.contactoView = new ContactoView( { el: "#contacto", collection: new CategoriesCollection( [] , { type: "res.partner" , query: "type|like|contact" } ) }  );

            Backbone.history.start();
        },
        routes: {
            "": "home",
            "category?:type": "category",
            "return?:type": "return",
            "form/:type/:key": "form",
            "save/:type/:key": "save",
            "edit/:type/:key": "edit"
        },
        home: function() {

            $.mobile.changePage( "#categories" , { reverse: false, changeHash: false } );
            $('body').trigger('create');
        },
        category: function(type) {
            var currentView = this[ type + "View" ];

            //if(!currentView.collection.length) {
                // Show's the jQuery Mobile loading icon
                if(typeof currentView != "undefined"){
                    $.mobile.loading( "show" );
                    currentView.collection.initialize([] , { type: "res.partner" , query: "type|like|contact" });

                    currentView.collection.fetch().done( function(data) {
                        currentView.initialize();
                        $('body').trigger('create');
                        $.mobile.changePage( "#" + type, { reverse: false, changeHash: false} );
                    } );
                }

            //} else {
               // $.mobile.changePage( "#" + type, { reverse: false, changeHash: false } );
            //}
        },
        return: function(type) {
            var currentView = this[ type + "View" ];
            $.mobile.loading( "show" );
            currentView.collection.initialize([] , { type: "res.partner" , query: "type|like|contact" });
            currentView.collection.fetch().done( function(data) {

                currentView.initialize();
                $('body').trigger('create');
                $.mobile.changePage( "#" + type, { reverse: true, changeHash: false, transition: "slide"}, true,true );


                //this.jqtView = new JqtView( { el: "#" + type, collection: currentView.collection }  );
                //$.mobile.changePage( "#" + type, { reverse: true, changeHash: false, transition: "slide"},true,true );
                //$('body').trigger('create');
            } );
        },
        form: function(type, key) {
            var currentView = this[ type + "View" ];
            $.mobile.loading( "show" );

            currentView.collection.initialize([] , { type: "res.partner" , query: "id|=|" + key });
            currentView.collection.fetch().done( function(data) {
                currentView.initialize();
                //this.contactoView = new ContactoView({ el: "#" + type, collection: currentView.collection});
                $('body').trigger('create');
                $.mobile.changePage( "#" + type, {  reverse: false, changeHash: false, transition: "slide"},true,true );


                $('.editField').prop('disabled', true);
                $("#edit").val("Editar");

            } );
        },save: function(type, key) {
            var currentView = this[ type + "View" ];
            $.mobile.loading( "show" );
            currentView.collection.initialize([] , { type: "res.partner" , query: "id|=|" + key });
            $.mobile.loading( "show" );

            var userDetails = {
                id:key,
                name: $("#name").val()
            };
            modelCategory = new CategoryModel(userDetails);
            modelCategory.save(userDetails, {
                error: function (model, response) {
                    console.log('error', model, response);
                },
                success: function () {
                    this.jqtView = new JqtView( { el: "#jqt", collection: new CategoriesCollection( [] , { type: "res.partner" , query: "type|like|contact" } ) });
                    $.mobile.loading( "show" );
                    this.jqtView.collection.fetch().done( function(data) {
                        this.jqtView = new JqtView( { el: "#jqt" , collection: new CategoriesCollection( data , { type: "res.partner" , query: "type|like|contact" } )  }  );
                        $.mobile.changePage( "#jqt" , { reverse: false, changeHash: false } );
                        $('body').trigger('create');
                    } );
                    //$.mobile.changePage( "#jqt", { reverse: false, changeHash: false } );
                }
            })
        },edit: function(type, key) {
            $('.editField').prop('disabled', false);
            $('a#edit').text('Salvar');
            $('a#edit').attr("href" , "#save/contacto/" + key);
        }
    } );

    return CategoryRouter;
} );