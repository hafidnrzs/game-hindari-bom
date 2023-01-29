const buttonStart = document.getElementById('start-button');
const mainMenu = document.getElementById('main-menu');
const gameMenu = document.getElementById('game');
const gameOverMenu = document.getElementById('game-over');
const gameWinMenu = document.getElementById('game-win');

buttonStart.addEventListener('click', startGame);

const minimalNumber = document.getElementById('minimalNumber');
const maximalNumber = document.getElementById('maximalNumber');
const input = document.getElementById('inputNumber');

let min = 1, max = 100;
let bomb, guess;
let bombFound = false;

function startGame() {
    mainMenu.style.display = "none";
    minimalNumber.innerHTML = min;
    maximalNumber.innerHTML = max;
    input.value = min;
    gameMenu.style.display = "block";
    bomb = Math.floor(Math.random() * 100) + 1;
}

const inputNumber = document.getElementById('inputNumber');
const buttonSelect = document.getElementById('selectNumber');
buttonSelect.addEventListener('click', checkBomb);

function checkBomb() {
    guess = parseInt(inputNumber.value);
    if (guess < min || guess > max) {
        inputNumber.value = min;
        checkBomb();
    }
    
    if (guess == bomb) {
        gameOver();
    }
    else if (guess < bomb) {
        min = guess;
        inputNumber.min = min;
        minimalNumber.innerHTML = min;
    }
    else if (guess > bomb) {
        max = guess;
        inputNumber.max = max;
        maximalNumber.innerHTML = max;
    }
    console.log(`Guess = ${guess}`);
    console.log(`Min = ${min}, Max = ${max}`);

    console.log("Bomb = " + bomb);
    if (bomb == 1) {
        if (max-1 == bomb) {
            gameWin();
        }
    }
    else if (bomb == 100) {
        if (min+1 == bomb) {
            gameWin();
        }
    }
    else {
        if (min+1 == bomb && max-1 == bomb) {
            gameWin();
        }
    }
}

const bombLocation1 = document.getElementById('bombLocation1');
const bombLocation2 = document.getElementById('bombLocation2');

function gameWin() {
    bombLocation1.innerText = bomb;
    gameMenu.style.display = "none";
    gameWinMenu.style.display = "block";
}

function gameOver() {
    bombLocation2.innerText = bomb;
    gameMenu.style.display = "none";
    gameOverMenu.style.display = "block";
}

const playAgainButton1 = document.getElementById('playAgainButton1');
const playAgainButton2 = document.getElementById('playAgainButton2');
playAgainButton1.addEventListener('click', playAgain);
playAgainButton2.addEventListener('click', playAgain);

function playAgain() {
    console.log("Play Again")
    gameWinMenu.style.display = "none";
    gameOverMenu.style.display = "none";
    mainMenu.style.display = "block";
}