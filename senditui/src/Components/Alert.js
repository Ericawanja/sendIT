import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

function Alert({ message }) {
   
  return (
    <div className="alertContainer">
      <span className="alert">
        <FiAlertTriangle className="alertIcon" />
      </span>
      <span className="alertMessage">{message}</span>
    </div>
  );
}

export default Alert;
