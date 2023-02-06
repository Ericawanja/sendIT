import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserParcels } from "../../redux/thunks/userParcels.thunks";
import Loader from "../Common/Loader/index";
import "./orders.css";
import { resetParcelsState } from "../../redux/slices/userParcels.slice";

function Orders() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { parcels, loading, error, status } = useSelector(
    (state) => state.parcels
  );

  const handleSignIn = () => {
    dispatch(resetParcelsState());
    navigate("/login");
  };

  useEffect(() => {
    dispatch(getUserParcels());
  }, []);
  return (
    <>
      {error ? (
        <div className="errorContainer">
          <span className="error">{error}</span>
          <span onClick={handleSignIn} className="signIn">
            Sign in
          </span>
        </div>
      ) : loading ? (
        <Loader />
      ) : (
        <div className="tableContainer">
          <span>
            <h2>{status} Parcels</h2>
            <input
              className="searchInput"
              type="text"
              placeholder="Search parcel..."
            />
          </span>
          {parcels.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>From</th>
                  <th>Destination</th>
                  <th>Weight</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {parcels.map((parcel, index) => {
                  return (
                    <tr key={index}>
                      <td>{parcel.orderId}</td>
                      <td>{parcel._from}</td>
                      <td>{parcel.destination}</td>
                      <td>{parcel.weight}</td>
                      <td>{parcel.price}</td>
                      <td>{parcel.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <>
              {status === "all" && (
                <div className="emptyParcels"> No parcels sent or received yet</div>
              )}
              {status === "received" && (
                <div className="emptyParcels"> No parcels received yet</div>
              )}
              {status === "sent" && (
                <div className="emptyParcels"> No parcels sent yet</div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Orders;
