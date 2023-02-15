import setBoxes from "./boxes";
import {useState} from "react"
import Box1 from "./box1";

function Box(props) {
    const [squares, setSquares] = useState(setBoxes)
    
    function toggle() {
        console.log("clicked")
    }

    const squareElements = squares.map(square => (
        <Box1 on = {square.on}  key={props.id} toggle = {toggle} />
    ))


    return (
        <main className="my-8">
            <h1 className="text-3xl font-semibold">Boxes will go here</h1>
            {squareElements}
        </main>
    )
}

export default Box;