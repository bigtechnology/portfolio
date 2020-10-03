import React, {useState} from "react";


function ContactMe() {
    // State
    const [user, setUser] = useState({
        firstName: "",
        lastName: ""
    })

    // Handler Functions
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("USER", e.target.value)
        // setUser({})
    }
    

    return (
        <div className="contact-me-wrapper">
            <form onSubmit={handleSubmit}>

                <label htmlFor="">First Name</label>
                <input type="text" name="first-name" value="first-name"/>

                <label htmlFor="">Last Name</label>
                <input type="text" name="last-name" value="last-name"/>

                <button type="submit">send</button>

            </form>
        </div>
    )
}

export default ContactMe;