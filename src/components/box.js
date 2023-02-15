import setBoxes from "./boxes";
import {useState} from "react"
import Box1 from "./box1";

function Box(props) {
    const [squares, setSquares] = useState(setBoxes)
    
    function toggle(id) {        
        return setSquares(prevSquares => {
            const newSquares = []
            for (let i = 0; i < prevSquares.length; i++) {
                const currentSquares = prevSquares[i]
                if(currentSquares.id === id) {
                    const updatedSquare = {
                        ... currentSquares, 
                        on: !currentSquares.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquares)
                }
            }
            return newSquares
        })
    }
    
    const squareElements = squares.map(square => (
        <Box1 
            on = {square.on} 
            id = {square.id}  
            key={square.id} 
            toggle = {toggle} />
    ))


    return (
        <main className="my-8">
            <h1 className="text-3xl font-semibold">Boxes will go here</h1>
            {squareElements}
        </main>
    )
}

export default Box;