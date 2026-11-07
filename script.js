const output = document.querySelector(".result")
const numSeven = document.querySelector(".numberseven")
const numEight = document.querySelector(".numbereight")
const numNine = document.querySelector(".numbernine")
const numFour = document.querySelector(".numberfour")
const numFive = document.querySelector(".numberfive")
const numSix = document.querySelector(".numbersix")
const numOne = document.querySelector(".numberone")
const numTwo = document.querySelector(".numbertwo")
const numThree = document.querySelector(".numberthree")
const numZero = document.querySelector(".numberzero")
const clearAll = document.querySelector(".clearall")
const multi = document.querySelector(".multi")
const sum = document.querySelector(".sum")
const minus = document.querySelector(".minus")
const split = document.querySelector(".split")


let buttonpressed = 0
let operatorPressed = 0
let firstNum = [];
let secondNum = [];
let operation = "";
let finalFirstnum = 0
let finalSecondnum = 0
let calculatedNum = 0;


const seven = document.getElementById("seven")
seven.addEventListener("click", () => {
if(buttonpressed == 0 && operatorPressed == 0){
let newValue = numSeven.innerHTML
update(newValue)
    buttonpressed = 1
    firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 0 ){
    let newValue = numSeven.innerHTML
updateAdd(newValue)
firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 1){
    let newValue = numSeven.innerHTML
updateAdd(newValue)
secondNum.push(newValue)
}

}
)
const eight = document.getElementById("eight")
eight.addEventListener("click", () => {
if(buttonpressed == 0 && operatorPressed == 0){
let newValue = numEight.innerHTML
update(newValue)
    buttonpressed = 1
    firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 0 ){
    let newValue = numEight.innerHTML
updateAdd(newValue)
firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 1){
    let newValue = numEight.innerHTML
updateAdd(newValue)
secondNum.push(newValue)
}

}
)
const nine = document.getElementById("nine")
nine.addEventListener("click", () => {
if(buttonpressed == 0 && operatorPressed == 0){
let newValue = numNine.innerHTML
update(newValue)
    buttonpressed = 1
    firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 0 ){
    let newValue = numNine.innerHTML
updateAdd(newValue)
firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 1){
    let newValue = numNine.innerHTML
updateAdd(newValue)
secondNum.push(newValue)
}

}
)
const four = document.getElementById("four")
four.addEventListener("click", () => {
if(buttonpressed == 0 && operatorPressed == 0){
let newValue = numFour.innerHTML
update(newValue)
    buttonpressed = 1
    firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 0 ){
    let newValue = numFour.innerHTML
updateAdd(newValue)
firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 1){
    let newValue = numFour.innerHTML
updateAdd(newValue)
secondNum.push(newValue)
}

}
)
const five = document.getElementById("five")
five.addEventListener("click", () => {
if(buttonpressed == 0 && operatorPressed == 0){
let newValue = numFive.innerHTML
update(newValue)
    buttonpressed = 1
    firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 0 ){
    let newValue = numFive.innerHTML
updateAdd(newValue)
firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 1){
    let newValue = numFive.innerHTML
updateAdd(newValue)
secondNum.push(newValue)
}

}
)
const six = document.getElementById("six")
six.addEventListener("click", () => {
if(buttonpressed == 0 && operatorPressed == 0){
let newValue = numSix.innerHTML
update(newValue)
    buttonpressed = 1
    firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 0 ){
    let newValue = numSix.innerHTML
updateAdd(newValue)
firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 1){
    let newValue = numSix.innerHTML
updateAdd(newValue)
secondNum.push(newValue)
}
}
)
const one = document.getElementById("one")
one.addEventListener("click", () => {
if(buttonpressed == 0 && operatorPressed == 0){
let newValue = numOne.innerHTML
update(newValue)
    buttonpressed = 1
    firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 0 ){
    let newValue = numOne.innerHTML
updateAdd(newValue)
firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 1){
    let newValue = numOne.innerHTML
updateAdd(newValue)
secondNum.push(newValue)
}

}
)
const two = document.getElementById("two")
two.addEventListener("click", () => {
if(buttonpressed == 0 && operatorPressed == 0){
let newValue = numTwo.innerHTML
update(newValue)
    buttonpressed = 1
    firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 0 ){
    let newValue = numTwo.innerHTML
updateAdd(newValue)
firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 1){
    let newValue = numTwo.innerHTML
updateAdd(newValue)
secondNum.push(newValue)
}

}
)
const three = document.getElementById("three")
three.addEventListener("click", () => {
if(buttonpressed == 0 && operatorPressed == 0){
let newValue = numThree.innerHTML
update(newValue)
    buttonpressed = 1
    firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 0 ){
    let newValue = numThree.innerHTML
updateAdd(newValue)
firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 1){
    let newValue = numThree.innerHTML
updateAdd(newValue)
secondNum.push(newValue)
}

}
)
const zero = document.getElementById("zero")
zero.addEventListener("click", () => {
if(buttonpressed == 0 && operatorPressed == 0){
let newValue = numZero.innerHTML
update(newValue)
    buttonpressed = 1
    firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 0 ){
    let newValue = numZero.innerHTML
updateAdd(newValue)
firstNum.push(newValue)
    console.log(firstNum)
}else if(buttonpressed == 1 && operatorPressed == 1){
    let newValue = numZero.innerHTML
updateAdd(newValue)
secondNum.push(newValue)
}

}
)

const clear = document.getElementById("clear")
clear.addEventListener("click", () => {
output.value = 0;
buttonpressed = 0
operatorPressed = 0
firstNum.length = 0;
secondNum.length = 0;
calculatedNum = 0;
finalFirstnum = 0
finalSecondnum = 0
}
)
function update(num){
output.value = num


}
function updateAdd(num){
output.value += num


}
const multiply = document.getElementById("multiply")
multiply.addEventListener("click", () => {
if(operatorPressed == 0){
let newValue = " " + multi.innerHTML + " ";
 operation = "x"
updateAdd(newValue)
finalFirstnum = firstNum.join("")
    operatorPressed = 1
//this makes sure only one operator can be chosen at a time
}else if(operatorPressed == 1){
 consle.log(nothing)    
 //this makes sure the fist calculation can be calculated again
}else if (operatorPressed == 2){
 finalFirstnum = calculatedNum;
 finalSecondnum = 0;
secondNum = [];
 let newValue = " " + multi.innerHTML + " ";
 operation = "x"
updateAdd(newValue)
operatorPressed = 1;

}


})

const add = document.getElementById("add")
add.addEventListener("click", () => {
if(operatorPressed == 0){
let newValue = " " + sum.innerHTML + " ";
 operation = "+"
updateAdd(newValue)
finalFirstnum = firstNum.join("")
    operatorPressed = 1
//this makes sure only one operator can be chosen at a time
}else if(operatorPressed == 1){
 consle.log(nothing)    
 //this makes sure the fist calculation can be calculated again
}else if (operatorPressed == 2){
 finalFirstnum = calculatedNum;
 finalSecondnum = 0;
secondNum = [];
 let newValue = " " + sum.innerHTML + " ";
 operation = "+"
updateAdd(newValue)
operatorPressed = 1;

}
})
const substract = document.getElementById("substract")
substract.addEventListener("click", () => {
if(operatorPressed == 0){
let newValue = " " + minus.innerHTML + " ";
 operation = "-"
updateAdd(newValue)
finalFirstnum = firstNum.join("")
    operatorPressed = 1
//this makes sure only one operator can be chosen at a time
}else if(operatorPressed == 1){
 consle.log(nothing)    
 //this makes sure the fist calculation can be calculated again
}else if (operatorPressed == 2){
 finalFirstnum = calculatedNum;
 finalSecondnum = 0;
secondNum = [];
 let newValue = " " + minus.innerHTML + " ";
 operation = "+"
updateAdd(newValue)
operatorPressed = 1;

}
})
const divide = document.getElementById("divide")
divide.addEventListener("click", () => {
if(operatorPressed == 0){
let newValue = " " + split.innerHTML + " ";
 operation = "/"
updateAdd(newValue)
finalFirstnum = firstNum.join("")
    operatorPressed = 1
//this makes sure only one operator can be chosen at a time
}else if(operatorPressed == 1){
 consle.log(nothing)    
 //this makes sure the fist calculation can be calculated again
}else if (operatorPressed == 2){
 finalFirstnum = calculatedNum;
 finalSecondnum = 0;
secondNum = [];
 let newValue = " " + split.innerHTML + " ";
 operation = "/"
updateAdd(newValue)
operatorPressed = 1;

}
})





























const resultBtn = document.getElementById("resultIs")
resultBtn.addEventListener("click", () => {
//gets the final number after the operator
finalSecondnum = secondNum.join("")
//calls the calculation function with the number of left side of operator and right side of operator
operator(finalFirstnum, finalSecondnum, operation)
console.log(output.innerHTML)
// tracks the calculated number
calculatedNum = output.innerHTML;
//updates the amount of times the operator is pressed
operatorPressed = 2;
//resets the first num to 0
finalFirstnum = 0;
// clears the operator value
 operation = ""
})


function operator(num1, num2, opp){
    if(opp === "x"){
       return output.innerHTML = parseInt(num1) * parseInt(num2);
    }else if (opp == "+") {
    return  output.innerHTML = parseInt(num1) + parseInt(num2);
    }else if(opp == "-"){
    return  output.innerHTML = parseInt(num1) - parseInt(num2);
    }else if (opp == "/")
    return  output.innerHTML = parseInt(num1) / parseInt(num2);

}