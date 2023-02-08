import React from "react";

function AdminStats() {
  return (
    <div className="statsContainer">
      <div className="statsWrapper">
        <div className="transit">
          <span className="stat">1244</span>
          <span className="smalltext">Parcels</span>
          <span className="title">On Transit</span>
        </div>
        <div className="delivered">
          <span className="stat">1244</span>
          <span className="smalltext">Parcels</span>
          <span className="title"> Delivered</span>
        </div>
        <div className="created">
          <span className="stat">1244</span>
          <span className="smalltext">Parcels</span>
          <span className="title">created</span>
        </div>
      </div>
    </div>
  );
}

export default AdminStats;
