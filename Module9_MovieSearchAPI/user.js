
let movieHtml = {}

async function getMovieByIdList() {
    let movieFullInfoList = []
    let keys = Object.keys(localStorage)
    for (let key of keys) {
        const resp = await fetch(`https://www.omdbapi.com/?i=${key}&apikey=cba8f119`)
        const data = await resp.json()
         movieFullInfoList.push(data)
    }
  return movieFullInfoList
}

function renderWatchHtml(moviesList) {

    for (let items of moviesList) {
        movieHtml[items.imdbID] =  ` <section class="movieContainer">
                                        <img class="poster" src="${items.Poster}">
                                        <div class="descriptionContainer">
                                            <div class="titleContainer">
                                                <h2>${items.Title}</h2>
                                                <p>⭐ ${items.imdbRating}</p>
                                            </div>
                                            <div class="infoContainer">
                                                <p>${items.Runtime}</p>
                                                <p>${items.Genre}</p> 
                                                <div class="btnWatch ${items.imdbID}" id="removeBtn"><i class="fa-solid fa-circle-minus"></i> Remove</div>
                                            </div> 
                                            <p class="description">${items.Plot}</p>
                                        </div>
                                 </section>`;
        }
   

    
    document.getElementById("movieid").innerHTML = Object.values(movieHtml).join(" ")
    document.addEventListener("click",  (e) => { 
           if (e.target.id === "removeBtn") {
                let indexTodelete = e.target.classList[1]
                console.log(indexTodelete) 
                localStorage.removeItem(indexTodelete)
                location.reload()
           }
         
})    
}

async function renderWatchList () {
    if (localStorage.length === 0){
          document.getElementById("movieid").innerHTML = `<div class="emptyContainer">
                                                            <p>Your watchlist is looking a little empty...</p>
                                                            <div class="addHighlight">
                                                            <i class="fa-solid fa-circle-plus"></i>
                                                            <a href="./index.html" >Let's add some movies!</a>
                                                            </div>
                                                        </div>`
    }else {
    const moviesList = await getMovieByIdList()
    renderWatchHtml(moviesList)
}
}

renderWatchList ()

