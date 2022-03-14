# Party With Professor PEMDAS

## WireFrame
![Proj1Wireframe](PEMDASParty.png)

## Overview
Party with Professor PEMDAS is a problem-solving game. Mathematical expressions will appear on the game board and to the user needs correctly to solve each expression using the mathematical principles of PEMDAS (also known as the Order of Operations).

PEMDAS, also written as PE[MD][AS], is an acronym that stands for (P)arentheses, (E)xponents, [(M)ultiplication and (D)ivision], [(A)ddition and (S)ubtraction]. It lists the order in which mathematical operations should be solved in any given expression.

I currently hold a degree in Mathematical Sciences (Applied Mathematics). I was also a Math teacher for some time. During my time as a Math teacher, I noticed that most of the time, students had issues with basic principles, such as PEMDAS. I created this game as a practice tool for those who struggle with such principles.

## Game Rules
* Accurately calculate the expressions that will show up on the page, using PEMDAS (Order of operations), within the time given.
* Player wins 1 point if you answer correctly.
* Professor PEMDAS wins 1 point if:
    * player answers incorrectly.
    * player doesn't enter the answer within the allotted time.
    * player enters something that is not a number (Infinity is a number and therefore can be entered).
* Player also loses 1 point if time runs out.
* Player's allotted time decreases by 5 seconds with each answer entered; decrement stops once allotted time reaches 15 seconds per problem.
* If player get 10 correct, game over; they win the game.
* If Professor PEMDAS gets to 10, game over; player loses the game.

## User Stories
* When player clicks "Start" button, a random expression will appear onscreen with randomly generated numbers (0 to 12).
* When player inputs possible answer into input field and clicks the "Submit" button:
    * input is compared to correct answer.
    * correct answer gets displayed on browser.
    * if answer is correct:
        * player gets 1 point added to score.
        * message appears stating that the answer is correct.
    * if answer is incorrect:
        * Professor PEMDAS gets 1 point.
        * message appears stating that the answer is incorrect.
    * "Submit" button is disabled.
* When player clicks the "Next" button:
    * a new expression to appear on screen.
    * a new timer to start if time is more than 15 seconds.
    * messages are cleared.
    * correct answer display is cleared.
    * Submit button is enabled.
* When player clicks the "Reset" button, all game elements are set back to their original settings:
    * timer goes back to 40 seconds.
    * Scoreboards goes back to 0 per player.
    * all messages are cleared.
    * mathematical expressions are cleared.

## MVP Checklist

## Stretch Goals
* Display correct answer on browser when player submits their answer.
* Disable and Enable submit button.
* Update Professor image with games status.
