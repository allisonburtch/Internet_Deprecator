// The port.on() function registers a function as a listener for a specific 
// named message sent from the other side using port.emit().
// It takes two parameters: the name of the message and a function to handle it.
// this gets the message
// self.port.on("getTimeMessage", function(imageHide) {
//   var images = $("img");
// 	console.log("number of images " + images.length);
//   for (var i = 0; i < images.length; i++) {
// 	images.hide(i*Math.random);
//   }
// });


//this sends the message
// The port.emit() function sends a message from the "main.js", 
// or another add-on module, to a content script, or vice versa.

function timeOpen(){
	return Math.floor((Date.now() - window.performance.timing.loadEventStart) / 1000 / 60);
};

console.log("time open = " + timeOpen());
// console.log("currentTimeinWindow is " + currentTimeinWindow);

function emitTimeOpen(){
	var currentTimeinWindow = timeOpen();
	self.port.emit("timeOpen", currentTimeinWindow);
		console.log("window time open is " + currentTimeinWindow)
	self.port.on("timesUp", function(timesUp){
			console.log("I got this back ")
		})
	};

setInterval(emitTimeOpen, 2000);


// function setImageTime(){
// 	if (timing >= 0) {
// 		  var images = $("img:not(.altered)");
// 		  console.log("number of images " + images.length);
// 		  for (var i = 0; i < images.length; i++) {
// 		  	$(images.get(Math.floor(images.length * Math.random()))).addClass('altered').hide();
// 		  }

// 		  var links = $('a').length;
// 		  for (var i = 0; i < links; i++) {
// 		  	links.css('text-decoration', 'none').css('cursor', 'default').css('color', $('p').css('color')).bind('click', false);

// 		  }
// 		}
// 	else {
// 		console.log("doing nothing");
// 	}
// };




// self.port.on("emitTiming", timing);

// 	function timeOpen (){
// 		return ((Date.now() - window.performance.timing.loadEventStart) / 1000 / 60);
// 	};
// 	function emitTimeOpen(){
// port.on.....(timeOpen);
// 	console.log("time open: " + timeOpen());
// worker.port.emit(timeOpen);
// 	};
// 	setInterval(emitTimeOpen, 12000);
// 	var timeMessage = timeOpen();
// });



//jquery find the link color
// var links = $('a');

//for every link, for randomizing, do above coe
// links.css('text-decoration', 'none').css('cursor', 'default').css('color', $('p').css('color')).bind('click', false);

// generate object from text file
//split string based on commas, split on colon, build object
//breaking urls slowly

// this code generates mapObj from a text file
// https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings



// var csv = $("setImageTime()").load("misspellings.csv"); //load in file with jquery's load function .load("misspellings.csv")

//create object out of it

// var text = csv.split("\n");
// var combos = text.split(',');
// var dict = {};

// for (var i = 0; i <combos.length; i++) {
// 	var split = combos[1].split(":");
// 	dic[split[0]] = split[1];
// }



//last thing to do
//this is a string, not a jquery object or dom element
//read about replace which will take a regex
// var newText = replaceAll($("body").html(), dict);


//put in other code from stack overflow

// $('body').html(newText);

//how to subtly break images?

//switching text (opposites, misspellings)


//sending messages back to main.js for timing
//implememt after other code works

// self.port.on("getTimeMessage", function(timeMessage) {
//   var images = $("img");
// console.log("number of images " + images.length);
//   for (var i = 0; i < images.length; i++) {
// images.hide(i*Math.random);
//   }
// });


