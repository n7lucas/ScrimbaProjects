
//Here we take diceCount as # od dices each Character have 1-Instantiate the new Array with countDice size
// fill the array with 0, map the array and transform in an array with random numbers between 0 and 6
function getDiceRollArray (diceCount) {
    return new Array(diceCount).fill(0).map( () => Math.floor(Math.random() * 6) +1)
}

function getDicePlaceholderHtml (diceCount) {
    return new Array(diceCount).fill(0).map(() =>
     `<div class="diceItem"></div>`).join("")
}

const getPercentage = (remainingHealth, maximumHealth) => 
    (100 * remainingHealth) / maximumHealth



export {getDiceRollArray, getDicePlaceholderHtml,getPercentage}