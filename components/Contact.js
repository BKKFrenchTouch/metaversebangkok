import ContactStyleClass from "../componentsStyle/ContactStyle";
// import ContactForm from "../components/ContactForm";

const ContactStyle = new ContactStyleClass();

const Contact = () => {
    return (
        <section id="8" style={ContactStyle.Section}>
            <div style={ContactStyle.ContentDiv}>
                <h2 style={ContactStyle.ContentTitle}>Contact Us</h2>
            </div>
            <div style={{textAlign: 'center'}}>
                {/* <ContactForm/> */}
                <p style={{color: 'white'}}>
                    If you want to contact the company:<br></br> 
                    - Send a mail to: benjamin.conrazier@gmail.com with metaverse-bkk:*demands* as subject.<br></br> 
                    - What&apos;s app: +66 91 050 1408<br></br> 
                    - Use BKK French Touch contact form: https://bkkfrenchtouch.com/contact/<br></br> 
                    <br></br>
                    If you want to contact the developper:<br></br> 
                    - Github: https://github.com/RJSOG<br></br> 
                    - Discord: [real] Jesus (son of god)#6629<br></br> 
                    - Twitter: @RealJesusSonOfG<br></br> 
                    - Mail: eliott.donatien@viacesi.fr<br></br> 
                </p>
            </div>
        </section>
    )
}
export default Contact