# Gulp Tasks For jspm / Babel 6 Based Angular Projects

## Summary

This package provides common tasks for:

* Running a `browser-sync` server during development
* Creating environment specific settings file based on configuration file
* Building the final deployment package
* Deploying to GitHub Pages

Note that these tasks are tightly coupled to a certain project structure, which
can be seen at the corresponding [Apple Store Search (Babel
Edition)][apple-store-search] project. If you have your own directory structure
or other requirements, you should create a fork of this project for your own
purpose.

The tasks are written in ES2015, but transpiled to ES5 in CommonJS format.

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

const environments = {
  development: {
    HTTP_CACHE_SIZE: 100,
    ENABLE_DEBUG_LOGGING: true
  },
  production: {
    HTTP_CACHE_SIZE: 5000,
    ENABLE_DEBUG_LOGGING: false
  }
};

makeSettings(environments);
```

Note that the only function exported from the package is `makeSettings`, which
is responsible for creating the `build:make-settings` task. The input
`environments` is an object whose keys are the different environments the
project will run in.

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


[apple-store-search]: https://github.com/gsong/apple-store-search
