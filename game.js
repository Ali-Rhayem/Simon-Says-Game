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
    gamePattern.push(color)
    
    MakeAnimations()
}

function MakeAnimations(){
    for (let i = 0 ;i<gamePattern.length;i++){
        let color = gamePattern[i];
        document.getElementById(color).classList.add("pressed")
        sound(color)
        setTimeout(() => {
            document.getElementById(color).classList.remove("pressed")
        }, 100);
    }
}

function sound(color){
    var audio = new Audio(`sounds/${color}.mp3`)
    audio.play()
}

function AnimateUserPress(currentColor) {
    document.getElementById(currentColor).classList.add("pressed");
    setTimeout(() => {
        document.getElementById(currentColor).classList.remove("pressed");
    }, 100);
}
