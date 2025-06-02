// Import các cấu hình và plugin cần thiết
import js from '@eslint/js' // Cấu hình ESLint mặc định cho JavaScript
import globals from 'globals' // Tập hợp các biến toàn cục cho nhiều môi trường
import reactHooks from 'eslint-plugin-react-hooks' // Plugin kiểm tra quy tắc hooks của React
import reactRefresh from 'eslint-plugin-react-refresh' // Plugin hỗ trợ Fast Refresh trong React
import tseslint from 'typescript-eslint' // Cấu hình và plugin cho TypeScript

// Xuất cấu hình ESLint
export default tseslint.config(
  // Loại trừ thư mục build/dist khỏi quá trình lint
  { ignores: ['dist'] },

  {
    // Kế thừa các cấu hình khuyến nghị từ ESLint và TypeScript
    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    // Áp dụng cho các file TypeScript và TSX (React)
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      // Sử dụng phiên bản ECMAScript 2020
      ecmaVersion: 2020,

      // Khai báo các biến toàn cục trong môi trường trình duyệt (window, document, v.v.)
      globals: globals.browser,
    },

    // Cấu hình plugin
    plugins: {
      'react-hooks': reactHooks, // Kiểm tra đúng quy tắc hooks của React
      'react-refresh': reactRefresh, // Hỗ trợ Fast Refresh đúng cách
    },

    // Thiết lập các quy tắc lint cụ thể
    rules: {
      // Bật các quy tắc hooks của React theo khuyến nghị
      ...reactHooks.configs.recommended.rules,

      // Cảnh báo nếu export component không đúng cách, hỗ trợ cho React Fast Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Cho phép export dưới dạng hằng số
      ],
    },
  },
)

