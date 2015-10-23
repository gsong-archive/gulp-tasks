(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'gulp-load-plugins', 'vinyl-paths', './paths', './_gulp'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('gulp-load-plugins'), require('vinyl-paths'), require('./paths'), require('./_gulp'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.gulpLoadPlugins, global.vinylPaths, global.paths, global.gulp);
    global.style = mod.exports;
  }
})(this, function (exports, _gulpLoadPlugins, _vinylPaths, _paths, _gulp) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

  var _vinylPaths2 = _interopRequireDefault(_vinylPaths);

  var _gulp2 = _interopRequireDefault(_gulp);

  var $ = (0, _gulpLoadPlugins2['default'])();

  _gulp2['default'].task('compile:styles', function () {
    // See https://github.com/ai/browserslist for more details on how to set
    // browser versions
    var AUTOPREFIXER_BROWSERS = ['last 2 versions'];

    return _gulp2['default'].src(_paths.SRC_STYLE).pipe($.changed(_paths.TMP_DIR, { extension: '.css' })).pipe((0, _vinylPaths2['default'])(function (paths) {
      $.util.log('Compiling ' + paths + '…');
      return Promise.resolve();
    })).pipe($.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError)).pipe($.autoprefixer(AUTOPREFIXER_BROWSERS)).pipe(_gulp2['default'].dest(_paths.TMP_DIR));
  });
});