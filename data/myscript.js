

function timeOpen (){
	return ((Date.now() - window.performance.timing.loadEventStart) / 1000 / 60);
};

function emitTimeOpen(){
	// port.on.....(timeOpen);
	console.log("time open: " + timeOpen());
// worker.port.emit(timeOpen);
};

setInterval(emitTimeOpen, 6000);




var images = $("img");
images.hide();

console.log("number of images " + images.length);

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





//DOM manipulation
// page mod example

// $("img").each(function)
// or it coule be a vairalbe....when timing info comes back, change vairable to point to a different function?



// if (t > 5) {
// 	f = image shuffle
// }

// if (t > 30) {
	
// 	f = degrade
// }

// then in jquery your code just stays the same
// -pure DOM manipulation...document.getElementby


// find some code that manipulates text?

// $("p ul li"). each(func) {
// 	var a = $(this).innerHTML in order to target tin inner shit
// 	scramble(a);
// 	$(this).innerHTML(a)   innerval....same kind of word flow
// }

// ali's chrome extension about politics 
// jquery 


// timeOnTabs == 

// if timeOnTabs > x {

// }

// else if timeOnTabs > y {

// }

// else timeOnTabs > z {


// }