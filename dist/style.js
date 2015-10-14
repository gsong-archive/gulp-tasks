'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulpLoadPlugins = require('gulp-load-plugins');

var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

var _vinylPaths = require('vinyl-paths');

var _vinylPaths2 = _interopRequireDefault(_vinylPaths);

var _paths = require('./paths');

var paths = _interopRequireWildcard(_paths);

var _gulp = require('./_gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var $ = (0, _gulpLoadPlugins2['default'])();

_gulp2['default'].task('compile:styles', function () {
  // See https://github.com/ai/browserslist for more details on how to set
  // browser versions
  var AUTOPREFIXER_BROWSERS = ['last 2 versions'];

  return _gulp2['default'].src(paths.SRC_STYLE).pipe($.changed(paths.TMP_DIR, { extension: '.css' })).pipe((0, _vinylPaths2['default'])(function (paths) {
    $.util.log('Compiling ' + paths + '…');
    return Promise.resolve();
  })).pipe($.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError)).pipe($.autoprefixer(AUTOPREFIXER_BROWSERS)).pipe(_gulp2['default'].dest(paths.TMP_DIR));
});