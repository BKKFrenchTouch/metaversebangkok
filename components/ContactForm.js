import ContactFormStyle from '../componentsStyle/ContactFormStyle'
import {formatMail, sendMail} from '../utils/mailComponent';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import React, { useRef, useState } from 'react';

const FormStyle = new ContactFormStyle();

const ContactForm = () => {
    const [phone, setPhone] = useState("");
    const subjectRef = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);
    const formSubmitMsgRef = useRef(null);

    let handleMouseOver = (e) => {
        e.target.style.fontSize = '1.2vw';
        e.target.style.width = '6vw';
        e.target.style.cursor = 'pointer';
    }

    let handlerMouseLeave = (e) => {
        e.target.style.fontSize = '1vw';
        e.target.style.width = '5vw';
    }

    let checkDataValue = () => {
        let result = true;
        const phoneLength = phone.length;
        const allRef = [nameRef, subjectRef, emailRef, messageRef];
        if(phoneLength === 0){
            result = false;
        }else{
            allRef.forEach(ref => {
                if(ref.current.value === "" || !ref.current.value || ref.current.value === undefined || ref.current.value.length === 0){
                    result = false;
                } 
            });
        }
        return result
    }
    
    let handleSubmit = (e) => {
        e.preventDefault();
        formSubmitMsgRef.current.textContent = '';
        if(checkDataValue()){
            const formdata = {
                Name: nameRef.current.value,
                Subject: subjectRef.current.value,
                Email: emailRef.current.value,
                Phone: '+'+phone,
                Message: messageRef.current.value
            }
            const data = formatMail(formdata);
            formSubmitMsgRef.current.textContent = (sendMail(data)) ? 'Success sending email' : 'Failed to sent email!';
        } else {
            formSubmitMsgRef.current.textContent = "Form Error: you need to fill all the information"
        }
        clearRefValue();
    }

    let clearRefValue = () => {
        nameRef.current.value = null
        subjectRef.current.value = ""
        emailRef.current.value = null
        phoneRef.current.numberInputRef.value = null
        messageRef.current.value = null
    }

    return (
        <div style={FormStyle.div}>
            <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <div style={{...FormStyle.subDiv, ...FormStyle.div}}>
                    <label style={FormStyle.label}>Suject</label>
                    <select name='subject' ref={subjectRef} style={FormStyle.inputStyle}>
                        <option value="">--Please choose an option--</option>
                        <option value="Metaverses">Metaverses</option>
                        <option value="CryptoExchanges">Crypto Exchanges</option>
                        <option value="CryptoStaking">Crypto Staking</option>
                        <option value="CryptoInvestements">Crypto Investements</option>
                        <option value="CryptoServices">Crypto Services</option>
                        <option value="NFTGaming">NFTGaming</option>
                        <option value="JoinGuild">Join Our Guild</option>
                    </select>
                </div>
                <div style={{...FormStyle.subDiv, ...FormStyle.div}}>
                    <label style={FormStyle.label}>Name</label>
                    <input type="text" ref={nameRef} style={FormStyle.inputStyle}/>
                </div>
                <div style={{...FormStyle.subDiv, ...FormStyle.div}}>
                    <label style={FormStyle.label}>Email address</label>
                    <input type="email" ref={emailRef} style={FormStyle.inputStyle}/>
                </div>
                <div style={{...FormStyle.subDiv, ...FormStyle.div}}>
                    <label style={FormStyle.label}>Phone Number / WhatsApp</label>
                    <PhoneInput
                        country={'th'}
                        value={phone}
                        onChange={setPhone} 
                        ref={phoneRef}
                        inputStyle={FormStyle.phoneInput}
                        containerStyle={FormStyle.phoneContainer}
                        dropdownStyle={FormStyle.phoneDropDown}    
                    />
                </div>
                <div style={{...FormStyle.subDiv, ...FormStyle.div}}>
                    <label style={FormStyle.label}>Message</label>
                    <textarea rows="10" ref={messageRef} style={FormStyle.textArea}></textarea>
                </div>
                <button type="submit" value='Submit' style={FormStyle.submit} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href='#8'>Submit</button>
                <p ref={formSubmitMsgRef} style={{fontSize: '1.2vw', lineHeight:'1.6', color:'white'}}></p>
            </form>
        </div> 
    )
}

export default ContactForm;