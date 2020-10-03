import React, {useState} from "react";
import ContactModal from "../modals/contactModal";
import "./contactMe.css"


function ContactMe() {
    // State
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message:""
    })
    
    // enable/disable modal
    const [disabled, setDisabled] = useState(false)

    const handleFormChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })    
    }

    // Handler Functions
    const handleSubmit = (e) => {
        e.preventDefault();
        // call the modal
        setDisabled(true)
        setUser({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message:""
        })
    }


    

    return (
        <div className="contact-me-wrapper">
            {/* modal if the user submits */}
            {disabled ? <ContactModal/> : ""}
            <form className="form" onSubmit={handleSubmit}>

                <div className="first-last">
                
                <input placeholder="First Name" size="20" type="text" name="firstName" value={user.firstName} onChange={handleFormChange} />

              
                <input placeholder="Last Name" size="20" type="text" name="lastName" value={user.lastName} onChange={handleFormChange} />
                </div>

                <div className="email-phone">
              
                <input placeholder="Email" size="20" type="text" name="email" value={user.email} onChange={handleFormChange} />

        
                <input placeholder="Phone (not required)" size="20" type="text" name="phone" value={user.phone} onChange={handleFormChange} />
                </div>

                <div className="message-wrapper">
            
                <textarea className="contact-input contact-message" placeholder="Message Us!" name="message" cols="50" rows="5" wrap="auto" maxLength="255" onChange={handleFormChange} ></textarea>
                </div>

                <button type="submit">send</button>

            </form>
        </div>
    )
}

export default ContactMe;