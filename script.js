// Initialize variables
let pickedNumbers = new Set();
let gameRunning = true;

// Reference to DOM elements
const bingoNumberText = document.getElementById('bingoNumber');
const pickNumberBtn = document.getElementById('pickNumberBtn');
const stopGameBtn = document.getElementById('stopGameBtn');
const statusText = document.getElementById('status');

// Function to pick a random Bingo number
function pickNumber() {
    let number;
    do {
        number = Math.floor(Math.random() * 75) + 1; // Pick a number between 1 and 75
    } while (pickedNumbers.has(number)); // Ensure no duplicate number

    pickedNumbers.add(number);
    bingoNumberText.textContent = `Bingo Number: ${number}`;
}

// Function to stop the game
function stopGame() {
    gameRunning = false;
    statusText.textContent = "Game Stopped!";
}

// Add event listeners for buttons
pickNumberBtn.addEventListener('click', function () {
    if (gameRunning) {
        pickNumber();
    } else {
        alert("The game has been stopped.");
    }
});

stopGameBtn.addEventListener('click', function () {
    stopGame();
});
