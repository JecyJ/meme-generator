import frame from "../images/frame.png"
import memesData from "./memesData";
import {useState} from "react";

function Main() {
    // const [memeImage, setMemeImage] = useState("https://i.imgflip.com/30b1gx.jpg")
    const [meme, setMeme] = useState({
        topTest: "",
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
        return ({...meme, randomImage: url})
       })
    }

    return(
        <main className="bg-gray-500 py-8">
            <div className=" form flex flex-col px-5">
                <div className="flex space-x-5 pb-7 w-full">
                    <input className="border border-gray-400 rounded-lg w-full pl-2" type="text" placeholder="top text" />
                    <input className="border border-gray-400 rounded-lg w-full pl-2" type="text" placeholder="bottom text" />
                </div>                
                <button className="form-btn flex justify-center border border-gray-400 rounded-lg px-3 w-full py-2 bg-gradient-to-r from-purple-600 via-purple-400 to-pink-500" onClick={getMemeImage}>
                    Get a new Meme Image
                    <img className="w-6" src={frame} alt="" />
                </button>
                <img className="my-6" src={meme.randomImage} alt="" />
            </div>
        </main>
    )
}

export default Main;