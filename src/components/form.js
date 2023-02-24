import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: false,
            employment: "",
            favColor: ""
        }
    )

    // console.log(formData.favColor)

    function handleChange(event){
        const {name, value, type, checked} = event.target
        return setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col border p-4">
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
                <span>
                    <input
                        className="mt-3 rounded-lg px-2"
                        type= "checkbox"
                        id="isFriendly"
                        onChange={handleChange}
                        checked = {formData.isFriendly}
                        name = "isFriendly"
                    />
                    <label htmlFor="isFriendly"> Are you friendly</label>
                </span>
                <fieldset>
                    <legend className="font-bold">Current employment status</legend>
                    
                    <input 
                        type="radio"
                        id="unemployed"
                        name = "employment"
                        onChange={handleChange}
                        checked = {formData.employment === "unemployed"}
                        value = "unemployed"
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="part-time"
                        name = "employment"
                        onChange={handleChange}
                        checked = {formData.employment === "part-time"}
                        value = "part-time"
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="full-time"
                        name = "employment"
                        onChange={handleChange}
                        checked = {formData.employment === "full-time"}
                        value = "full-time"
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />                
                </fieldset>
                <label htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select 
                    id="favColor"
                    onChange={handleChange}
                    value = {formData.favColor}
                    name = "favColor"
                >
                    <option value="">-- select your color --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <br />
                <button
                    onSubmit={handleSubmit} 
                    className="border bg-violet-400"
                >Submit</button>        
            </form>
        </div>
        
    )
}

export default Form;