import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error("Unknown bundler");
}

const alias = {
  a: path.resolve(__dirname, 'src', 'a.js'),
  b: 'c',
  c: path.resolve(__dirname, 'src', 'c.js')
};

class ResolverPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(
      ResolverPlugin.name,
      (compilation, { normalModuleFactory }) => {
        normalModuleFactory.hooks.beforeResolve.tap(
          ResolverPlugin.name,
          (resolveData) => {
            const { request } = resolveData;

            if (request === 'a' || request === 'b' || request === 'c') {
              console.log("before request", request);
            }
          }
        );

        normalModuleFactory.hooks.resolve.tap(
          ResolverPlugin.name,
          (resolveData) => {
            const { request } = resolveData;

            if (request === 'a' || request === 'b' || request === 'c') {
              console.log("request", request);
            }
          }
        );

        normalModuleFactory.hooks.afterResolve.tap(
          ResolverPlugin.name,
          (resolveData) => {
            const { request } = resolveData;

            if (request === 'a' || request === 'b' || request === 'c') {
              console.log("after request", request);
            }
          }
        );
      }
    );
  }
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "development",
  devtool: false,
  entry: {
    main: "./src/index",
  },
  resolve: {alias},
  plugins: [new HtmlWebpackPlugin(), new ResolverPlugin()],
  output: {
    clean: true,
    path: isRunningWebpack
      ? path.resolve(__dirname, "webpack-dist")
      : path.resolve(__dirname, "rspack-dist"),
    filename: "[name].js",
  },
  experiments: {
    css: true,
  },
};

export default config;
