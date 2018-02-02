#Plugins


## First create an NPM project with the following command line command:

    npm init -y

*note: The -y tells NPM to build your project with defaults.*

## Second add webpack as a dev dependency with the following command line command:

    npm install webpack --save-dev
    npm install webpack-dev-server --save-dev
    npm install html-webpack-plugin --save-dev

## Third add the following scripts in package.json:

    "build":"webpack"
    "serve":"webpack-dev-server"

## Fourth create a webpack config file as follows"

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =
{
    entry: './entry.js',
    plugins: [
     new HtmlWebpackPlugin({
       title: 'Weback Loaders'
     })
   ],
    output: { filename: '[chunkhash].bundle.js' }
}

## Fifth create a index.js file that declares another variable and function.

  alert('Hello World');

## Seventh create an entry.js file.

require('./index.js');

## Eight Build

    npm run build

## Ninth Build

    npm run serve

* note: see that an index file with a link to the hashed bundle.

## Tenth point your browser at http://localhost:8080
