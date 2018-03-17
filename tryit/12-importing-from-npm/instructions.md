#Importing From NPM

## First create an NPM project with the following command line command:

    npm init -y

*note: The -y tells NPM to build your project with defaults.*

## Second add webpack as a dev dependency with the following command line command:

    npm install webpack --save-dev
    npm install webpack-dev-server --save-dev
    npm install jquery --save

## Third add the following scripts in package.json:

    "build":"webpack"
    "serve":"webpack-dev-server"

## Fourth create a webpack config file as follows"

module.exports =
{
    entry: './entry.js',
    output: { filename: 'bundle.js' }
}

## Fifth create a index.js file that imports.

  var jquery = require('jquery');
  jquery('body').html("Hello World");

## Seventh create an entry.js file.

require('./index.js');

## Eight Build

    npm run build

## Seventh point your browser at http://localhost:8080
