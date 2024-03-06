let timer;
let timeLeft = 10;

function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    document.getElementById("result").innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}

function restart() {
    clearInterval(timer);
    timeLeft = 10;
    document.getElementById("time").innerText = timeLeft;
    timer = setInterval(updateTimer, 1000);
}

function quit() {
    clearInterval(timer);
    document.getElementById("result").innerText = "Game over!";
}

function updateTimer() {
    timeLeft--;
    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("result").innerText = "Time's up!";
    } else {
        document.getElementById("time").innerText = timeLeft;
    }
}

// Start the initial timer
timer = setInterval(updateTimer, 1000);
