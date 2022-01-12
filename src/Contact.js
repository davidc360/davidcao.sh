import React, { useState } from 'react'
import './Contact.sass'
import emailjs, { init } from 'emailjs-com'
init('user_REUMllQclwmLqErmaHbkL')

export default function () {
    const [sent, setSent] = useState(false)
    const [success, setSuccess] = useState(null)

    function sendEmail() {
        if (document.getElementById("messageArea").value === "") {
            return
        }
        setSent(true)
        // emailjs.sendForm("service_3dajah7","template_vtw03dc", '#contact-form')
        //     .then(function(response) {
        //         setSuccess(true)
        //         console.log('SUCCESS!', response.status, response.text);
        //     }, function(err) {
        //         setSuccess(false)
        //         console.log('FAILED...', err);
        //     })
    }

    const form = (
        <form id="contact-form">
            <div className='contact-comment'>
                <textarea className='contact-text-area border' id="messageArea" placeholder="Message here" name="message"></textarea>
                <br/>
            </div>
            <div>
                <div>
                    <label>Name: </label>
                    <input type="text" name="user_name" className="border"/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="user_email" className="border"/>
                </div>
                <div className='submit' onClick={sendEmail}>
                    Submit
                </div>
            </div>
        </form>
    )

    return (
        <div className="contactCtn">
            <div className="heading">~/Contact</div> 
            <div className='contact'>            
                <div>
                        Get in touch with me! Send a message below.
                </div>
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