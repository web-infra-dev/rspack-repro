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
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: "development",
  devtool: false,
  target: 'node',
  entry: {
    main: "./src/index",
  },
  output: {
    libraryTarget: 'module',
    module: true,
    chunkFormat: 'module',
    path: path.resolve(__dirname,process.env.WEBPACK ? 'webpack-dist' : 'rspack-dist')
  },
  experiments: {
    outputModule: true
  },
  externals: ['react'],
  externalsType: 'module'
};

export default config;
