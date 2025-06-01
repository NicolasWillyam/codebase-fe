import { useRoutes } from "react-router-dom";
import { lazy } from "react";

// 👇 Lazy load các page chính
const HomePage = lazy(() => import("@/presentation/pages/home/HomePage"));
const ProductCategoryPage = lazy(
  () => import("@/presentation/pages/products/[category]/ProductCategoryPage")
);
const ProductDetailPage = lazy(
  () => import("@/presentation/pages/product-detail/[slug]/ProductDetailPage")
);
const CollectionPage = lazy(
  () => import("@/presentation/pages/collections/index")
);
const CollectionDetailPage = lazy(
  () => import("@/presentation/pages/collections/[slug]/CollectionDetailPage")
);
const ExplorePage = lazy(
  () => import("@/presentation/pages/explore/ExplorePage")
);

export const AppRoutes = () => {
  const element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/products/:category", element: <ProductCategoryPage /> },
    { path: "/product/:slug", element: <ProductDetailPage /> },
    { path: "/collections", element: <CollectionPage /> },
    { path: "/collection/:slug", element: <CollectionDetailPage /> },
    { path: "/explore", element: <ExplorePage /> },
    // 👇 Bạn có thể thêm NotFound ở đây nếu cần thêm
  ]);

  return element;
};
