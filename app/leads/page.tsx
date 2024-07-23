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
import { clientLeadProps, brokerLeadProps } from "@/interface/lead";

// importing backend url
import { domain } from "@/components/route/route";

const page = () => {
  const [clientLead, setClientLead] = useState<clientLeadProps[]>([]);
  const [brokerLead, setBrokerLead] = useState<brokerLeadProps[]>([]);
  const [leadType, setLeadType] = useState<string>("clientLead");

  // Loading states
  const [brokerLoading, setBrokerLoading] = useState<boolean>(true);
  const [clientLoading, setClientLoading] = useState<boolean>(true);

  // GETTING BROKER LEADS LEADS DATA
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${domain}/api/leads`);
      const data = await res.json();
      setClientLead(data.data);
      setClientLoading(false);
    };
    getData();
  }, [clientLoading]);

  // GETTING DIRECT CLIENT DATA
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${domain}/api/broker-leads`);
      const data = await res.json();
      setBrokerLead(data.data);
      setBrokerLoading(false);
    };
    getData();
  }, [brokerLoading]);

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
              >
                <option selected value="clientLead">
                  Direct Client Lead
                </option>
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
                        <select className="select select-bordered w-full max-w-xs">
                          <option disabled selected>
                            Select The Staff
                          </option>
                          <option>Rushikesh</option>
                          <option>Pranjal</option>
                          <option>Jonny</option>
                          <option>Tejas</option>
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
                        #P-{item.attributes.flatId}
                      </TableCell>
                      <TableCell className="font-medium">
                        Mr. {item.attributes.leadName}
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.attributes.brokerName}
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.attributes.flat_name}
                      </TableCell>
                      <TableCell className="font-medium">
                        <select className="select select-bordered w-full max-w-xs">
                          <option disabled selected>
                            Select The Staff
                          </option>
                          <option>Rushikesh</option>
                          <option>Pranjal</option>
                          <option>Jonny</option>
                          <option>Tejas</option>
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

export default page;
