'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

var _vinylPaths = require('vinyl-paths');

var _vinylPaths2 = _interopRequireDefault(_vinylPaths);

var _paths = require('./paths');

var paths = _interopRequireWildcard(_paths);

var _gulp = require('./_gulp');

var _gulp2 = _interopRequireDefault(_gulp);

_gulp2['default'].task('clean:tmp', function () {
  return _gulp2['default'].src([paths.TMP_DIR]).pipe((0, _vinylPaths2['default'])(_del2['default']));
});

_gulp2['default'].task('clean:build', function () {
  return _gulp2['default'].src([paths.BUILD_DIR]).pipe((0, _vinylPaths2['default'])(_del2['default']));
});

_gulp2['default'].task('clean:dist', function () {
  return _gulp2['default'].src([paths.DIST_DIR]).pipe((0, _vinylPaths2['default'])(_del2['default']));
});