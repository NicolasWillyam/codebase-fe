import { ReactNode } from "react";
import { Navbar } from "@/presentation/components/navbar/Navbar";
import { Footer } from "@/presentation/components/footer/Footer";

type RootLayoutProps = {
  children: ReactNode;
};

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
