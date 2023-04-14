const formColor = document.getElementById("colorForm")
const colorEl = document.getElementById("colorEl")
const colorHaxEl = document.getElementById("HaxEl")
let ArrColor = []

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
    let htmlC = ""
    let htmlH = ""
    for (let item of ArrColor){
        htmlC += `<div style="background-color:${item}" class="colorSize"></div>`
        htmlH += `<h4>${item}</h4>`
    }
    colorEl.innerHTML = htmlC
    colorHaxEl.innerHTML = htmlH
    ArrColor = []
}


