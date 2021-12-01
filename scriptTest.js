// let num = Math.ceil(Math.random()*6);
// console.log (num)

// let numTotal = 0;
// let diceNum;

// const diceRoll = () => {
//     diceNum = Math.ceil(Math.random()*6);
//     numTotal = numTotal + diceNum;
//     console.log (numTotal)
    
// }

// diceRoll();
// diceRoll();
// diceRoll();



// console.log (numTotal)

// while(num <= 20) {
//     diceRoll();
// console.log (num);

// }
// if (num <= 20) {
//     diceRoll();
// console.log (num);

// }


// let numTotal = 0;
// let diceNum;

// const diceRoll = () => {
//     if (numTotal <= 19){
//     diceNum = Math.ceil(Math.random()*6);
//     numTotal = numTotal + diceNum;
//     console.log (numTotal);}

//     else {console.log ("you win");}
    
// }

// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();

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

// const rollButton = document.getElementById("rollButton");

// const scoreBox = document.getElementById("scoreBox");

// let numTotal = 0;
// let diceNum;

// scoreBox.innerHTML=numTotal;

// const diceRoll = (e) => {
//     e = e + Math.ceil(Math.random()*6);}


// console.log(diceRoll.e.numTotal);

const rollButton = document.getElementById("rollButton");
const scoreBox = document.getElementById("scoreBox");
let numTotal = 0;
scoreBox.innerHTML=numTotal;
const diceRoll = () => {numTotal = numTotal + Math.ceil(Math.random()*6);}
rollButton.addEventListener("click",()=>{diceRoll();});