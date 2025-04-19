export type MegaMenuItem = {
  title: string;
  href?: string;
};

export type MegaMenuData = Record<string, MegaMenuItem[]>;

export const megaMenuData: MegaMenuData = {
  garments: [
    { title: "Corsets", href: "/products/corsets" },
    { title: "Denim", href: "/products/denim" },
    { title: "Dresses", href: "/products/dresses" },
    { title: "Fanci's Essentials", href: "/products/essentials" },
    { title: "Lingerie", href: "/products/lingerie" },
    { title: "Outerwear", href: "/products/outerwear" },
    { title: "Pants", href: "/products/pants" },
    { title: "Shorts", href: "/products/shorts" },
    { title: "Skirts", href: "/products/skirts" },
    { title: "Tops", href: "/products/tops" },
    { title: "All Products", href: "/products" },
    { title: "New In", href: "/products/new" },
    { title: "Best Sellers", href: "/products/best-sellers" },
    { title: "Sale", href: "/products/sale" },
  ],

  accessories: [
    { title: "Bags", href: "/products/accessories/bags" },
    { title: "Belts", href: "/products/accessories/belts" },
    { title: "Chokers", href: "/products/accessories/chokers" },
    { title: "Gloves", href: "/products/accessories/gloves" },
    { title: "Jewelry", href: "/products/accessories/jewelry" },
    { title: "Shoes", href: "/products/accessories/shoes" },
    { title: "All Accessories", href: "/products/accessories" },
  ],

  collections: [
    { title: "FW24 ROARING", href: "/collection/fw24" },
    { title: "SS24 NEST" },
    { title: "HOLIDAY23" },
    { title: "FW22 THE WRINKLES" },
  ],
  explore: [
    { title: "Lookbook" },
    { title: "Behind the Scene" },
    { title: "Fashion Story" },
  ],
};
