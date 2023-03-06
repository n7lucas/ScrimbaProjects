const charactersfull = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const abc123 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const abccha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let characters = []

let inputLen = document.getElementById("pass-lenght").value;
let Newpass = ""
let Newpass2 = ""

let passEl1 = document.getElementById("pass1")
let passEl2 = document.getElementById("pass2")

function passwordpattern () {
    let inputNum = document.getElementById("num-check");
    let inputCha = document.getElementById("cha-check");
    
    if (inputCha.checked && inputNum.checked) {
        return abc
    }else if (inputNum.checked){
         return abccha
    }else if (inputCha.checked){
         return abc123
    } else {
         return charactersfull
    }
}

function clearPass () {

    return passEl1, passEl2
}

function Generatepass () {
    let inputLen = document.getElementById("pass-lenght").value;
    if (inputLen > 15) {
        console.log("Maximum of 15")
    }else {
        characters = passwordpattern()
        for (let i= 0; i< inputLen; i ++) {
            idx = Math.floor(Math.random() * characters.length)
            idx2 = Math.floor(Math.random() * characters.length)
            Newpass +=  characters[idx]
            Newpass2 +=  characters[idx2]
        }
    }
    //passEl1.textContent = "3 ";
    //passEl2.textContent = " 3";
    passEl1.textContent = Newpass;
    passEl2.textContent = Newpass2;
    Newpass = ""
    Newpass2 = ""
}


const span = document.getElementById("pass-space");

span.onclick = function() {
  document.execCommand("copy");
}

span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
    window.alert(event.clipboardData.getData("text") + " copied to clipboard")
  }
});
