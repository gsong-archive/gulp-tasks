'use strict';

var _browserSync = require('browser-sync');

var _browserSync2 = _interopRequireDefault(_browserSync);

var _gulpLoadPlugins = require('gulp-load-plugins');

var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

var _runSequence = require('run-sequence');

var _runSequence2 = _interopRequireDefault(_runSequence);

require('./build');

require('./dist');

require('./script');

require('./style');

var _paths = require('./paths');

var paths = _interopRequireWildcard(_paths);

var _gulp = require('./_gulp');

var _gulp2 = _interopRequireDefault(_gulp);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = (0, _gulpLoadPlugins2.default)();

var BS_OPTIONS = {
  ghostMode: false,
  open: false,
  notify: false,
  port: 9000
};

var BS_SERVER_OPTIONS = {
  baseDir: [paths.SRC_DIR, paths.TMP_DIR],
  middleware: function middleware(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  }
};

function reportChange(event) {
  $.util.log('File ' + event.path + ' was ' + event.type + ', running tasks…');
}

function _serve(baseDir, reloadTasks, done) {
  var serverOpts = Object.assign({}, BS_SERVER_OPTIONS, { baseDir: baseDir });
  var opts = Object.assign({}, BS_OPTIONS, { server: serverOpts });
  (0, _browserSync2.default)(opts, done);

  return _gulp2.default.watch(paths.SRC_ALL, reloadTasks).on('change', reportChange);
}

_gulp2.default.task('reload', function () {
  return _browserSync2.default.reload();
});

_gulp2.default.task('reload:build', function (callback) {
  return (0, _runSequence2.default)('build', 'reload', callback);
});

_gulp2.default.task('reload:dist', function (callback) {
  return (0, _runSequence2.default)('dist', 'reload', callback);
});

_gulp2.default.task('serve:dev', ['build:make-settings', 'compile:styles', 'js:lint'], function (done) {
  var opts = Object.assign({}, BS_OPTIONS, { server: BS_SERVER_OPTIONS });

  (0, _browserSync2.default)(opts, done);

  _gulp2.default.watch(paths.SRC_HTML, ['reload']).on('change', reportChange);
  _gulp2.default.watch(paths.SRC_SCRIPT, ['js:lint', 'reload']).on('change', reportChange);
  _gulp2.default.watch(paths.SRC_STYLE, ['compile:styles', 'reload']).on('change', reportChange);
});

_gulp2.default.task('serve:build', ['build'], function (done) {
  _serve([paths.BUILD_DIR], ['reload:build'], done);
});

_gulp2.default.task('serve:dist', ['dist'], function (done) {
  _serve([paths.DIST_DIR], ['reload:dist'], done);
});