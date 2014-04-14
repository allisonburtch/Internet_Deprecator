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
		//receiving how long the windows have been open
		worker.port.on("timeOpen", function (timeOpen) {
			console.log("current time open: " + timeOpen);
			//if a window has been open longer than x, then emit code back to myscript 
			if (timeOpen > 0) {
				worker.port.emit("timesUp", function (timesUp){
					console.log("the time is up");
				});
			}
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