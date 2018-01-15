# namespacing

## First create an NPM project with the following command line command:

    npm init -y

*note: The -y tells NPM to build your project with defaults.*

## Second add webpack as a dev dependency with the following command line command:

    npm install webpack --save-dev
    npm install webpack-dev-server --save-dev

*note: The --save tells NPM to create an entry in the packages file.  The -dev tells NPM to create the entry as a development specific library.*

## Third add the following scripts in package.json:

    "build":"webpack ./index.js bundle.js"
    "serve":"webpack-dev-server ./index.js bundle.js"

## Fourth create a simple.js file that declares a variable and function.

    var hello = "Hello World";
    function sayHi(){
      alert(hello);
    }
    sayHi();

## Fifth create a index.js file that declares another variable and function.

    var hola = "hola el mundo";
    function sayHi() {
      alert(hola);
    }
    sayHi();

## Sixth create an index.html file that loads the simple.js and bundle.js.

## Seventh fire up the webpack development Server

    npm run serve

## Seventh point your browser at http://localhost:8080

    Check the variables in the console.
