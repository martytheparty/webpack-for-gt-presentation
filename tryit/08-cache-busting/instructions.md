# cache busting

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

## Fourth create simple JavaScript file called index.js

    alert('Hello World');

## Fifth create a webpack.config.js file

    module.exports = { entry: './index.js', output: { filename: '[chunkhash].bundle.js' } }

## Sixth build

    npm run build

## Seventh make a small change to the javascript file

    alert('Hello World!');

## Eigth build

    npm run build

## Ninth note that the file names change based on the content of the file.  The cache is maintained as long as the content of the files is maintained.
