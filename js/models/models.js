window.Client = Backbone.Model.extend({
    urlRoot: "http://localhost:3000/clients",
    idAttribute: "_id",
    initialize: function () {
        this.validators = {};

        this.validators.name = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a name"};
        };
    },
    validateItem: function (key) {
        return (this.validators[key]) ? this.validators[key](this.get(key)) : {isValid: true};
    },
    validateAll: function () {
        var messages = {};
        for (var key in this.validators) {
            if(this.validators.hasOwnProperty(key)) {
                var check = this.validators[key](this.get(key));
                if (check.isValid === false) {
                    messages[key] = check.message;
                }
            }
        }
        return _.size(messages) > 0 ? {isValid: false, messages: messages} : {isValid: true};
    },
    defaults: {
        _id: null,
        nombre: "Daniel Oswaldo",
        apellidoPaterno: "Sierra",
        apellidoMaterno: "Garcia",
        email: "doswaldo70@hotmail.com",
        telefonoMovil: "5537475053",
        telefono: "26119737",
        fax: "",
        skype: "dsierra7419",
        facebook: "doswaldo70@hotmail.com",
        twitter: "",
        lugarNacimiento: "DF",
        fechaNacimiento: "04/06/1974",
        calle: "Sandalo",
        numero: "10",
        colonia: "Jardinez San miguel",
        cp: "57170",
        ciudad: "Izcalli",
        estado: "Estado Mexico",
        site: "www.owercloud.com",
        tipo: "3",
        estatus: "1"
    }
});

window.ClientCollection = Backbone.Collection.extend({
    model: Client,
    url: "http://localhost:3000/clients"
});