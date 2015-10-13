'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpLoadPlugins = require('gulp-load-plugins');

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

exports['default'] = _gulp2['default'];
module.exports = exports['default'];