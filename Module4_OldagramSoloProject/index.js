const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main-el")

function render () {
    let listPost = ""
    for (let i = 0; i < posts.length; i ++ ) {
        listPost +=
        
        `
          <section class="post">
                <div class="profile-info">
                    <img class="postprofile-pic" src="${posts[i].avatar}">
                        <div class="name-country">
                            <p class="boldfont">${posts[i].name}</p>
                            <p class="country">${posts[i].location}</p>
                        </div>
                </div>
                 <img class="newpost" src="${posts[i].post}">
                <div class="iter-sec">
                    <div class="iter-box">
                        <a id="likebtn${i}" onClick="reply_click(this.id)"><div class="iteration like"></div></a>
                        <div class="iteration comment"></div>
                        <div class="iteration message"></div>
                    </div>
                    <p class="boldfont" id="likeCount${i}">${posts[i].likes}</p>
                    <p> <span class="boldfont userComment">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
                 <div class="bottommargin"></div>
             </section>
             
        
        `
    }
    mainEl.innerHTML = listPost
}

render()
 
function reply_click(clicked_id)
  {
       let likerBtn = document.getElementById(clicked_id) 
       let last = clicked_id.substr(clicked_id.length - 1) 
       let linkBtn = document.getElementById("likeCount"+last) 
       
       linkBtn.textContent ++;
  } 
 
