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
        <Sidebar active={"Customers"} />
      </div>
      <main className="flex-1 p-6 grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Number</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">9579896842</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">9579896842</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">9579896842</TableCell>
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
