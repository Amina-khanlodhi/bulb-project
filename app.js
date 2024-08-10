
var bulb = document.getElementById("bulb");

function bulbOn(){
    bulb.src = "images/bulb-on (1).jpg";
}

function bulbOff(){
    bulb.src = "images/bulb-off.jpg"; 
}

function toggleBulb() {
    if (bulb.src.includes("bulb-off")) {
        bulbOn();
    } else {
        bulbOff();
    }
}