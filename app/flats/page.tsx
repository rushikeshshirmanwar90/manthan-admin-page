"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// CUSTOM COMPONENTS
import Sidebar from "@/components/Sidebar";

// INTERFACES
import { FlatProps } from "@/interface/flats";

// SHADCN COMPONENTS
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

// DOMAIN
import { domain } from "@/components/route/route";

// IMAGES
import img1 from "@/public/assets/images/house1.jpg";
import img2 from "@/public/assets/images/house2.jpg";
import img3 from "@/public/assets/images/house3.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const Page = () => {
  const [flats, setFlats] = useState<FlatProps[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${domain}/api/flats?populate=*`);

      const data = await res.json();

      setFlats(data.data);
      console.log(flats);
      setIsLoaded(true);
    };
    getData();
  }, [isLoaded]);

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
                {flats.map((item, index) => (
                  <TableRow key={index} >
                    <TableCell className="font-medium w-fit">
                      <div className=" w-fit mx-auto ">
                        <Carousel className="w-fit max-w-xs">
                          <CarouselContent>
                            {item.attributes.images.data.map(
                              (img: any, index: number) => (
                                <CarouselItem key={index}>
                                  <div>
                                    <Image
                                      src={img.attributes.url}
                                      alt="img"
                                      width={500}
                                      height={500}
                                      className="w-full h-auto"
                                    />
                                  </div>
                                </CarouselItem>
                              )
                            )}
                          </CarouselContent>
                          <CarouselNext />
                          <CarouselPrevious />
                        </Carousel>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      {item.attributes.name}
                    </TableCell>
                    <TableCell className="font-medium">
                      {item.attributes.address} {item.attributes.city}{" "}
                      {item.attributes.state}
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

export default Page;
