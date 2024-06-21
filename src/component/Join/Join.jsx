import React, { useRef, useState } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
const Join = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zt1vza8", "template_lpvh8wq", form.current, {
        publicKey: "h0dNWsnVaEd16ZqOF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="text"
            name="user_email"
            placeholder="Enter your Email address"
          />
          <button type="submit" className="btn btn-j" value="send">
            Join Now
          </button>
          <span>{done && "Thanks for contact me"}</span>
        </form>
      </div>
    </div>
  );
};

export default Join;
