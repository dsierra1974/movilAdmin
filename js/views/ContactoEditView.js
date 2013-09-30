define([ "jquery", "backbone","models/CategoryModel" , "text!../../tpl/captacion/jqt/ContactoEditView.html" ], function( $, Backbone, CategoryModel, tpl2 ) {
    var template = _.template(tpl2);
    window.ContactoEditView = Backbone.View.extend({
        initialize:function () {
            this.render();
        },
        render:function () {
            var deferreds = [];
            if(this.collection != null){
              $(this.el).html(template({employees: this.collection.toJSON()}));
            }
            return this;
        },
        events: {
            'click .delete': 'deleteArtist'
        },
        deleteArtist: function (ev) {
            this.artist.destroy({
                success: function () {
                    console.log('Artist Deleted');
                    router.navigate('', {trigger:true});
                }
            })
        },
        salvar: function (event) {
            var key = $('.search-key').val();
            this.employeeList.fetch({reset: true, data: {name: key}});
        }
    });
    return window.ContactoEditView;
} );