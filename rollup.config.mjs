// rollup.config.js
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.js",
  output: [
    { file: "dist/index.cjs", format: "cjs", exports: "default" },
    { file: "dist/index.esm.js", format: "esm" },
  ],
  plugins: [terser()],
};