



async function getMovieList (title) {
    const resp = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=cba8f119`)
    const data = await resp.json()
    if (data.Response === "True") {
        const dataToRender = await getMovieIdList(data)
        return dataToRender
    } else if (data.Response === "False"){
        return false
    }
    
}


function getMovieIdList(data){
    let movieList = []
    const moviesList = data
    for (let items of moviesList.Search ){
         movieList.push(items.imdbID)
     }
    const movieListFull = getMovieByIdList(movieList)
    return movieListFull
}

async function getMovieByIdList(movieList) {
    let movieFullInfoList = []
    for (let item of movieList){
        const resp = await fetch(`https://www.omdbapi.com/?i=${item}&apikey=cba8f119`)
        const data = await resp.json()
         movieFullInfoList.push(data)
    }
  return movieFullInfoList
}

export default getMovieList