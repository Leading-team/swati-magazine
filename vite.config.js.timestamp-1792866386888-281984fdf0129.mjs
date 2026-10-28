// vite.config.js
import { defineConfig } from "file:///C:/React/swati-magazine/node_modules/vite/dist/node/index.js";
import react from "file:///C:/React/swati-magazine/node_modules/@vitejs/plugin-react/dist/index.js";
import { tanstackRouter } from "file:///C:/React/swati-magazine/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
import tailwindcss from "file:///C:/React/swati-magazine/node_modules/@tailwindcss/vite/dist/index.mjs";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///C:/React/swati-magazine/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true
    }),
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    port: 3e3,
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxSZWFjdFxcXFxzd2F0aS1tYWdhemluZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcUmVhY3RcXFxcc3dhdGktbWFnYXppbmVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1JlYWN0L3N3YXRpLW1hZ2F6aW5lL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgeyB0YW5zdGFja1JvdXRlciB9IGZyb20gJ0B0YW5zdGFjay9yb3V0ZXItcGx1Z2luL3ZpdGUnXHJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICdAdGFpbHdpbmRjc3Mvdml0ZSdcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHRhbnN0YWNrUm91dGVyKHtcclxuICAgICAgdGFyZ2V0OiAncmVhY3QnLFxyXG4gICAgICBhdXRvQ29kZVNwbGl0dGluZzogdHJ1ZSxcclxuICAgIH0pLFxyXG4gICAgcmVhY3QoKSxcclxuICAgIHRhaWx3aW5kY3NzKCksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDMwMDAsXHJcbiAgICBvcGVuOiB0cnVlLFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlAsU0FBUyxvQkFBb0I7QUFDMVIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsc0JBQXNCO0FBQy9CLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsZUFBZSxXQUFXO0FBSndILElBQU0sMkNBQTJDO0FBTTVNLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLG1CQUFtQjtBQUFBLElBQ3JCLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
