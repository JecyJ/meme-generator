import setBoxes from "./boxes";
import {useState} from "react"
import Box1 from "./box1";

function Box(props) {
    const [squares, setSquares] = useState(setBoxes)
    
    function toggle(id) {
        //This is a more concise way of doing it (imperative way). refer to the commented code below for the declarative way of doing it      
        return setSquares(prevSquares => {
           return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
           })
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

// This is a more complex way of making the toggle to function properly

// function toggle(id) {        
//     return setSquares(prevSquares => {
//         const newSquares = []
//         for (let i = 0; i < prevSquares.length; i++) {
//             const currentSquares = prevSquares[i]
//             if(currentSquares.id === id) {
//                 const updatedSquare = {
//                     ... currentSquares, 
//                     on: !currentSquares.on
//                 }
//                 newSquares.push(updatedSquare)
//             } else {
//                 newSquares.push(currentSquares)
//             }
//         }
//         return newSquares
//     })
// }