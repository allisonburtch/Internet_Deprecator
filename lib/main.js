var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var workers = require("sdk/content/worker");
var data = require("sdk/self").data;
var windows = require("sdk/windows").browserWindows;
var { Ci } = require('chrome');
var utils = require('sdk/window/utils');


pageMod.PageMod({
	include: ["*"],
	contentScriptFile: [data.url("jquery-2.1.0.min.js"),
              data.url("myscript.js")]
});


var browserWindow = utils.getMostRecentBrowserWindow();
var window = browserWindow.content; // `window` object for the current webpage
utils.getToplevelWindow(window) == browserWindow; // => true
console.log(browserWindow);

windows.port.on("timeMessage", function handleMyMessage(timeMessage) {
	console.log("i got it");
});


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