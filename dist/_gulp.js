(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'gulp', 'gulp-load-plugins'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('gulp'), require('gulp-load-plugins'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.gulp, global.gulpLoadPlugins);
    global._gulp = mod.exports;
  }
})(this, function (exports, module, _gulp, _gulpLoadPlugins) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _gulp2 = _interopRequireDefault(_gulp);

  var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

  var $ = (0, _gulpLoadPlugins2['default'])();
  var _gulpsrc = _gulp2['default'].src;

  _gulp2['default'].src = function (globs, options) {
    return _gulpsrc.apply(_gulp2['default'], [globs, options]).pipe($.plumber({
      errorHandler: function errorHandler(err) {
        $.notify.onError({
          title: err.name, message: err.message, sound: 'Sosumi'
        })(err);
        this.emit('end');
      }
    }));
  };

  module.exports = _gulp2['default'];
});