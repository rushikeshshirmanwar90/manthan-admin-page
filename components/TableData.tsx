import React, { useEffect, useState } from "react";

// domain
import { domain } from "./route/route";

// INTERFACES
import { LeadProps } from "@/interface/lead";

const TableData: React.FC = () => {
  const [leads, setLeads] = useState<LeadProps[]>([]);
  const [leadLoading, setLeadLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `${domain}/api/leads?pagination[page]=1&pagination[pageSize]=10`
        );

        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

        const data = await res.json();

        if (data && data.data) {
          setLeads(data.data);
        } else {
          setLeads([]);
        }
      } catch (err) {
        setError("Failed to fetch leads");
      } finally {
        setLeadLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className="table-data mt-8">
      <div className="order overflow-x-auto">
        <div className="head flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Recent Leads</h3>
          <i className="bx bx-search"></i>
          <i className="bx bx-filter"></i>
        </div>
        {error && (
          <div className="error text-red-600 text-lg font-semibold ">
            {error}
          </div>
        )}
        {leadLoading ? (
          <div>Loading...</div>
        ) : (
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
              {leads.map((order, index) => (
                <tr key={index}>
                  <td className="p-4">{order.id}</td>
                  <td className="p-4">{order.attributes.flat_name}</td>
                  <td className="p-4">{order.attributes.user_name}</td>
                  <td>{order.attributes.createdAt.split("T")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TableData;
