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

  document.write('<div>Hello</div>');

## Sixth create an index.css file.

  div { color:red }

## Seventh create an entry.js file.

import style from './index.css';
require('./index.js');

## Seventh fire up the webpack development Server

    npm run serve

## Seventh point your browser at http://localhost:8080
