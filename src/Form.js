import React from "react";
import "./Form.css";

import LocalIcon from "@material-ui/icons/LocationCity";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

function Form() {
  return (
    <div className="form">
      <div className="form__heading">
        <h1>CONTACT</h1>
        <p>Fan? Drop a note!</p>
      </div>
      <div className="form__main">
        <div className="form__info">
          <div className="form__row">
            <LocalIcon />
            <h2>Chicago, US</h2>
          </div>
          <div className="form__row">
            <PhoneIcon />
            <h2>Phone: +9290078601</h2>
          </div>
          <div className="form__row">
            <MailIcon />
            <h2>Mail: mail@gmail.com</h2>
          </div>
        </div>
        <div className="form__input">
          <div className="form__inputGroup">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="form__inputMessage">
            <input type="text" name="message" placeholder="Message" />
          </div>
          <button type="submit">SEND</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
