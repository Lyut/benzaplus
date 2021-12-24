Ext.define('benza.store.RegioniProvince', {
    extend: 'Ext.data.Store',

    alias: 'store.regioni-province',

    fields: [
        'regid',
        'reg',
        'abbr',
        'nome'
    ],

    data: [
        { regid: '100', reg: "Marche", abbr: "AN", nome: "Ancona"                   },
        { regid: '100', reg: "Marche", abbr: "AP", nome: "Ascoli Piceno"            },
        { regid: '100', reg: "Marche", abbr: "FM", nome: "Fermo"                    },
        { regid: '100', reg: "Marche", abbr: "MC", nome: "Macerata"                 },
        { regid: '100', reg: "Marche", abbr: "PU", nome: "Pesaro e Urbino"          },

        { regid: '2', reg: "Abruzzo", abbr: "CH", nome: "Chieti"                  },
        { regid: '2', reg: "Abruzzo", abbr: "AQ", nome: "L'Aquila"                },
        { regid: '2', reg: "Abruzzo", abbr: "PE", nome: "Pescara"                 },
        { regid: '2', reg: "Abruzzo", abbr: "TE", nome: "Teramo"                  },
        
        { regid: '3', reg: "Basilicata", abbr: "MT", nome: "Matera"               },
        { regid: '3', reg: "Basilicata", abbr: "PZ", nome: "Potenza"              },

        { regid: '4', reg: "Molise", abbr: "CB", nome: "Campobasso"               },
        { regid: '4', reg: "Molise", abbr: "IS", nome: "Isernia"                  },

        { regid: '5', reg: "Trentino Alto Adige", abbr: "BZ", nome: "Bolzano"     },
        { regid: '5', reg: "Trentino Alto Adige", abbr: "TN", nome: "Trento"      },

        { regid: '6', reg: "Puglia", abbr: "BA", nome: "Bari"                     },
        { regid: '6', reg: "Puglia", abbr: "BT", nome: "Barletta-Andria-Trani"    },
        { regid: '6', reg: "Puglia", abbr: "BR", nome: "Brindisi"                 },
        { regid: '6', reg: "Puglia", abbr: "FG", nome: "Foggia"                   },
        { regid: '6', reg: "Puglia", abbr: "LE", nome: "Lecce"                    },
        { regid: '6', reg: "Puglia", abbr: "TA", nome: "Taranto"                  },
        
        { regid: '7', reg: "Calabria", abbr: "CZ", nome: "Catanzaro"              },
        { regid: '7', reg: "Calabria", abbr: "CS", nome: "Cosenza"                },
        { regid: '7', reg: "Calabria", abbr: "KR", nome: "Crotone"                },
        { regid: '7', reg: "Calabria", abbr: "RC", nome: "Reggio Calabria"        },
        { regid: '7', reg: "Calabria", abbr: "VV", nome: "Vibo Valentia"          },
        
        { regid: '8', reg: "Campania", abbr: "AV", nome: "Avellino"               },
        { regid: '8', reg: "Campania", abbr: "BN", nome: "Benevento"              },
        { regid: '8', reg: "Campania", abbr: "CE", nome: "Caserta"                },
        { regid: '8', reg: "Campania", abbr: "NA", nome: "Napoli"                 },
        { regid: '8', reg: "Campania", abbr: "SA", nome: "Salerno"                },
        
        { regid: '9', reg: "Lazio", abbr: "FR", nome: "Frosinone"                 },
        { regid: '9', reg: "Lazio", abbr: "LT", nome: "Latina"                    },
        { regid: '9', reg: "Lazio", abbr: "RI", nome: "Rieti"                     },
        { regid: '9', reg: "Lazio", abbr: "RM", nome: "Roma"                      },
        { regid: '9', reg: "Lazio", abbr: "VT", nome: "Viterbo"                   },
        
        { regid: '10', reg: "Sardegna", abbr: "CA", nome: "Cagliari"              },
        { regid: '10', reg: "Sardegna", abbr: "CI", nome: "Carbonia-Iglesias"     },
        { regid: '10', reg: "Sardegna", abbr: "VS", nome: "Medio Campidano"       },
        { regid: '10', reg: "Sardegna", abbr: "NU", nome: "Nuoro"                 },
        { regid: '10', reg: "Sardegna", abbr: "OG", nome: "Ogliastra"             },
        { regid: '10', reg: "Sardegna", abbr: "OT", nome: "Olbia-Tempio"          },
        { regid: '10', reg: "Sardegna", abbr: "OR", nome: "Oristano"              },
        { regid: '10', reg: "Sardegna", abbr: "SS", nome: "Sassari"               },
        { regid: '10', reg: "Sardegna", abbr: "SU", nome: "Sud Sardegna"          },
        
        { regid: '11', reg: "Sicilia", abbr: "AG", nome: "Agrigento"              },
        { regid: '11', reg: "Sicilia", abbr: "CL", nome: "Caltanissetta"          },
        { regid: '11', reg: "Sicilia", abbr: "CT", nome: "Catania"                },
        { regid: '11', reg: "Sicilia", abbr: "EN", nome: "Enna"                   },
        { regid: '11', reg: "Sicilia", abbr: "ME", nome: "Messina"                },
        { regid: '11', reg: "Sicilia", abbr: "PA", nome: "Palermo"                },
        { regid: '11', reg: "Sicilia", abbr: "RG", nome: "Ragusa"                 },
        { regid: '11', reg: "Sicilia", abbr: "SR", nome: "Siracusa"               },
        { regid: '11', reg: "Sicilia", abbr: "TP", nome: "Trapani"                },

        { regid: '12', reg: "Toscana", abbr: "AR", nome: "Arezzo"                 },
        { regid: '12', reg: "Toscana", abbr: "FI", nome: "Firenze"                },
        { regid: '12', reg: "Toscana", abbr: "GR", nome: "Grosseto"               },
        { regid: '12', reg: "Toscana", abbr: "LI", nome: "Livorno"                },
        { regid: '12', reg: "Toscana", abbr: "LU", nome: "Lucca"                  },
        { regid: '12', reg: "Toscana", abbr: "MS", nome: "Massa-Carrara"          },
        { regid: '12', reg: "Toscana", abbr: "PI", nome: "Pisa"                   },
        { regid: '12', reg: "Toscana", abbr: "PT", nome: "Pistoia"                },
        { regid: '12', reg: "Toscana", abbr: "PO", nome: "Prato"                  },
        { regid: '12', reg: "Toscana", abbr: "SI", nome: "Siena"                  },
        
        { regid: '13', reg: "Piemonte", abbr: "AL", nome: "Alessandria"            },
        { regid: '13', reg: "Piemonte", abbr: "AT", nome: "Asti"                   },
        { regid: '13', reg: "Piemonte", abbr: "BI", nome: "Biella"                 },
        { regid: '13', reg: "Piemonte", abbr: "CN", nome: "Cuneo"                  },
        { regid: '13', reg: "Piemonte", abbr: "NO", nome: "Novara"                 },
        { regid: '13', reg: "Piemonte", abbr: "TO", nome: "Torino"                 },
        { regid: '13', reg: "Piemonte", abbr: "VB", nome: "Verbano-Cusio-Ossola"   },
        { regid: '13', reg: "Piemonte", abbr: "VC", nome: "Vercelli"               },
        
        { regid: '14', reg: "Emilia Romagna", abbr: "BO", nome: "Bologna"         },
        { regid: '14', reg: "Emilia Romagna", abbr: "FE", nome: "Ferrara"         },
        { regid: '14', reg: "Emilia Romagna", abbr: "FC", nome: "Forlì-Cesena"    },
        { regid: '14', reg: "Emilia Romagna", abbr: "MO", nome: "Modena"          },
        { regid: '14', reg: "Emilia Romagna", abbr: "PR", nome: "Parma"           },
        { regid: '14', reg: "Emilia Romagna", abbr: "PC", nome: "Piacenza"        },
        { regid: '14', reg: "Emilia Romagna", abbr: "RA", nome: "Ravenna"         },
        { regid: '14', reg: "Emilia Romagna", abbr: "RE", nome: "Reggio Emilia"   },
        { regid: '14', reg: "Emilia Romagna", abbr: "RN", nome: "Rimini"          },
        
        { regid: '15', reg: "Friuli Venezia Giulia", abbr: "GO", nome: "Gorizia"  },
        { regid: '15', reg: "Friuli Venezia Giulia", abbr: "PN", nome: "Pordenone"},
        { regid: '15', reg: "Friuli Venezia Giulia", abbr: "TS", nome: "Trieste"  },
        { regid: '15', reg: "Friuli Venezia Giulia", abbr: "UD", nome: "Udine"    },

        { regid: '16', reg: "Valle d'Aosta", abbr: "AO", nome: "Aosta"            },
        
        { regid: '17', reg: "Veneto", abbr: "BL", nome: "Belluno"                 },
        { regid: '17', reg: "Veneto", abbr: "PD", nome: "Padova"                  },
        { regid: '17', reg: "Veneto", abbr: "RO", nome: "Rovigo"                  },
        { regid: '17', reg: "Veneto", abbr: "TV", nome: "Treviso"                 },
        { regid: '17', reg: "Veneto", abbr: "VE", nome: "Venezia"                 },
        { regid: '17', reg: "Veneto", abbr: "VR", nome: "Verona"                  },
        { regid: '17', reg: "Veneto", abbr: "VI", nome: "Vicenza"                 },

        { regid: '18', reg: "Liguria", abbr: "GE", nome: "Genova"                 },
        { regid: '18', reg: "Liguria", abbr: "IM", nome: "Imperia"                },
        { regid: '18', reg: "Liguria", abbr: "SP", nome: "La Spezia"              },
        { regid: '18', reg: "Liguria", abbr: "SV", nome: "Savona"                 },
        
        { regid: '19', reg: "Lombardia", abbr: "BG", nome: "Bergamo"              },
        { regid: '19', reg: "Lombardia", abbr: "BS", nome: "Brescia"              },
        { regid: '19', reg: "Lombardia", abbr: "CO", nome: "Como"                 },
        { regid: '19', reg: "Lombardia", abbr: "CR", nome: "Cremona"              },
        { regid: '19', reg: "Lombardia", abbr: "LC", nome: "Lecco"                },
        { regid: '19', reg: "Lombardia", abbr: "LO", nome: "Lodi"                 },
        { regid: '19', reg: "Lombardia", abbr: "MN", nome: "Mantova"              },
        { regid: '19', reg: "Lombardia", abbr: "MI", nome: "Milano"               },
        { regid: '19', reg: "Lombardia", abbr: "MB", nome: "Monza e della Brianza"},
        { regid: '19', reg: "Lombardia", abbr: "PV", nome: "Pavia"                },
        { regid: '19', reg: "Lombardia", abbr: "SO", nome: "Sondrio"              },
        { regid: '19', reg: "Lombardia", abbr: "VA", nome: "Varese"               },
        
        { regid: '20', reg: "Umbria", abbr: "PG", nome: "Perugia"                 },
        { regid: '20', reg: "Umbria", abbr: "TR", nome: "Terni"                   }
        
    ]
});