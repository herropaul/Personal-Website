var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

for(var i = 0; i < colors.length; i++){
    var randomIndex = Math.floor(Math.random()*colors.length);
}


var box = document.getElementsByClassName("box");
var header = document.querySelector("header");
var goalColor = colors[randomIndex];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = goalColor;
var messageDisplay = document.querySelector("#message");



for(var i = 0; i < box.length; i++){
    box[i].style.backgroundColor = colors[i];
    box[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor !== goalColor){
            this.style.backgroundColor = "rgb(243, 243, 243)";
            messageDisplay.textContent = "Try again!"
        }
        else{
            messageDisplay.textContent = "You win!";
            header.style.backgroundColor = goalColor;
            header.classList.add("winningColor");
            for(var j = 0; j < box.length; j++){
                box[j].style.backgroundColor = goalColor;
                box[j].classList.add("winningColor");
            }
        }
    })
}

