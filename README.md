# Party With Professor PEMDAS

## WireFrame
![Proj1Wireframe](PEMDASParty.png)

### Overview
Party with Professor PEMDAS is a problem-solving game. Mathematical expressions will appear on the game board and to the user needs correctly to solve each expression using the mathematical principles of PEMDAS (also known as the Order of Operations).

PEMDAS, also written as PE[MD][AS], is an acronym that stands for (P)arentheses, (E)xponents, [(M)ultiplication and (D)ivision], [(A)ddition and (S)ubtraction]. It lists the order in which mathematical operations should be solved in any given expression.

I currently hold a degree in Mathematical Sciences (Applied Mathematics). I was also a Math teacher for some time. During my time as a Math teacher, I noticed that most of the time, students had issues with basic principles, such as PEMDAS. I created this game as a practice tool for those who struggle with such principles.

### Game Rules
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

### User Stories
* Player will click "Start" button.
* A random expression will appear onscreen with randomly generated numbers (-12 to 12).
* Player has to input answers into input fields and click "Submit" button to submit answer.
* Player has to click "Next" button for a new expression to appear on screen and a new timer to start.
* Player can click "Reset" button to reset game.