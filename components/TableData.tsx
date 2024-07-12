import React from "react";

const TableData: React.FC = () => {
  const orders = [
    {
      id: "#P-124",
      FlatName: "The Metropolitan Manor",
      customerName: "Mr. Pranjal",
      total: "12 Feb 2024",
    },
    {
      id: "#P-125",
      FlatName: "The Loft Life",
      customerName: "Mr. Nikhil",
      total: "18 Jan 2024",
    },
    {
      id: "#P-165",
      FlatName: "The Urban Haven",
      customerName: "Mr. Chinmay",
      total: "25 Sept 2024",
    },
    {
      id: "#P-124",
      FlatName: "The Industrial Residence",
      customerName: "Mr. Rushikesh",
      total: "10 Oct 2024",
    },
    {
      id: "#P-125",
      FlatName: "The Modern Loft",
      customerName: "Mr. Tanmay",
      total: "11 Oct 2024",
    },
    {
      id: "#P-165",
      FlatName: "The Luxe Loft",
      customerName: "Mr. Raamu",
      total: "16 Dec 2024",
    },
  ];

  return (
    <div className="table-data mt-8">
      <div className="order overflow-x-auto">
        <div className="head flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Recent Orders</h3>
          <i className="bx bx-search"></i>
          <i className="bx bx-filter"></i>
        </div>
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="p-4 text-left">Flat Id</th>
              <th className="p-4 text-left">Flat Name</th>
              <th className="p-4 text-left">Customer Name</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.FlatName}</td>
                <td className="p-4">{order.customerName}</td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
