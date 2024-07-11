import React from "react";

const TableData: React.FC = () => {
  
  const orders = [
    {
      id: "#P-124",
      section: "TopRoof",
      tableNum: "3",
      total: "₹1,800",
    },
    {
      id: "#P-125",
      section: "Bar",
      tableNum: "6",
      total: "₹2,800",
    },
    {
      id: "#P-165",
      section: "Outdoor",
      tableNum: "8",
      total: "₹2,580",
    },
    {
      id: "#P-124",
      section: "TopRoof",
      tableNum: "3",
      total: "₹1,800",
    },
    {
      id: "#P-125",
      section: "Bar",
      tableNum: "6",
      total: "₹2,800",
    },
    {
      id: "#P-165",
      section: "Outdoor",
      tableNum: "8",
      total: "₹2,580",
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
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Section</th>
              <th className="p-4 text-left">Table NO.</th>
              <th className="p-4 text-left">Total Bill</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.section}</td>
                <td className="p-4">{order.tableNum}</td>
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
