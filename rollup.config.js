import external from "rollup-plugin-peer-deps-external"
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import postcss from "rollup-plugin-postcss"

// import dts from "rollup-plugin-dts"

const packageJson = require("./package.json")

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs"
    },
    {
      file: "dist/index.es.js",
      format: "es",
      exports: "named"
    },
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    nodeResolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      jsx: "react",
      clean: true,
      tsconfigOverride: {
        exclude: ["/src/stories", "**/*.stories.tsx"]
      }
    }),
    postcss({
      minimize: true,
      modules: true,
      use: {
        sass: null,
        stylus: null,
        less: { javascriptEnabled: true }
      },
      extract: true
    })
  ],
  external: [
    "react",
    "@mui/material",
    "@mui/icons-material",
    "@emotion/styled",
    "@mui/styled-engine-sc",
    "@emotion/react"
  ]
}
// {
//   input: "./src/declaration.d.ts",
//   output: [{ file: "dist/my-library.d.ts", format: "es" }],
//   plugins: [dts()]
// }
