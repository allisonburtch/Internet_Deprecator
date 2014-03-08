var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var workers = require("sdk/content/worker");
var data = require("sdk/self").data;
var windows = require("sdk/windows").browserWindows;
var { Ci } = require('chrome');
var utils = require('sdk/window/utils');

//so, i need something that asks what time it is
//and something that says how long the window has been open
//then, if the windowopentime is above a certain time,
//worker.port.emit "another function" to make the page mod happen on the other side
//does it need to be the pagemod or the worker?

pageMod.PageMod({
	include: ["*"],
	contentScriptFile: [data.url("jquery-2.1.0.min.js"), data.url("myscript.js")],
	onAttach: function(worker) {
		worker.port.on("gotTimeMessage", function handleMyMessage(timeOpen) {
			console.log("got the message");
			console.log(timeOpen);
			//this is the code to listen to how long it's been open
		});
		worker.port.emit("getTimeMessage", function handleMyMessage(imageHide) {
			console.log("sent the message");
			//this is the code to do shit
		});
	}
});


// var browserWindow = utils.getMostRecentBrowserWindow();

// var window = browserWindow.content; // `window` object for the current webpage
// utils.getToplevelWindow(window) == browserWindow; // => true
// console.log(browserWindow[0]);



// then emit the function or command to start shuffling, deleting words, etc


//changing images
//changing words
//markov?
//word cahnge?
//pagemod. get elementby...self.port.on. 'getelements'

// timer:

// window.open - start time.

// when time > do something

// then pagemod starts