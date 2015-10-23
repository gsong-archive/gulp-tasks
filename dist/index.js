(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', './clean', './dist', './paths', './publish', './script', './serve', './style', './utils', './build'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('./clean'), require('./dist'), require('./paths'), require('./publish'), require('./script'), require('./serve'), require('./style'), require('./utils'), require('./build'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.clean, global.dist, global.paths, global.publish, global.script, global.serve, global.style, global.utils, global.build);
    global.index = mod.exports;
  }
})(this, function (exports, _clean, _dist, _paths, _publish, _script, _serve, _style, _utils, _build) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  Object.defineProperty(exports, 'makeSettings', {
    enumerable: true,
    get: function get() {
      return _build.makeSettings;
    }
  });
});