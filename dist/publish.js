(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'gh-pages', './paths', './_gulp'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('gh-pages'), require('./paths'), require('./_gulp'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ghpages, global.paths, global.gulp);
    global.publish = mod.exports;
  }
})(this, function (exports, _ghPages, _paths, _gulp) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _ghpages = _interopRequireDefault(_ghPages);

  var _gulp2 = _interopRequireDefault(_gulp);

  _gulp2['default'].task('publish', ['dist'], function () {
    return _ghpages['default'].publish(_paths.DIST_DIR, function () {});
  });
});