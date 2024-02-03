var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ZONAS_VALIDAS_1 = new ol.format.GeoJSON();
var features_ZONAS_VALIDAS_1 = format_ZONAS_VALIDAS_1.readFeatures(json_ZONAS_VALIDAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAS_VALIDAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAS_VALIDAS_1.addFeatures(features_ZONAS_VALIDAS_1);
var lyr_ZONAS_VALIDAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONAS_VALIDAS_1, 
                style: style_ZONAS_VALIDAS_1,
                interactive: true,
    title: 'ZONAS_VALIDAS<br />\
    <img src="styles/legend/ZONAS_VALIDAS_1_0.png" /> 3<br />\
    <img src="styles/legend/ZONAS_VALIDAS_1_1.png" /> 4<br />\
    <img src="styles/legend/ZONAS_VALIDAS_1_2.png" /> 5<br />\
    <img src="styles/legend/ZONAS_VALIDAS_1_3.png" /> <br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_ZONAS_VALIDAS_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_ZONAS_VALIDAS_1];
lyr_ZONAS_VALIDAS_1.set('fieldAliases', {'DN': 'DN', 'Area_km': 'Area_km', });
lyr_ZONAS_VALIDAS_1.set('fieldImages', {'DN': 'Range', 'Area_km': 'TextEdit', });
lyr_ZONAS_VALIDAS_1.set('fieldLabels', {'DN': 'no label', 'Area_km': 'no label', });
lyr_ZONAS_VALIDAS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});