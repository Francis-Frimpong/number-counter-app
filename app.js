const countUp = document.querySelector("#count-up");
const countDown = document.querySelector("#count-down")
const reset = document.querySelector("#reset");

let counter = document.querySelector(".counter");


let count = 0;

//adding the click eventlisteners to the countup , down and reset variables

countUp.addEventListener("click", countup);
countDown.addEventListener("click", countdown);
reset.addEventListener("click", resetcount);

//creating the functionality of the count up, down and reset variables

//count up functionality
function countup(){
     let increment = count += 1;
        counter.textContent = increment;
}

//count down functionality
function countdown(){
    let decrement = count -= 1;
    counter.textContent = decrement;
}

//reset fucntionality
function resetcount(){
    let counterReset = count = 0;
    counter.textContent = counterReset;
}