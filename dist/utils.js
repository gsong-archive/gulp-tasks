(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', './paths', './_gulp'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('./paths'), require('./_gulp'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.paths, global.gulp);
    global.utils = mod.exports;
  }
})(this, function (exports, _paths, _gulp) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _gulp2 = _interopRequireDefault(_gulp);

  _gulp2['default'].task('utils:copy_to_tmp', ['clean:tmp'], function () {
    return _gulp2['default'].src(_paths.SRC_ALL).pipe(_gulp2['default'].dest(_paths.TMP_DIR));
  });
});