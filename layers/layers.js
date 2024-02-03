var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_SEVERIDAD_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "SEVERIDAD",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SEVERIDAD_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-43736.263259, 4710807.339053, -25229.575236, 4729389.349886]
                            })
                        });
var format_COMBINACION_2 = new ol.format.GeoJSON();
var features_COMBINACION_2 = format_COMBINACION_2.readFeatures(json_COMBINACION_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMBINACION_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMBINACION_2.addFeatures(features_COMBINACION_2);
var lyr_COMBINACION_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMBINACION_2, 
                style: style_COMBINACION_2,
                interactive: true,
    title: 'COMBINACION<br />\
    <img src="styles/legend/COMBINACION_2_0.png" /> ALTA<br />\
    <img src="styles/legend/COMBINACION_2_1.png" /> BAJA<br />\
    <img src="styles/legend/COMBINACION_2_2.png" /> MEDIA ALTA<br />\
    <img src="styles/legend/COMBINACION_2_3.png" /> MEDIA BAJA<br />\
    <img src="styles/legend/COMBINACION_2_4.png" /> NO QUEMADO<br />\
    <img src="styles/legend/COMBINACION_2_5.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_SEVERIDAD_1.setVisible(true);lyr_COMBINACION_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SEVERIDAD_1,lyr_COMBINACION_2];
lyr_COMBINACION_2.set('fieldAliases', {});
lyr_COMBINACION_2.set('fieldImages', {});
lyr_COMBINACION_2.set('fieldLabels', {});
lyr_COMBINACION_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});