/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Next.jsのApp Routerを使用する場合
      './src/components/**/*.{js,ts,jsx,tsx,mdx}', // コンポーネントディレクトリ
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };