# loaders

## First create an NPM project with the following command line command:

    npm init -y

*note: The -y tells NPM to build your project with defaults.*

## Second add webpack as a dev dependency with the following command line command:

    npm install webpack --save-dev
    npm install webpack-dev-server --save-dev
    npm install css-loader --save-dev
    npm install style-loader --save-dev

## Third add the following scripts in package.json:

    "build":"webpack"
    "serve":"webpack-dev-server"

## Fourth create a webpack config file as follows"

module.exports =
{
    entry: './entry.js',
    output: { filename: 'bundle.js' },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
            }
        ]
    }
}

## Fifth create a index.js file that declares another variable and function.

  document.write('Hello');

## Sixth create an index.css file.

  body { color:red }

## Seventh create an entry.js file.

import style from './index.css';
require('./index.js');

## Eighth fire up the webpack development Server

    npm run serve

## Ninth fire up the webpack development Server

        Create an index.html file that loads the bundle.js.

## Tenth point your browser at http://localhost:8080
