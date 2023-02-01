import React from "react";
import "./orders.css"

function Orders() {
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
  return (
    <div className="tableContainer">
      <span className="searchInput"><input type="text" placeholder="Search parcel..." /></span>
      <table>
        <thead>
          <th>Order Id</th>
          <th>From</th>
          <th>Destination</th>
          <th>Weight</th>
          <th>Price</th>
          <th>Status</th>
        </thead>
        {dummyParcels.map((parcel) => {
          return (
            <tr>
              <td>{parcel.orderId}</td>
              <td>{parcel.from}</td>
              <td>{parcel.destination}</td>
              <td>{parcel.weight}</td>
              <td>{parcel.price}</td>
              <td>{parcel.status}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Orders;
