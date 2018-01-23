# Installing webpack-dev-server

## First create an NPM project with the following command line command:

    npm init -y

*note: The -y tells NPM to build your project with defaults.*

## Second add webpack as a dev dependency with the following command line command:

    npm install webpack --save-dev
    npm install webpack-dev-server --save-dev

*note: The --save tells NPM to create an entry in the packages file.  The -dev tells NPM to create the entry as a development specific library.*

## Third add the following script in package.json:

"build":"webpack index.js bundle.js"

*note: Build is the name of the script (it can be anything.)  index.js is the name of the file to be bundled.  bundle.js is the name that the bundle should be given.

## Fourth enter "npm run build"

## Five examine the bundle.js file

*note: There is a lot of strange code in bundle.js.  That is the code that implements module exports. *
