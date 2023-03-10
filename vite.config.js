const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        function: "./function.html",
        partners: "./partners.html",
        login: "./login.html",
        shop: "./shop.html",
        billing: "./billing.html",
        checkout: "./checkout.html",
      },
    },
  },
});
