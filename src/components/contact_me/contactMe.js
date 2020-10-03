import React, {useState} from "react";


function ContactMe() {
    // State
    const [user, setUser] = useState({
        firstName: "",
        lastName: ""
    })

    const handleFormChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })    
    }

    // Handler Functions
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("USER", user)
        // setUser({})
    }
    

    return (
        <div className="contact-me-wrapper">
            <form onSubmit={handleSubmit}>

                <label htmlFor="">First Name</label>
                <input type="text" name="firstName" value={user.firstName} onChange={handleFormChange} />

                <label htmlFor="">Last Name</label>
                <input type="text" name="lastName" value={user.lastName} onChange={handleFormChange} />

                <button type="submit">send</button>

            </form>
        </div>
    )
}

export default ContactMe;