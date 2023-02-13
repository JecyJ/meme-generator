import File1 from "./file1"
import File2 from "./file2"
import { useState } from "react"

function Filing() {
//             setUser
    const [user] = useState("Joe")

    return (
        <div>
            <File1 goal = {user} />
            <File2 goal = {user} />
        </div>
    )
}

export default Filing;