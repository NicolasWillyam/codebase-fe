import { useEffect, useState } from "react";
import { MegaMenuOverlay } from "./MegaMenuOverlay";
import { cn } from "@/shared/libs/utils";
import { AnimatePresence } from "framer-motion";
import { LuShoppingBag, LuSearch, LuLogIn } from "react-icons/lu";
import { useLocation } from "react-router-dom";

const navItems = [
  { label: "Garments", key: "garments" },
  { label: "Accessories", key: "accessories" },
  { label: "Collections", key: "collections" },
  { label: "Explore", key: "explore" },
] as const;

type MenuKey = (typeof navItems)[number]["key"];

export const Navbar = () => {
  const [menuType, setMenuType] = useState<MenuKey | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const isHome = location.pathname === "/";

  // ✅ Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Chỉ xử lý nếu vượt qua 100px
      if (Math.abs(currentY - lastScrollY) < 10) return;

      if (currentY > lastScrollY && currentY > 100) {
        // cuộn xuống
        setShowNavbar(false);
      } else if (currentY < lastScrollY && currentY > 100) {
        // cuộn lên
        setShowNavbar(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = (key: MenuKey) => {
    if (key === menuType && isOpen) {
      setIsOpen(false);
    } else {
      setMenuType(key);
      setIsOpen(true);
    }
  };

  const textColor = isHome || isOpen ? "text-white" : "text-black";

  return (
    <>
      <header
        className={cn(
          "max-w-7xl px-7 mx-auto fixed top-7 left-0 right-0 z-50 transition-all duration-300",
          textColor,
          showNavbar
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            href="/"
            className={cn(
              "text-xl font-semibold uppercase tracking-wider",
              textColor
            )}
          >
            Wanderlush
          </a>

          {/* <nav className="hidden md:grid md:grid-cols-4 md:gap-18">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => toggleMenu(item.key)}
                className={cn(
                  "text-xs font-medium transition-colors cursor-pointer",
                  textColor,
                  menuType === item.key && isOpen
                    ? "underline underline-offset-4 decoration-[1px] decoration-white"
                    : ""
                )}
              >
                {item.label}
              </button>
            ))}
          </nav> */}

          <div className={cn("flex justify-end items-center gap-6", textColor)}>
            <button>
              <LuSearch size={16} />
            </button>
            {/* <button>
              <LuShoppingBag size={12} />
            </button> */}
            <button>
              <LuLogIn size={16} />
            </button>
            <button className="text-sm px-4 py-2 border-2 rounded-full border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
              Schedule Now
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence onExitComplete={() => setMenuType(null)}>
        {isOpen && menuType && (
          <MegaMenuOverlay type={menuType} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};
