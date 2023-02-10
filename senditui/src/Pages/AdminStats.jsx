import React from "react";
import { useSelector } from "react-redux";

function AdminStats() {
  const { parcels, loading } = useSelector((state) => state.adminData);
  console.log(parcels);
  // let onTransit = parcels?.map(p=>p.status === "on transit").length || 0
  // let delivered = parcels?.map(p=>p.status === "delivered").length || 0
  // let pending = parcels?.map(p=>p.status === "pending").length || 0
  return (
    <div className="statsContainer">
      <div className="statsWrapper">
        <div className="transit">
          <span className="stat">
            {loading
              ? loading
              : parcels.map((p) => p.status === "on transit").length}
          </span>
          <span className="smalltext">Parcels</span>
          <span className="title">On Transit</span>
        </div>
        <div className="delivered">
          <span className="stat">
            {loading
              ? loading
              : parcels.map((p) => p.status === "delivered").length}
          </span>
          <span className="smalltext">Parcels</span>
          <span className="title"> Delivered</span>
        </div>
        <div className="created">
          <span className="stat">
          {loading
              ? loading
              : parcels.map((p) => p.status === "pending").length}
          </span>
          <span className="smalltext">Parcels</span>
          <span className="title">created</span>
        </div>
      </div>
    </div>
  );
}

export default AdminStats;
