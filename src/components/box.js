import setBoxes from "./boxes";
import {useState} from "react"

function Box() {
    const [sqaures, setSquares] = useState(setBoxes)

    const squareElements = sqaures.map(square => (
        <div className="w-12 h-12 mt-5 border border-gray-500 rounded-lg mr-5 inline-block " key={setBoxes.id}></div>
    ))

    

   

    return (
        <main className="my-8">
            <h1 className="text-3xl font-semibold">Boxes will go here</h1>
            {squareElements}
        </main>
    )
}

export default Box;