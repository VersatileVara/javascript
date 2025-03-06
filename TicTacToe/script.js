const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("reset");
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

// Winning conditions (rows, columns, diagonals)
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
];

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            statusText.innerText = `Player ${board[a]} wins! 🎉`;
            return;
        }
    }
    
    // Check for draw
    if (!board.includes("")) {
        gameActive = false;
        statusText.innerText = "It's a draw!";
    }
};

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (board[index] === "" && gameActive) {
            board[index] = currentPlayer;
            cell.innerText = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X"; 
            if (gameActive) {
                statusText.innerText = `Player ${currentPlayer}'s turn`;
            }
        }
    });
});

// Reset game
resetButton.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.innerText = "");
    gameActive = true;
    currentPlayer = "X";
    statusText.innerText = "Player X's turn";
});
