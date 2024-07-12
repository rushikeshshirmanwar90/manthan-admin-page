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
                  <TableHead>Rank</TableHead>
                  <TableHead>Total Leads Allocated</TableHead>
                  <TableHead>Table Lead Closed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Rushikesh</TableCell>
                  <TableCell className="font-medium">5</TableCell>
                  <TableCell className="font-medium">6</TableCell>
                  <TableCell className="font-medium">3</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Jonny</TableCell>
                  <TableCell className="font-medium">3</TableCell>
                  <TableCell className="font-medium">18</TableCell>
                  <TableCell className="font-medium">10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Rushikesh</TableCell>
                  <TableCell className="font-medium">2</TableCell>
                  <TableCell className="font-medium">12</TableCell>
                  <TableCell className="font-medium">8</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Jonny</TableCell>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell className="font-medium">16</TableCell>
                  <TableCell className="font-medium">5</TableCell>
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
