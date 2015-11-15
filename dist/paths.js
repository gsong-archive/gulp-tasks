'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SETTINGS = exports.TMP_INDEX_JS = exports.BUILD_INDEX_JS = exports.INDEX_SCRIPT = exports.TMP_IMAGE = exports.SRC_STYLE = exports.SRC_SCRIPT = exports.SRC_INDEX_HTML = exports.SRC_HTML = exports.SRC_ALL = exports.BUILD_ALL = exports.TMP_DIR = exports.SRC_DIR = exports.DIST_DIR = exports.BUILD_DIR = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BUILD_DIR = exports.BUILD_DIR = 'build/';
var DIST_DIR = exports.DIST_DIR = 'dist/';
var SRC_DIR = exports.SRC_DIR = 'src/';
var TMP_DIR = exports.TMP_DIR = '.tmp/';

var BUILD_ALL = exports.BUILD_ALL = _path2.default.join(BUILD_DIR, '**/*');

var SRC_ALL = exports.SRC_ALL = _path2.default.join(SRC_DIR, '**/*');
var SRC_HTML = exports.SRC_HTML = _path2.default.join(SRC_DIR, '**/*.html');
var SRC_INDEX_HTML = exports.SRC_INDEX_HTML = _path2.default.join(SRC_DIR, 'index.html');
var SRC_SCRIPT = exports.SRC_SCRIPT = _path2.default.join(SRC_DIR, '**/*.js');
var SRC_STYLE = exports.SRC_STYLE = _path2.default.join(SRC_DIR, '**/*.scss');

var TMP_IMAGE = exports.TMP_IMAGE = _path2.default.join(TMP_DIR, '**/*.+(png|jpg|svg)');

// Build time internal app paths
var INDEX_SCRIPT_BASE = 'index';
var INDEX_SCRIPT = exports.INDEX_SCRIPT = INDEX_SCRIPT_BASE + '.js';
var BUILD_INDEX_JS = exports.BUILD_INDEX_JS = _path2.default.join(BUILD_DIR, INDEX_SCRIPT);
var TMP_INDEX_JS = exports.TMP_INDEX_JS = _path2.default.join(TMP_DIR, INDEX_SCRIPT_BASE);
var SETTINGS = exports.SETTINGS = 'config/settings.js';