// main javascript entry point
//var conversation = null; // text area for conversation, trying closure

function maininit() {
	console.log("in chatter init");
	
	// UI
	var conversation = document.getElementById("conversation");
	conversation.value = ""; // why do I need to do this ???, navigating to and from it still remembers some old textarea data??
	var clear_output = document.getElementById("clear_conversation");
	var human_input = document.getElementById("human_input");
	human_input.focus();
	
	var add_output = function(title,phrase) {
		//alert("add output");
		conversation.value += "<" + title + ">: " + phrase + "\n";
		conversation.scrollTop = conversation.scrollHeight;
	};
	
	clear_output.onclick = function(event) {
		conversation.value = "";
		human_input.focus();
	};
	
	human_input.onkeypress = function(event) {
		var CR = 13;
		if (event.keyCode == CR || event.which == CR) {
			//alert("You Entered '" + human_input.value + "' length = " + human_input.value.length);
			add_output("  human",human_input.value);
			socket.emit('toserver',human_input.value);
			human_input.value = "";
		}
	};

	// upgrade to websocket
	var socket = io.connect("http://" + location.host);
	
	
	
	//socket.emit('my other event', { send: 'somedata' });
/*	var cnt = 0;
	var iv = setInterval(function() {
		socket.emit('toserver', cnt); // send some simple numbers 'toserver', test
		++cnt;
	},3000);*/
	//socket.emit('toclient', { hello: 'world' });
	// listen to 'toclient' messages from the server
	
	
	socket.on('toclient', function (data) {
		console.log(data);
		add_output("chatbot",data);
		//socket.emit('my other event', { my: 'data' });
	});
}

	
/*function mainexit() {
	console.log("in chatter exit");
}*/


// call something
window.onload = maininit; // javascript starts running at maininit
//window.onunload = mainexit; // maybe save some cookies, doesn't work anymore
