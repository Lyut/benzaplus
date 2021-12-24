/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.define('benza.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout-border',
    requires: [
        'Ext.layout.container.Border',
        'Ext.plugin.Viewport'
    ],

    controller: 'main',
    layout: 'border',
    width: 500,
    height: 400,
    cls: Ext.baseCSSPrefix + 'shadow',

    bodyBorder: false,

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },

    items: [
        {
            title: 'Dati',
            id: 'datitable',
           /* region: 'west',
            floatable: false,
            margin: '0 0 0 0',
            width: 25,
            minWidth: 100,
            maxWidth: 250,
            dockedItems: [{
                width: 250,
                xtype: 'toolbar-overflowbar',
                dock: 'left',
                overflowHandler: 'scroller'
            }] */
            margin: '0 0 0 0',
            autoScroll: true,
            region: 'south',
            height: 350,
            minHeight: 205,
            maxHeight: 650,
            
        },
        {
            title: 'Workspace',
            id: 'workspace',
            collapsible: false,
            region: 'center',
            margin: '0 0 0 0',
            //html: '<h1>qui dio lupo tocca mettere la mappa</h1>',
        }
    ]
});