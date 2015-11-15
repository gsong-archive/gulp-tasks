'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSettings = undefined;

var _build = require('./build');

Object.defineProperty(exports, 'makeSettings', {
  enumerable: true,
  get: function get() {
    return _build.makeSettings;
  }
});

require('./clean');

require('./dist');

require('./paths');

require('./publish');

require('./script');

require('./serve');

require('./style');

require('./utils');