import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/Table";

import { LeadProps } from "@/interface/lead";
import { domain } from "../route/route";

const AllocatedLead: React.FC<{ name: string }> = ({ name }) => {
  const [leads, setLeads] = useState<LeadProps[]>([]);

  //   loading states
  const [leadLoaded, setLeadLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `${domain}/api/leads?filters[$and][0][assign][$eq]=${name}`
      );
      const data = await res.json();
      setLeads(data.data);
      setLeadLoaded(true);
    };

    getData();
  }, [leadLoaded]);

  return (
    <div>
      <Dialog>
        <DialogTrigger>{leads.length}</DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Total Leads Allocated to {name}</DialogTitle>
            <DialogDescription>
              <div className="">
                <div className="h-[20rem] overflow-y-scroll">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User ID</TableHead>
                        <TableHead>Flat Name</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead>Phone</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      
                      {leads.map((item, index) => (
                        <TableRow>
                          <TableCell>{item.attributes.user_id}</TableCell>
                          <TableCell>{item.attributes.flat_name}</TableCell>
                          <TableCell>{item.attributes.user_name}</TableCell>
                          <TableCell>{item.attributes.phone_number}</TableCell>
                        </TableRow>
                      ))}
                      
                    </TableBody>
                  </Table>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllocatedLead;