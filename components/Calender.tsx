"use client";
import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DatePickerWithPresets() {

  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild className="bg-white">
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal rounded-xl",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex w-auto flex-col space-y-2 p-2"
      >
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="bg-white" position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="-1">Yesterday</SelectItem>
            <SelectItem value="-3">In 3 days</SelectItem>
            <SelectItem value="-7">In a week</SelectItem>
          </SelectContent>
        </Select>

        <div className="rounded-md border bg-white">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date: any) =>
              date > new Date() || date < new Date("2024-06-01")
            }
            initialFocus
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}