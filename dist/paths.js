'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var BUILD_DIR = 'build/';
exports.BUILD_DIR = BUILD_DIR;
var DIST_DIR = 'dist/';
exports.DIST_DIR = DIST_DIR;
var SRC_DIR = 'src/';
exports.SRC_DIR = SRC_DIR;
var TMP_DIR = '.tmp/';

exports.TMP_DIR = TMP_DIR;
var BUILD_ALL = _path2['default'].join(BUILD_DIR, '**/*');

exports.BUILD_ALL = BUILD_ALL;
var SRC_ALL = _path2['default'].join(SRC_DIR, '**/*');
exports.SRC_ALL = SRC_ALL;
var SRC_HTML = _path2['default'].join(SRC_DIR, '**/*.html');
exports.SRC_HTML = SRC_HTML;
var SRC_INDEX_HTML = _path2['default'].join(SRC_DIR, 'index.html');
exports.SRC_INDEX_HTML = SRC_INDEX_HTML;
var SRC_SCRIPT = _path2['default'].join(SRC_DIR, '**/*.js');
exports.SRC_SCRIPT = SRC_SCRIPT;
var SRC_STYLE = _path2['default'].join(SRC_DIR, '**/*.scss');

exports.SRC_STYLE = SRC_STYLE;
var TMP_IMAGE = _path2['default'].join(TMP_DIR, '**/*.+(png|jpg|svg)');

exports.TMP_IMAGE = TMP_IMAGE;
// Build time internal app paths
var INDEX_SCRIPT_BASE = 'index';
var INDEX_SCRIPT = INDEX_SCRIPT_BASE + '.js';
exports.INDEX_SCRIPT = INDEX_SCRIPT;
var BUILD_INDEX_JS = _path2['default'].join(BUILD_DIR, INDEX_SCRIPT);
exports.BUILD_INDEX_JS = BUILD_INDEX_JS;
var TMP_INDEX_JS = _path2['default'].join(TMP_DIR, INDEX_SCRIPT_BASE);
exports.TMP_INDEX_JS = TMP_INDEX_JS;
var SETTINGS = 'config/settings.js';
exports.SETTINGS = SETTINGS;