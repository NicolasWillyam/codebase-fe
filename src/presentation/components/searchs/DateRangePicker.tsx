import React from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";

type DateRange = {
  from: Date | undefined;
  to: Date | undefined;
};

type Props = {
  zoomIn?: boolean;
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
};

const DateRangePicker = ({ zoomIn, dateRange, setDateRange }: Props) => {
  return (
    <div className="border-l">
      {zoomIn && (
        <p className="px-3 text-foreground/50 text-xs -mb-1 mt-1">Date Time</p>
      )}

      <Popover>
        <PopoverTrigger asChild>
          <div className="w-auto flex items-center gap-2 px-3 h-9 cursor-pointer">
            <CalendarIcon className="h-4 w-4" />
            <p className="font-medium text-sm">
              {dateRange.from && dateRange.to ? (
                `${format(dateRange.from, "dd MMM")} - ${format(
                  dateRange.to,
                  "dd MMM"
                )}`
              ) : (
                <span className="text-sm">Choose time</span>
              )}
            </p>
            <ChevronDown size={16} className="ml-4" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto rounded-xl p-2">
          <Calendar
            className="rounded-xl"
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            initialFocus
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateRangePicker;
