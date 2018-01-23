var jquery = require('jquery');

module.exports = {
  hi: function() { jquery('body').append('<div>Hi From Require</div>'); }
};
