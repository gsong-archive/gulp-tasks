'use strict';

var _gulpLoadPlugins = require('gulp-load-plugins');

var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

var _paths = require('./paths');

var paths = _interopRequireWildcard(_paths);

var _gulp = require('./_gulp');

var _gulp2 = _interopRequireDefault(_gulp);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = (0, _gulpLoadPlugins2.default)();

_gulp2.default.task('js:lint', function () {
  return _gulp2.default.src(paths.SRC_SCRIPT).pipe($.eslint()).pipe($.eslint.formatEach()).pipe($.eslint.failAfterError());
});

_gulp2.default.task('js:replace_paths', function () {
  return _gulp2.default.src(paths.BUILD_INDEX_JS).pipe($.replace(paths.TMP_DIR, '')).pipe(_gulp2.default.dest(paths.BUILD_DIR));
});