import trollface from "../images/trollface.png"


function Header() {
    return(
        <div className="flex items-center justify-between px-8 border bg-gradient-to-r from-purple-600 via-purple-400 to-pink-500 py-5 text-white">
        <div className="flex items-center text-3xl">
            <img src={trollface} alt="" />
            <h1>Meme Generator</h1>
        </div>            
            <h2>React Course - Project 3</h2>
        </div>
    )
}

export default Header;