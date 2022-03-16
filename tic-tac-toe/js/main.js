console.log('JS is working')
/*----- constants -----*/

const PLAYERS = {
    '1': 'X',
    '-1': 'O',
}

//Winning combos
const COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6]
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

/*----- app's state (variables) -----*/

let board; // a data variable that stores the board position and what they hold
let turn; // be either X || O
let winner; //can be 3 things

//if the player wants to resign  - bonus
//timer - bonus

/*----- cached element references -----*/



// the games squares
//reset button/
//mesasge container - h1

/*----- event listeners -----*/

//mouse click on square
//mouse click on reset

/*----- functions -----*/

//initialize start game
//handle user interaction(update state)
//check for winning combo (main game logic)
//render messages to the dom
