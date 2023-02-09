import React from "react";
import {IoEllipsisVertical} from "react-icons/io5"

function AdminOrders() {
  const dummy = [1,2,3]
  return (
    <div className="adminOrdersContainer">
      <table className="adminTable">
        <thead>
          <tr>
            <th>Order id</th>
            <th>From</th>
            <th>Destination</th>
            <th>Created on</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{dummy.map((data) => {
            return <tr>
                <td>123</td>
                <td>Kisumu, Kenya</td>
                <td>Nairobi, Kenya</td>
                <td>Tuesday 2023</td>
                <td>On transit</td>
                <td className="ellipsis"><IoEllipsisVertical className="ellipsisIcon"/></td>
            </tr>
        })}</tbody>
      </table>
    </div>
  );
}

export default AdminOrders;
