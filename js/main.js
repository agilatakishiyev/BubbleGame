"use strict";

const gameStarter = document.getElementsByClassName("game_starter")[0];
gameStarter.addEventListener("click", StartGame);

function StartGame() {
    setInterval(function () { BubbleCreater() }, 1000);
}

let score = 1;
function BubbleCreater() {
    const bubble = document.createElement("div");
    const bubble_wrapper = document.getElementsByClassName("bubble_wrapper")[0];
    const scoreBoard = document.getElementsByClassName("score_holder")[0];
    bubble.classList.add("bubble_mubble");
    bubble.style.top = RandomPositionGenerator() + "%";
    bubble.style.left = RandomPositionGenerator() + "%";
    bubble_wrapper.appendChild(bubble);
    bubble.onclick = function(){
        this.remove()
        scoreBoard.innerText = score;
        score++;
        BubbleEffect();
    }
}

function RandomPositionGenerator() {
    const position = Math.random() * 90;
    const roundedPosition = Math.round(position);
    return roundedPosition;

}

function BubbleEffect() {
    const sound = new Audio("sounds/bubble.mp3");
    sound.play();
}