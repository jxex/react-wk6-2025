module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",  // 確保 tailwind 會處理這些檔案
    ],
    theme: {
      extend: {},  // 在這裡擴展 Tailwind 默認主題設置
    },
    plugins: [],
  }
  