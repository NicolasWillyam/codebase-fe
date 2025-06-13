// SearchPriceSlider.tsx
import { Slider } from "@/presentation/components/ui/slider";
import { Label } from "@/presentation/components/ui/label";
import { cn } from "@/lib/utils";
import { useState, useMemo } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface SearchPriceSliderProps {
  zoomIn: boolean;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

export function SearchPriceSlider({
  zoomIn,
  priceRange,
  setPriceRange,
}: SearchPriceSliderProps) {
  const MIN_PRICE = 100000;
  const MAX_PRICE = 10000000;

  const histogram = useMemo(
    () => [
      5, 7, 12, 16, 18, 22, 24, 27, 29, 31, 33, 36, 31, 28, 26, 22, 20, 18, 14,
      10, 8, 6, 5,
    ],
    []
  );

  const histogramCount = histogram.length;
  const valuePerBin = (MAX_PRICE - MIN_PRICE) / histogramCount;

  return (
    <div className="p-4">
      {zoomIn && (
        <div className="w-full flex items-center justify-between">
          <Label className="text-foreground block">
            <p className="text-[17px] font-medium">Khoảng giá</p>
          </Label>
          <Button variant={"outline"} size={"icon"} className="rounded-full">
            <ArrowRight />
          </Button>
        </div>
      )}
      <div className="w-96">
        <div className="flex justify-between text-xs my-2 mb-4 text-muted-foreground">
          <p>Trip price, includes all fees</p>
        </div>

        <div className="relative flex items-end gap-[2px] h-20">
          {histogram.map((h, i) => {
            const binStart = MIN_PRICE + i * valuePerBin;
            const binEnd = binStart + valuePerBin;
            const isActive =
              priceRange[0] <= binEnd && priceRange[1] >= binStart;

            return (
              <div
                key={i}
                className={cn(
                  "w-[16px] rounded-t",
                  isActive ? "bg-blue-500" : "bg-blue-300 opacity-30"
                )}
                style={{ height: `${h * 2}px` }}
              />
            );
          })}
        </div>

        <Slider
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={10000}
          minStepsBetweenThumbs={1}
          value={priceRange}
          onValueChange={(v) => setPriceRange(v as [number, number])}
          orientation="horizontal"
          className="mt-4"
          thumbClassName="h-5 w-5 bg-white border border-gray-300 rounded-full shadow-md"
        />

        <div className="flex justify-between text-sm mt-1">
          <div className="flex flex-col justify-center items-center">
            <p className="text-foreground/50 mb-1 mt-4">Tối thiểu</p>
            <Button className="rounded-full" variant={"outline"}>
              <p>₫{priceRange[0].toLocaleString("vi-VN")}</p>
            </Button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-foreground/50 mb-1 mt-4">Tối đa</p>
            <Button className="rounded-full" variant={"outline"}>
              <p>
                ₫{" "}
                {priceRange[1] >= MAX_PRICE
                  ? `${priceRange[1].toLocaleString("vi-VN")}+`
                  : priceRange[1].toLocaleString("vi-VN")}
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
