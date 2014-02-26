
var images = $("img");
images.hide();

console.log("number of images " + images.length);

var time = window.performance.timing;
console.log(time);

var unix_timestamp = time.loadEventEnd - time.loadEventStart;
	console.log("time ");
	console.log(unix_timestamp);

var date = new Date(unix_timestamp*1000);
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var formattedTime = hours + ": " + minutes + ": " + seconds;

console.log(formattedTime)
// console.log("this is the number of images I think");
// console.log(images);

// if timing > 0 {

// 	$("img").hide();
// }


// function hideImages() {
// 	for (var i = 0; i<images; i++){

// 		test = Math.floor(Math.random(images[i] * 5));
// 		console.log("this is a test" + test);
// 		// images.hide();
// 	};	
// };



// timeOnTabs == 

// if timeOnTabs > x {

// }

// else if timeOnTabs > y {

// }

// else timeOnTabs > z {


// }