// src/components/SearchRoomBar.tsx
import {
  ArrowDown,
  ArrowRight,
  CalendarIcon,
  ChevronDown,
  DollarSign,
  Map,
  MapIcon,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "@/presentation/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/presentation/components/ui/popover";
import { Calendar } from "@/presentation/components/ui/calendar";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/presentation/components/ui/select";

export function SearchRoomBar({ zoomIn }: { zoomIn: boolean }) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [budget, setBudget] = useState("500");
  const [destination, setDestination] = useState("bali");
  const [guest, setGuest] = useState("2");

  return (
    <div
      className={cn(
        "flex justify-center items-center will-change-auto border w-fit mx-auto rounded-full px-3 pr-1 bg-white shadow-md transition-all duration-500 ease-in-out",
        zoomIn ? "scale-100 opacity-100 h-16" : "scale-95 opacity-80 h-12"
      )}
    >
      {/* Where */}
      <div className="">
        {zoomIn && (
          <p className="px-3 text-foreground/50 text-xs -mb-1 mt-1">
            Destinations
          </p>
        )}

        <Select value={destination} onValueChange={setDestination}>
          <SelectTrigger
            className={cn(
              zoomIn ? "w-64" : "w-full",
              "border-none shadow-none pl-0"
            )}
          >
            <Button variant={"link"} className="p-0">
              <Map className="w-4 h-4" />
              <SelectValue placeholder="Destinations" />
            </Button>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bali">Bali, Indonesia</SelectItem>
            <SelectItem value="sapa">Sapa, Vietnam</SelectItem>
            <SelectItem value="bromo">Bromo, Indonesia</SelectItem>
            <SelectItem value="dalat">Dalat, Vietnam</SelectItem>
            <SelectItem value="kyoto">Kyoto, Japan</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Date Picker */}
      <div className="border-l">
        {zoomIn && (
          <p className="px-3 text-foreground/50 text-xs -mb-1 mt-1">
            Date Time
          </p>
        )}

        <Popover>
          <PopoverTrigger asChild>
            <div className="w-auto flex items-center gap-2 px-3 h-9">
              <CalendarIcon className="h-4 w-4" />
              <p className="font-medium text-sm">
                {date ? format(date, "PPP") : "Pick a date"}
              </p>
              <ChevronDown size={16} className="ml-4" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Budget Select */}
      <div className="border-l">
        {zoomIn && (
          <p className="px-3 text-foreground/50 text-xs -mb-1 mt-1">Budgets</p>
        )}

        <Select value={budget} onValueChange={setBudget}>
          <SelectTrigger
            className={cn(
              zoomIn ? "w-48" : "w-full",
              "border-none shadow-none pl-0"
            )}
          >
            <Button variant={"link"} className="p-0">
              <Wallet className="w-4 h-4" />
              <SelectValue placeholder="Budget" />
            </Button>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="500">$500</SelectItem>
            <SelectItem value="1000">$1,000</SelectItem>
            <SelectItem value="2000">$2,000</SelectItem>
            <SelectItem value="3000">$3,000</SelectItem>
            <SelectItem value="4000">$4,000</SelectItem>
            <SelectItem value="5000">$5,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Guest Select */}
      <div className="border-l">
        {zoomIn && (
          <p className="px-3 text-foreground/50 text-xs -mb-1 mt-1">Guests</p>
        )}
        <Select value={guest} onValueChange={setGuest}>
          <SelectTrigger
            className={cn(
              zoomIn ? "w-48" : "w-full",
              "border-none shadow-none pl-0"
            )}
          >
            <Button variant={"link"} className="p-0">
              <Wallet className="w-4 h-4" />
              <SelectValue placeholder="Guests" />
            </Button>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Guest</SelectItem>
            <SelectItem value="2">2 Guests</SelectItem>
            <SelectItem value="3">3 Guests</SelectItem>
            <SelectItem value="4">4 Guests</SelectItem>
            <SelectItem value="5">5+ Guests</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {zoomIn ? (
        <Button
          className={cn(zoomIn ? "h-14" : "h-10", "px-4 pl-6 rounded-full")}
        >
          <div className="flex gap-2 items-center">
            <p>Plan My Trip</p>
            <ArrowRight size={16} />
          </div>
        </Button>
      ) : (
        <Button
          className={cn(zoomIn ? "h-14" : "h-10", "px-4 pl-6 rounded-full")}
        >
          <ArrowRight size={16} />
        </Button>
      )}
    </div>
  );
}
