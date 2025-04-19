import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "@/app/routes/AppRoutes";
import { RootLayout } from "@/app/layout/RootLayout";
// import { Loading } from "@/shared/ui/Loading";
import { StoreProvider } from "@/app/providers/StoreProvider";

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <RootLayout>
          <Suspense fallback={<>Loading</>}>
            <AppRoutes />
          </Suspense>
        </RootLayout>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
