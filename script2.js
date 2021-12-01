const rollButton = document.getElementById("rollButton");

const scoreBox = document.getElementById("scoreBox");

let numTotal = 0;
let diceNum;

scoreBox.innerHTML=numTotal;





// const diceRoll = () => {
    
//         scoreBox.innerHTML = Math.ceil(Math.random()*6);}
 
// const diceRoll = () => {
    


// }

const diceRoll = () => {numTotal = numTotal + Math.ceil(Math.random()*6);

}



rollButton.addEventListener("click",()=>{

    
    diceRoll();
    scoreBox.innerHTML=numTotal;
    });


  // scoreBox.innerHTML = "blue solid";

// let numTotal = 0;
// let diceNum;

// const diceRoll = () => {
//     if (numTotal <= 19){
//         diceNum = Math.ceil(Math.random()*6);
//         if (diceNum ===1){console.log(diceNum); console.log("you lose")}
//         else{
//         numTotal = numTotal + diceNum;
//         console.log (numTotal);}}

//     else {console.log ("you win");}
    
// }
// while (numTotal <=19){
// diceRoll();}

// scoreBox.innerHTML=numTotal;