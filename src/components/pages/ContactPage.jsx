import React from "react";
import "./ContactPage.css";

const ContactPage = () => {

   return (
     //social media links 
     
     
     
     
     //form
     <div className="form-container">
         <p>Enter your e-mail address to be added to my mailing list. You will get my personal newsletters and notifications of upcoming blog articles.</p>
         <div className="email-form">
         <form>
            <input className="email-input" type="text" size="50"></input>
            <br></br><input className="email-input-button" type="submit" value="Join"></input>
         </form>
         </div>
      </div>
   )
}

export default ContactPage;