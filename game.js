const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = []
let started = false
let level = 0

document.addEventListener('keypress', () => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        nextSequence();
        started = true
    }
})

function nextSequence(){
    level++
    document.querySelector("#level-title").textContent = `Level ${level}`
    let number = Math.floor(Math.random()*4)
    let randomcolor = buttonColors[number]
    gamePattern.push(randomcolor)
    
    MakeAnimations()
}

function MakeAnimations(){
    for (let i = 0 ;i<gamePattern.length;i++){
        setTimeout(() => {
            let color = gamePattern[i];
            document.getElementById(color).classList.add("pressed");
            sound(color);
            setTimeout(() => {
                document.getElementById(color).classList.remove("pressed");
            }, 100);
        }, 500 * i);
    }
}

function sound(color){
    var audio = new Audio(`sounds/${color}.mp3`)
    audio.play()
}

document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener('click', (btn) => {
        let userChosenColor = btn.target.id;
        userClickedPattern.push(userChosenColor);
        AnimateUserPress(userChosenColor);
        sound(userChosenColor);
        check(userClickedPattern.length - 1);
    });
});

function AnimateUserPress(currentColor) {
    document.getElementById(currentColor).classList.add("pressed");
    setTimeout(() => {
        document.getElementById(currentColor).classList.remove("pressed");
    }, 100);
}



function check(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        if (userClickedPattern.length == gamePattern.length) {
            userClickedPattern = [];
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        var gameover = new Audio("sounds/wrong.mp3");
        gameover.play();
        document.getElementById("level-title").textContent = "Game Over, Press any key to restart";
        
        document.body.classList.add("game-over");
        
        setTimeout(() => {
            document.body.classList.remove("game-over");
        }, 200);

        gamePattern = [];
        userClickedPattern = [];
        level = 0;
        started = false;
    }
}