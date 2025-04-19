import { motion } from "framer-motion";
import { X } from "lucide-react";
import { megaMenuData } from "@/shared/configs/navbar.config";

type Props = {
  type: keyof typeof megaMenuData;
  onClose: () => void;
};

// 🎨 Mapping background riêng cho từng menu
const bgClassMap: Record<string, string> = {
  //   garments:
  //     "bg-[url('https://fanciclub.io/wp-content/uploads/2024/11/fanci-92318.jpeg')]",
  garments: "bg-[#222222]",
  accessories: "bg-[#222222]",
  collections: "bg-[#222222]",
  explore: "bg-[#222222]",
};

export const MegaMenuOverlay = ({ type, onClose }: Props) => {
  const items = megaMenuData[type];
  const bgClass = bgClassMap[type] || "bg-background/95";

  return (
    <motion.div
      key={type}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 z-40 ${bgClass} bg-cover bg-center backdrop-blur-sm`}
    >
      {/* 🔳 Overlay đen mờ */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 📦 Nội dung menu */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-muted hover:text-white transition"
          aria-label="Close Menu"
        ></button>

        <div className="text-center text-white">
          {items.map((item, index) => (
            <div key={index}>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-xs hover:underline underline-offset-4 transition-all"
                >
                  {item.title}
                </a>
              ) : (
                <p className="text-xs">{item.title}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
