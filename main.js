// Buttons
// const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

// Timer
let timerEl = document.getElementById("timer-num");
// let timeGo = true;
let timeLeft = 41;
let timerId;

const countdown = (time) => {
    timerId = setInterval(function() {
        if(time > 0) {
            time --;
            timerEl.innerText = `${time}s`
        }
    }, 1000);
}

let playerAns;

const answerSubmit = (event) => {
    console.log("Hello");
    event.preventDefault();
    playerAns = event.target.answer.value;
    clearInterval(timerId);
}

const randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1));
}

let expDisplay = null;
let expSolution = null;

let mathExp = document.getElementById("math-exp");

// Pick random expression
const randExp = () => {
    let num1 = randNum(0, 12);
    let num2 = randNum(0, 12);
    let num3 = randNum(0, 12);
    let num4 = randNum(0, 12);
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
        `${num1} - ${num2}<sup>${numExpo}</sup> / ${num3} =`
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
        num1 - num2 ** numExpo / num3
    ]

    let randomIdx = Math.floor(Math.random() * mathExpressions.length);
    console.log(randomIdx);
    expDisplay = mathExpressions[randomIdx];
    console.log(expDisplay);
    expSolution = mathSolutions[randomIdx];
    console.log(expSolution);
    mathExp.innerHTML = `${expDisplay}`;

}

randExp();
// randExp(level1Expressions, level1Solutions);
// let round = 1;

const nextExp = () => {
    let mathExpEl = document.getElementById("math-exp");
    mathExpEl.innerText = "";
    randExp();
    if(timeLeft >= 5) {
        timeLeft -= 5;
    }
    // clearInterval(timerId);
    countdown(timeLeft);
}
nextButton.addEventListener('click', nextExp);

const startGame = () => {
    countdown(timeLeft);
}

startButton.addEventListener('click', startGame);

// let makeMath = {
    //     '**': function(x, numExpo) { return x ** numExpo},
    //     '*': function(x, y) { return x * y},
    //     '/': function(x, y) { return x / y},
    //     '+': function(x, y) { return x + y},
    //     '-': function(x, y) { return x - y}
    // };
    