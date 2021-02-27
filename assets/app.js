// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "PowerBall";

// 2. Append somewhere
var body = document.getElementById("gameselection")[0];
gameselection.appendChild(button);

// 3. Add event handler
button.addEventListener("click", function () {
    alert("You selected PowerBall");
});

// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Mega Millions";

// 2. Append somewhere
var body = document.getElementById("gameselection")[0];
gameselection.appendChild(button);

// 3. Add event handler
button.addEventListener("click", function () {
    alert("You selected the Mega Millons");
});

// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "The Pick";

// 2. Append somewhere
var body = document.getElementById("gameselection")[0];
gameselection.appendChild(button);

// 3. Add event handler
button.addEventListener("click", function () {
    alert("You selected the Pick");
});