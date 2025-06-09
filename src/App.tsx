import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "@/app/routes/AppRoutes";
import { RootLayout } from "@/app/layout/RootLayout";
// import { Loading } from "@/shared/ui/Loading";
import { StoreProvider } from "@/app/providers/StoreProvider";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loading</>}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            className:
              "text-sm px-2 py-1 h-10 rounded-md shadow-md [&>div>svg]:w-4 [&>div>svg]:h-4",
          }}
        />
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
