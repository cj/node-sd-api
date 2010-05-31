require.paths.unshift('system/database')
exports.DB = new Class({
  extend: {
      extended: function(subclass){
        // called when User.extend() is called,
        // in this case passes Admin
      }
    }
})
DB = require('db').DB;