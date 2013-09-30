// Mobile Router
// =============

// Includes file dependencies
define([ "jquery","backbone", "../models/CategoryModel", "../collections/CategoriesCollection", "../views/CategoryView","../views/jqt", "../views/ContactoView", "../views/ContactoEditView" ], function( $, Backbone, CategoryModel, CategoriesCollection, CategoryView, JqtView ,ContactoView ,ContactoEditView ) {
    var CategoryRouter = Backbone.Router.extend( {
        initialize: function() {
            this.animalsView = new CategoryView( { el: "#animals", collection: new CategoriesCollection( [] , { type: "animals" , query: "type|like|contact" } ) } );
            this.colorsView = new CategoryView( { el: "#colors", collection: new CategoriesCollection( [] , { type: "colors" , query: "type|like|contact" } ) } );
            this.vehiclesView = new CategoryView( { el: "#vehicles", collection: new CategoriesCollection( [] , { type: "vehicles" , query: "type|like|contact" } ) } );
            this.jqtView = new JqtView( { el: "#jqt", collection: new CategoriesCollection( [] , { type: "res.partner" , query: "type|like|contact" } ) }  );
            this.contactoView = new ContactoView( { el: "#contacto", collection: new CategoriesCollection( [] , { type: "res.partner" , query: "type|like|contact" } ) }  );
            this.contactoEditView = new ContactoEditView( { el: "#contactoEdit", collection: new CategoriesCollection( [] , { type: "res.partner" , query: "type|like|contact" } ) }  );

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
                if(typeof currentView != "undefined"){
                    $.mobile.loading( "show" );
                    currentView.collection.initialize([] , { type: "res.partner" , query: "type|like|contact" });

                    //currentView.collection.fetch().done( function(data) {
                      //  currentView.initialize();
                        //$('body').trigger('create');
                        //$.mobile.changePage( "#" + type, { reverse: false, changeHash: false} );
                    //} );

                    currentView.collection.fetch()
                        .done(function() {
                            currentView.initialize();
                            $('body').trigger('create');
                            $.mobile.changePage( "#" + type, { reverse: false, changeHash: false} );
                        })
                        .fail(function() {
                            $.mobile.loading( "hide" );
                            alert("Verifique la coneccion de Internet, gracias");
                        });

                }

            //} else {
               // $.mobile.changePage( "#" + type, { reverse: false, changeHash: false } );
            //}
        },
        return: function(type) {
            //type =  "jqt";
            var currentView = this[ type + "View" ];
            $.mobile.loading( "show" );
            currentView.collection.initialize([] , { type: "res.partner" , query: "type|like|contact" });
            //currentView.collection.fetch().done( function(data) {
               // $('body').trigger('create');
               // $.mobile.changePage( "#" + type, { reverse: true, changeHash: false, transition: "slide"}, true,true );
            //} );

            currentView.collection.fetch()
                .done(function() {
                    $('body').trigger('create');
                    $.mobile.changePage( "#" + type, { reverse: true, changeHash: false, transition: "slide"}, true,true );
                })
                .fail(function() {
                    $.mobile.loading( "hide" );
                    alert("Verifique la coneccion de Internet, gracias");
                });

        },
        form: function(type, key) {
            var currentView = this[ type + "View" ];
            $.mobile.loading( "show" );

            currentView.collection.initialize([] , { type: "res.partner" , query: "id|=|" + key });
            //currentView.collection.fetch().done( function(data) {
              //  currentView.initialize();
              //  $('body').trigger('create');
              //  $.mobile.changePage( "#" + type, {  reverse: false, changeHash: false, transition: "slide"},true,true );
              //  $('body').trigger('create');
              //  $('.editField').prop('disabled', true);
              //  $("#edit").val("Editar");
            //} );

            currentView.collection.fetch()
                .done(function() {
                    currentView.initialize();
                    $('body').trigger('create');
                    $.mobile.changePage( "#" + type, {  reverse: false, changeHash: false, transition: "slide"},true,true );
                    $('body').trigger('create');
                    $('.editField').prop('disabled', true);
                    $("#edit").val("Editar");
                })
                .fail(function() {
                    $.mobile.loading( "hide" );
                    alert("Verifique la coneccion de Internet, gracias");
                });

        },save: function(type, key) {
            $('#submitForm').validationEngine('hide');
            var bolRet = jQuery("#submitForm").validationEngine('validate');

            if(bolRet){
                var currentView = this[ type + "View" ];
                $.mobile.loading( "show" );
                currentView.collection.initialize([] , { type: "res.partner" , query: "id|=|" + key });

                if (key>0) {
                    var userDetails = ['id']; userDetails['id'] = key;
                } else {
                    var userDetails = [];
                }
                $('.saveField').each(function(index) {
                    userDetails.push(this.id); userDetails[this.id] = $(this).val();
                });
                modelCategory = new CategoryModel(userDetails);
                modelCategory.save(userDetails, {
                    error: function (model, response) {
                        console.log('error', model, response);
                    },
                    success: function () {
                        $.mobile.loading( "show" );
                        alert('Registro guardado correctamente');
                        $.mobile.loading( "hide" );
                    }
                })
            }

        },edit: function(type, key) {
            var currentView = this["contactoEditView" ];
            $.mobile.loading( "show" );
            //this.contactoEditView = new ContactoEditView({el:"#contactoEdit",collection:new CategoriesCollection([], {type:"res.partner",query:"id|=|" + key })});
            currentView.collection.initialize([] , { type: "res.partner" , query: "id|=|" + key });
            //currentView.collection.fetch().done( function(data) {
                //currentView.initialize();
                //$('body').trigger('create');
                //$.mobile.initializePage();
                //$.mobile.changePage( "#" + type, {  reverse: false, changeHash: false, transition: "slide"});
                //$('#'+type +' *').page();
                //$('.editField').prop('disabled', true);
                //$("#edit").val("Editar");
            //} );

            currentView.collection.fetch()
                .done(function() {
                    currentView.initialize();
                    $('body').trigger('create');
                    $.mobile.initializePage();
                    $.mobile.changePage( "#" + type, {  reverse: false, changeHash: false, transition: "slide"});
                })
                .fail(function() {
                    $.mobile.loading( "hide" );
                    alert("Verifique la coneccion de Internet, gracias");
                });

            //$('.editField').prop('disabled', false);
            //$('a#edit').text('Salvar');
            //$('a#edit').attr("href" , "#save/contacto/" + key);
        }
    } );

    return CategoryRouter;
} );