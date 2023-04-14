import {menuArray} from './data.js'
const mainContainer = document.getElementById("mainContainer")
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

let total = 0
let checkArr = []
let index = 0;
const formContainer = document.getElementById("formBox")


function render () {
    let html = ""
    menuArray.forEach(function(data) {
        html +=  `
                        <div class="itemContainer"> 
                            <div class="itemInfo">
                                <h3 class="food">${data.emoji}</h3>
                                <div class="itemDescription">
                                    <h2>${data.name}</h2>
                                    <p><span>${data.ingredients}</span></p> 
                                    <p>${data.price}</p>
                                </div>
                            </div>
                                <button class="addBtn" data-add="${data.id}">+</button>
                        
                        </div>
                        <div class="bottomLine"></div>
                        
                        </div>
            `
    })
    mainContainer.innerHTML = `${html} 
            <div class="orderContainer hideTotal" id="orderContainer">
                <h3> Your Order</h3>
                <!-- Javascript checkout Start -->
                 <div id="ContainerCheckIn">
              
                 </div>
                  <!-- Javascript checkout End -->
                  
                
                    <div class="TotalContainer">
                            <div class="OrderLine"></div>
                            <div class="priceContainer">
                                 <h3>Totall Price:</h3>
                                 <h3 id="priceContainer"></h3>
                            </div>
                    </div>
                        <button class="orderBtn" id="orderBtn">Complete Order</button>
            </div>
            
                     `
}


function renderCheck (itemId) {
    let htmlfinal = ""
    checkArr.push({ htmlrender:`
                     <div class="orderPriceContainer">
                         <div class="orderRemoveContainer">
                             <h3>${itemId.name}</h3>
                             <button class="removeBtn" id="removeBtn" data-del="${index}">remove</button>
                         </div>
                        <h3>${itemId.price}</h3>
                    
                    </div> 
                       `,
    idx: index, 
    price: itemId.price },)
                       
    index ++
    //console.log(checkArr)
    checkArr.forEach(function (dater) {
    htmlfinal += dater.htmlrender
    })
    document.getElementById("ContainerCheckIn").innerHTML = htmlfinal
    total += itemId.price
    document.getElementById("priceContainer").innerText = "$" +total 
}

function addItem (Items) {
   renderOrderTotal () 
   const itemId = menuArray.filter(function (item) {
   return(item.id == Items.dataset.add) // using == bc comparing a string and numerical
})[0]
    renderCheck(itemId)
 //htmlfinal recebe cada item de uma vez no forEach (o ultimo item)
}


function removeItem (Item) {
    total = 0
    let htmlfinal = ""
    //Find ittem to be deleted
    checkArr = checkArr.filter(function (check) {
    return check.idx != Item.dataset.del
     })
    //Remove from the Array
    //Render the new Page
    if (checkArr.length) {
        checkArr.forEach(function (dater) {
    
        htmlfinal += dater.htmlrender
        total += dater.price
      })

    document.getElementById("ContainerCheckIn").innerHTML = htmlfinal
    document.getElementById("priceContainer").innerText = "$" +total 
} else {
     renderOrderTotal () 
}
}

document.addEventListener("click", function(e){
     if (e.target.dataset.add){
     addItem(e.target)
     }
     if (e.target.dataset.del){
        removeItem(e.target)
    }
    
})  




function renderOrderTotal () {  
     if (!checkArr.length){
         showTotal.classList.toggle('hideTotal')
    }  
}

render ()

const formPopup = document.getElementById("formContainer")
const showTotal = document.getElementById("orderContainer") 
const orderBtn = document.getElementById("orderBtn")

orderBtn.addEventListener("click", function () {
    formPopup.classList.toggle('displayswitch')
})

formContainer.addEventListener("submit", function (e) {
    e.preventDefault()

const formData = new FormData(formContainer)
const fullName = formData.get("userName")

showTotal.innerHTML = `<div class="messageContainer">
               <p> Thanks, ${fullName}! Your order is on its way!</p>
             </div> 
             <a class="link-neworder" href="./index.html">New Order</a>

`
formPopup.classList.toggle('displayswitch')
})





