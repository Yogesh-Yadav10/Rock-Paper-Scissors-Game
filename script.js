let userScore = 0;
let pcScore = 0;

function game(user, pc) {
    if (user === pc) return "draw";
    if (
        (user === "paper" && pc === "stone") ||
        (user === "stone" && pc === "scissors") ||
        (user === "scissors" && pc === "paper")
    ) {
        userScore++;
        return "user";
    }
    pcScore++;
    return "pc";
}

function getComputerChoice() {
    const choices = ["stone", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function play(userChoice) {
    const pcChoice = getComputerChoice();
    const result = game(userChoice, pcChoice);

    document.getElementById("result").innerText = `You chose ${userChoice}, PC chose ${pcChoice} 
     Winner : ${result}`;
    document.getElementById("user-score").innerText = `User Score: ${userScore}`;
    document.getElementById("pc-score").innerText = `PC Score: ${pcScore}`;
}
