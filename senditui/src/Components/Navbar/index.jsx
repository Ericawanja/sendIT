import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "../Common/Logo";
import "./navbar.css";
import { resetParcelsState } from "../../redux/slices/userParcels.slice";
import { resetUserState } from "../../redux/slices/user.slice";
import { getUserParcels } from "../../redux/thunks/userParcels.thunks";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    navigate("/");
    dispatch(resetParcelsState());
    dispatch(resetUserState())
  };
  return (
    <div className="navbar">
      <div>
        <Logo />
      </div>
      <div className="navitems">
        <span onClick={()=>{dispatch(getUserParcels('all'))}}>All</span>
        <span onClick={()=>{dispatch(getUserParcels('sent'))}}>Sent</span>
        <span onClick={()=>{dispatch(getUserParcels('received'))}}>Received</span>
        <span className="signOut" onClick={handleLogout}>
          Signout
        </span>
      </div>
    </div>
  );
}

export default Navbar;
