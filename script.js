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





let buttonpressed = 0


const seven = document.getElementById("seven")
seven.addEventListener("click", () => {
if(buttonpressed == 0){
let newValue = numSeven.innerHTML
update(newValue)
    buttonpressed = 1
}else if(buttonpressed == 1){
    let newValue = numSeven.innerHTML
updateAdd(newValue)
}
}
)

const eight = document.getElementById("eight")
eight.addEventListener("click", () => {
    let newValue = numEight.innerHTML
update(newValue)
}
)
const nine = document.getElementById("nine")
nine.addEventListener("click", () => {
    let newValue = numNine.innerHTML
update(newValue)
}
)
const four = document.getElementById("four")
four.addEventListener("click", () => {
    let newValue = numFour.innerHTML
update(newValue)
}
)
const five = document.getElementById("five")
five.addEventListener("click", () => {
    let newValue = numFive.innerHTML
update(newValue)
}
)
const six = document.getElementById("six")
six.addEventListener("click", () => {
    let newValue = numSix.innerHTML
update(newValue)
}
)
const one = document.getElementById("one")
one.addEventListener("click", () => {
    let newValue = numOne.innerHTML
update(newValue)
}
)
const two = document.getElementById("two")
two.addEventListener("click", () => {
    let newValue = numTwo.innerHTML
update(newValue)
}
)
const three = document.getElementById("three")
three.addEventListener("click", () => {
    let newValue = numThree.innerHTML
update(newValue)
}
)
const zero = document.getElementById("zero")
zero.addEventListener("click", () => {
    let newValue = numZero.innerHTML
update(newValue)
}
)
const clear = document.getElementById("clear")
clear.addEventListener("click", () => {
output.value = 0;
buttonpressed = 0
}
)
function update(num){
output.value = num


}
function updateAdd(num){
output.value += num


}
