const formColor = document.getElementById("colorForm")
const colorEl = document.getElementById("colorEl")
const colorHaxEl = document.getElementById("HaxEl")
let ArrColor = []
let itsActivate = false
formColor.addEventListener("submit", (e) => {
    e.preventDefault()
  const form = new FormData(formColor)  
  const color = form.get("seedcolor")
  const mode = form.get("mode")
  const numC = form.get("numcolor")
  getColor (color.substring(1), mode,numC) 
  }
)


function getColor (color, mode,numC) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=${numC}`).then(resp =>
    resp.json()).then(data => {
        for (let iter of data.colors) {
            ArrColor.push(iter.hex.value)
    }
    render()
})
}

function render () {
    itsActivate = true
    let htmlC = ""
    let htmlH = ""
    for (let item of ArrColor){
        htmlC += `<div id="color-palette" style="background-color:${item}" class="colorSize"><p class="color-hover ">${item}</p></div>`
        //htmlH += `<p id=bottom-hex>${item}</p>`
    }
    colorEl.innerHTML = htmlC
   // ArrColor.length < 40 ? (colorHaxEl.innerHTML = htmlH) :colorHaxEl.innerHTML = ""
    console.log(ArrColor.length)
    ArrColor = []
}



