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

// IMPORTING REACT ICONS
import { IoTrashBinSharp } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import ClosedLeads from "@/components/model/ClosedLead";

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

  const deleteStaff = async (id: number) => {
    const res = await fetch(`${domain}/api/user-ids/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Deleted Successfully");
    }
  };

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
            {staffLoading ? (
              <div> Loading.... </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Number</TableHead>
                    <TableHead>Total Leads Allocated</TableHead>
                    <TableHead>Table Lead Closed</TableHead>
                    <TableHead>Action</TableHead>
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

                      <TableCell className="font-medium">
                        <ClosedLeads name={item.attributes.name} />
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="flex items-center justify-center gap-3">
                          <div className="border border-yellow-500 p-2 rounded-xl bg-yellow-500">
                            <FaPencil color="white" size={20} />
                          </div>

                          <button
                            onClick={() => {
                              deleteStaff(item.id);
                            }}
                            className="border border-red-600 p-2 rounded-xl bg-red-600"
                          >
                            <IoTrashBinSharp color="white" size={20} />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default page;
