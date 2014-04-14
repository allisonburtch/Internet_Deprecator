//requirements from firefox sdk
var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;
var workers = require("sdk/content/worker");

//Pagemod allows for html page modification
pageMod.PageMod({
	//include all web pages
	include: ["*"],
	//include myscript.js, which will run on all pages
	contentScriptFile: [data.url("jquery-2.1.0.min.js"), data.url("myscript.js")],
	onAttach: function(worker) {
		//receiving how long the windows have been open
		worker.port.on("timeOpen", function (timeOpen) {
			console.log("current time open: " + timeOpen);
			//if a window has been open longer than x, then emit code back to myscript 
			if (timeOpen >= 1) {
				worker.port.emit("fiveMins", function (timesUp){
				});
			}

			// if (timeOpen >= 15) 

			// if (timeOpen >= 35) 

			// if (timeOpen >= 55) 

			// if (timeOpen >= 75)

			// if (timeOpen >= 135) 

			// if (timeOpen >= 165) 

			// if (timeOpen >= 200) 
				
		});		
	}
});

//changing images
//changing words
//markov?
//word cahnge?
//pagemod. get elementby...self.port.on. 'getelements'

