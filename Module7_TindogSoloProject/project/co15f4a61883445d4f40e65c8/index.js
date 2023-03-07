// Remember to import the data and Dog class!
import dogs from './data.js'
import Dog from './Dog.js'


// Create the Dog class here


function getDog() {
    return new Dog (dogs.shift())
}

function dodgeOrLike (isLiked) {
        disableBtn()
        isLiked ? dogao.hasBeenLiked = true : dogao.hasBeenSwiped = true
        render() //render badge
        !dogs.length ? setTimeout(() => {emptyDogs()}, 1500) :
        setTimeout(() => {
        isLiked = false
        dogao = getDog()
        render()//new dog
        disableBtn() 
        }, 1500)

}


function emptyDogs () {
    document.body.innerHTML = `<div class="endPage">
                                    <h1>We don't have more dogs regristred in your site 🥺</h1>
                                    <h2> We hope you have find someone 😀</h2>
                                </div>`
}



function render () {
    document.getElementById('userContainer').innerHTML = dogao.getDogHtml()
}

function disableBtn () {
    document.getElementById('nopeEl').classList.toggle('disablebutton')
    document.getElementById('likeEl').classList.toggle('disablebutton')
}



document.getElementById('nopeEl').addEventListener("click", () => dodgeOrLike(false))
document.getElementById('likeEl').addEventListener("click", () => dodgeOrLike(true))

let dogao = getDog()
render()