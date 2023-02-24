import frame from "../images/frame.png"
import memesData from "./memesData";
import {useState} from "react";

function Main() {
    // const [memeImage, setMemeImage] = useState("https://i.imgflip.com/30b1gx.jpg")
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })
                        // , SetAllMemeImages
    const [allMemeImages] = useState(memesData)

    function getMemeImage() {
        const memeArr = allMemeImages.data.memes
        const rand = Math.floor(Math.random() * memeArr.length)
        const url = memeArr[rand].url
       setMeme(prevMeme => {
        return ({...prevMeme, randomImage: url,})
       })
    }

    function handleChange(event) {
        const {name, value} = event.target
        return  setMeme(prevMeme => {
            return ({...prevMeme, [name] : value})
           })
    }

   

    return(
        <main className="bg-gray-500 py-8">
            <div className="form flex flex-col px-5">
                <div className="flex space-x-5 pb-7 w-full">
                    <input 
                        className="border border-gray-400 rounded-lg w-full pl-2" 
                        type="text" 
                        placeholder="top text"
                        name = "topText"
                        value={meme.topText}
                        onChange = {handleChange}
                    />
                    <input 
                        className="border border-gray-400 rounded-lg w-full pl-2" 
                        type="text" 
                        placeholder="bottom text"
                        name = "bottomText"
                        value={meme.bottomText}
                        onChange = {handleChange}
                    />
                </div>               
                <button className="flex justify-center border border-gray-400 rounded-lg px-3 w-full py-2 bg-gradient-to-r from-purple-600 via-purple-400 to-pink-500" onClick={getMemeImage}>
                    Get a new Meme Image
                    <img className="w-6" src={frame} alt="" />
                </button>
                <div className="relative">
                    <img className="my-6" src={meme.randomImage} alt="" />
                    <div className="absolute">
                        <h2 className=" text-2xl font-semibold text-white">{meme.topText}</h2>
                        <h2 className=" text-2xl font-semibold text-white">{meme.bottomText}</h2>
                    </div>
                    
                </div>
                
            </div>
        </main>
    )
}

export default Main;