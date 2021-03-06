var shapefile2geojson = require('../src/shapefile2geojson');
var iconvLite = require('iconv-lite');
var assert = require('assert');
var fs = require('fs');

function read(name) {
  return shapefile2geojson(fs.readFileSync('test/data/' + name + '.shp'), fs.readFileSync('test/data/' + name + '.dbf'));
}

function readWithInputencoding(name, inputEncoding) {
  return shapefile2geojson(fs.readFileSync('test/data/' + name + '.shp'), fs.readFileSync('test/data/' + name + '.dbf'), { iconvLiteDecodeFn: iconvLite.decode, inputEncoding: inputEncoding });
}

describe('Load', function () {
  it('polygon', function () {
    var geojson = read('polygon');
    assert.equal(474, geojson.features.length);
  });
  it('pline', function () {
    var geojson = read('pline');
    assert.equal(460, geojson.features.length);
  });
  it('multipnt', function () {
    var geojson = read('multipnt');
    assert.equal(1, geojson.features.length);
    assert.equal(1, geojson.features[0].geometry.coordinates.length);
  });
  it('csah', function () {
    var geojson = read('csah');
    assert.equal(124, geojson.features.length);
  });
  it('anno', function () {
    var geojson = read('anno');
    assert.equal(201, geojson.features.length);
  });
  it('brklinz', function () {
    var geojson = read('brklinz');
    assert.equal(122, geojson.features.length);
  });
  it('3dpoints', function () {
    var geojson = read('3dpoints');
    assert.equal(22, geojson.features.length);
  });
  it('masspntz', function () {
    var geojson = read('masspntz');
    assert.equal(815, geojson.features.length);
  });
  it('dep4326', function () {
    var geojson = read('dep4326');
    assert.equal(96, geojson.features.length);
    assert.equal('AISNE', geojson.features[1].properties['NOM_DEPT']);
  });
  it('10_tn-village', function () {
    var geojson = readWithInputencoding('10_tn-village', 'Big5');
    assert.equal(752, geojson.features.length);
    assert.equal('蓮潭里', geojson.features[1].properties['VILLAGE']);
  });
});
