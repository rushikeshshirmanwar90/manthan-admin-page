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
  return (
    <div className="flex gap-4">
      <div className="w-[17%]">
        <Sidebar active={"Leads"} />
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
                  <TableHead>Flat Id</TableHead>
                  <TableHead>Customer Name</TableHead>
                  <TableHead>Flat Name</TableHead>
                  <TableHead>Assign To</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">#P-123</TableCell>
                  <TableCell className="font-medium">
                    Mr. Pranjal Shahane
                  </TableCell>
                  <TableCell className="font-medium">
                    The Metropolitan Manor
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
                <TableRow>
                  <TableCell className="font-medium">#P-123</TableCell>
                  <TableCell className="font-medium">
                    Mr. Pranjal Shahane
                  </TableCell>
                  <TableCell className="font-medium">
                    The Metropolitan Manor
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
                <TableRow>
                  <TableCell className="font-medium">#P-123</TableCell>
                  <TableCell className="font-medium">
                    Mr. Pranjal Shahane
                  </TableCell>
                  <TableCell className="font-medium">
                    The Metropolitan Manor
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
                <TableRow>
                  <TableCell className="font-medium">#P-123</TableCell>
                  <TableCell className="font-medium">
                    Mr. Pranjal Shahane
                  </TableCell>
                  <TableCell className="font-medium">
                    The Metropolitan Manor
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
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default page;
