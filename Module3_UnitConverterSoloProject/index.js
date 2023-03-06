/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const buttonEl = document.getElementById("btn-convert")
const inputEl = document.getElementById("input-el")
const meterEl = document.getElementById("meter-el")
const volEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

function calcFeet (meter) {
    return meter*3.281
}

function calcMeter (meter) {
    return meter/3.281
}

function calcGallon (volume) {
    return volume*0.264
}

function calcLiter (volume) {
    return volume/0.264
}

function calcMass (mass) {
    return mass*2.204
}

function calcPounds (mass) {
    return mass/2.204
}






buttonEl.addEventListener("click", function () {
    let feet =  calcFeet (inputEl.value)
    let meter =  calcMeter (inputEl.value)
    let gallon = calcGallon(inputEl.value)
    let liter = calcLiter(inputEl.value)
    let pounds = calcMass(inputEl.value)
    let kiograms = calcPounds(inputEl.value)
    
    meterEl.textContent = `${inputEl.value} meters = ${feet.toFixed(3)} feet | 
                         ${inputEl.value} feet = ${meter.toFixed(3)} meters`
                         
    volEl.textContent = `${inputEl.value} liters = ${gallon.toFixed(3)} gallons |
                         ${inputEl.value} gallons = ${liter.toFixed(3)} liters`    
    
    massEl.textContent = `${inputEl.value} kilos = ${pounds.toFixed(3)} pounds |
                         ${inputEl.value} pounds = ${kiograms.toFixed(3)} kiograms`                                       
})


