import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, User, Search } from "lucide-react";
import { cn } from "@/shared/libs/utils";

const navItems = [
  { label: "Garments", to: "/products/garments" },
  { label: "Accessories", to: "/products/accessories" },
  { label: "Collections", to: "/collections" },
  { label: "Explore", to: "/explore" },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold tracking-widest uppercase">
          FANCI CLUB
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-foreground/80",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Action icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button aria-label="Account">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
