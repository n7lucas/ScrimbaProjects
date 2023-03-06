const popupEl = document.getElementById("popupContainer")
const closeBtn = document.getElementById("btnclose")
const AcceptBtn = document.getElementById("accBtn")
const declineBtn = document.getElementById("declineBtn")
const containerBtn = document.getElementById("BtnContainer")
const modalText =  document.getElementById("modal-text")
const formData = document.getElementById("formContainer")




declineBtn.addEventListener("mouseenter", function () {
    containerBtn.classList.toggle('reverseBtn')
    console.log("fff")})

//Function to make the transition after the submit button
formData.addEventListener("submit", function (e){
    e.preventDefault()
     let isFilled = false
     const DataForm = new FormData(formData)
     const fullName = DataForm.get("userName")   
     console.log(fullName) 
     modalText.innerHTML = ` 
              <div class="modal-inner-loading">
                    <img src="loading.svg" class="loading">
                    <p id="upload-text">Uploading your data to the <span>DARK WEB</span>...</p>
                </div> `
                 
   setTimeout(function () {
       document.getElementById("upload-text").innerText = `Making the sale...`
   }, 1500) 
   
   setTimeout(function () {
       document.getElementById("innerContainer").innerHTML = `
                    <div> 
                        <h1> Thanks ${fullName} you sucker </h1>
                        <p> We just the rights to your eternal soul</p>
                        <img class="pirateImg" src="https://media1.giphy.com/media/l4EoYvSFAO0BjGcU0/giphy.gif?cid=ecf05e47mgch40c40yqnpxk5xcr20kldtxw05lpu7w7ezu46&rid=giphy.gif&ct=g"
                    </div>
       `
    closeBtn.addEventListener("click", function () {
    popupEl.style.display = "none"
})
   }, 3000)
   
   
   
})

    




