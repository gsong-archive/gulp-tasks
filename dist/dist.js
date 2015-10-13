'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulpLoadPlugins = require('gulp-load-plugins');

var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

var _runSequence = require('run-sequence');

var _runSequence2 = _interopRequireDefault(_runSequence);

var _paths = require('./paths');

var paths = _interopRequireWildcard(_paths);

var _gulp = require('./_gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var $ = (0, _gulpLoadPlugins2['default'])();

_gulp2['default'].task('dist:post-jspm', function () {
  return _gulp2['default'].src(paths.BUILD_INDEX_JS).pipe($.replace(/(angular.bootstrap.*strictDi:\s*)(false)/g, '$1true')).pipe($.ngAnnotate()).pipe($.uglify()).pipe(_gulp2['default'].dest(paths.BUILD_DIR));
});

_gulp2['default'].task('dist:js', function (callback) {
  return (0, _runSequence2['default'])('build:jspm', 'dist:post-jspm', 'js:replace_paths', callback);
});

_gulp2['default'].task('dist:html', function () {
  return _gulp2['default'].src(paths.SRC_INDEX_HTML).pipe($.htmlReplace({ 'js': paths.INDEX_SCRIPT })).pipe($.minifyHtml({ empty: true })).pipe(_gulp2['default'].dest(paths.BUILD_DIR));
});

_gulp2['default'].task('dist:copy', function () {
  var htmlFilter = $.filter('**/*.!(html)', { restore: true });

  return _gulp2['default'].src(paths.BUILD_ALL).pipe(htmlFilter).pipe($.rev()).pipe(htmlFilter.restore).pipe($.revReplace()).pipe(_gulp2['default'].dest(paths.DIST_DIR)).pipe($.gzip()).pipe(_gulp2['default'].dest(paths.DIST_DIR));
});

_gulp2['default'].task('dist', function (callback) {
  return (0, _runSequence2['default'])(['clean:build', 'clean:dist', 'build:make-settings', 'utils:copy_to_tmp'], ['dist:js', 'dist:html', 'build:images'], 'dist:copy', callback);
});