import React, { useState } from 'react'
import './Contact.sass'
import emailjs, { init } from 'emailjs-com'
init('user_REUMllQclwmLqErmaHbkL')

function validateEmail (emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}

export default function () {
    const [sent, setSent] = useState(false)
    const [success, setSuccess] = useState(null)
    const [errorMessage, setErrorMessage] = useState("")

    function sendEmail() {
        const messageArea = document.getElementById("messageArea")
        const nameInput = document.getElementById("nameInput")
        const emailInput = document.getElementById("emailInput")
        if (messageArea.value === "") {
            setErrorMessage("Please enter a message.")
            messageArea.focus()
            return
        } else if (nameInput.value === "") {
            setErrorMessage("Please enter your name.")
            nameInput.focus()
            return
        } else if (emailInput.value === "") {
            setErrorMessage("Please enter your email.")
            emailInput.focus()
            return
        } else if (!validateEmail(emailInput.value)) {
            setErrorMessage("Please enter a valid email.")
            emailInput.focus()
            return
        }
        setSent(true)
        emailjs.sendForm("service_3dajah7","template_vtw03dc", '#contact-form')
            .then(function(response) {
                setSuccess(true)
                console.log('SUCCESS!', response.status, response.text);
            }, function(err) {
                setSuccess(false)
                console.log('FAILED...', err);
            })
    }

    const form = (
        <form id="contact-form">
            <div className='contact-comment'>
                <textarea className='contact-text-area border' id="messageArea" placeholder="Message here" name="message"></textarea>
                <br/>
            </div>
            <div className="contact-right">
                <div>
                    <label>Name: </label>
                    <input type="text" id="nameInput" name="user_name" className="border"/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" id="emailInput" name="user_email" className="border"/>
                </div>
                <div>{errorMessage}</div>
                <div className='submit' onClick={sendEmail}>
                    Submit
                </div>
            </div>
        </form>
    )

    return (
        <div className="contactCtn">
            <div className="heading">~/Contact</div> 
            <div className="contactPrompt">
                Get in touch with me!
                <br />
                Send a message below or email me at <a href="mailto:david@davidcao.sh">david@davidcao.sh</a> </div>
            <div className='contactFormCtn'>            
                <br/>
                {sent ? 
                    success === true ? (
                        <div className="responseMsg"><br/><br/>Message sent, thank you! 😊</div>
                    ) : (
                            success === false ? (
                                <div className="responseMsg"><br/><br/>Message failed to send, please try again!</div>
                            ) : (
                                <div className="responseMsg"><br/><br/>Sending message...</div>
                            )
                    )
                : form}
            </div>
        </div>
    )
}