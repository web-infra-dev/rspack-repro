import path from 'path';
import { defineConfig } from "@rsbuild/core";

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
            if (resolveData.request === 'b') {
              return;
            }
          }
        );
      }
    );
  }
}

export default defineConfig({
  output: {
    distPath: {
      root: "./rsbuild-dist",
    },
  },
  resolve: {alias},
  tools: {
    rspack: {
      plugins: [new ResolverPlugin()]
    }
  }
});
