/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('benza.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    listen: {
        controller: {
             intro: {
                 test: function(){ alert('bueno') }
             }
        }
    },

    init: function () {
        workView = this.getView();
    },

    showResults: function (e, fulljson) {
    },
});
