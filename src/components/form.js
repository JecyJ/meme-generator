import { useState } from "react";

function Form() {
    const [firstName, setFirstName] = useState("")

    console.log(firstName)

    function handleChange(event){
        return (setFirstName(event.target.value))
    }
    return (
        <div>
            <input
                type = "Text"
                placeholder = "First Name"
                onChange = {handleChange}
            />           
        </div>
    )
}

export default Form;