
import {getDiceRollArray, getDicePlaceholderHtml,getPercentage} from "./util.js"

class Character {
    constructor (data) {
        Object.assign(this, data)
        this.maxHealth = this.health
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)
        this.isAlive = true
    }

    setDiceHtml() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map((item) => 
         `<div class="diceItem">${item}</div>`).join("") 
    }

    takeDamage (obj) {
        this.health -= obj.currentDiceScore.reduce((total, current) => current+total)
        if(this.health <= 0){
            this.health =0
            this.isAlive = false
        }
    }

    getHealthBarHtml() {
        const percent = getPercentage(this.health, this.maxHealth)
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                            style="width:${percent}%;">
                    </div>
                </div>`
    }
    getCharacterHtml () {
        const {name, avatar, health, diceCount, currentDiceScore} = this
        const percent = getPercentage(this.health, this.maxHealth)
       return ` <h3 class=" caracterName whitefont">${name}</h3>
                <img class="characterfig" src="${avatar}">
                <p class="whitefont">health: ${health}</p>
                <div class="healthbar" style="width:${percent}%;" ></div>
            <div class="diceContainer">
                ${this.diceHtml}
            </div>`
    }
  
}

export default Character