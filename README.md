# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Structure

```
src/
├── main.tsx                        # Entry point, mount React app vào DOM
├── App.tsx                         # App shell – layout + route wrapper
│
├── app/                            # Core app setup: layout, routing, providers
│   ├── layout/
│   │   ├── RootLayout.tsx          # Layout toàn trang (Navbar, Footer, Outlet)
│   │   ├── PageWrapper.tsx         # Wrapper cho animation, scroll top v.v.
│   │   └── CollectionLayout.tsx    # Layout đặc biệt cho trang /collection
│   ├── routes/
│   │   └── AppRoutes.tsx           # Cấu hình router (react-router-dom)
│   └── providers/
│       ├── AppProvider.tsx         # Tổng hợp các context: Theme, Auth, Cart...
│       └── ThemeProvider.tsx       # Tailwind theme switch (light/dark)
│
├── presentation/                   # UI (Pages + Components – không chứa logic gọi API)
│   ├── pages/
│   │   ├── home/
│   │   │   └── HomePage.tsx        # Landing page
│   │   ├── products/
│   │   │   ├── index.tsx           # /products – tất cả sản phẩm
│   │   │   └── [category]/
│   │   │       └── ProductCategoryPage.tsx   # /products/corsets...
│   │   ├── product/
│   │   │   └── [slug]/
│   │   │       └── ProductDetailPage.tsx     # /product/julia-halterneck...
│   │   ├── collections/
│   │   │   ├── index.tsx                    # /collections
│   │   │   └── [slug]/
│   │   │       └── CollectionDetailPage.tsx  # /collection/fw24
│   │   └── explore/
│   │       └── ExplorePage.tsx              # /explore – blog/lookbook...
│
│   └── components/
│       ├── navbar/
│       │   ├── Navbar.tsx
│       │   ├── NavLinks.tsx
│       │   ├── DropdownMenu.tsx            # Menu mở dropdown khi hover
│       │   └── MobileNav.tsx
│       ├── footer/
│       │   └── Footer.tsx
│       ├── cards/
│       │   ├── ProductCard.tsx
│       │   └── CollectionCard.tsx
│       ├── gallery/
│       │   ├── ProductImageGallery.tsx
│       │   └── CollectionHero.tsx
│       └── ui/
│           ├── Button.tsx
│           ├── ColorPicker.tsx
│           ├── SizeSelector.tsx
│           ├── Breadcrumbs.tsx
│           └── QuantityInput.tsx
│
├── application/                    # Xử lý logic giữa UI và API
│   ├── hooks/
│   │   ├── useProduct.ts           # Lấy 1 sản phẩm
│   │   ├── useCollection.ts        # Lấy 1 bộ sưu tập
│   │   ├── useCart.ts              # Cart logic
│   │   └── useScrollPosition.ts
│   ├── services/
│   │   ├── productService.ts       # Gọi API lấy danh sách/sp
│   │   ├── collectionService.ts
│   │   └── categoryService.ts
│   └── mappers/
│       └── product.mapper.ts       # Map DTO → UI Model
│
├── domain/                         # Mô hình dữ liệu thuần TypeScript (dễ test, share)
│   ├── entities/
│   │   ├── Product.ts
│   │   ├── Category.ts
│   │   ├── Collection.ts
│   │   └── User.ts
│   ├── enums/
│   │   ├── Size.ts
│   │   └── Platform.ts
│   └── value-objects/
│       ├── Price.ts
│       ├── Slug.ts
│       └── ImageURL.ts
│
├── infrastructure/                 # Kết nối đến hệ thống bên ngoài: API, Auth
│   ├── api/
│   │   ├── httpClient.ts           # Axios/Firebase fetch config
│   │   └── endpoints.ts            # Tất cả URL endpoint
│   ├── auth/
│   │   └── authClient.ts
│   ├── ai/
│   │   └── geminiClient.ts         # Tạo caption, mô tả bằng Gemini API
│   └── cart/
│       └── cartStorage.ts          # Lưu cart vào localStorage hoặc Supabase
│
├── shared/                         # Mọi thứ dùng chung toàn hệ thống
│   ├── ui/
│   │   └── Icon.tsx                # Biểu tượng đẹp, SVG inline
│   ├── constants/
│   │   ├── categories.ts           # Danh mục sản phẩm
│   │   └── collections.ts          # Mã BST, năm, slug...
│   ├── utils/
│   │   ├── formatPrice.ts
│   │   └── slugify.ts
│   ├── hooks/
│   │   └── useDebounce.ts
│   └── types/
│       └── index.ts                # Loại mở rộng cho props, route, context
│
├── styles/
│   ├── tailwind.css
│   └── fonts.css
│
└── tests/
    ├── unit/
    └── integration/
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
