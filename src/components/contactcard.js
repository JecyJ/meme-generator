import React from "react"
import { useState } from "react"
import user from "../images/user.png"
import Star from "./star"
import Filing from "./filing"

export default function Contact() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })  
    
    
    
    function toggleFavorite() {
        return setContact(prevContact => {
            return (
                {...prevContact, isFavorite: !prevContact.isFavorite}
            )
        })
    }  
    
    return (
        <div>
            <main className="mt-6 border rounded-lg border-gray-500 px-4 py-8">
                <article className="card">
                    <img src={user} className="w-6/7" alt=""/>
                    <div className="card--info">
                        <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
                        <h2 className="font-semibold text-4xl mb-4">
                            {`${contact.firstName} ${contact.lastName}`}
                        </h2>
                        <p className="mb-1">{contact.phone}</p>
                        <p className="">{contact.email}</p>
                    </div>
                    
                </article>
            </main>
            <Filing />            
        </div>
        
    )
}
