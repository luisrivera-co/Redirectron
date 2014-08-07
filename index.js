var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static(__dirname + '/public'));

app.get("/", function(request, responce) {
	console.log("GET /")
    responce.render('index');
});

app.get("/pythonista/:what?", function(request, responce) {
	var what = request.params.what;
	console.log("GET /pythonista/" + what);
	responce.render("pythonista", {script: what});
});

app.post("/", function(request, responce){
	var pyscript = request.body.pyscriptname
	console.log("POST /pythonista/" + pyscript);
    responce.redirect("/pythonista/" + pyscript);
});

var server = app.listen(process.env.PORT || 5000,function() {
	console.log("Listening on Port 5000");
});