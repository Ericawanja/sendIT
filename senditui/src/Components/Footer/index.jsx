import React from "react";
import Logo from "../Common/Logo";
import "./footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <Logo />

        <div className="countries column">
          <span className="columnTitle">Countries</span>
          <span>Kenya</span>
          <span>Uganda</span>
          <span>Tanzania</span>
        </div>
        <div className="company column">
          <span className="columnTitle">Company</span>
          <span>About Us</span>
          <span>Careers</span>
          <span>Contact Us</span>
          <span>Privacy Policy</span>
        </div>
        <div className="complaint">
          <span className="columnTitle">Complaint</span>
          <span className="complaintForm">
            <label>Enter your complaint Title</label>
            <input type="text" name="complaint" />

            <label htmlFor="description">Description</label>
            <textarea
              name="complaint"
              id="complaint"
              cols="30"
              rows="5"
            ></textarea>

            <div className="complaintBtns">
              <button className="complaintCancel">Cancel</button>
              <button className="complaintSend">Send</button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
