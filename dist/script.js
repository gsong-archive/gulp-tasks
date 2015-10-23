(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'gulp-load-plugins', './paths', './_gulp'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('gulp-load-plugins'), require('./paths'), require('./_gulp'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.gulpLoadPlugins, global.paths, global.gulp);
    global.script = mod.exports;
  }
})(this, function (exports, _gulpLoadPlugins, _paths, _gulp) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

  var _gulp2 = _interopRequireDefault(_gulp);

  var $ = (0, _gulpLoadPlugins2['default'])();

  _gulp2['default'].task('js:lint', function () {
    return _gulp2['default'].src(_paths.SRC_SCRIPT).pipe($.eslint()).pipe($.eslint.formatEach()).pipe($.eslint.failAfterError());
  });

  _gulp2['default'].task('js:replace_paths', function () {
    return _gulp2['default'].src(_paths.BUILD_INDEX_JS).pipe($.replace(_paths.TMP_DIR, '')).pipe(_gulp2['default'].dest(_paths.BUILD_DIR));
  });
});