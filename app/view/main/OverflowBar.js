Ext.define('benza.view.toolbar.OverflowBar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'toolbar-overflowbar',
    
    items: [{
        xtype: 'splitbutton',
        width: 95,
        text: 'Ricerca',
        iconCls: 'toolbar-overflow-list',
        menu: [{
            text: 'Per località',
            handler: function() {Ext.create('benza.view.geo').show()}
        }]
    }, '-', 
    /**{
        xtype: 'splitbutton',
        text: 'Cut',
        iconCls: 'toolbar-overflow-cut',
        menu: [{
            text: 'Cut Menu Item'
        }]
    } 

benza.Bus = new Ext.util.Observable();
benza.Bus.addEvents(
     'test'
 );**/]
});