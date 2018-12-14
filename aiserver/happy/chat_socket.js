// CHAT LOW LEVEL SOCKET SERVER

var	net = require('net');
var os = require('os');

var portnum = 2013;
var gsid = 1000;
var numconnect = 0;

console.log('NodeJS Version: ' + process.version);

// show server's IP address
console.log('ip = ');
var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}
console.log(addresses);
console.log("port " + portnum + ", cwd = " + process.cwd());


// server unity client, can also test with 'telnet'
var server = net.createServer(function(sock) { //'connection' listener
	var sid = gsid++;
	console.log("Connected!, your session id = " + sid + ", now have " + ++numconnect + " connections.");
	var connected = true;
	sock.on('end', function() {
		console.log(sid + ' disconnected!, now have ' + --numconnect + " connections.");
  	});
	sock.on('error', function() {
		if (connected) {
			console.log('ERROR, ' + sid + ' disconnected!, now have ' + --numconnect + " connections.");
			connected = false;
		} else {
			console.log('ERROR, ' + sid + ' already disconnected!, now have ' + numconnect + " connections.");
		}
	});
	var pcnt = 0; // closure, each connection has it's own count phrases
	var inmessage = '';
	sock.write("v. 12/14:Connected to chat bot, session id = " + sid + ", " + numconnect + " users online right now.\n\r",'utf8',
	  function () { console.log("wrote!");});

	sock.on('data', function(chunk) {
		var clen = chunk.length;
		var i;
		for (i=0;i<clen;++i) {
			if (chunk[i] == 13) { // cr
				console.log("message from client " + sid + " = '" + inmessage + "'");
				var replydata = replyback(inmessage,sid,pcnt++);
	//			sock.write(replydata + '\n' +'\r','utf8',
				sock.write(replydata + '\n','utf8',
				  function () { console.log("wrote:"+replydata);});
				inmessage = '';
				continue;
			} else if (chunk[i] == 10) { // lf
				continue;
			}
			inmessage += chunk.toString('utf8',i,i+1);
		}
 	});
});

// given some phrase from client, server processes and returns a reply phrase to client
function replyback(inputstr,sid,phrasecount) {
	var nwords = inputstr.split(" ").length;
	var nchars = inputstr.length;
	var outstr = "[sid=" + sid + ":" + phrasecount + "] wc=" + nwords + ", cc= " + nchars + ", Phrase = '" + inputstr + "'";

// peter was here..  find faster way eventually...
// add special system commands to prove system is working....
	if (inputstr.localeCompare("system test")==0)
		outstr= "[rp_a0_0]system is functional";

	if (inputstr.localeCompare("system check")==0)
		outstr= "[rp_a0_0]system is functional";

	if (inputstr.localeCompare("system users")==0)
		outstr= "[rp_a0_1]system has at least one user- YOU!";

	if (inputstr.localeCompare("system uptime")==0)
		outstr= "[rp_a0_2]system is tired!";

	if (inputstr.localeCompare("howdy")==0)
		outstr= "[rp_a0_99]Hey there cowboy";

	return outstr;
}





// start it all off
server.listen(portnum);
