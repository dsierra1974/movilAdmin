window.ClientesListView = Backbone.View.extend({

    initialize:function () {
        this.render();
    },

   
    render: function () {
        var clients = this.model.models;
        var len = clients.length;
        var startPos = 0;
        var endPos = len;

        $(this.el).html(this.template());

        for (var i = startPos; i < endPos; i++) {
            $('#lstExclusivas', this.el).append(new ListSingleView({model: clients[i]}).render().el);
        }
        for (var i = startPos; i < endPos; i++) {
            $('#lstPropietarios', this.el).append(new ListSingleView({model: clients[i]}).render().el);
        }
        for (var i = startPos; i < endPos; i++) {
            $('#lstCompradores', this.el).append(new ListSingleView({model: clients[i]}).render().el);
        }

        return this;
    }


});

window.ClientesView = Backbone.View.extend({
    initialize:function () {
        this.render();
    },
    render:function () {
        $(this.el).html(this.template());
        return this;
    }
});

window.ClientesAgendaView = Backbone.View.extend({
    initialize:function () {
        this.render();
    },
    render:function () {
        $(this.el).html(this.template());
        return this;
    }
});

window.DocumentView = Backbone.View.extend({
    initialize:function () {
        this.render();
    },
    render:function () {
        $(this.el).html(this.template());
        return this;
    }
});

window.ListSingleView = Backbone.View.extend({

    tagName: "li",
    initialize: function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});

