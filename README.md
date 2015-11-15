# Gulp Tasks For JSPM / Babel 6 Based Angular Projects

## Summary

This package provides common tasks for:

* Running a `browser-sync` server during development
* Creating environment specific settings file based on configuration file
* Building the final deployment package
* Deploying to GitHub Pages

Note that these tasks are tightly coupled to a certain project structure, which
can be seen at the corresponding [Apple Store Search][] project.

## Install

```sh
npm install gsong/gulp-tasks[#version-number]
```

## How To Use

These tasks are meant to be installed in an Angular project and used via the
project's `gulpfile.js` or `gulpfile.babel.js`. For example:

```js
import 'babel-polyfill';
import gulp from 'gulp';
import {makeSettings} from 'gulp-tasks';

import environments from './src/config/environments';


makeSettings(environments);
gulp.task('default', ['serve:dev'], () => {});
```

Note that the only function exported from the package is `makeSettings`, which
is responsible for creating the `build:make-settings` task. The input
`environments` is an object whose keys are the different environments the
project will run in, for example, development and production:

```js
{
  development: {
    HTTP_CACHE_SIZE: 100,
    ENABLE_DEBUG_LOGGING: true
  },
  production: {
    HTTP_CACHE_SIZE: 5000,
    ENABLE_DEBUG_LOGGING: false
  },
}
```

In order to access the different environments, you need to set the shell
environment variable `ENV`. For example:

```sh
ENV=production gulp publish
```

If `ENV` is not specified, `development` is assumed.

## Tasks

The main tasks you'll interact with are probably:

* `serve:dev`: Serve the app in development mode
* `serve:dist`: Serve the app as if it's hosted on the server
* `dist`: Build the final distribution package in `dist/`
* `publish`: Publish the project to GitHub Pages

Here's a complete list of tasks:

```
├── clean:tmp
├── clean:build
├── clean:dist
├── js:lint
├── js:replace_paths
├── compile:styles
├─┬ utils:copy_to_tmp
│ └── clean:tmp
├─┬ build:jspm
│ ├── compile:styles
│ └── js:lint
├── build:js
├── build:html
├── build:images
├── build
├── dist:post-jspm
├── dist:js
├── dist:html
├── dist:copy
├── dist
├─┬ publish
│ └── dist
├── reload
├── reload:build
├── reload:dist
├─┬ serve:dev
│ ├── build:make-settings
│ ├── compile:styles
│ └── js:lint
├─┬ serve:build
│ └── build
├─┬ serve:dist
│ └── dist
└── build:make-settings
```


[Apple Store Search]: https://github.com/gsong/apple-store-search
