import React from "react";
import AdminSideNav from "./AdminSideNav";
import "./styles/styles.admin.css"

function AdminPage() {
  return (
    <div className="adminContainer">
      <div className="adminWrapper">
        <AdminSideNav/>
        <div className="main">
          main section
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
