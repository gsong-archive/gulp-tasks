(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'del', 'vinyl-paths', './paths', './_gulp'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('del'), require('vinyl-paths'), require('./paths'), require('./_gulp'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.del, global.vinylPaths, global.paths, global.gulp);
    global.clean = mod.exports;
  }
})(this, function (exports, _del, _vinylPaths, _paths, _gulp) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _del2 = _interopRequireDefault(_del);

  var _vinylPaths2 = _interopRequireDefault(_vinylPaths);

  var _gulp2 = _interopRequireDefault(_gulp);

  _gulp2['default'].task('clean:tmp', function () {
    return _gulp2['default'].src([_paths.TMP_DIR]).pipe((0, _vinylPaths2['default'])(_del2['default']));
  });

  _gulp2['default'].task('clean:build', function () {
    return _gulp2['default'].src([_paths.BUILD_DIR]).pipe((0, _vinylPaths2['default'])(_del2['default']));
  });

  _gulp2['default'].task('clean:dist', function () {
    return _gulp2['default'].src([_paths.DIST_DIR]).pipe((0, _vinylPaths2['default'])(_del2['default']));
  });
});