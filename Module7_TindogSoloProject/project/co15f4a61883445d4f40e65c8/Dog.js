// Create the Dog class here
import dogs from './Dog.js'

class Dog {
    constructor (data) {
    Object.assign(this, data)
}
    Printar () {
        console.log("olha" + this.name)
    }
    getBedgeHtml () {
        let showNope =""
        let showLike = ""
        this.hasBeenLiked ? showLike = " " : showLike = "badgeContainerLike"
        this.hasBeenSwiped ? showNope = " " : showNope = "badgeContainerNope"
        return ` 
                    <img class="badgeContainer ${showLike}" src="images/badge-like.png">
                    <img class="badgeContainer ${showNope}" src="images/badge-nope.png"> `
    }
    
    getDogHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return ` 
                    ${this.getBedgeHtml()}
                    <img class="userPhoto" src="${avatar}">
                    <div class="userdescription">
                    <h3>${name}, ${age}</h3>
                    <p>${bio}</p>
                </div>
                `
    }
}

export default Dog