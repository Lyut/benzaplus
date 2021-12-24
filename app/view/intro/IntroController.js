Ext.define('benza.utils.Cmd', {
    singleton: true,

    messageMap: {
        "iocc.sec.unexpected.exception": "An unexpected server error has occurred while processing your request! Please try again later or contact the system administrator!",
        "iocc.sec.authentication.failed": "Authentication failed: username or password invalid!",
        "iocc.sec.connection.error": "Connection to security service could not be created!"
    },

    showException: function (message, title, icon) {
        if (!title)
            title = "Error in Service!";
        if (!icon)
            icon = Ext.MessageBox.ERROR;
        if (benza.utils.Cmd.messageMap == null)
            Ext.log.warn("Could not find messageMap property - only default error keys will be translated! See benza.utils.Cmd.messageMap for default values.")
        else {
            Ext.MessageBox.show({
                title: title,
                msg: benza.utils.Cmd.messageMap[message],
                buttons: Ext.MessageBox.OK,
                icon: icon
            });
        }
    }
});

Ext.define('benza.view.intro.IntroController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.intro',

    init: function () {
        introView = this.getView();
    },

    onSearchClick: function () {
        introView = this.getView();
        introView.setLoading('Cerco le pompe...');
        reg = (Ext.getCmp('regione').getValue() == '100') ? '1' : Ext.getCmp('regione').getValue();
        prov = (Ext.getCmp('provincia').getValue() === null) ? "" : Ext.getCmp('provincia').getValue();
        town = (Ext.getCmp('comune').getValue() === null) ? "" : Ext.getCmp('comune').getValue();
        Ext.Ajax.request({
            url: 'https://******.gov.it/******?reg=' + reg + "&prov=" + prov + "&town=" + town + "&ordPrice=asc",
            method: 'POST',
            success: function (transport) {
                if (transport.responseText)
                    var res = Ext.decode(transport.responseText, true);
                if (res.success != true) {
                    introView.destroy();
                    benza.utils.Cmd.showException("iocc.sec.unexpected.exception");
                    return;
                }
                var records = [];
                var store = Ext.create('Ext.data.Store', {
                    fields: ['name', 'addr', 'dIns', 'lat', 'lon', 'bnd', 'benzSelf', 'gasSelf', 'benz', 'gas'],
                    data: records,
                });

                if (res !== null && typeof (res) !== 'undefined') {
                    Ext.each(res.array, function (obj) {
                        var benzSelf, gasSelf, benz, gas = null;
                        Ext.each(obj.carburanti, function (objC) {
                            if (objC.idCarb == 1) // benzina
                            {
                                if (objC.isSelf == 1)
                                    benzSelf = objC.prezzo
                                else
                                    benz = objC.prezzo
                            }
                            else if (objC.idCarb == 2) // gasolio
                            {
                                if (objC.isSelf == 1)
                                    gasSelf = objC.prezzo
                                else
                                    gas = objC.prezzo
                            }
                        });
                        records.push({
                            name: obj.name,
                            addr: obj.addr,
                            dIns: obj.dIns,
                            lat: obj.lat,
                            lon: obj.lon,
                            bnd: obj.bnd,
                            benzSelf: benzSelf,
                            gasSelf: gasSelf,
                            benz: benz,
                            gas: gas
                        })
                    });
                    store.loadData(records);
                    Ext.MessageBox.show({
                        title: "Ricerca eseguita",
                        msg: "Sono state trovate " + Object.keys(JSON.parse(transport.responseText).array).length + " pompe in questa zona!", //JSON.stringify(JSON.parse(transport.responseText).array),
                        buttons: Ext.MessageBox.OK,
                        buttonText: {
                            ok: "Fammele vedere!",
                        },
                        icon: Ext.MessageBox.INFO,
                        fn: function (e) {
                            introView.destroy();
                            var firstUse = localStorage.getItem("first_use");
                            if (firstUse == null) {
                                Ext.MessageBox.show({
                                    title: "Consiglio",
                                    msg: "Di seguito vengono mostrati i prezzi dei principali carburanti.<br/>Per vedere che altri tipi di carburante eroga la pompa (ad esempio diesel EcoPlus, benzina WR100 o GNL) puoi premere sulla pompa per aprirne i dettagli.<br/>Puoi anche cliccare sulle colonne delle tabelle per aprire i filtri o per ordinarle alfabeticamente/crescentemente.<br/><br/>Questo messaaggio non sarà mai più visualizzato, <b>adios!</b>",
                                    buttons: Ext.MessageBox.OK,
                                    icon: Ext.MessageBox.INFO,
                                    fn: localStorage.setItem("first_use", "bueno")
                                });
                            }
                            if (!window.L) {
                                Ext.log.warn("Errore con l'inizializzazione della mappa. Mi dispiace...");
                            } else {
                                var map = L.map('workspace');

                                var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
                                var osmAttrib = 'Dati di openStreetMap';
                                var osm = new L.TileLayer(osmUrl, {
                                    minZoom: 8,
                                    maxZoom: 20,
                                    attribution: osmAttrib
                                });

                                map.setView(new L.LatLng(res.center.first, res.center.second), 12, {
                                    reset: true
                                });
                                map.addLayer(osm);

                                for (var i = 0; i < res.array.length; i++) {
                                    var record = res.array[i];
                                    marker = new L.marker([record.lat, record.lon], {
                                        icon: L.icon({
                                            iconUrl: 'https://******.gov.it/******/resources/img/marchi/' + record.bnd + '.png',
                                            iconSize: [50, 50],
                                            iconAnchor: [12, 40],
                                            popupAnchor: [0, -35]
                                        })
                                    }).bindPopup(record.name);

                                    marker.addTo(map);
                                }
                            }

                            Ext.getCmp("datitable").insert(0, {
                                extend: 'Ext.grid.Panel',
                                xtype: 'gridpanel',
                                title: 'Risultati',
                                collapsible: true,
                                store: store,
                                columns: [
                                    { text: 'Nome', dataIndex: 'name', width: 260 },
                                    { text: 'Indirizzo', dataIndex: 'addr', width: 320 },
                                    { text: 'Data inserimento prezzi', dataIndex: 'dIns', width: 190 },
                                    {
                                        text: 'Prezzi self', columns: [{
                                            text: 'Benzina', dataIndex: 'benzSelf'
                                        },
                                        {
                                            text: 'Gasolio', dataIndex: 'gasSelf'
                                        },
                                        ]
                                    },
                                    {
                                        text: 'Prezzi servito', columns: [{
                                            text: 'Benzina', dataIndex: 'benz'
                                        },
                                        {
                                            text: 'Gasolio', dataIndex: 'gas'
                                        },
                                        ]
                                    },
                                ],

                                layout: 'fit',
                                fullscreen: true
                            });
                        }
                    });
                }
            },
            failure: function (transport) {
                //alert("Error: " + transport.responseText);
                benza.utils.Cmd.showException("iocc.sec.unexpected.exception");
            }
        });
    }
});