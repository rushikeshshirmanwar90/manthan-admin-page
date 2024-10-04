import React from "react";

// import { DatePickerWithPresets } from "../components/ui/calendar";

// import { CalendarForm } from "@/components/Calender2";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

const FilterSection = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex justify-start items-center gap-5">
      <div className="flex flex-col w-fit my-5">
        <Select>
          <SelectTrigger className="rounded-xl" id="framework">
            <SelectValue placeholder="Select Filter " />
          </SelectTrigger>
          <SelectContent position="popper" className="bg-white">
            <SelectItem value="best">Best Selling</SelectItem>
            <SelectItem value="worst">Worst Selling</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col w-fit my-5 ">
        <Select>
          <SelectTrigger className="rounded-xl" id="framework">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>
          <SelectContent position="popper" className="bg-white">
            <SelectItem value="tody">Today</SelectItem>
            <SelectItem value="yesterday">Yesterday</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* <div className="flex flex-col w-fit my-5 p-5 border-black bg-white shadow-lg ">
        <h1 className="mb-2 font-semibold"> Select Custom Date </h1>
        <div className="flex gap-4">
          <DatePickerWithPresets />
          <CalendarForm />
          <button className="bg-gray-600 text-white rounded-xl py-2 px-3">
            search
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default FilterSection;
