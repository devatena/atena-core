import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,  // Adiciona automaticamente a entrada de tipos
      outDir: "dist/types", // Define a pasta onde os tipos serão gerados
      cleanVueFileName: true,  // Remove ".vue" dos nomes dos arquivos de tipos
      rollupTypes: true,       // Garante que todos os tipos sejam processados
      include: ["src/**/*.vue", "src/**/*.ts"], // Inclui todos os arquivos Vue e TS
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "AtenaCore",
      fileName: (format) => `atena-core.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"], // Evita incluir Vue no bundle
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
