import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error("Unknown bundler");
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "production",
  devtool: false,
  entry: {
    main: "./src/index",
  },
  plugins: [],
  output: {
    clean: true,
    path: isRunningWebpack
      ? path.resolve(__dirname, "webpack-dist")
      : path.resolve(__dirname, "rspack-dist"),
    filename: "[name].js",
    iife: false,
    libraryTarget: "commonjs2",
  },
  experiments: {},
  target: "node",
  optimization: {
    chunkIds: "named",
    mangleExports: false,
    minimize: false,
    moduleIds: "named",
    splitChunks: {
      cacheGroups: {
        json: {
          type: "json",
        },
      },
      chunks: "all",
      maxSize: 256 * 1024, // 256 KiB
    },
  },
  resolve: {
    extensions: [".ts", ".mjs", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: isRunningRspack ? "builtin:swc-loader" : "swc-loader",
        options: {
          sourceMap: false,
          jsc: {
            parser: {
              decorators: true,
              syntax: "typescript",
            },
            target: "es2022",
            transform: {
              decoratorMetadata: true,
              legacyDecorator: true,
            },
          },
        },
      },
    ],
  },
  stats: {
    colors: true,
    preset: "normal",
  },
};

// Configure Rspack experiments
if (isRunningRspack) {
  config.experiments.rspackFuture = {
    disableApplyEntryLazily: true,
    newTreeshaking: true,
  };
}

export default config;
