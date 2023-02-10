import {useState} from "react"
import Count from "./count"

function Test() {
    const [count, setCount] = useState(0)
    
    function add() {
        return setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        return setCount(prevCount => prevCount - 1)
    }


    const [isGoingOut, setIsGoingOut] = useState(true)

function choice() {
    return setIsGoingOut(prevState => !prevState)
}

    

    return(
        <div>
            <div className="flex justify-center items-baseline mt-20">
                <p className="border rounded-full border-black p-6 bg-gray-700 hover:bg-gray-800" onClick={subtract}>-
                </p>
                <Count number={count} />
                <p className="border rounded-full border-black p-6 bg-gray-700 hover:bg-gray-800" onClick={add}>+
                </p>           
            </div>
            <div className="flex flex-col items-center mt-5">
                <h1 className="text-3xl text-center font-semibold">Am i in the mood to go out today?</h1>
                <h1 className="border rounded-full border-black p-6 bg-white text-xl" onClick={choice}>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
          
    )
}

export default Test;