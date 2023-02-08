import React from "react";

function AdminSideNav() {
  return (
    <div className="sideNavContainer">
      <div className="navWrapper">
        <div className="create">Create Parcel</div>
        <div className="navItems">
          <h2>Parcels</h2>
          <span>Overview</span>
          <span>On Transit</span>
          <span>To be delivered</span>
          <span>Delivered</span>
          <span>Recently created </span>
          <span>Recently delivered</span>
        </div>
      </div>
    </div>
  );
}

export default AdminSideNav;
