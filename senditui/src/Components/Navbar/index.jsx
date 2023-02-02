import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "../Common/Logo";
import "./navbar.css";
import { resetParcelsState } from "../../redux/slices/userParcels.slice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    navigate("/");
    dispatch(resetParcelsState());
  };
  return (
    <div className="navbar">
      <div>
        <Logo />
      </div>
      <div className="navitems">
        <span>Home</span>
        <span>Sent</span>
        <span>Received</span>
        <span className="signOut" onClick={handleLogout}>
          Signout
        </span>
      </div>
    </div>
  );
}

export default Navbar;
