//~NiftyLang spec
// 	Designed to have as simple syntax as possible
// 	no loops (instead use function like .map, .reduce etc)
// 	Compile to javascript(c++?)
// 	The IDE is part of the language
// 	NiftyIDE
// 		Replace all instances of var with the infered type
// 		Not a text editor
// 		Unable to type syntactically incorrect code


lib http.webserver as web
lib database as db

var server = web.newWebserver 3000
var c = db.newConnection "localhost:9999"
//function arg types are infered by server.get function
server.get("/" (var req, var res)
	res.render "view/index.html"
)

server.get "/api/users" (var req, var res)
	//query will return a promise
	var promise = c.query "select * from users"
	//await keyword will block current execution until the query finishes executing
	var result = await promise
	//result is an array of mutable object type which is like js object
	result[0].name = "john"
	res.renderJson result



//functions can only have 1 return type and last value of the function is ruturned
var fib = var(num a)
	if a == 1
		1
	ef a < 2000
		a + fib a-1
	else
		throw "number wayyyy too big"