var chosenCupDiv;
var ball;

window.onload = function() {
    var chosenCup = Math.floor(Math.random() * 3) + 1;
    chosenCupDiv = document.getElementById('cup' + chosenCup);
    ball = document.createElement('img');
}

function cupClicked(element) {
    //SHOW BALL
    ball.src = "assets/ball.png";
    ball.style.position = "absolute";
    ball.style.width = "30px";
    ball.style.transform = "translate(-200%, 300%)";
    ball.style.zIndex = -10;
    chosenCupDiv.appendChild(ball);

    //MOVE CUP UP
    element.style.transform = "translateY(-30%)";

    //SHOW REFRESH BUTTON
    let refresh = document.getElementById('refresh');
    refresh.innerText = 'CLICK TO PLAY AGAIN';
    refresh.style.display = "block";
}

function refreshPage() {
    window.location.reload();
}