import React, { useEffect } from "react";
import { IoEllipsisVertical } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAdminParcels } from "../redux/thunks/admin.thunks";
import Loader from "./../Components/Common/Loader";

function AdminOrders() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { parcels, loading, error } = useSelector((state) => state.adminData);
  const { user } = useSelector((state) => state.user);

  console.log(user)
  useEffect(() => {
   
     dispatch(getAdminParcels("all"));
  }, []);
  return (
    <div className="adminOrdersContainer">
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="error">{error}</div>
      ) : parcels.length > 0 ? (
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
          <tbody>
            {parcels.map((data) => {
              return (
                <tr>
                  <td>123</td>
                  <td>Kisumu, Kenya</td>
                  <td>Nairobi, Kenya</td>
                  <td>Tuesday 2023</td>
                  <td>On transit</td>
                  <td className="ellipsis">
                    <IoEllipsisVertical className="ellipsisIcon" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>No parcels found</h1>
      )}
    </div>
  );
}

export default AdminOrders;
