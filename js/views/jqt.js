define([ "jquery", "backbone","models/CategoryModel" , "text!../../tpl/captacion/jqt/JqtView.html" ], function( $, Backbone, CategoryModel, tpl ) {
    var template = _.template(tpl);
    window.JqtView = Backbone.View.extend({
        initialize:function () {
            this.render();
        },
        render:function () {
            var deferreds = [];
            //this.template = _.template( "Hola Mundo aqui", { "collection": this.collection } );
            //$(this.el).html(template);
            $(this.el).html(template({employees: this.collection.toJSON()}));
            return this;
        },
        events: {
            "keyup .search-key":    "search",
            "keypress .search-key": "onkeypress"
        },
        search: function (event) {
            /*var key = $('.search-key').val();
            this.employeeList.fetch({reset: true, data: {name: key}});*/
            alert("search");
        },
        onkeypress: function (event) {
            /*if (event.keyCode === 13) { // enter key pressed
                event.preventDefault();
            }*/
            alert("onkeypress");
        }
    });
    return window.JqtView;
} );
