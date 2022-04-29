import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import cleanup from "rollup-plugin-cleanup";
import filesize from "rollup-plugin-filesize";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

const input = "src/index.ts";

const plugins = [
  resolve(),
  typescript({
    typescript: require("typescript")
  }),
  commonjs(),
  json(),
  cleanup(),
  filesize()
];

const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
];

export default [
  {
    input,
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true
      }
    ],
    external: externals,
    plugins
  }
];
