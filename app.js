//require system functions
var fs    = require("fs")
   ,path  = require("path")
   ,sys   = require('sys')

//require expresjs framework
require.paths.unshift('vendor/express/lib')
require('express')
require('express/plugins')
utils = require('express/utils')
http = require('express/http')

configure(function(){
  use(Logger)
  use(MethodOverride)
  use(ContentLength)
  use(Cookie)
  use(Cache, { lifetime: (5).minutes, reapInterval: (1).minute })
  use(Session, { lifetime: (15).minutes, reapInterval: (1).minute })
  use(Static)
  set('root', __dirname)
})

fs.treeSync = function (root) {
  var s = fs.lstatSync(root)
  s.name = root
  if (!s.isDirectory()) return s
  var children = fs.readdirSync(root)
  s.children = []
  for (var i = 0, l = children.length; i < l; i ++) {
    var child = fs.treeSync(path.join(root, children[i]))
    child.name = children[i]

    if(/\.js$/.test(child.name))
      require(path.join(root, child.name.replace(/\.js$/, '')));
    
    s.children.push(child.name)
  }
  return s
}

//server = run(3000,'local.cj.nu')
server = run()

fs.treeSync(path.join(__dirname, "system"))
fs.treeSync(path.join(__dirname, "application"))