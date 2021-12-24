var regioni = Ext.create('Ext.data.Store', {
    fields: ['regione', 'id'],
    data: [
        { regione: 'Abruzzo', id: '2' },
        { regione: 'Basilicata', id: '3' },
        { regione: 'Calabria', id: '7' },
        { regione: 'Campania', id: '8' },
        { regione: 'Emilia Romagna', id: '14' },
        { regione: 'Friuli Venezia Giulia', id: '15' },
        { regione: 'Lazio', id: '9' },
        { regione: 'Liguria', id: '18' },
        { regione: 'Lombardia', id: '19' },
        { regione: 'Marche', id: '100' },
        { regione: 'Molise', id: '4' },
        { regione: 'Piemonte', id: '13' },
        { regione: 'Puglia', id: '6' },
        { regione: 'Sardegna', id: '10' },
        { regione: 'Sicilia', id: '11' },
        { regione: 'Toscana', id: '12' },
        { regione: 'Trentino Alto Adige', id: '5' },
        { regione: 'Umbria', id: '20' },
        { regione: 'Valle d\'Aosta', id: '16' },
        { regione: 'Veneto', id: '17' }
    ]
});

Ext.define('benza.data.Model', {
    override: 'Ext.data.Model',
});

Ext.define('benza.view.intro.Intro', {
    extend: 'Ext.window.Window',
    xtype: 'intro',

    requires: [
        'benza.view.intro.IntroController',
        'Ext.form.Panel',
        'Ext.grid.GridPanel'
    ],
    viewModel: true,

    constrain: true,
    controller: 'intro',
    id: 'loginPanel',
    cls: 'loginPanel',
    title: 'benza+',
    closable: false,
    autoShow: true,
    border: false,
    modal: true,
    shadow: false,
    constrain: true,
    resizable: false,
    items: {
        height: 290,
        width: 448,
        xtype: 'form',
        reference: 'form',
        items: [
            {
                xtype: 'displayfield',
                padding: "15 15 0 15",
                value: '<div style="font-size:14px;color:#194C7F;font-weight:bold;margin-bottom:10px;">Ricerca per località</div>'
            },
            {
                xtype: 'displayfield',
                padding: "0 15 0 15",
                value: '<div style="font-size:10px;color:#194C7F;position:fixed;float:top">Puoi lasciare vuota Provincia e Comune per sceglierli tutti</div>'
            }, {
                xtype: 'combo',
                id: 'regione',
                fieldLabel: 'Regione',
                allowBlank: false,
                editable: false,
                labelAlign: "top",
                margin: "0 0 5 280",
                labelStyle: "margin-bottom:5px;",
                anchor: "98%",
                fieldStyle: 'text-transform:uppercase',
                reference: 'regione',
                publishes: 'value',
                store: regioni,
                displayField: 'regione',
                valueField: 'id',
            },
            {
                xtype: 'combo',
                id: 'provincia',
                fieldLabel: 'Provincia',
                //allowBlank: false,
                editable: false,
                labelAlign: "top",
                margin: "0 0 5 280",
                labelStyle: "margin-bottom:5px;",
                anchor: "98%",
                fieldStyle: 'text-transform:uppercase',
                displayField: 'nome',
                valueField: 'abbr',
                reference: 'provincia',
                publishes: 'value',
                forceSelection: true,
                enableKeyEvents: true,
                bind: {
                    visible: '{regione.value}',
                    filters: {
                        property: 'regid',
                        value: '{regione.value}'
                    }
                },
                store: {
                    type: 'regioni-province'
                },
                listeners: {
                    change: function (field, newValue, oldValue) {
                        if (oldValue) {
                            this.value = null;
                            this.value = newValue;
                        }
                        if (newValue == '100')
                            newValue = 1;
                        Ext.getStore('provincecomuni').setProxy({
                            type: 'ajax',
                            url: 'https://******.gov.it/******?prov=' + newValue,
                        });
                        Ext.getStore('provincecomuni').read();
                    },
                }
            },
            {
                xtype: 'combo',
                id: 'comune',
                fieldLabel: 'Comune',
                //allowBlank: false,
                editable: false,
                labelAlign: "top",
                margin: "0 0 5 280",
                labelStyle: "margin-bottom:5px;",
                anchor: "98%",
                fieldStyle: 'text-transform:uppercase',
                displayField: 'prov',
                valueField: 'prov',
                reference: 'comune',
                publishes: 'value',
                forceSelection: true,
                queryMode: 'remote',
                bind: {
                    visible: '{provincia.value}',
                },
                store: {
                    type: 'province-comuni'
                },
            }],
        buttons: [{
            text: 'Ricerca Pompe',
            formBind: true,
            listeners: {
                click: 'onSearchClick'
            }
        }]
    }
});