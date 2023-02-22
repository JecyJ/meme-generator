import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            comments: ""
        }
    )

    console.log(formData)

    function handleChange(event){
        return setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }


    
    return (
        <div className="flex flex-col">
            <input
                className="rounded-lg px-2 w-64"
                type = "text"
                placeholder = "First Name"
                onChange = {handleChange}
                name = "firstName"
                value = {formData.firstName}
            />
               <input
                className="mt-3 rounded-lg px-2 w-64"
                type= "text"
                placeholder="Middle Name"
                onChange={handleChange}
                name = "middleName"
                value = {formData.middleName}
            />
            <input
                className="mt-3 rounded-lg px-2 w-64"
                type= "text"
                placeholder="Last Name"
                onChange={handleChange}
                name = "lastName"
                value = {formData.lastName}
            />
               <input
                className="mt-3 rounded-lg px-2 w-64"
                type= "email"
                placeholder="Email"
                onChange={handleChange}
                name = "email"
                value = {formData.email}
            />
            <textarea
                className="mt-3 rounded-lg px-2 w-64"
                placeholder="Comments"
                onChange={handleChange}
                name = "comments"
                value={formData.comments}
            />      
        </div>
    )
}

export default Form;