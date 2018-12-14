// CHATTER SERVER
var app = require('http').createServer(handler),
	io = require('socket.io').listen(app,{log:false}),
	url = require("url"),
	path = require("path"),
	//ip = require("ip"),
	fs = require('fs');
	//net = require('net'),
    //qs = require('querystring');
	
var portnum = 81;
var gsid = 1000;

var numconnect = 0;

console.log('NodeJS Version: ' + process.version);
console.log("port " + portnum + ", cwd = " + process.cwd());
//var ip = require("ip");
//console.dir ( ip.address() );
//var websocker = null; // TODO: make this multi-user
/*var os = require( 'os' );
var networkInterfaces = os.networkInterfaces( );
console.log( networkInterfaces );*/

var mimeTypes = {
	'html': 'text/html',
	'png': 'image/png',
	'jpg': 'image/jpeg',
	'jpeg': 'image/jpeg',
	'js': 'text/javascript',
	'css': 'text/css'
};
    
// standard web server
function handler (request, response) {
    // only handle GET
    console.log("------ http server handler ---------");
    if (request.method != 'GET') {
		response.writeHead(200);
		response.write("Only get supported.");
		console.log("NOT GET!");
		response.end();
		return;
	}
	
	var purl = url.parse(request.url);
	var uri = purl.pathname;
	uri = decodeURI(uri); // convert %20 to real spaces to get the right file, now replacing with '-' dashes
	var cwd = process.cwd();
	var query = purl.query; // stuff like ?startstate=foo&startfile=fum
	if (query)
		console.log("query = '" + query + "'");
	var filename = path.join(cwd, uri); // filename in local server filesystem
	
	debugger; // a step back, this is how you set breaks now??
	
    //console.log("reading filename '%s'",filename);
    console.log("reading filename '%s' cwd '%s' uri '%s'",filename,cwd,uri);

	fs.exists(filename, function(doesExist) {

		if(!doesExist) {
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.write("404 File " + filename + " Not Found\n");
	        console.log(filename + " 404 resp.end");
			response.end();
			return;
		}
	
		if (fs.statSync(filename).isDirectory()) {
			filename += '/chatter.html';
		}

        var extension = path.extname(filename).substr(1);
        var mimeType = mimeTypes[extension] || 'application/octet-stream'; // otherwise treat unknown extension as binary
		
		fs.readFile(filename, "binary", function(err, file) {
			if(err) {
				console.log("error reading file");        
				response.writeHead(500, {"Content-Type": "text/plain"}); // internal server error, trouble reading file that doesn't exist
				response.write(err + "\n");
				response.end();
				return;
			}
			response.writeHead(200, {
				'Content-Type' : mimeType,
				//'Access-Control-Allow-Origin': '*', // CORS access
			});
			response.write(file, "binary");
			response.end();
		});
	});
};

// upgrade to websocket
io.sockets.on('connection', function (socket) {
	debugger;
	//var address = socket.handshake.address;
	//console.log('New connection from ' + address.address + ':' + address.port);
	//console.log("Log of new socket");
	//console.log(socket);
	var sid = gsid++;
	console.log("Connected!, your session id = " + sid + ", now have " + ++numconnect + " connections.");
/*	var cnt = 0;
	var iv = setInterval(function() {
		socket.emit('news', { count: cnt });
		++cnt;
	},3000);*/
	// greetings from the chat bot
	socket.emit('toclient', "Connected to chat bot, session id = " + sid + ", " + numconnect + " users online right now.");
	// this is where the server listens to 'toserver' and replies to 'toclient'
	var pcnt = 0; // closure, each connection has it's own count phrases
	socket.on('toserver', function (data) {
		console.log(data);
		replydata = replyback(data,sid,pcnt++);
		console.log(replydata);
		socket.emit('toclient',replydata);
	});
	socket.on('disconnect', function () {
		console.log('disconnected!, now have ' + --numconnect + " connections.");
		//websocker = null;
	});
});

// given some phrase from client, server processes and returns a reply phrase to client
function replyback(inputstr,sid,phrasecount) {
	var nwords = inputstr.split(" ").length;
	var nchars = inputstr.length;
	var outstr = "[sid=" + sid + ":" + phrasecount + "] wc=" + nwords + ", cc= " + nchars + ", Phrase = '" + inputstr + "'";
	return outstr;
}

app.listen(portnum); // turn it all on

