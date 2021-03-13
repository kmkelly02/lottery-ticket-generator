// Create the button
var button = document.createElement("button");
button.innerHTML = "Play";

// Append somewhere
var body = document.getElementById("pballgame")[0];
pballgame.appendChild(button);

// Add event handler
button.addEventListener("click", function () {
    var elem = document.getElementById("box");
    elem.style.transition = "all 2s ease-in-out";
    elem.style.height = "150px";
});

function slideDown(box) {

}

function slideUp(box) {

}



//Create the button
var button = document.createElement("button");
button.innerHTML = "Play";

// 2. Append somewhere
var body = document.getElementById("mmgame")[0];
mmgame.appendChild(button);

//Add event handler
button.addEventListener("click", function () {
    var elem = document.getElementById("box2");
    elem.style.transition = "all 2s ease-in-out";
    elem.style.height = "150px";
});

function slideDown(box2) {

}


//Create the button
var button = document.createElement("button");
button.innerHTML = "Play";

//Append somewhere
var body = document.getElementById("thepickgame")[0];
thepickgame.appendChild(button);

//Add event handler
button.addEventListener("click", function () {
    var elem = document.getElementById("box3");
    elem.style.transition = "all 2s ease-in-out";
    elem.style.height = "150px";
});

function slideDown(box3) {

}

function slideUp(box) {
    var elem = document.getElementById(box);
    elem.style.transition = "all 2s ease-in-out";
    elem.style.height = "0px";

}
function slideDown(box) {
    var elem = document.getElementById(box);
    elem.style.transition = "all 2s ease-in-out";
    elem.style.height = "150px";
}

function slideUp(box2) {
    var elem = document.getElementById(box2);
    elem.style.transition = "all 2s ease-in-out";
    elem.style.height = "0px";

}
function slideDown(box2) {
    var elem = document.getElementById(box2);
    elem.style.transition = "all 2s ease-in-out";
    elem.style.height = "150px";
}

function slideUp(box3) {
    var elem = document.getElementById(box3);
    elem.style.transition = "all 2s ease-in-out";
    elem.style.height = "0px";

}
function slideDown(box3) {
    var elem = document.getElementById(box3);
    elem.style.transition = "all 2s ease-in-out";
    elem.style.height = "150px";
}

function generatepballnum(size, lowest, highest) {
	var numbers = [];
	for(var i = 0; i < size; i++) {
		var add = true;
		var randomNumber = Math.floor(Math.random() * highest) + 1;
		for(var y = 0; y < highest; y++) {
			if(numbers[y] == randomNumber) {
				add = false;
			}
		}
		if(add) {
			numbers.push(randomNumber);
		} else {
			i--;
		}
	}
  
	var highestNumber = 0;
	for(var m = 0; m < numbers.length; m++) {
		for(var n = m + 1; n < numbers.length; n++) {
			if(numbers[n] < numbers[m]) {
				highestNumber = numbers[m];
				numbers[m] = numbers[n];
				numbers[n] = highestNumber;
			}
		}
	}
  
	document.getElementById("pballgamenum").innerHTML = numbers.join(" - ");
}