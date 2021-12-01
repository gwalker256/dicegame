const rollButton = document.getElementById("rollButton");
const scoreBox = document.getElementById("scoreBox");
const winLose = document.getElementById("winLose");
const dicePicBox = document.getElementById("dicePicBox");
const playerBox = document.getElementById("playerBox");

let numTotal = 0;

// let diceScore = Math.ceil(Math.random()*6);

// const diceRoll = () => {numTotal = numTotal + diceScore}


const diceRoll2 = () => {
    let diceScore = Math.ceil(Math.random()*6);

    if (diceScore === 1) {
        winLose.innerHTML="YOU LOSE";
        playerBox.innerHTML='<a id="startAgain" href="index.html">Start Again?</a>';
        rollButton.innerHTML="";
        dicePicBox.innerHTML='<img src="dice1.png" alt="Dice showing 1">';   
    }
    else if (diceScore ===2) {
        dicePicBox.innerHTML='<img src="dice2.png" alt="Dice showing 2">';
        numTotal = numTotal + diceScore;
        updateScore();
        if (numTotal > 20) {youWin();
        // winLose.innerHTML="YOU WIN";
        // playerBox.innerHTML='<a id="startAgain" href="index.html">Start Again?</a>';

        }       
    }
    else if (diceScore ===3) {
        dicePicBox.innerHTML='<img src="dice3.png" alt="Dice showing 3">';
        numTotal = numTotal + diceScore;
        updateScore();
        if (numTotal > 20) {youWin();       
    }}
    else if (diceScore ===4) {
        dicePicBox.innerHTML='<img src="dice4.png" alt="Dice showing 4">';
        numTotal = numTotal + diceScore;
        updateScore();
        if (numTotal > 20) {youWin();      
    }}
    else if (diceScore ===5) {
        dicePicBox.innerHTML='<img src="dice5.png" alt="Dice showing 5">';
        numTotal = numTotal + diceScore;
        updateScore();
        if (numTotal > 20) {youWin();     
    }}
    else if (diceScore ===6) {
        dicePicBox.innerHTML='<img src="dice6.png" alt="Dice showing 6">';
        numTotal = numTotal + diceScore;
        updateScore();
        if (numTotal > 20) {youWin();    
    }



}}

const diceRoll = () => {numTotal = numTotal + Math.ceil(Math.random()*6);}
const updateScore = () => {scoreBox.innerHTML=numTotal;}

const youWin = () => {
    winLose.innerHTML="YOU WIN";
    playerBox.innerHTML='<a id="startAgain" href="index.html">Start Again?</a>';
    rollButton.innerHTML="";
}      

const diceScore = Math.ceil(Math.random()*6);


rollButton.addEventListener("click",()=>{  





    diceRoll2();
    
    });

