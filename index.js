var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "ejs");
app.use(bodyParser());

app.get("/", function(request, responce) {
	console.log("GET /")
    responce.render('default');
});

app.get("/pythonista/:what?", function(request, responce) {
	var what = request.params.what;
	console.log("GET /pythonista/" + what);
	responce.send("Launch " + what + " in Pythonista")
});

app.post("/", function(request, responce){
	var pyscript = request.body.pyscriptname
	console.log("POST /pythonista/" + pyscript);
    responce.redirect("/pythonista/" + pyscript);
});

var server = app.listen(3000,function() {
	console.log("Listening on Port 3000");
});