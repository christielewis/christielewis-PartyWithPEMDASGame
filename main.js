// Buttons
// const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

// Timers
let timerEl = document.getElementById("timer-num");
let timeGo = true;
let timeLeft = 35;
let timerId;

const countdown = (time) => {
    // timeLeft = time;
    timerId = setInterval(function() {
        if(time > 0) {
            time --;
            timerEl.innerText = `${time}s`
        }
    }, 1000);
    // console.log(timerId)
    // if(timeLeft === 0) {
    //     clearInterval(timerId);
    //     // disable event listeners
    //     // disable input ability
    // }
}
// countdown35();

const countdown30 = () => {
    let timeLeft = 30;
    timerId = setInterval(function() {
        if(timeLeft > 0) {
            timeLeft --;
            timerEl.innerText = `${timeLeft}s`
        }
    }, 1000);
}
// countdown30();

const countdown25 = () => {
    let timeLeft = 25;
    timerId = setInterval(function() {
        if(timeLeft > 0) {
            timeLeft --;
            timerEl.innerText = `${timeLeft}s`
        }
    }, 1000);
}
// countdown25();

const countdown20 = () => {
    let timeLeft = 20;
    timerId = setInterval(function() {
        if(timeLeft > 0) {
            timeLeft --;
            timerEl.innerText = `${timeLeft}s`
        }
    }, 1000);
}
// countdown20();

const countdown15 = () => {
    let timeLeft = 15;
    timerId = setInterval(function() {
        if(timeLeft > 0) {
            timeLeft --;
            timerEl.innerText = `${timeLeft}s`
        }
    }, 1000);
}
// countdown15();

const countdown12 = () => {
    let timeLeft = 12;
    timerId = setInterval(function() {
        if(timeLeft > 0) {
            timeLeft --;
            timerEl.innerText = `${timeLeft}s`
        }
    }, 1000);
}
// countdown12();

// Random number generator that takes 2 parameter

// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(numExpo);

// Level 1/"Easy" Mathematical expressions
// may have to make a list of variables (exp1, exp2, etc) with each expression,
// and then an object with the variables as keys and the expressions as objects. 

// let lev1Exp1 = `(${num1}^${numExpo}) + ${num2} / ${num3}`
// let lev1Exp2 = `${num1} + ${num2} * ${num3}`
// let lev1Exp3 = `${num1} - ${num2} * (${num3}^${numExpo})`
// let lev1Exp4 = `${num1} / ${num2} + ${num3}`
// let lev1Exp5 = `(${num1}^${numExpo}) / ${num2} - (${num3}^${numExpo})`
// let lev1Exp6 = `(${num1}^${numExpo}) + (${num2}^${numExpo}) + ${num3}`
// let lev1Exp7 = `(${num1}^${numExpo}) - ${num2} - (${num3}^${numExpo})`
// let lev1Exp8 = `${num1} / (${num2}^${numExpo}) * ${num3}`
// let lev1Exp9 = `(${num1}^${numExpo}) + (${num2}^${numExpo}) - (${num3}^${numExpo})`
// let lev1Exp10 = `${num1} - (${num2}^${numExpo}) / ${num3}`

// let level1Expressions = [lev1Exp1, lev1Exp2, lev1Exp3, lev1Exp4, lev1Exp5, lev1Exp6, lev1Exp7, lev1Exp8, lev1Exp9, lev1Exp10]
const randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1));
}

// let num1 = randNum(0, 12);
// let num2 = randNum(0, 12);
// let num3 = randNum(0, 12);
// let num4 = randNum(0, 12);
// let numExpo = randNum(0, 2);
// let num1 =0;
// let num2 =0;
// let num3 =0;
// let num4 =0;
// let numExpo =0;

// let level1Expressions = [
//     `${num1}<sup>${numExpo}</sup> + ${num2} / ${num3} =`,
//     `${num1} + ${num2} * ${num3} =`,
//     `${num1} - ${num2} * ${num3}<sup>${numExpo}</sup> =`,
//     `${num1} / ${num2} + ${num3} =`,
//     `${num1}<sup>${numExpo}</sup> / ${num2} - ${num3}<sup>${numExpo}</sup> =`,
//     `${num1}<sup>${numExpo}</sup> + ${num2}<sup>${numExpo}</sup> + ${num3} =`,
//     `${num1}<sup>${numExpo}</sup> - ${num2} - ${num3}<sup>${numExpo}</sup> =`,
//     `${num1} / ${num2}<sup>${numExpo}</sup> * ${num3} =`,
//     `${num1}<sup>${numExpo}</sup> + ${num2}<sup>${numExpo}</sup> - ${num3}<sup>${numExpo}</sup> =`,
//     `${num1} - ${num2}<sup>${numExpo}</sup> / ${num3} =`
// ]

// let level1Solutions = [
//     num1 ** numExpo + num2 / num3,
//     num1 + num2 * num3,
//     num1 - num2 * num3 ** numExpo,
//     num1 / num2 + num3,
//     num1 ** numExpo / num2 - num3 ** numExpo,
//     num1 ** numExpo + num2 ** numExpo + num3,
//     num1 ** numExpo - num2 - num3 ** numExpo,
//     num1 / num2 ** numExpo * num3,
//     num1 ** numExpo + num2 ** numExpo - num3 ** numExpo,
//     num1 - num2 ** numExpo / num3
// ]

// console.log(level1Expressions);
// console.log(level1Solutions);

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
    clearInterval(timerId);
    countdown(timeLeft);
    // else statement for timeLeft = 0
    // if(round === 1) {
    //     timeLeft = 30;
    // }
    // timeLeft -= 5;
    // countdown(timeLeft);
    // round++;
}
nextButton.addEventListener('click', nextExp);

// let level1Expressions = {
//     lev1Exp1: num1 ** numExpo + num2 / num3,
//     lev1Exp2: num1 + num2 * num3,
//     lev1Exp3: num1 - num2 * num3 ** numExpo,
//     lev1Exp4: num1 / num2 + num3,
//     lev1Exp5: num1 ** numExpo / num2 - num3 ** numExpo,
//     lev1Exp6: num1 ** numExpo + num2 ** numExpo + num3,
//     lev1Exp7: num1 ** numExpo - num2 - num3 ** numExpo,
//     lev1Exp8: num1 / num2 ** numExpo * num3,
//     lev1Exp9: num1 ** numExpo + num2 ** numExpo - num3 ** numExpo,
//     lev1Exp10: num1 - num2 ** numExpo / num3
// }

// console.log(level1Expressions[0]);
// console.log(level1Expressions[1]);

// let lev1ExpString = level1Expressions.map(String);

// console.log(lev1ExpString);

// Level 2/"Hard" Mathematical expressions

// let lev2Exp1 = `${num1} ** ${numExpo} + ${num2} / ${num3}`
// let lev2Exp2 = `${num1} + ${num2} * ${num3}`
// let lev2Exp3 = `${num1} - ${num2} * ${num3} ** ${numExpo}`
// let lev2Exp4 = `${num1} / ${num2} + ${num3}`
// let lev2Exp5 = `${num1} ** ${numExpo} / ${num2} - ${num3} ** ${numExpo}`
// let lev2Exp6 = `${num1} ** ${numExpo} + ${num2} ** ${numExpo} + ${num3}`
// let lev2Exp7 = `${num1} ** ${numExpo} - ${num2} - ${num3} ** ${numExpo}`
// let lev2Exp8 = `${num1} / ${num2} ** ${numExpo} * ${num3}`
// let lev2Exp9 = `${num1} ** ${numExpo} + ${num2} ** ${numExpo} - ${num3} ** ${numExpo}`
// let lev2Exp10 = `${num1} - ${num2} ** ${numExpo} / ${num3}`

// console.log(level2Expressions[0]);
// let level2Expressions = [
//     `${num1}<sup>${numExpo}</sup> + ${num2} / ${num3}`,
//     `${num1} + ${num2} * ${num3}`,
//     `${num1} - ${num2} * ${num3}<sup>${numExpo}</sup>`,
//     `${num1} / ${num2} + ${num3}`,
//     `${num1}<sup>${numExpo}</sup> / ${num2} - (${num3}<sup>${numExpo}</sup>`,
//     `${num1}<sup>${numExpo}</sup> + ${num2}<sup>${numExpo}</sup> + ${num3}`,
//     `${num1}<sup>${numExpo}</sup> - ${num2} - ${num3}<sup>${numExpo}</sup>`,
//     `${num1} / ${num2}<sup>${numExpo}</sup> * ${num3}`,
//     `${num1}<sup>${numExpo}</sup> + ${num2}<sup>${numExpo}</sup> - ${num3}<sup>${numExpo}</sup>`,
//     `${num1} - ${num2}<sup>${numExpo}</sup> / ${num3}`
// ]

// let level2Solutions = [
//     num1 ** numExpo + num2 / num3,
//     num1 + num2 * num3,
//     num1 - num2 * num3 ** numExpo,
//     num1 / num2 + num3,
//     num1 ** numExpo / num2 - num3 ** numExpo,
//     num1 ** numExpo + num2 ** numExpo + num3,
//     num1 ** numExpo - num2 - num3 ** numExpo,
//     num1 / num2 ** numExpo * num3,
//     num1 ** numExpo + num2 ** numExpo - num3 ** numExpo,
//     num1 - num2 ** numExpo / num3
// ]

// let makeMath = {
    //     '**': function(x, numExpo) { return x ** numExpo},
    //     '*': function(x, y) { return x * y},
    //     '/': function(x, y) { return x / y},
    //     '+': function(x, y) { return x + y},
    //     '-': function(x, y) { return x - y}
    // };
    