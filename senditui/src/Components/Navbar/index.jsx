import React from "react";
import Logo from "../Common/Logo";
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div >
        <Logo/>
      </div>
      <div className="navitems">
        <span>Home</span>
        <span>Sent</span>
        <span>Received</span>
        <span className="signOut">Signout</span>
      </div>
    </div>
  );
}

export default Navbar;
