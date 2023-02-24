import { useState } from "react";

function FormPractise() {
    const [formData2, setFormData2] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        isFavorite: false,


    })

    function openChange(event) {
        const {name, value, type, checked} = event.target
        return setFormData2(prevformData2 => {
            return {
                ...prevformData2, [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function openSubmit(event) {
        event.preventDefault()

        if(formData2.password === formData2.confirmPassword) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }

        if(formData2.isFavorite === true) {
            console.log("Thanks for signing up for our Newsletter")
        }
    }

    return (
        <div>
            <form onSubmit={openSubmit} className="border mt-5 p-4">
                <input
                    className="mt-3 rounded-lg px-2 w-64"
                    type= "email"
                    placeholder="Email"
                    onChange={openChange}
                    name = "email"
                    value = {formData2.email}
                />
                <input 
                    type="password"
                    className="mt-3 w-64 rounded-lg px-2"
                    placeholder="Password"
                    onChange={openChange} 
                    name="password"
                    value={formData2.password}
                    minlength="8" 
                    required
                />
                <br />
                <input 
                    type="password"
                    className="mt-3 w-64 rounded-lg px-2"
                    placeholder="Confirm Password"
                    onChange={openChange} 
                    name="confirmPassword"
                    value={formData2.confirmPassword}
                    minlength="8" 
                    required
                />
                <br />
                <span>
                    <input
                        className="mt-3 rounded-lg px-2"
                        type= "checkbox"
                        id="isFavorite"
                        onChange={openChange}
                        checked = {formData2.isFavorite}
                        name = "isFavorite"
                        value={formData2.isFavorite}
                    />
                    <label htmlFor="isFavorite"> I want to join the newsletter</label>
                </span>
                <br />
                <button onSubmit={openSubmit} className="border rounded-lg p-2 bg-violet-400">Sign Up</button>
            </form>
        </div>
    )
}

export default FormPractise;