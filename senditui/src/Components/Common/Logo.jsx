import React from "react";

import { GiCargoShip } from "react-icons/gi";

function Logo() {
  return (
    <div className="logo">
      <span className="logoIcon">
        <GiCargoShip className="logoIcon" />
      </span>
      <span className="logoName">SendIT</span>
    </div>
  );
}

export default Logo;
