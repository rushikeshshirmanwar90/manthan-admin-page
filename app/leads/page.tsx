"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/Table";

// importing interface
import { LeadProps, staffProps } from "@/interface/lead";

// importing backend url
import { domain } from "@/components/route/route";

const Page = () => {
  const [clientLead, setClientLead] = useState<LeadProps[]>([]);
  const [brokerLead, setBrokerLead] = useState<LeadProps[]>([]);
  const [leadType, setLeadType] = useState<string>("clientLead");
  const [staffData, setStaffData] = useState<staffProps[]>([]);

  // Loading states
  const [brokerLoading, setBrokerLoading] = useState<boolean>(true);
  const [clientLoading, setClientLoading] = useState<boolean>(true);
  const [staffLoading, setStaffLoading] = useState<boolean>(true);

  // State to trigger reloads
  const [reload, setReload] = useState<boolean>(false);

  // GETTING BROKER LEADS DATA
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${domain}/api/leads`);
      const data = await res.json();
      setClientLead(data.data);
      setClientLoading(false);
    };

    getData();
  }, [reload]);

  // GETTING DIRECT CLIENT DATA
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${domain}/api/broker-leads`);
      const data = await res.json();
      setBrokerLead(data.data);
      setBrokerLoading(false);
    };
    getData();
  }, [reload]);

  // FETCHING THE STAFF DATA
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `${domain}/api/user-ids?filters[$and][0][user_type][$eq]=staff`
      );
      const data = await res.json();
      setStaffData(data.data);
      setStaffLoading(false);
    };
    getData();
  }, [reload]);

  const assignStaff = async (name: string, leadType: string, id: number) => {
    try {
      let api = "";
      if (leadType === "clientLead") {
        api = `${domain}/api/leads/${id}`;
      } else {
        api = `${domain}/api/broker-leads/${id}`;
      }

      const res = await fetch(api, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            assign: name,
          },
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error response from server:", errorText);
        alert("Something went wrong: " + errorText);
      } else {
        alert("Assigned Successfully");
        setReload((prev) => !prev); // Trigger reload
      }
    } catch (error: any) {
      console.error("Network error:", error);
      alert("Something went wrong: " + error.message);
    }
  };

  return (
    <div className="flex gap-4">
      <div className="w-[17%]">
        <Sidebar active={"Leads"} />
      </div>
      <main className="flex-1 p-6 grid gap-6">
        <Card>
          <CardHeader className="flex items-center flex-row gap-10">
            <CardTitle>Leads</CardTitle>
            <div>
              <select
                onChange={(e) => {
                  setLeadType(e.target.value);
                }}
                name="type"
                defaultValue="clientLead"
              >
                <option value="clientLead">Direct Client Lead</option>
                <option value="brokerLead">Leads By Broker</option>
              </select>
            </div>
          </CardHeader>

          {leadType === "clientLead" ? (
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Flat Id</TableHead>
                    <TableHead>Customer Name</TableHead>
                    <TableHead>Flat Name</TableHead>
                    <TableHead>Assign To</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clientLead.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        #P-{item.attributes.flat_id}
                      </TableCell>

                      <TableCell className="font-medium">
                        Mr. {item.attributes.user_name}
                      </TableCell>

                      <TableCell className="font-medium">
                        {item.attributes.flat_name}
                      </TableCell>

                      <TableCell className="font-medium">
                        <select
                          onChange={(e) => {
                            assignStaff(e.target.value, "clientLead", item.id);
                          }}
                          className="select select-bordered w-full max-w-xs"
                          value={item.attributes.assign || ""}
                        >
                          <option disabled value="">
                            Select The Staff
                          </option>
                          {staffData.map((staff, index) => (
                            <option key={index} value={staff.attributes.name}>
                              {staff.attributes.name}
                            </option>
                          ))}
                        </select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          ) : (
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Flat Id</TableHead>
                    <TableHead>Customer Name</TableHead>
                    <TableHead>Broker Name</TableHead>
                    <TableHead>Flat Name</TableHead>
                    <TableHead>Assign To</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {brokerLead.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        #P-{item.attributes.flat_id}
                      </TableCell>
                      <TableCell className="font-medium">
                        Mr. {item.attributes.user_name}
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.attributes.assign}
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.attributes.flat_name}
                      </TableCell>
                      <TableCell className="font-medium">
                        <select
                          onChange={(e) => {
                            assignStaff(e.target.value, "brokerLead", item.id);
                          }}
                          className="select select-bordered w-full max-w-xs"
                          value={item.attributes.assign || ""}
                        >
                          <option disabled value="">
                            Select The Staff
                          </option>
                          {staffData.map((staff, index) => (
                            <option key={index} value={staff.attributes.name}>
                              {staff.attributes.name}
                            </option>
                          ))}
                        </select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          )}
        </Card>
      </main>
    </div>
  );
};

export default Page;
