var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var workers = require("sdk/content/worker");
var data = require("sdk/self").data;
var windows = require("sdk/windows").browserWindows;


windows.on('open', function(window) {
	// var timing = window.performance.timing.loadEventStart;
	var timing = window.performance.timing;
	var timeDif = timing.loadEventEnd - timing.loadEventStart;
	console.log("time ");
	console.log(timeDif);
	consle.log(timing);
});

pageMod.PageMod({
	include: ["*"],
	contentScriptFile: [data.url("jquery-2.1.0.min.js"),
              data.url("myscript.js")]
});



// for each (var window in windows.browserWindows) {
//   console.log(window.title);
//   var timing = windows.performance.now;
//   // var timing = window.performance.timing.loadEventStart;
//   console.log(timing);
// }




// timer:

// window.open - start time.

// when time > do something

// then pagemod starts