import frame from "../images/frame.png"

function Main() {
    return(
        <main className="bg-white py-8">
            <form className=" flex flex-col px-5">
                <div className="flex space-x-5 pb-7 w-full">
                    <input className="border border-gray-400 rounded-lg w-full pl-2" type="text" placeholder="meme" />
                    <input className="border border-gray-400 rounded-lg w-full pl-2" type="text" placeholder="generator" />
                </div>                
                <button className="flex justify-center border border-gray-400 rounded-lg px-3 w-full py-2 bg-gradient-to-r from-purple-600 via-purple-400 to-pink-500">
                    Get a new Meme Image
                    <img className="w-6" src={frame} alt="" />
                </button>
                <img src="" alt="" />
            </form>
        </main>
    )
}

export default Main;