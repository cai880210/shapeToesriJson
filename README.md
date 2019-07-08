# shapefile2geojson

Transform shapefile (shp & dbf) to geojson.

first：import shapefile2geojson.js;
      var geojson = shapefile2geojson(shp, dbf, { inputEncoding: inputEncoding });
      if (typeof console !== 'undefined' && typeof console.log === 'function') {
	      debugger;
        var str =JSON.stringify(geojson);
		    console.log(str);
		    console.log(geojson);
      }
then:import terraformer.min.js
      var esriJson = Terraformer.ArcGIS.convert(geometryJson);
      var geometry = jsonUtils.fromJson(esriJson);
      
      
     
