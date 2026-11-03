const output = document.querySelector(".result")
const numSeven = document.querySelector(".numberseven")
const numEight = document.querySelector(".numbereight")
const numNine = document.querySelector(".numbernine")

const seven = document.getElementById("seven")
seven.addEventListener("click", () => {
    let newValue = numSeven.innerHTML
update(newValue)
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

function update(num){

output.value += num

}
