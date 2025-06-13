import { Minus, Plus, Users } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/presentation/components/ui/popover";
import { Button } from "@/presentation/components/ui/button";
import { cn } from "@/lib/utils";

type GuestPickerProps = {
  zoomIn: boolean;
  guest: number;
  setGuest: (value: number) => void;
};

export function GuestPicker({ zoomIn, guest, setGuest }: GuestPickerProps) {
  return (
    <div className="border-l">
      {zoomIn && (
        <p className="px-3 text-foreground/50 text-xs -mb-1 mt-1">Guests</p>
      )}

      <Popover>
        <PopoverTrigger asChild>
          <div
            className={cn(
              "flex items-center gap-2 px-3 h-9 cursor-pointer",
              zoomIn ? "w-36" : "w-full"
            )}
          >
            <Users className="w-4 h-4" />
            <p className="font-medium text-sm">
              {guest} Guest{guest > 1 ? "s" : ""}
            </p>
          </div>
        </PopoverTrigger>

        <PopoverContent className="w-auto rounded-xl">
          <div className="flex justify-between gap-10 items-center px-2 py-2">
            <p className="text-sm font-medium">Number of Guests</p>
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full"
                onClick={() => setGuest(Math.max(1, guest - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-6 text-center font-medium">{guest}</span>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full"
                onClick={() => setGuest(guest + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
