let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function press() {
    count += 1
    countEl.textContent = count
}


function start() {
     document.getElementById("start-btn").disabled = true;
     document.getElementById("click-btn").disabled = false;
     timer()
}

function result () {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function timer () {
let timeleft = 10;
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
     document.getElementById("click-btn").disabled = true;
      document.getElementById("start-btn").disabled = false;
    result ();
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
}