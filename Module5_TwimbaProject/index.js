import {tweetsData} from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const tweetBtn = document.getElementById("tweetBtn")
const tweetContainer = document.getElementById("iterContainer")
function render () {
    let html = ""
    tweetsData.forEach(function (data) {
        let likeRed =""
        let retweetGreen =""
        if (data.isLiked) {
            likeRed = "liked"
        }
        if (data.isRetweeted) {
            retweetGreen = "retweeted"
        }
         let repliesHtml = ""
          if(data.replies.length > 0){
            data.replies.forEach(function(reply){
                repliesHtml+=  `
                               <div class="replyPlace">
                                    <img src="${reply.profilePic}">
                                    <div class="tweetContainer">
                                <p class="username">${reply.handle}</p>
                                <p>${reply.tweetText}</p>
                                </div>  <!-- Icon Div -->
                             <!-- tweetContainer Div -->
                            </div> 
               <div class="bottomlinereply"></div>
                  `
            })
          }
       html += `
    <div class="Allcontainer">
        <div class="iteractionContainer">
            <img src="${data.profilePic}">
            <div class="tweetContainer">
                <p class="username">${data.handle}</p>
                <p>${data.tweetText}</p>
                <div class="iconContainer">
                    <div class="commentContainer">
                        <i class="fa-solid fa-comment "  data-comment="${data.uuid}">
                        <span>${data.replies.length}</span></i>
                    </div>
                    <div class="retweetContainer">
                        <i class="fa-solid fa-retweet ${retweetGreen} "  data-retweet="${data.uuid}">
                        <span>${data.retweets}</span></i>
                    </div>
                    <div class="likeContainer">
                        <i class="fa-solid fa-heart ${likeRed}" data-like="${data.uuid}">
                        <span>${data.likes}</span></i>
                    </div>
               </div> <!-- iconContainer-->
            </div>  <!-- tweetContainer-->
         
        </div>  <!-- iteractionContainer-->
              <div class="bottomline"></div>   
       
       <div class="replyContainer show" id="data-${data.uuid}">${repliesHtml}
        </div>
       </div> <!--Allcontainer-->
       `

    })
    tweetContainer.innerHTML = html
}


function renderReply (uuid) {
     const replyContainer = document.getElementById(`data-${uuid}`)
     replyContainer.classList.toggle("show")

}
   

function renderLike (uuid) {
    const objectTweet = tweetsData.filter(function (data) {
        return data.uuid === uuid })[0]
        if (!objectTweet.isLiked) {
            objectTweet.likes ++;
        }else if (objectTweet.isLiked) {
            objectTweet.likes --;
        }
        objectTweet.isLiked = !objectTweet.isLiked
}


function renderRetweet (uuid) {
    const objectTweet = tweetsData.filter(function (data) {
        return data.uuid === uuid })[0]
        if (!objectTweet.isRetweeted) {
            objectTweet.retweets ++;
        }else if (objectTweet.isRetweeted) {
            objectTweet.retweets --;
        }
        objectTweet.isRetweeted = !objectTweet.isRetweeted

}

function renderUserTweet () {
    const tweetValue = document.getElementById("typeArea")
    if (tweetValue.value)  {
        tweetsData.unshift({
        handle: `@UserMaster`,
        profilePic: `images/scrimbalogo.png`,
        likes: 0,
        retweets: 0,
        tweetText: `${tweetValue.value}`,
        replies: [],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4(),
    })
}
render()
}

render ()

document.addEventListener("click", function (e) {
    if (e.target.dataset.comment) {
        renderReply(e.target.dataset.comment)
    }
    if (e.target.dataset.like){
        renderLike(e.target.dataset.like)
          render()
    }
    
    if (e.target.dataset.retweet){
        renderRetweet(e.target.dataset.retweet)
          render()
    }

})

tweetBtn.addEventListener("click", renderUserTweet )