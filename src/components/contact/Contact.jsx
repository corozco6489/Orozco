import { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
import { useRef } from "react";



export default function Contact() {
  const formRef = useRef();
 
  const [message, setMessage] = useState(false);
  



  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g7n6n8m",
        "template_9n4oap7",
        formRef.current,
        "user_yqimngPQxBoZsByq1zEN0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
      <h2 > What's your story ?
            
      </h2>
        <h1>Send us an email about the concerns you have about us.</h1>
        
        <form ref={formRef} onSubmit={handleSubmit}>
            <input            
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              
              type="text"
              placeholder="Subject"
              name="user_subject"
            />

            <input
             
              type="text"
              placeholder="Email"
              name="user_email"
            />

            <textarea
              
              name="message"
              placeholder="Message"
              id=""
              rows="5"
            ></textarea>
            <button>Submit</button>

            {message && "Thank You...."}
          </form>
      </div>
    </div>
  );
}
