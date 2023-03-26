import React, {useEffect, useState} from "react";


function Meme () {

 const [meme, setMeme] = useState(
    {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }
 )  
 const [allMemes, setAllMemes] = useState([])
 

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(memeData => setAllMemes(memeData.data.memes))
    }, [])

function getMemeImage () {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prev => ({...prev, randomImage: url}))
}

function handleChange(e) {
    const {name, value} = e.target
    setMeme(prev => ({...prev, [name]: value}))
}


    return (
        <main>
            <form className="form">
                <input onChange={handleChange} 
                    value={meme.topText}  
                    className="form--input"
                    type="text"
                    placeholder="first"
                    name="topText"/>
                
                <input onChange={handleChange}
                    value={meme.bottomText} 
                    className="form--input"
                    type="text" 
                    placeholder="second" 
                    name="bottomText"/>
                <button className="form--button" type="button" onClick={getMemeImage}>Get a new  meme image</button>
            </form>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme