(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'gulp-load-plugins', 'run-sequence', './build', './clean', './script', './utils', './paths', './_gulp'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('gulp-load-plugins'), require('run-sequence'), require('./build'), require('./clean'), require('./script'), require('./utils'), require('./paths'), require('./_gulp'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.gulpLoadPlugins, global.runSequence, global.build, global.clean, global.script, global.utils, global.paths, global.gulp);
    global.dist = mod.exports;
  }
})(this, function (exports, _gulpLoadPlugins, _runSequence, _build, _clean, _script, _utils, _paths, _gulp) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

  var _runSequence2 = _interopRequireDefault(_runSequence);

  var _gulp2 = _interopRequireDefault(_gulp);

  var $ = (0, _gulpLoadPlugins2['default'])();

  _gulp2['default'].task('dist:post-jspm', function () {
    return _gulp2['default'].src(_paths.BUILD_INDEX_JS).pipe($.replace(/(angular.bootstrap.*strictDi:\s*)(false)/g, '$1true')).pipe($.ngAnnotate()).pipe($.uglify()).pipe(_gulp2['default'].dest(_paths.BUILD_DIR));
  });

  _gulp2['default'].task('dist:js', function (callback) {
    return (0, _runSequence2['default'])('build:jspm', 'dist:post-jspm', 'js:replace_paths', callback);
  });

  _gulp2['default'].task('dist:html', function () {
    return _gulp2['default'].src(_paths.SRC_INDEX_HTML).pipe($.htmlReplace({ 'js': _paths.INDEX_SCRIPT })).pipe($.minifyHtml({ empty: true })).pipe(_gulp2['default'].dest(_paths.BUILD_DIR));
  });

  _gulp2['default'].task('dist:copy', function () {
    var htmlFilter = $.filter('**/*.!(html)', { restore: true });

    return _gulp2['default'].src(_paths.BUILD_ALL).pipe(htmlFilter).pipe($.rev()).pipe(htmlFilter.restore).pipe($.revReplace()).pipe(_gulp2['default'].dest(_paths.DIST_DIR)).pipe($.gzip()).pipe(_gulp2['default'].dest(_paths.DIST_DIR));
  });

  _gulp2['default'].task('dist', function (callback) {
    return (0, _runSequence2['default'])(['clean:build', 'clean:dist', 'build:make-settings', 'utils:copy_to_tmp'], ['dist:js', 'dist:html', 'build:images'], 'dist:copy', callback);
  });
});