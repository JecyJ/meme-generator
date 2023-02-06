import frame from "../images/frame.png"
import memesData from "./memesData";

function Main() {
    function getMemeImage() {
        const memeArr = memesData.data.memes
        const rand = Math.floor(Math.random() * memeArr.length)
        const url = memeArr[rand].url
        console.log(url)
    }
    return(
        <main className="bg-white py-8">
            <div className=" form flex flex-col px-5">
                <div className="flex space-x-5 pb-7 w-full">
                    <input className="border border-gray-400 rounded-lg w-full pl-2" type="text" placeholder="meme" />
                    <input className="border border-gray-400 rounded-lg w-full pl-2" type="text" placeholder="generator" />
                </div>                
                <button className="form-btn flex justify-center border border-gray-400 rounded-lg px-3 w-full py-2 bg-gradient-to-r from-purple-600 via-purple-400 to-pink-500" onClick={getMemeImage}>
                    Get a new Meme Image
                    <img className="w-6" src={frame} alt="" />
                </button>
                <img src="" alt="" />
            </div>
        </main>
    )
}

export default Main;