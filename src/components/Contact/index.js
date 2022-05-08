import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";


function Contact() {
    //set variables for use in form
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [text, setText] = useState('');
    const [errMessage, setErrMessage] =useState('');

    const inputHandle = (e) => {
        //get the values of the input
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        //set values
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else if (inputType === 'text') {
            setText(inputValue);
        }
    };

    const submitHandle = (e) => {
        e.preventDefault();

        //validate
        if (!validateEmail(email)) {
            setErrMessage('This email is no email at all!');
            return;
        }

        if (!userName) {
            setErrMessage('Who even are you? A name, some name, please.');
            return;
        }

        if (!text) {
            setErrMessage('Hemmingway was not so terse - please include a message.');
            return;
        }
        
        //reset field values
        setUserName('');
        setText('');
        setEmail('');
        alert(`tallyho, ${userName}`);
    };

    const submit = 'submit -->'

    return (
        <div>
            <form className="form">
                <textarea value={text} name="text" onChange={inputHandle} type="text" placeholder="message area" />
                <input value={email} name="email" onChange={inputHandle} type="email" placeholder="email" />
                <input value={userName} name="userName" onChange={inputHandle} type="userName" placeholder="username" />
                <button type="button" className="contactsubmit" onClick={submitHandle}>{submit}</button><br></br>
                {errMessage && (
                <div>
                    <p className="error-text">{errMessage}</p>
                </div>
            )}
            </form>
        </div>
    )
};

export default Contact;
