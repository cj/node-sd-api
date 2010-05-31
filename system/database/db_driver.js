sys.puts(sys.inspect(DB));
exports.DB_Driver = DB.extend({
      username:""
     ,password:""
     ,hostname:""
     ,database:""
     ,dbdriver		: 'mysql'
     ,dbprefix		: ''
     ,char_set		: 'utf8'
     ,dbcollat		: 'utf8_general_ci'
     ,autoinit		: true // Whether to automatically initialize the DB
     ,swap_pre		: ''
     ,port			: ''
     ,pconnect		: false
     ,conn_id		: false
     ,result_id		: false
     ,db_debug		: false
     ,benchmark		: 0
     ,query_count	: 0
     ,bind_marker	: '?'
     ,save_queries	: true
     ,queries		: {}
     ,query_times	: {}
     ,data_cache		: {}
     ,trans_enabled	: true
     ,trans_strict	: true
     ,_trans_depth	: 0
     ,_trans_status	: true // Used with transactions to determine if a rollback should occur
     ,cache_on		: false
     ,cachedir		: ''
     ,cache_autodel	: false
     ,CACHE :{}// The cache class object
  // Private variables
     ,_protect_identifiers	: true
     ,_reserved_identifiers	: ['*'] // Identifiers that should NOT be escaped 
  // These are use with Oracle
     ,stmt_id:""
     ,curs_id:""
     ,limit_used:""

     ,CI_DB_driver: function(params)
     {
       if (is_array(params))
   		{
   			_.each(params,function(val,key){
   			  this[key] = val;
   			});
   		}
   		
   		log_message('debug', 'Database Driver Class Initialized');
     }
})

//var DB = new DB_Lib();
//DB.CI_DB_driver({"moo":"cow"});
sys.puts("Loaded Driver");