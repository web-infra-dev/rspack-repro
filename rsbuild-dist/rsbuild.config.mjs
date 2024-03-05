export default {
  dev: {
    hmr: true,
    liveReload: true,
    assetPrefix: '/',
    startUrl: false
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    htmlFallback: 'index',
    compress: true,
    printUrls: true,
    strictPort: false,
    publicDir: {
      name: 'public',
      copyOnBuild: true
    }
  },
  html: {
    meta: {
      charset: {
        charset: 'UTF-8'
      },
      viewport: 'width=device-width, initial-scale=1.0'
    },
    title: 'Rsbuild App',
    inject: 'head',
    mountId: 'root',
    crossorigin: false,
    outputStructure: 'flat',
    scriptLoading: 'defer'
  },
  source: {
    alias: {},
    define: {},
    aliasStrategy: 'prefer-tsconfig',
    preEntry: [],
    decorators: {
      version: 'legacy'
    },
    entry: {
      index: '/Users/bytedance/Works/rspack-repro/src/index.js'
    }
  },
  output: {
    targets: [
      'web'
    ],
    distPath: {
      root: './rsbuild-dist',
      js: 'static/js',
      css: 'static/css',
      svg: 'static/svg',
      font: 'static/font',
      html: '/',
      wasm: 'static/wasm',
      image: 'static/image',
      media: 'static/media',
      server: 'server',
      worker: 'worker'
    },
    assetPrefix: '/',
    filename: {},
    charset: 'ascii',
    polyfill: 'usage',
    dataUriLimit: {
      svg: 10000,
      font: 10000,
      image: 10000,
      media: 10000
    },
    legalComments: 'linked',
    injectStyles: false,
    disableMinimize: false,
    sourceMap: {
      js: undefined,
      css: false
    },
    filenameHash: true,
    enableCssModuleTSDeclaration: false,
    inlineScripts: false,
    inlineStyles: false,
    cssModules: {
      auto: true,
      exportLocalsConvention: 'camelCase'
    }
  },
  tools: {
    cssExtract: {
      loaderOptions: {},
      pluginOptions: {}
    }
  },
  security: {
    nonce: ''
  },
  performance: {
    profile: false,
    buildCache: true,
    printFileSize: true,
    removeConsole: false,
    removeMomentLocale: false,
    chunkSplit: {
      strategy: 'split-by-experience'
    }
  },
  _privateMeta: {
    configFilePath: '/Users/bytedance/Works/rspack-repro/rsbuild.config.ts'
  },
  pluginNames: [
    'rsbuild:basic',
    'rsbuild:entry',
    'rsbuild:cache',
    'rsbuild:target',
    'rsbuild-webpack:output',
    'rsbuild-webpack:resolve',
    'rsbuild:file-size',
    'rsbuild:clean-output',
    'rsbuild:asset',
    'rsbuild-webpack:copy',
    'rsbuild:html',
    'rsbuild:wasm',
    'rsbuild:moment',
    'rsbuild:node-addons',
    'rsbuild:define',
    'rsbuild-webpack:progress',
    'rsbuild-webpack:minimize',
    'rsbuild-webpack:css',
    'rsbuild-webpack:sass',
    'rsbuild-webpack:less',
    'rsbuild:bundle-analyzer',
    'rsbuild:rsdoctor',
    'rsbuild:split-chunks',
    'rsbuild:start-url',
    'rsbuild:inline-chunk',
    'rsbuild:externals',
    'rsbuild:performance',
    'plugin-network-performance',
    'plugin-preload-or-prefetch',
    'rsbuild:server',
    'rsbuild:module-federation',
    'rsbuild-webpack:swc'
  ]
}