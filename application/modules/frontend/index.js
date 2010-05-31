get('/', function(){  
  set('views', __dirname + '/views')
  require.paths.unshift('vendor/mysql/lib')
  var mysql = require('mysql')
     ,sys   = require('sys'); 

  /*
  > mysql -u root
  CREATE DATABASE nodejs_mysql;
  GRANT ALL ON nodejs_mysql.* TO nodejs_mysql@localhost IDENTIFIED BY "nodejs_mysql";
  */
  //var conn = new mysql.Connection('localhost','user', 'password', 'database','port');
  //var conn = new mysql.Connection('localhost','root', 'pass', 'nodejs_mysql');
  //conn.connect();
  ////conn.query("CREATE TABLE test1(intval INTEGER, strval TEXT, timestampval TIMESTAMP, boolval BOOLEAN);");
  //conn.query("INSERT INTO test1 VALUES(NULL,1,'a',now(),true);",
  //  function(result){
  //    sys.puts(sys.inspect(result))
  //  }
  //);
  //conn.query("SELECT * FROM test1;",
  //    function(result) {
  //        //for(var i=0; i<result.records.length; ++i) {
  //        //    sys.puts("Result: "+sys.inspect(result.toHash(result.records[i])));
  //        //};
  //        //conn.close();
  //    },
  //    function(error) {
  //	sys.puts("Error: "+sys.inspect(error));
  //        //conn.close();
  //    });

  
  
  var self = this;
  self.authenticate(['basic','digest'], function(error, authenticated) {
    if( authenticated ) {
      self.render('index.html.ejs', {
        locals: {}
      })
    }
    else {
      self.respond(200, "<html><h1>should not be happening...</h1></html>")
    }
  });
})