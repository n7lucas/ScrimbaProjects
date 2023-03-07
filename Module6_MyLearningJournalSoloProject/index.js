import {data} from "/articleData.js"
const articleEl = document.getElementById('containerEl')
const moreEl = document.getElementById('morelink')
const seeMoreEl = document.getElementById('seeMoreLink')
const menuEl = document.getElementById('menuEl')
const burgerMenu = document.getElementById('burger-menu')




function render (start, end) {
    let articleArr  = ""
    data.slice(start, end).forEach(function (item) {
        articleArr += `      
            <article class="article-main">
                <img class="article-img" src="${item.figure}">
                <p class="article-date">${item.date}</p>
                <h1 class="article-title">${item.title}</h1>
                <p class="article-body">${item.intro} <a href="blank.html">See more...</a></p>
            </article>
            `
    })
    articleEl.innerHTML = articleArr
}

render(0, 3)



let current = 5;

moreEl.addEventListener("click", function (e) {  
    e.preventDefault()
    if (current >= data.length){
    seeMoreEl.classList.toggle('showMore')
   } 
    render (0,current)
    current= current + 2;

})

menuEl.addEventListener("click", function () {
    burgerMenu.classList.toggle('show-menu')
})