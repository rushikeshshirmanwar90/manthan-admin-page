import React from "react";
import Customer from "@/components/Customer";
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
  return (
    <div className="flex gap-4">
      <div className="w-[17%]">
        <Sidebar active={"Staff"} />
      </div>
      <main className="flex-1 p-6 grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>All Staff</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Section</TableHead>
                  <TableHead>Table Allocated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Rushikesh</TableCell>
                  <TableCell className="font-medium">waiter</TableCell>
                  <TableCell className="font-medium">10,15,22</TableCell>
                  <TableCell className="font-medium">bar</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Jonny</TableCell>
                  <TableCell className="font-medium">Manager</TableCell>
                  <TableCell className="font-medium">10,15,22</TableCell>
                  <TableCell className="font-medium">bar</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Rushikesh</TableCell>
                  <TableCell className="font-medium">waiter</TableCell>
                  <TableCell className="font-medium">10,15,22</TableCell>
                  <TableCell className="font-medium">bar</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Jonny</TableCell>
                  <TableCell className="font-medium">Manager</TableCell>
                  <TableCell className="font-medium">10,15,22</TableCell>
                  <TableCell className="font-medium">bar</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default page;
