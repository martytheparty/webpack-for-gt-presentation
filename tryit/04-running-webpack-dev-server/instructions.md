# Running Webpack

## First create an NPM project with the following command line command:

    npm init -y

*note: The -y tells NPM to build your project with defaults.*

## Second add webpack as a dev dependency with the following command line command:

    npm install webpack --save-dev
    npm install webpack-dev-server --save-dev

*note: The --save tells NPM to create an entry in the packages file.  The -dev tells NPM to create the entry as a development specific library.*

## Third add the following scripts in package.json:

    "build":"webpack ./index.js bundle.js"
    "serve":"webpack-dev-server"

*note: Build is the name of the script (it can be anything.)  index.js is the name of the file to be bundled.  bundle.js is the name that the bundle should be given.

## Fourth enter "npm run build"

    npm run build

## Five create a index.html file that loads the bundle file

## Sixth fire up the webpack development Server

    npm run serve

## Seventh point your browser at http://localhost:8080
