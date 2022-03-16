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
const domMessage = document.querySelector('h2');
const domSquares = document.querySelectorAll('.square');
const resetButton = document.querySelector('button');
const gameBoard = document.querySelector('.game-board');

/*----- event listeners -----*/
gameBoard.addEventListener("click", handleMove); // game squares
resetButton.addEventListener("click", init)

//mouse click on square

//mouse click on reset

/*----- functions -----*/

//initialize start game
function init(){
    console.log('init function here')
    board = new Array(9).fill(null)
    turn = 1;
    winner = null;
};
function handleMove(event){
    // console.log(`${event.target.dataset.square} was clicked`);
    const squareNumber = parseInt(event.target.dataset.square);
    if(board[squareNumber] || null){
        return
    }
    //set index in board array so we know that spot has been claimed
    board[squareNumber] = turn
    //switched the turn
    //check for winner
    winner = checkForWinner()
    turn *= -1
    //render message to user
}
//puts an X or O on the board within the square

function checkForWinner(){
    console.log('check for winnder function called')
for (let index in COMBOS) {
    if(
    board[COMBOS[index][0]] === turn &&
    board[COMBOS[index][1]] === turn &&
    board[COMBOS[index][2]] === turn    
        ){
            return turn
        }
}
if (board.inculedes(null)){
    return null
}

return 'tie'
}
function render(){
    // console.log('render here')
    board.forEach(function (value,index) {
        domSquares[index].textContent = PLAYERS[value]
    })
    if (!winner){
        //tell whose turn it is
        domMessage.textContent = `${PLAYERS[turn]}'s`
    }
    else if (winner == "tie"){
        domMessage.textContent = 'The game ends in a draw'
    }
    else {
        domMessage.textContent = `${PLAYERS[winner]}`
    }
};

//handle user interaction(update state)

//handleMove()
//check for winning combo (main game logic)
//render messages to the dom
