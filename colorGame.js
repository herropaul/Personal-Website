var colors = new Array(6);


// sets random rgb values to colors array
for(var i = 0; i < colors.length; i++){
    var randomIndex = Math.floor(Math.random()*colors.length);
    var r = Math.floor(Math.random() * Math.floor(255));
    var g = Math.floor(Math.random() * Math.floor(255));
    var b = Math.floor(Math.random() * Math.floor(255));
    var colVal = "rgb(" + r + ", " + g + ", " + b + ")";
    colors[i] = colVal;
}

var box = document.getElementsByClassName("box");
var header = document.querySelector("header");
var goalColor = colors[randomIndex];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = goalColor;
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("button");

function reset(){
    for(var i = 0; i < colors.length; i++){
        var randomIndex = Math.floor(Math.random()*colors.length);
        var r = Math.floor(Math.random() * Math.floor(255));
        var g = Math.floor(Math.random() * Math.floor(255));
        var b = Math.floor(Math.random() * Math.floor(255));
        var colVal = "rgb(" + r + ", " + g + ", " + b + ")";
        colors[i] = colVal;
    }
    
    // displays color in box
    for(var i = 0; i < box.length; i++){
        box[i].style.backgroundColor = colors[i];
        console.log(box[i].style.backgroundColor);
    }

    goalColor = colors[randomIndex];
    colorDisplay.textContent = goalColor;
    messageDisplay.textContent = "";
    header.style.backgroundColor = "#659DBD"
    //console.log(colorDisplay.textContent);
    //console.log("Goal color: " + goalColor);
}

resetButton.addEventListener("click", function(){
    reset();
});


// logic for losing and winning
for(var i = 0; i < box.length; i++){
    box[i].style.backgroundColor = colors[i];
    box[i].classList.add("colorTransition");
    box[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor !== goalColor){
            this.style.backgroundColor = "rgb(58, 54, 54)";
            messageDisplay.textContent = "Try again!"
            messageDisplay.classList.add("messageDisplayFontSize");
        }
        else{
            messageDisplay.textContent = "You win!";
            header.style.backgroundColor = goalColor;
            header.classList.add("colorTransition");
            for(var j = 0; j < box.length; j++){
                box[j].style.backgroundColor = goalColor;
                box[j].classList.add("colorTransition");
            }
        }
    })
}
