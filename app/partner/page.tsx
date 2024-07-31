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
import { brokerProps } from "@/interface/user";
import { domain } from "@/components/route/route";

const page = () => {
  const [user, setUser] = useState<brokerProps[]>([]);

  // LOADING STATES
  const [userLoading, setUserLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `${domain}/api/user-ids?filters[$and][0][user_type][$eq]=broker`
      );

      const data = await res.json();

      setUser(data.data);

      setUserLoading(false);
    };
    getData();
  }, [userLoading]);

  return (
    <div className="flex gap-4">
      <div className="w-[17%]">
        <Sidebar active={"channel partner"} />
      </div>
      <main className="flex-1 p-6 grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Our Channel Partner</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>user Id</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Gmail id</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {user.map((user) => (
                  <TableRow>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell className="font-medium">
                      {user.attributes.name}
                    </TableCell>
                    <TableCell className="font-medium">
                      {user.attributes.phone}
                    </TableCell>
                    <TableCell className="font-medium">
                      {user.attributes.mail}
                    </TableCell>
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
