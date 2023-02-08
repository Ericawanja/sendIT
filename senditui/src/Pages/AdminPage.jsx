import React from "react";
import AdminOrders from "./AdminOrders";
import AdminSideNav from "./AdminSideNav";
import AdminStats from "./AdminStats";
import "./styles/styles.admin.css"

function AdminPage() {
  return (
    <div className="adminContainer">
      <div className="adminWrapper">
        <AdminSideNav/>
        <div className="main">
          <AdminStats/>
          <AdminOrders/>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
