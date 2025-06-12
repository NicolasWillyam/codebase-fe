import { Outlet } from "react-router-dom";
import { Navbar } from "@/presentation/components/navbar/Navbar";
import { Footer } from "@/presentation/components/footer/Footer";

export const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
