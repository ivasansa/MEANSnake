(function (app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'appProva',
            template: '../public/views/joc.jade'
        })
        .Class({
            constructor: function () {
                this.nom = "Sergi"
            }
        });
})(window.app || (window.app = {}));
