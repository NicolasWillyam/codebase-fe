import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col md:flex-row justify-between items-center py-8 gap-6 text-sm">
        {/* Logo + Copyright */}
        <div className="text-center md:text-left">
          <p className="font-semibold uppercase tracking-wide">Fanci Club</p>
          <p className="text-muted-foreground mt-1">
            © {new Date().getFullYear()} Fanci. All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/products/garments" className="hover:text-foreground">
            Shop
          </Link>
          <Link to="/collections/fw24" className="hover:text-foreground">
            Collections
          </Link>
          <Link to="/explore" className="hover:text-foreground">
            Explore
          </Link>
        </div>

        {/* Social icons */}
        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-foreground"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="hover:text-foreground"
          >
            {/* <Tiktok className="h-5 w-5" /> */}
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-foreground"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
