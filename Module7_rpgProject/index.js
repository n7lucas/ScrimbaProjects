import characterData from './data.js'
import Character  from "./Character.js"
//Quando eu voltar aqui melhorar a questao do time para permanecer mais na animacao, e aparecer a vida
//com zero antes de pular apra o proximo inimigo
const monsterArray = ["orc", "necron", "tyrant"]
let isEmpty = false
function getMonster () {
    const newMonster = characterData[monsterArray.shift()]
    isEmpty = monsterArray.length ? true : false //Se tiver item retorna true senao retorna false
    return new Character(newMonster)
}


function render () {

document.getElementById('player').innerHTML = marine.getCharacterHtml()
document.getElementById('enemy').innerHTML = enemy.getCharacterHtml()
}


function attack () {
    marine.setDiceHtml()
    enemy.setDiceHtml()   
    marine.takeDamage (enemy) 
    enemy.takeDamage(marine)
    if (!enemy.isAlive && isEmpty) { //if the enemy is death and the arr is not empty return a new monster
        enemy = getMonster()
    }else if (!marine.isAlive || (!enemy.isAlive && !isEmpty)) {
        endGame ()
    }
    render()
}

function endGame () {
    const message = marine.health === 0  && enemy.health === 0 ? "No Victorious" 
                    : marine.health === 0 ? "The Enemy are Victorious" : "You are Victorious!"
    const logo = marine.health === 0  && enemy.health === 0 ? "./images/skull.jpg" 
                    : marine.health === 0 ? "./images/chaoslogo.jpg"  : "./images/ultramarinelogo.jpg"                 
    document.body.innerHTML = ` <div class="winContainer">
                                    <img src="${logo}">
                                    <h1>${message}</h1>
                                    <a href="index.html">Back to Menu</a>
                                </div>
                                </div>`
}

const marine = new Character(characterData.marine)
let enemy = getMonster()
render()

document.getElementById('attackEl').addEventListener("click", () => attack())

