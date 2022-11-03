import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import postcss from "rollup-plugin-postcss"

const packageJson = require("./package.json")

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
    peerDepsExternal(),
    resolve(),
    commonjs(),
    nodeResolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      jsx: "react",
      tsconfigOverride: {
        exclude: ["/src/stories", "**/*.stories.tsx"]
      }
    }),
    postcss({
      extensions: [".css"]
    })
  ]
}
