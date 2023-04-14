import {catsData} from './data.js'

const EmoContainer = document.getElementById("emotionsContainer")
const BtnSubmit = document.getElementById("submitBtn")
const CheckBox = document.getElementById("checkboxEl")
/*Function to return all emotions in each data*/ 
function getEmotions () {
const EmotionRaw = []   
catsData.forEach(function (cat) {
    cat.emotionTags.forEach(function(emotion) { 
        EmotionRaw.push(emotion)
    })
})
return EmotionRaw
}

/* Function to remove duplicate emotions*/
function getEmotionFilter () {
    let Raw = getEmotions()
    const EmotionFilter = []
    Raw.forEach(function(g) {
        if(!EmotionFilter.includes(g)) {
            EmotionFilter.push(g)
        }
    })
    return EmotionFilter
    }

/* Funtion to render the radios in hmtl*/   
function render () {
    let radioPage = ""
    let emotions =  getEmotionFilter()
    emotions.forEach(function (emo) {
        radioPage += `  
                        <div class="radiosBox">    
                        <label for="${emo}">${emo}</label>
                        <input type="radio" name="emotions" value="${emo}">
                            </div>
        `
    })
   EmoContainer.innerHTML =  radioPage
}

/* Function that returns chosen emotion*/ 
function getChoiceEmotion () {
        const checkRadio = document.querySelector('input[type="radio"]:checked')
    
        return checkRadio
}


function GetRandomArrayEmotion () {
    const randomCat = getChoiceEmotion () 
    const isGif = CheckBox.checked
    const ArrayChoice = catsData.filter(function(e) {
          if (isGif){
             return e.emotionTags.includes(randomCat.value) && e.isGif
        }else {

             return e.emotionTags.includes(randomCat.value)
        }
        })
 
        return ArrayChoice
   }  


function getRandomEmotion () {
    const ArrayRandomized = GetRandomArrayEmotion();
        console.log(ArrayRandomized)
    const idxRandom = Math.floor(Math.random() *ArrayRandomized.length)
    return ArrayRandomized[idxRandom]
}


function renderCat () {
    const CatRender = getRandomEmotion()
    document.getElementById("renderContainer").innerHTML = `
    
            <div class="catContainer" id="catcontainer">
                  <button class="closeBtn" id="closeBtn">X</button>
                 <img class="catImage" src="images/${CatRender.image}">
             </div>
`
render()

const btnclose = document.getElementById("closeBtn")

btnclose.addEventListener("click", function () {
   document.getElementById("catcontainer").classList.toggle("closeCat")
})

document.addEventListener("click", function(e) {
    if (e.target === EmoContainer) {
         document.getElementById("catcontainer").classList.toggle("closeCat")
    }
})

}


render ()
console.log(CheckBox.checked)
BtnSubmit.addEventListener("click", renderCat)

document.addEventListener("click", function (e) {
    console.log(e.target)
})
