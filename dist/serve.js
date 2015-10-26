(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'browser-sync', 'gulp-load-plugins', 'run-sequence', './build', './dist', './script', './style', './paths', './_gulp'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('browser-sync'), require('gulp-load-plugins'), require('run-sequence'), require('./build'), require('./dist'), require('./script'), require('./style'), require('./paths'), require('./_gulp'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.browserSync, global.gulpLoadPlugins, global.runSequence, global.build, global.dist, global.script, global.style, global.paths, global.gulp);
    global.serve = mod.exports;
  }
})(this, function (exports, _browserSync, _gulpLoadPlugins, _runSequence, _build, _dist, _script, _style, _paths, _gulp) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _browserSync2 = _interopRequireDefault(_browserSync);

  var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

  var _runSequence2 = _interopRequireDefault(_runSequence);

  var _gulp2 = _interopRequireDefault(_gulp);

  var $ = (0, _gulpLoadPlugins2['default'])();

  var BS_OPTIONS = {
    ghostMode: false,
    open: false,
    notify: false,
    port: 9000
  };

  var BS_SERVER_OPTIONS = {
    baseDir: [_paths.SRC_DIR, _paths.TMP_DIR],
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
    (0, _browserSync2['default'])(opts, done);

    return _gulp2['default'].watch(_paths.SRC_ALL, reloadTasks).on('change', reportChange);
  }

  _gulp2['default'].task('reload', function () {
    return _browserSync2['default'].reload();
  });

  _gulp2['default'].task('reload:build', function (callback) {
    return (0, _runSequence2['default'])('build', 'reload', callback);
  });

  _gulp2['default'].task('reload:dist', function (callback) {
    return (0, _runSequence2['default'])('dist', 'reload', callback);
  });

  _gulp2['default'].task('serve:dev', ['build:make-settings', 'compile:styles', 'js:lint'], function (done) {
    var opts = Object.assign({}, BS_OPTIONS, { server: BS_SERVER_OPTIONS });

    (0, _browserSync2['default'])(opts, done);

    _gulp2['default'].watch(_paths.SRC_HTML, ['reload']).on('change', reportChange);
    _gulp2['default'].watch(_paths.SRC_SCRIPT, ['js:lint', 'reload']).on('change', reportChange);
    _gulp2['default'].watch(_paths.SRC_STYLE, ['compile:styles', 'reload']).on('change', reportChange);
  });

  _gulp2['default'].task('serve:build', ['build'], function (done) {
    _serve([_paths.BUILD_DIR], ['reload:build'], done);
  });

  _gulp2['default'].task('serve:dist', ['dist'], function (done) {
    _serve([_paths.DIST_DIR], ['reload:dist'], done);
  });
});