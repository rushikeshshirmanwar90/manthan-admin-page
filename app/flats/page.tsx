import React from "react";
import Image from "next/image";

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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "@/public/assets/images/house1.jpg";
import img2 from "@/public/assets/images/house2.jpg";
import img3 from "@/public/assets/images/house3.jpg";

const page = () => {
  const imgs = [img1, img2, img3];

  return (
    <div className="flex gap-4">
      <div className="w-[17%]">
        <Sidebar active={"Flats"} />
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
                  <TableHead className="">Image</TableHead>
                  <TableHead className="">Name</TableHead>
                  <TableHead>Address</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell className="font-medium w-fit">
                    <div className=" w-fit mx-auto ">
                      <Carousel className="w-fit max-w-xs">
                        <CarouselContent>
                          {imgs.map((img, index) => (
                            <CarouselItem key={index}>
                              <div>
                                <Image
                                  src={img}
                                  alt="img"
                                  width={500}
                                  height={500}
                                  className="w-full h-auto"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselNext />
                        <CarouselPrevious />
                      </Carousel>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    The Metropolitan Manor
                  </TableCell>
                  <TableCell className="font-medium">
                    1234 Main St, Anytown, CA 12345
                  </TableCell>
                </TableRow>

                {/* <TableRow>
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
                 */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default page;
