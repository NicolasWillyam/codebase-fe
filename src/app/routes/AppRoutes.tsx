import { useRoutes, Routes, Route } from "react-router-dom";
import { lazy } from "react";
<<<<<<< HEAD
import LoginPage from "@/presentation/pages/auth/login/LoginPage";
import { RootLayout } from "../layout/RootLayout";
import RegisterPage from "@/presentation/pages/auth/register/RegisterPage";
import SearchResultPage from "@/presentation/pages/search/SearchResultPage";
import RoomDetailPage from "@/presentation/pages/rooms/RoomDetailPage";
=======
import { ToursPage } from '@/presentation/pages/ToursPage';
import { BookingPage } from '@/presentation/pages/BookingPage';
import { MyBookingsPage } from '@/presentation/pages/MyBookingsPage';
>>>>>>> c55839bd504005fcbe13a14be31e912709e5f845

// Lazy load các trang chính
const HomePage = lazy(() => import("@/presentation/pages/home/HomePage"));
const ProductCategoryPage = lazy(() =>
  import("@/presentation/pages/products/[category]/ProductCategoryPage")
);
const ProductDetailPage = lazy(() =>
  import("@/presentation/pages/product-detail/[slug]/ProductDetailPage")
);
const CollectionPage = lazy(() =>
  import("@/presentation/pages/collections/index")
);
const CollectionDetailPage = lazy(() =>
  import("@/presentation/pages/collections/[slug]/CollectionDetailPage")
);
const ExplorePage = lazy(() =>
  import("@/presentation/pages/explore/ExplorePage")
);

// 👇 Thêm mới: Homestay
const HomestayListPage = lazy(() =>
  import("@/presentation/pages/homestay/HomestayListPage")
);
const HomestayDetailPage = lazy(() =>
  import("@/presentation/pages/homestay/[id]/HomestayDetailPage")
);

export const AppRoutes = () => {
  const element = useRoutes([
    // ✅ No layout
    { path: "/auth/login", element: <LoginPage /> },
    { path: "/auth/register", element: <RegisterPage /> },
    { path: "/search", element: <SearchResultPage /> },
    { path: "/room/:id", element: <RoomDetailPage /> },

    // ✅ With RootLayout
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "products/:category", element: <ProductCategoryPage /> },
        { path: "product/:slug", element: <ProductDetailPage /> },
        { path: "collections", element: <CollectionPage /> },
        { path: "collection/:slug", element: <CollectionDetailPage /> },
        { path: "explore", element: <ExplorePage /> },
      ],
    },

    // Bạn có thể thêm NotFound route ở đây nếu muốn
  ]);

  return (
    <Routes>
      <Route path="/" element={<ToursPage />} />
      <Route path="/booking/:tourId" element={<BookingPage />} />
      <Route path="/my-bookings" element={<MyBookingsPage />} />
    </Routes>
  );
};
