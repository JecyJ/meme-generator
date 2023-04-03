import { useState, useEffect } from "react"

function Api() {
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(1)

    

    useEffect(() => {
        // console.log("count wa added")
        fetch(`https://swapi.dev/api/people/
        ${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    }, [count])    
        
    return (
        <div>            
            <p>The count is {count}</p>
            <button className="border py-1 px-2 bg-white rounded-lg" onClick={() => setCount(prevCount => prevCount + 1)}>Get next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

export default Api;