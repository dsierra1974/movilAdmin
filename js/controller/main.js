var AppRouter = Backbone.Router.extend({

    routes: {
        "home"                  : "home",
        "ui"                    : "ui",
        "wines"	            : "list",
        "clientes"          : "clientes",
        "cliente"           : "cliente",
        "clientesAgenda"    : "clientesAgenda",
        "clientesDocs"       : "clientesDocs",
        "inmuebles"          : "inmuebles",
        "inmueble"           : "inmueble",
        "inmueblesAgenda"    : "inmueblesAgenda",
        
        "wines/page/:page"	: "list",
        "wines/add"         : "addWine",
        "wines/:id"         : "wineDetails"
    },

    initialize: function () {
       
    },

    home: function (id) {
        //if (!this.dashBoardView) {
          //  this.dashBoardView = new DashBoardView();
       // }
        if (!this.homeView) {
            this.homeView = new HomeView();
        }
        alert(this.homeView.el);
        $('#home').html(this.homeView.el);
        //this.dashBoardView.selectMenuItem('home-menu');
    },
    ui: function (id) {
        if (!this.uiView) {
            this.uiView = new UIView();
        }

        $('#home').html(this.uiView.el);
    },
    clientes: function (id) {
        var clients = new ClientCollection();

        clients.fetch({
            success: function (data) {
                //$('#content').html(new EmployeeView({model: data}).render().el);

                if (!this.clientesListView) {
                    this.clientesListView = new ClientesListView({model: data});
                }
                $('#cuerpo').html(this.clientesListView.el);
            }
        });

        
    },
    clientesAgenda: function (id) {
        if (!this.clientesAgendaView) {
            this.clientesAgendaView = new ClientesAgendaView();
        }
        $('#cuerpo').html(this.clientesAgendaView.el);
        init();
        //this.dashBoardView.selectMenuItem('home-menu');
    },
    clientesDocs: function (id) {
        if (!this.documentView) {
            this.documentView = new DocumentView();
        }
        $('#cuerpo').html(this.documentView.el);
        init();
        //this.dashBoardView.selectMenuItem('home-menu');
    },
    cliente: function (id) {
        if (!this.clientesView) {
            this.clientesView = new ClientesView();
        }
        $('#cuerpo').html(this.clientesView.el);
        //this.dashBoardView.selectMenuItem('home-menu');
    },


    inmuebles: function (id) {
        if (!this.inmueblesListView) {
            this.inmueblesListView = new InmueblesListView();
        }
        $('#cuerpo').html(this.inmueblesListView.el);
        //this.dashBoardView.selectMenuItem('home-menu');
    },
    inmueblesAgenda: function (id) {
        if (!this.inmueblesAgendaView) {
            this.inmueblesAgendaView = new InmueblesAgendaView();
        }
        $('#cuerpo').html(this.inmueblesAgendaView.el);
        init();
        //this.dashBoardView.selectMenuItem('home-menu');
    },
    
    inmueble: function (id) {
        if (!this.inmueblesView) {
            this.inmueblesView = new InmueblesView();
        }
        $('#cuerpo').html(this.inmueblesView.el);
        //this.dashBoardView.selectMenuItem('home-menu');
    },


	list: function(page) {
        var p = page ? parseInt(page, 10) : 1;
        var clientList = new ClientCollection();
        clientList.fetch({success: function(){
            $("#content").html(new WineListView({model: clientList, page: p}).el);
        }});
        this.headerView.selectMenuItem('home-menu');
    },

    wineDetails: function (id) {
        var wine = new Wine({_id: id});
        wine.fetch({success: function(){
            $("#content").html(new WineView({model: wine}).el);
        }});
        this.headerView.selectMenuItem();
    },

	addWine: function() {
        var wine = new Wine();
        $('#content').html(new WineView({model: wine}).el);
        this.headerView.selectMenuItem('add-menu');
	},

    about: function () {
        if (!this.aboutView) {
            this.aboutView = new AboutView();
        }
        $('#content').html(this.aboutView.el);
        this.headerView.selectMenuItem('about-menu');
    }

});


utils.loadTemplate(['ClientesView' , 'ClientesListView', 'ClientesAgendaView', 'ListSingleView'], 'captacion/clientes/' , function() {
    app = new AppRouter();
    Backbone.history.start();
});

utils.loadTemplate(['HomeView' ], '/' , function() {
    app = new AppRouter();
});

utils.loadTemplate(['UIView' ], 'captacion/jqt/' , function() {
    app = new AppRouter();
});

