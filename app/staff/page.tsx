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

import { staffProps } from "@/interface/lead";
import { domain } from "@/components/route/route";
import AllocatedLead from "@/components/model/AllocatedLead";
import AddStaff from "@/components/model/AddStaff";

const page = () => {
  const [staffData, setStaffData] = useState<staffProps[]>([]);
  const [staffLoading, setStaffLoading] = useState<boolean>(true);

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
  }, [staffLoading]);

  return (
    <div className="flex gap-4">
      <div className="w-[17%]">
        <Sidebar active={"Staff"} />
      </div>
      <main className="flex-1 p-6 grid gap-6">
        <Card>
          <CardHeader className="flex-row items-center gap-10">
            <CardTitle>All Staff</CardTitle>
            <div className="">
              <AddStaff />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Number</TableHead>
                  <TableHead>Total Leads Allocated</TableHead>
                  <TableHead>Table Lead Closed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staffData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {item.attributes.name}
                    </TableCell>
                    <TableCell className="font-medium">
                      {item.attributes.number}
                    </TableCell>

                    <TableCell className="font-medium">
                      <AllocatedLead name={item.attributes.name} />
                    </TableCell>

                    <TableCell className="font-medium">3</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default page;
