import React from "react";
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

const page = () => {
  const users = [
    {
      userId: 1,
      name: "John Doe",
      phoneNumber: "123-456-7890",
      gmailId: "johndoe@gmail.com",
    },

    {
      userId: 2,
      name: "Jane Smith",
      phoneNumber: "234-567-8901",
      gmailId: "janesmith@gmail.com",
    },

    {
      userId: 3,
      name: "Alice Johnson",
      phoneNumber: "345-678-9012",
      gmailId: "alicejohnson@gmail.com",
    },

    {
      userId: 4,
      name: "Bob Brown",
      phoneNumber: "456-789-0123",
      gmailId: "bobbrown@gmail.com",
    },

    {
      userId: 5,
      name: "Charlie Davis",
      phoneNumber: "567-890-1234",
      gmailId: "charliedavis@gmail.com",
    },
  ];

  return (
    <div className="flex gap-4">
      <div className="w-[17%]">
        <Sidebar active={"users"} />
      </div>
      <main className="flex-1 p-6 grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>All Orders</CardTitle>
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
                {users.map((user) => (
                  <TableRow>
                    <TableCell className="font-medium">{user.userId}</TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="font-medium">
                      {user.phoneNumber}
                    </TableCell>
                    <TableCell className="font-medium">
                      {user.gmailId}
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
