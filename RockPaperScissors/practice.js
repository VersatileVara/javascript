let userScore = 0;
let display = document.querySelector(".display");
let computerScore = 0;
let userP = document.getElementById("userPoints");
let compP = document.getElementById("compPoints");
const choices = document.querySelectorAll(".choice");
const computerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

const playGames = (userChoice) => {
    const grnCompChoice = computerChoice();
    console.log(`Computer chose: ${grnCompChoice}`);
    console.log(`User chose: ${userChoice}`);
    if ( grnCompChoice === userChoice ){
        display.innerText = "It's a draw!!!";
        display.style.backgroundColor = "black";
        display.style.color = "white";
    }
    else if ( (grnCompChoice === 'rock' && userChoice ==='scissors') ||
    (grnCompChoice ==='scissors' && userChoice === 'paper') ||
    (grnCompChoice === 'paper' && userChoice === 'rock') ) {  
       display.innerText = `You lose!!! as computer chose ${grnCompChoice}`;
       display.style.backgroundColor = "red";
        computerScore++;
        compP.innerText = computerScore;
    } else {
        display.innerText = "You win!!!"
        display.style.backgroundColor = "green";
        userScore++;
        userP.innerText = userScore;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGames(userChoice);
        });
});
