document.getElementById("submit-btn").disabled = true;

// Buttons
const nextButton = document.getElementById("next");

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const contButton = document.getElementById("continue");
const resetButton = document.getElementById("reset");

// Timer
let timerEl = document.getElementById("timer-num");
let timeLeft = 41;
let timerId;
// let pauseTime;

const countdown = (time) => {
    timerId = setInterval(function() {
        if(time > 0) {
            time --;
            timerEl.innerText = `${time}s`
            if(time === 0) {
                timesUp();
                // document.getElementById("submit-btn").disabled = true;
                // compNum++;
                // compScore.innerText = compNum;
                // playerNum--
                // playerScore.innerText = playerNum;
                if(compNum === 10) {
                    gameOver();
                    gameOverMsg.innerText = `Game over. You lost.`
                }
                // gameStatus.innerText = `Time's up! Professor P gets the point and you lost one.`
                // entering nothing is better than letting time run out bc you dont lose a point if you submit no answer
            }
        }
    }, 1000);
}

let playerAns;

const answerSubmit = (event) => {
    event.preventDefault();
    playerAns = parseFloat(event.target.answer.value);
    console.log(playerAns);
    clearInterval(timerId);
    timerEl.innerText = `0s`
    compareAnswers();
    if(playerAns === NaN || playerAns === ``) {
        compNum++;
        compScore.innerText = compScore;
    }
    mathExpSol.innerText = `${expSolution}`;
    document.getElementById("submit-btn").disabled = true;
}

const randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1));
}

let expDisplay = null;
let expSolution = null;

let mathExp = document.getElementById("math-exp");
let mathExpSol = document.getElementById("math-exp-sol");

// Pick random expression
const randExp = () => {
    let num1 = randNum(0, 12);
    let num2 = randNum(0, 12);
    let num3 = randNum(0, 12);
    let numExpo = randNum(0, 2);

    let mathExpressions = [
        `${num1}<sup>${numExpo}</sup> + ${num2} / ${num3} =`,
        `${num1} + ${num2} * ${num3} =`,
        `${num1} - ${num2} * ${num3}<sup>${numExpo}</sup> =`,
        `${num1} / ${num2} + ${num3} =`,
        `${num1}<sup>${numExpo}</sup> / ${num2} - ${num3}<sup>${numExpo}</sup> =`,
        `${num1}<sup>${numExpo}</sup> + ${num2}<sup>${numExpo}</sup> + ${num3} =`,
        `${num1}<sup>${numExpo}</sup> - ${num2} - ${num3}<sup>${numExpo}</sup> =`,
        `${num1} / ${num2}<sup>${numExpo}</sup> * ${num3} =`,
        `${num1}<sup>${numExpo}</sup> + ${num2}<sup>${numExpo}</sup> - ${num3}<sup>${numExpo}</sup> =`,
        `${num1} - ${num2}<sup>${numExpo}</sup> / ${num3} =`,
        `(${num1} - ${num2})(${num1} + ${num2})<sup>${numExpo}</sup> = `,
        `(${num1} + ${num2}<sup>${numExpo}</sup>) - (${num1} + ${num2} - ${num3})<sup>${numExpo}</sup> = `,
        `${num1}(${num2}<sup>${numExpo}</sup> / ${num3}) = `,
        `${num1} * ${num2}<sup>${numExpo}</sup> / ${num3} - (${num2})<sup>${numExpo}</sup> = `,
        `(${num1} + ${num2})(${num1} - ${num2}) = `,
        `${num1} + (${num2} + ${num3}<sup>${numExpo}</sup> / ${num1}) - ${num2} = `,
        `(${num1} - ${num2})(${num2} - ${num3}) + ${num3} = `,
        `(${num1} + ${num2})<sup>${numExpo}</sup> + ${num2}(-(${num3}<sup>${numExpo}</sup>)) = `,
        `(${num1} + ${num2})(${num1} - ${num2})(${num2} - ${num3}) = `,
        `${num2}(${num1} - ${num3})(${num1} + ${num3}<sup>${numExpo}</sup>) = `
        
    ]

    let mathSolutions = [
        num1 ** numExpo + num2 / num3,
        num1 + num2 * num3,
        num1 - num2 * num3 ** numExpo,
        num1 / num2 + num3,
        num1 ** numExpo / num2 - num3 ** numExpo,
        num1 ** numExpo + num2 ** numExpo + num3,
        num1 ** numExpo - num2 - num3 ** numExpo,
        num1 / num2 ** numExpo * num3,
        num1 ** numExpo + num2 ** numExpo - num3 ** numExpo,
        num1 - num2 ** numExpo / num3,
        (num1 - num2) * (num1 + num2) ** numExpo,
        (num1 + num2 ** numExpo) - (num1 + num2 - num3) ** numExpo,
        num1 * (num2 ** numExpo / num3),
        num1 * num2 ** numExpo / num3 - (num2) ** numExpo,
        (num1 + num2) * (num1 - num2),
        num1 + (num2 + num3 ** numExpo / num1) - num2,
        (num1 - num2) * (num2 - num3) + num3,
        (num1 + num2) ** numExpo + num2 * ( - (num3 ** numExpo)),
        (num1 + num2) * (num1 - num2) * (num2 - num3),
        num2 * (num1 - num3) * (num1 + num3 ** numExpo) * (num2)
    ]

    let randomIdx = Math.floor(Math.random() * mathExpressions.length);
    // console.log(randomIdx);
    expDisplay = mathExpressions[randomIdx];
    // console.log(expDisplay);
    expSolution = mathSolutions[randomIdx];
    console.log(expSolution);
    mathExp.innerHTML = `${expDisplay}`;

}


// randExp();

const nextExp = () => {
    let mathExpEl = document.getElementById("math-exp");
    mathExpEl.innerText = "";
    gameStatus.innerText = "";
    randExp();
    if(timeLeft >= 21) {
        timeLeft -= 5;
    }
    document.getElementById("submit-btn").disabled = false;
    clearInterval(timerId);
    countdown(timeLeft);
    gameForm.reset();
    mathExpSol.innerText = ``;
}
nextButton.addEventListener('click', nextExp);

const startGame = () => {
    randExp();
    countdown(timeLeft);
    nextButton.addEventListener('click', nextExp);
    document.getElementById("submit-btn").disabled = false;

    startButton.removeEventListener('click', startGame);
}
startButton.addEventListener('click', startGame);

// const pauseGame = () => {
//     clearInterval(timerId);
// }
// pauseButton.addEventListener('click', pauseGame);

// const contGame = () => {
//     // pauseTime = timeLeft;
//     countdown(timerEl);
// }
// contButton.addEventListener('click', contGame);

// User input validation

let playerScore = document.getElementById("you-score");
let compScore = document.getElementById("comp-score");
let gameStatus = document.getElementById("game-status");
let gameForm = document.getElementById("game-form");

let playerNum = 0;
let compNum = 0;

const compareAnswers = () => {
    if(playerAns === expSolution) {
        if(playerNum < 10) {
            playerNum++;
            playerScore.innerText = playerNum;
            if(playerNum === 10) {
                gameOver();
                gameOverMsg.innerText = `Game over. You win!`
            }
        }
        gameStatus.innerText = `Yay! You answer is correct!`
    } else if (playerAns !== expSolution) {
        if(compNum < 10) {
            compNum++;
            compScore.innerText = compNum;
            if(compNum === 10) {
                gameOver();
                gameOverMsg.innerText = `Game over. You lost.`
            }
        }
        gameStatus.innerText = `Sorry, your answer is incorrect!`
    }
}

// Game Over

let gameOverMsg = document.getElementById("game-over-msg");

// const gameOverMsgs = () => {
//     if(playerNum === 2) {
//         gameOverMsg.innerText = `Game over. YOU WIN!`;
//     } else if(compNum === 2) {
//         gameOverMsg.innerText = `Game over. You lost.`;
//     }
// }

const gameOver = () => {
    gameStatus.innerText = ``;
    document.getElementById("submit-btn").disabled = true;
    nextButton.removeEventListener('click', nextExp);
}

// const gameOver = () => {
//     // gameOverMsgs();
//     if(playerNum === 10) {
//         nextButton.removeEventListener('click', nextExp);
//         gameOverMsg.innerText = `Game over. You win!`
//     } else if(compNum === 10) {
//         nextButton.removeEventListener('click', nextExp);
//         gameOverMsg.innerText = `Game over. You lost.`
//     }
// }

// Restart

const resetGame = () => {
    mathExp.innerText = ``;
    gameOverMsg.innerText = ``;
    gameStatus.innerText = ``;
    // nextButton.addEventListener('click', nextExp);
    playerNum = 0;
    compNum = 0;
    playerScore.innerText = playerNum;
    compScore.innerText = compNum;
    document.getElementById("submit-btn").disabled = true;
    timeLeft = 41;
    gameForm.reset();
    clearInterval(timerId);
    timerEl.innerText = `40s`
    mathExpSol.innerText = ``;
    startButton.addEventListener('click', startGame);
}

resetButton.addEventListener('click', resetGame);

const timesUp = () => {
    if(playerNum > 0) {
        compNum++
        compScore.innerText = compNum;
        playerNum--
        playerScore.innerText = playerNum;
        gameStatus.innerText = `Time's up! Professor P gets the point and you lose one!`
    } else if(playerNum === 0) {
        compNum++
        compScore.innerText = compNum;
        gameStatus.innerText = `Time's up! Professor P gets the point!`
    }
    document.getElementById("submit-btn").disabled = true;
}


// let makeMath = {
    //     '**': function(x, numExpo) { return x ** numExpo},
    //     '*': function(x, y) { return x * y},
    //     '/': function(x, y) { return x / y},
    //     '+': function(x, y) { return x + y},
    //     '-': function(x, y) { return x - y}
    // };
    