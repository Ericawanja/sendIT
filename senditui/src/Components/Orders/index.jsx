import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserParcels } from "../../redux/thunks/userParcels.thunks";
import "./orders.css";

function Orders() {
  const dispatch = useDispatch();

  const { parcels } = useSelector((state) => state);
  console.log(parcels);
  const dummyParcels = [
    {
      orderId: 9605,
      from: "Kampala uganda",
      destination: "Kisumu, kenya",
      weight: 1.5,
      price: 23467,
      status: "delivered",
    },
    {
      orderId: 9605,
      from: "Kampala uganda",
      destination: "Kisumu, kenya",
      weight: 1.5,
      price: 23467,
      status: "delivered",
    },
    {
      orderId: 9605,
      from: "Kampala uganda",
      destination: "Kisumu, kenya",
      weight: 1.5,
      price: 23467,
      status: "delivered",
    },
    {
      orderId: 9605,
      from: "Kampala uganda",
      destination: "Kisumu, kenya",
      weight: 1.5,
      price: 23467,
      status: "delivered",
    },
    {
      orderId: 9605,
      from: "Kampala uganda",
      destination: "Kisumu, kenya",
      weight: 1.5,
      price: 23467,
      status: "delivered",
    },
    {
      orderId: 9605,
      from: "Kampala uganda",
      destination: "Kisumu, kenya",
      weight: 1.5,
      price: 23467,
      status: "delivered",
    },
  ];

  useEffect(() => {
    dispatch(getUserParcels());
  }, []);
  return (
    <div className="tableContainer">
      <span className="searchInput">
        <input type="text" placeholder="Search parcel..." />
      </span>
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
          {dummyParcels.map((parcel, index) => {
            return (
              <tr key={index}>
                <td>{parcel.orderId}</td>
                <td>{parcel.from}</td>
                <td>{parcel.destination}</td>
                <td>{parcel.weight}</td>
                <td>{parcel.price}</td>
                <td>{parcel.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
