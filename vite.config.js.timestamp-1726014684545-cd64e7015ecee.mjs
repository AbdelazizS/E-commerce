// vite.config.js
import { fileURLToPath, URL } from "url";
import { defineConfig } from "file:///D:/MY_CAREER/VUE.JS/Starter%20Project/el-fateh/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/MY_CAREER/VUE.JS/Starter%20Project/el-fateh/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve, dirname } from "node:path";
import tailwind from "file:///D:/MY_CAREER/VUE.JS/Starter%20Project/el-fateh/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///D:/MY_CAREER/VUE.JS/Starter%20Project/el-fateh/node_modules/autoprefixer/lib/autoprefixer.js";
import VueI18nPlugin from "file:///D:/MY_CAREER/VUE.JS/Starter%20Project/el-fateh/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/MY_CAREER/VUE.JS/Starter%20Project/el-fateh/vite.config.js";
var vite_config_default = defineConfig({
  server: {
    port: 30
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "./src/i18n/locales/**")
      // provide a path to the folder where you'll store translation data (see below)
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxNWV9DQVJFRVJcXFxcVlVFLkpTXFxcXFN0YXJ0ZXIgUHJvamVjdFxcXFxlbC1mYXRlaFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTVlfQ0FSRUVSXFxcXFZVRS5KU1xcXFxTdGFydGVyIFByb2plY3RcXFxcZWwtZmF0ZWhcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L01ZX0NBUkVFUi9WVUUuSlMvU3RhcnRlciUyMFByb2plY3QvZWwtZmF0ZWgvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgcmVzb2x2ZSwgZGlybmFtZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB0YWlsd2luZCBmcm9tICd0YWlsd2luZGNzcydcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xuaW1wb3J0IFZ1ZUkxOG5QbHVnaW4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzBcbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW3RhaWx3aW5kKCksIGF1dG9wcmVmaXhlcigpXVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIFZ1ZUkxOG5QbHVnaW4oe1xuICAgICAgaW5jbHVkZTogcmVzb2x2ZShkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICcuL3NyYy9pMThuL2xvY2FsZXMvKionKSAvLyBwcm92aWRlIGEgcGF0aCB0byB0aGUgZm9sZGVyIHdoZXJlIHlvdSdsbCBzdG9yZSB0cmFuc2xhdGlvbiBkYXRhIChzZWUgYmVsb3cpXG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLGVBQWUsV0FBVztBQUNuQyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsU0FBUyxTQUFTLGVBQWU7QUFDakMsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sbUJBQW1CO0FBUCtLLElBQU0sMkNBQTJDO0FBUzFQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osY0FBYztBQUFBLE1BQ1osU0FBUyxRQUFRLFFBQVEsY0FBYyx3Q0FBZSxDQUFDLEdBQUcsdUJBQXVCO0FBQUE7QUFBQSxJQUNuRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
