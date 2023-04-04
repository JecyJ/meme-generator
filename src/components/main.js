import frame from "../images/frame.png"
import {useState, useEffect} from "react";

function Main() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        async function getMeme() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }

        getMeme() 
    }, []) 
    

    function getMemeImage() {
        const rand = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[rand].url
       setMeme(prevMeme => {
        return ({...prevMeme, randomImage: url})
       })
    }

    function handleChange(event) {
        const {name, value} = event.target
        return  setMeme(prevMeme => {
            return ({...prevMeme, [name] : value})
           })
    }
   

    return(
        <main className="bg-gray-500 py-8 ">
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
                <div className="flex flex-row justify-center relative">
                    <img className="my-6" src={meme.randomImage} alt="" />
                    <h2 className="mt-4 absolute text-4xl font-bold text-[#f38e30] text-center top-0">{meme.topText}</h2>
                    <h2 className="absolute text-4xl font-bold text-[#f38e30] text-center bottom-7">{meme.bottomText}</h2>                                      
                </div>                               
            </div>            
        </main>
    )
}

export default Main;