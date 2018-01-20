var jquery = require('jquery');
jquery('body').html("Hello World");
alert('Load The Bundle After You Click :) - watch your network tab.');
require.ensure(['./index-require'],
function(require) {
  var importedStuff = require('./index-require');
  console.log(importedStuff.hi());
}
);
