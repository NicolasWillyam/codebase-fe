import { Button } from "../components/ui/button";

const filters = [
  "All",
  "Resort",
  "Villa",
  "Hotel",
  "Cottage",
  "Homestay",
  "Guesthouse",
  "Eco Lodge",
];

export function FilterTabs() {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {filters.map((item, i) => (
        <Button
          key={i}
          size={"sm"}
          variant={item === "All" ? "default" : "ghost"}
          className={
            item === "All"
              ? "bg-foreground rounded-full px-4"
              : "bg-foreground/5 rounded-full px-4"
          }
        >
          <p className="text-sm">{item}</p>
        </Button>
      ))}
    </div>
  );
}
