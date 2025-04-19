import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="px-24 pt-20 pb-10 space-y-20 bg-[#EDE6DE]/30">
      <div className="max-w-[1440px] mx-auto text-center">
        <div
          style={{
            lineHeight: "1.2",
          }}
          className="py-4 text-center w-2/5 px-3 font-light mx-auto uppercase text-lg"
        >
          <p>
            Fancì Club is a collective of Vietnamese youth who live to celebrate
            beauty and humanity, Carrying that message brings us gratitude for
            life, and abundance of joy to create.
          </p>
        </div>
        <p className="text-xs font-medium mt-8">@fanci.club</p>
      </div>
      <div className="max-w-3xl flex justify-between mx-auto">
        <div className="text-[10px] space-y-1">
          <p>ABOUT</p>
          <p className="text-[#C9BFB6] hover:underline underline-offset-2 cursor-pointer">
            FANCI
          </p>
          <p className="text-[#C9BFB6] hover:underline underline-offset-2 cursor-pointer">
            PRESS
          </p>
          <p className="text-[#C9BFB6] hover:underline underline-offset-2 cursor-pointer">
            JOIN US
          </p>
        </div>
        <div className="text-[10px] space-y-1">
          <p>ABOUT</p>
          <p className="text-[#C9BFB6] hover:underline underline-offset-2 cursor-pointer">
            FANCI
          </p>
          <p className="text-[#C9BFB6] hover:underline underline-offset-2 cursor-pointer">
            PRESS
          </p>
          <p className="text-[#C9BFB6] hover:underline underline-offset-2 cursor-pointer">
            JOIN US
          </p>
        </div>
        <div className="text-[10px] space-y-1">
          <p>ABOUT</p>
          <p className="text-[#C9BFB6] hover:underline underline-offset-2 cursor-pointer">
            FANCI
          </p>
          <p className="text-[#C9BFB6] hover:underline underline-offset-2 cursor-pointer">
            PRESS
          </p>
          <p className="text-[#C9BFB6] hover:underline underline-offset-2 cursor-pointer">
            JOIN US
          </p>
        </div>
        <div className="text-[10px] space-y-1">
          <p>ABOUT</p>
          <p className="text-[#C9BFB6] hover:underline underline-offset-2 cursor-pointer">
            FANCI
          </p>
          <p className="text-[#C9BFB6] hover:underline underline-offset-2 cursor-pointer">
            PRESS
          </p>
          <p className="text-[#C9BFB6] hover:underline underline-offset-2 cursor-pointer">
            JOIN US
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <p className="text-[10px]">© 2025 Fancì Club. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
