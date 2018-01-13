# bundling with webpack

## First create an NPM project with the following command line command:

    npm init -y

*note: The -y tells NPM to build your project with defaults.*

## Second add webpack as a dev dependency with the following command line command:

    npm install webpack --save-dev
    npm install webpack-dev-server --save-dev

*note: The --save tells NPM to create an entry in the packages file.  The -dev tells NPM to create the entry as a development specific library.*

## Third add the following scripts in package.json:

    "build":"webpack"
    "serve":"webpack-dev-server"

*note: Build is the name of the script (it can be anything.)  index.js is the name of the file to be bundled.  bundle.js is the name that the bundle should be given.

## Fourth create a index.html file that loads the dist/bundle.js script and originals.html that loads the original js files.

## Fifth create simple controller/ctrl-hello.js, model/mod-hello.js, and view-hello.js files

## Sixth create an entry.js files with the following:

require('./controller/ctrl-hello.js');
require('./model/mod-hello.js');
require('./view/view-hello.js');

## Seventh create a webpack.config.js file

module.exports = { entry: './entry.js', output: {filename: 'bundle.js'}}

## Eighth fire up the webpack development Server

    npm run serve

## Ninth point your browser at http://localhost:8080
- checkout the dev tab and the download times.
