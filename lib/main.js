//this will break this internet
var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;
var workers = require("sdk/content/worker");


// worker.port.on("currentTime", function (timeMessage) {
// 	console.log("this is the currentTime" + timeMessage);
// });


pageMod.PageMod({
	include: ["*"],
	contentScriptFile: [data.url("jquery-2.1.0.min.js"), data.url("myscript.js")],
	onAttach: function(worker) {

		worker.port.on("currentTime", function (timeMessage) {
			console.log("got the message");
			console.log("current time: " + currentTime);
			console.log("current timeMessage: " + timeMessage);
			//this is the code to listen to how long it's been open
		});

		worker.port.emit("getTimeMessage", function handleMyMessage(imageHide) {
			console.log("sent the message");
			//this is the code to do shit


		});		
	}
});



//changing images
//changing words
//markov?
//word cahnge?
//pagemod. get elementby...self.port.on. 'getelements'

// timer:

// window.open - start time.

// when time > do something

// then pagemod starts