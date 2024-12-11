var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Influeciadelarroyo_1 = new ol.format.GeoJSON();
var features_Influeciadelarroyo_1 = format_Influeciadelarroyo_1.readFeatures(json_Influeciadelarroyo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Influeciadelarroyo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Influeciadelarroyo_1.addFeatures(features_Influeciadelarroyo_1);
var lyr_Influeciadelarroyo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Influeciadelarroyo_1, 
                style: style_Influeciadelarroyo_1,
                popuplayertitle: "Influecia del arroyo ",
                interactive: true,
                title: '<img src="styles/legend/Influeciadelarroyo_1.png" /> Influecia del arroyo '
            });
var format_AreadeInfluenciadelArroyo_2 = new ol.format.GeoJSON();
var features_AreadeInfluenciadelArroyo_2 = format_AreadeInfluenciadelArroyo_2.readFeatures(json_AreadeInfluenciadelArroyo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreadeInfluenciadelArroyo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreadeInfluenciadelArroyo_2.addFeatures(features_AreadeInfluenciadelArroyo_2);
var lyr_AreadeInfluenciadelArroyo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreadeInfluenciadelArroyo_2, 
                style: style_AreadeInfluenciadelArroyo_2,
                popuplayertitle: "Area de Influencia del Arroyo",
                interactive: true,
                title: '<img src="styles/legend/AreadeInfluenciadelArroyo_2.png" /> Area de Influencia del Arroyo'
            });
var format_finalencuestazona_1__afectacin_del_arroyo_3 = new ol.format.GeoJSON();
var features_finalencuestazona_1__afectacin_del_arroyo_3 = format_finalencuestazona_1__afectacin_del_arroyo_3.readFeatures(json_finalencuestazona_1__afectacin_del_arroyo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_finalencuestazona_1__afectacin_del_arroyo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_finalencuestazona_1__afectacin_del_arroyo_3.addFeatures(features_finalencuestazona_1__afectacin_del_arroyo_3);
var lyr_finalencuestazona_1__afectacin_del_arroyo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_finalencuestazona_1__afectacin_del_arroyo_3, 
                style: style_finalencuestazona_1__afectacin_del_arroyo_3,
                popuplayertitle: "final encuesta — zona_1__afectacin_del_arroyo",
                interactive: true,
                title: '<img src="styles/legend/finalencuestazona_1__afectacin_del_arroyo_3.png" /> final encuesta — zona_1__afectacin_del_arroyo'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Influeciadelarroyo_1.setVisible(true);lyr_AreadeInfluenciadelArroyo_2.setVisible(true);lyr_finalencuestazona_1__afectacin_del_arroyo_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Influeciadelarroyo_1,lyr_AreadeInfluenciadelArroyo_2,lyr_finalencuestazona_1__afectacin_del_arroyo_3];
lyr_Influeciadelarroyo_1.set('fieldAliases', {'fid': 'fid', });
lyr_AreadeInfluenciadelArroyo_2.set('fieldAliases', {'fid': 'fid', });
lyr_finalencuestazona_1__afectacin_del_arroyo_3.set('fieldAliases', {'fid': 'fid', 'TIEMPO_EN_ZONA': '¿Desde hace cuánto tiempo reside en la zona limítrofe al cauce del río o arroyo?', 'AFECTADO_POR_INUNDACION': '¿Fue afectado por las inundaciones?', 'TEMPORADA_FRECUENTE_INUNDACION': '¿En qué fechas o temporadas son más frecuentes las inundaciones?', 'EVACUACIÓN_HOGAR_DURANTE_INUNDACION': '¿Evacuó de su hogar durante la inundación?', 'AYUDA_DESPUES_DE_INUNDACION': '¿Ha recibido ayuda o asistencia después de la inundación?', 'ALTURA_MAX_INUNDACION': '¿Cuál es relativamente la altura máxima a la que ha subido el agua en la zona donde vive?', 'MEDIDAS_PARA_INUNDACION': '¿Qué medidas ha tomado para proteger su hogar de las inundaciones?', 'AYUDA_DE_GOBIERNO': '¿Ha recibido ayuda del gobierno o de organizaciones comunitarias durante las inundaciones?', 'NIVEL_DE_AGUA_PROPIEDAD': '¿Qué nivel de agua alcanzó en su propiedad durante la última inundación?', 'PROBLEMAS_COMUNIDAD': '¿Cuáles son los principales problemas que enfrenta su comunidad tras las inundaciones? ', 'NIVEL_SATISFACCION': '¿Cuál es su nivel de satisfacción con la respuesta del gobierno local ante las inundaciones? ', 'AFECTACION_INUNDACIONES': '¿Cómo afectan las inundaciones a su vida diaria y actividades económicas?', 'TIPO_BASURA_ARROYO': '¿Qué tipo de basura o desechos se acumulan en el arroyo que podrían contribuir a las inundaciones?', 'INFORMADO_PLANES_DE_EMERGENCIA': '¿Está informado sobre los planes de emergencia o evacuación en caso de inundación?', 'TIPO_DE_VEGETACION': '¿Qué tipo de vegetación crece en las orillas del arroyo?', });
lyr_Influeciadelarroyo_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_AreadeInfluenciadelArroyo_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_finalencuestazona_1__afectacin_del_arroyo_3.set('fieldImages', {'fid': '', 'TIEMPO_EN_ZONA': '', 'AFECTADO_POR_INUNDACION': '', 'TEMPORADA_FRECUENTE_INUNDACION': '', 'EVACUACIÓN_HOGAR_DURANTE_INUNDACION': '', 'AYUDA_DESPUES_DE_INUNDACION': '', 'ALTURA_MAX_INUNDACION': '', 'MEDIDAS_PARA_INUNDACION': '', 'AYUDA_DE_GOBIERNO': '', 'NIVEL_DE_AGUA_PROPIEDAD': '', 'PROBLEMAS_COMUNIDAD': '', 'NIVEL_SATISFACCION': '', 'AFECTACION_INUNDACIONES': '', 'TIPO_BASURA_ARROYO': '', 'INFORMADO_PLANES_DE_EMERGENCIA': '', 'TIPO_DE_VEGETACION': '', });
lyr_Influeciadelarroyo_1.set('fieldLabels', {'fid': 'inline label - always visible', });
lyr_AreadeInfluenciadelArroyo_2.set('fieldLabels', {'fid': 'inline label - always visible', });
lyr_finalencuestazona_1__afectacin_del_arroyo_3.set('fieldLabels', {'fid': 'inline label - always visible', 'TIEMPO_EN_ZONA': 'inline label - always visible', 'AFECTADO_POR_INUNDACION': 'inline label - always visible', 'TEMPORADA_FRECUENTE_INUNDACION': 'inline label - always visible', 'EVACUACIÓN_HOGAR_DURANTE_INUNDACION': 'inline label - always visible', 'AYUDA_DESPUES_DE_INUNDACION': 'inline label - always visible', 'ALTURA_MAX_INUNDACION': 'inline label - always visible', 'MEDIDAS_PARA_INUNDACION': 'inline label - always visible', 'AYUDA_DE_GOBIERNO': 'inline label - always visible', 'NIVEL_DE_AGUA_PROPIEDAD': 'inline label - always visible', 'PROBLEMAS_COMUNIDAD': 'inline label - always visible', 'NIVEL_SATISFACCION': 'inline label - always visible', 'AFECTACION_INUNDACIONES': 'inline label - always visible', 'TIPO_BASURA_ARROYO': 'inline label - always visible', 'INFORMADO_PLANES_DE_EMERGENCIA': 'inline label - always visible', 'TIPO_DE_VEGETACION': 'inline label - always visible', });
lyr_finalencuestazona_1__afectacin_del_arroyo_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});