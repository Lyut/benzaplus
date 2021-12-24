Ext.define('benza.store.ProvinceComuni', {
    extend: 'Ext.data.Store',
    storeId:'provincecomuni',
    alias: 'store.province-comuni',

    proxy: {
        type: 'ajax',
        reader: 'json',
        url : 'http://nniteam.altervista.org/api/comuni.php'
    }
});