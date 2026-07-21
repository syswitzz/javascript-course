let score = JSON.parse(localStorage.getItem("score")) || {
    "wins": 0,
    "losses": 0,
    "ties": 0
    };

updateScoreElement();

function playGame(userChoice) {
    const randomNumber = Math.random();
    let computerChoice;
    let result;

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerChoice = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerChoice = 'Paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerChoice = 'Scissors';
    }

    if (userChoice === computerChoice) {
        result = "Its a Draw."
        score.ties++;
    } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock")  || 
    (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You win!";
        score.wins++;
    } else {
        result = "You lose.";
        score.losses++;
    }

    localStorage.setItem("score", JSON.stringify(score));

    const choiceMsg = `You <img class="mini-emoji" src="images/${userChoice.toLowerCase()}-emoji.png"> <img class="mini-emoji" src="images/${computerChoice.toLowerCase()}-emoji.png"> Computer`;

    document.querySelector(".js-onpage-result").innerHTML = result;
    document.querySelector(".js-onpage-choice").innerHTML = choiceMsg;
    updateScoreElement();
}

function updateScoreElement() {
    document.querySelector(".js-onpage-score")
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}<br>`;
}