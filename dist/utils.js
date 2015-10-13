'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _paths = require('./paths');

var paths = _interopRequireWildcard(_paths);

var _gulp = require('./_gulp');

var _gulp2 = _interopRequireDefault(_gulp);

_gulp2['default'].task('utils:copy_to_tmp', ['clean:tmp'], function () {
  return _gulp2['default'].src(paths.SRC_ALL).pipe(_gulp2['default'].dest(paths.TMP_DIR));
});