import getMovieList from './data.js'

const formEl = document.getElementById("searchForm")
const renderEl = document.getElementById("movieid")
let watchList = []

formEl.addEventListener("submit", async (e) => {
    e.preventDefault()
    const searchForm = new FormData(formEl)
    let movieTitle = searchForm.get("searchMovie")
    renderEl.innerHTML = `<div class="emptyContainer">
                            <i class="fa-solid fa-film"></i>
                            <p>Searching...</p>
  </div>
`
    const ListFull = await getMovieList(movieTitle)
    if (ListFull === false) {
        renderEl.innerHTML = `<div class="emptyContainer">
                                <i class="fa-solid fa-film"></i>
                                <p>Unable to find what you're looking for. Please try another Section</p>
                              </div>
`
    }else {
    renderMovie(ListFull)
    }
})


function renderMovie (data) {
    let movieHtml = ""
    for (let items of data) {
        movieHtml += ` <section class="movieContainer">
                            <img class="poster" src="${items.Poster}">
                            <div class="descriptionContainer">
                                <div class="titleContainer">
                                    <h2>${items.Title}</h2>
                                    <p>⭐ ${items.imdbRating}</p>
                                </div>
                                <div class="infoContainer">
                                    <p>${items.Runtime}</p>
                                    <p>${items.Genre}</p> 
                                    <div class="btnWatch " id="${items.imdbID}"><i class="fa-solid fa-circle-plus"></i> WatchList</div>
                                </div> 
                                <p class="description">${items.Plot}</p>
                            </div>
                           </section>`
}
    
  renderEl.innerHTML = movieHtml

 
  document.addEventListener("click", (e) => {
    if (e.target.classList[0] === "btnWatch"){
        e.target.textContent = "Added"
        
         watchList.push(e.target.id)
    }
})


}

document.getElementById("watchLink").addEventListener("click", (e) => {
        const uniqueWatch = [...new Set(watchList)]; /*Return a list only with the unique values of watchList*/ 
        for (let value of uniqueWatch) {
        localStorage.setItem(value, value)
        }
        watchList = []

} )

