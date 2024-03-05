export default {
  name: 'Client',
  devtool: false,
  context: '/Users/bytedance/Works/rspack-repro',
  mode: 'production',
  infrastructureLogging: {
    level: 'error'
  },
  cache: {
    name: 'web-production',
    type: 'filesystem',
    cacheDirectory: '/Users/bytedance/Works/rspack-repro/node_modules/.cache/webpack',
    buildDependencies: {
      packageJson: [
        '/Users/bytedance/Works/rspack-repro/package.json'
      ],
      rsbuildConfig: [
        '/Users/bytedance/Works/rspack-repro/rsbuild.config.ts'
      ]
    }
  },
  target: [
    'web',
    'es5'
  ],
  experiments: {
    asyncWebAssembly: true
  },
  output: {
    path: '/Users/bytedance/Works/rspack-repro/rsbuild-dist',
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/async/[name].[contenthash:8].js',
    publicPath: '/',
    pathinfo: false,
    hashFunction: 'xxhash64',
    webassemblyModuleFilename: 'static/wasm/[hash].module.wasm'
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.mjs',
      '.json'
    ]
  },
  module: {
    parser: {
      javascript: {
        exportsPresence: 'error'
      }
    },
    rules: [
      /* config.module.rule('mjs') */
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      /* config.module.rule('js') */
      {
        test: /\.(?:js|jsx|mjs|cjs|ts|tsx|mts|cts)$/,
        include: [
          {
            and: [
              '/Users/bytedance/Works/rspack-repro',
              {
                not: /[\\/]node_modules[\\/]/
              }
            ]
          },
          /\.(?:ts|tsx|jsx|mts|cts)$/
        ],
        use: [
          /* config.module.rule('js').use('swc') */
          {
            loader: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@rsbuild+plugin-swc@0.4.10_@rsbuild+core@0.4.10/node_modules/@rsbuild/plugin-swc/dist/loader',
            options: {
              cwd: '/Users/bytedance/Works/rspack-repro',
              jsc: {
                externalHelpers: true,
                parser: {
                  tsx: true,
                  syntax: 'typescript',
                  decorators: true
                },
                transform: {
                  react: {
                    runtime: 'classic',
                    refresh: false
                  },
                  legacyDecorator: true,
                  decoratorMetadata: true,
                  useDefineForClassFields: false
                },
                preserveAllComments: true
              },
              sourceMaps: true,
              env: {
                targets: [
                  'chrome >= 87',
                  'edge >= 88',
                  'firefox >= 78',
                  'safari >= 14'
                ],
                mode: 'usage',
                coreJs: '3.32'
              },
              extensions: {
                lodash: {
                  cwd: '/Users/bytedance/Works/rspack-repro',
                  ids: [
                    'lodash',
                    'lodash-es'
                  ]
                },
                lockCorejsVersion: {
                  corejs: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/core-js@3.32.2/node_modules/core-js',
                  swcHelpers: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@swc+helpers@0.5.3/node_modules/@swc/helpers'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('js-data-uri') */
      {
        mimetype: {
          or: [
            'text/javascript',
            'application/javascript'
          ]
        },
        use: [
          /* config.module.rule('js-data-uri').use('swc') */
          {
            loader: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@rsbuild+plugin-swc@0.4.10_@rsbuild+core@0.4.10/node_modules/@rsbuild/plugin-swc/dist/loader',
            options: {
              cwd: '/Users/bytedance/Works/rspack-repro',
              jsc: {
                externalHelpers: true,
                parser: {
                  tsx: true,
                  syntax: 'typescript',
                  decorators: true
                },
                transform: {
                  react: {
                    runtime: 'classic',
                    refresh: false
                  },
                  legacyDecorator: true,
                  decoratorMetadata: true,
                  useDefineForClassFields: false
                },
                preserveAllComments: true
              },
              sourceMaps: true,
              env: {
                targets: [
                  'chrome >= 87',
                  'edge >= 88',
                  'firefox >= 78',
                  'safari >= 14'
                ],
                mode: 'usage',
                coreJs: '3.32'
              },
              extensions: {
                lodash: {
                  cwd: '/Users/bytedance/Works/rspack-repro',
                  ids: [
                    'lodash',
                    'lodash-es'
                  ]
                },
                lockCorejsVersion: {
                  corejs: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/core-js@3.32.2/node_modules/core-js',
                  swcHelpers: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@swc+helpers@0.5.3/node_modules/@swc/helpers'
                }
              }
            }
          }
        ],
        resolve: {
          fullySpecified: false
        }
      },
      /* config.module.rule('image') */
      {
        test: /\.(?:png|jpg|jpeg|pjpeg|pjp|gif|bmp|webp|ico|apng|avif|tif|tiff|jfif)$/i,
        oneOf: [
          /* config.module.rule('image').oneOf('image-asset-url') */
          {
            type: 'asset/resource',
            resourceQuery: /(__inline=false|url)/,
            generator: {
              filename: 'static/image/[name].[contenthash:8][ext]'
            }
          },
          /* config.module.rule('image').oneOf('image-asset-inline') */
          {
            type: 'asset/inline',
            resourceQuery: /inline/
          },
          /* config.module.rule('image').oneOf('image-asset') */
          {
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10000
              }
            },
            generator: {
              filename: 'static/image/[name].[contenthash:8][ext]'
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.svg$/i,
        oneOf: [
          /* config.module.rule('svg').oneOf('svg-asset-url') */
          {
            type: 'asset/resource',
            resourceQuery: /(__inline=false|url)/,
            generator: {
              filename: 'static/svg/[name].[contenthash:8].svg'
            }
          },
          /* config.module.rule('svg').oneOf('svg-asset-inline') */
          {
            type: 'asset/inline',
            resourceQuery: /inline/
          },
          /* config.module.rule('svg').oneOf('svg-asset') */
          {
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10000
              }
            },
            generator: {
              filename: 'static/svg/[name].[contenthash:8].svg'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(?:mp4|webm|ogg|mov|mp3|wav|flac|aac|m4a|opus)$/i,
        oneOf: [
          /* config.module.rule('media').oneOf('media-asset-url') */
          {
            type: 'asset/resource',
            resourceQuery: /(__inline=false|url)/,
            generator: {
              filename: 'static/media/[name].[contenthash:8][ext]'
            }
          },
          /* config.module.rule('media').oneOf('media-asset-inline') */
          {
            type: 'asset/inline',
            resourceQuery: /inline/
          },
          /* config.module.rule('media').oneOf('media-asset') */
          {
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10000
              }
            },
            generator: {
              filename: 'static/media/[name].[contenthash:8][ext]'
            }
          }
        ]
      },
      /* config.module.rule('font') */
      {
        test: /\.(?:woff|woff2|eot|ttf|otf|ttc)$/i,
        oneOf: [
          /* config.module.rule('font').oneOf('font-asset-url') */
          {
            type: 'asset/resource',
            resourceQuery: /(__inline=false|url)/,
            generator: {
              filename: 'static/font/[name].[contenthash:8][ext]'
            }
          },
          /* config.module.rule('font').oneOf('font-asset-inline') */
          {
            type: 'asset/inline',
            resourceQuery: /inline/
          },
          /* config.module.rule('font').oneOf('font-asset') */
          {
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10000
              }
            },
            generator: {
              filename: 'static/font/[name].[contenthash:8][ext]'
            }
          }
        ]
      },
      /* config.module.rule('wasm') */
      {
        test: /\.wasm$/,
        dependency: 'url',
        type: 'asset/resource',
        generator: {
          filename: 'static/wasm/[hash].module.wasm'
        }
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        sideEffects: true,
        use: [
          /* config.module.rule('css').use('mini-css-extract') */
          {
            loader: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/mini-css-extract-plugin@2.8.1_webpack@5.90.3/node_modules/mini-css-extract-plugin/dist/loader.js'
          },
          /* config.module.rule('css').use('css') */
          {
            loader: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@rsbuild+shared@0.4.10_@swc+helpers@0.5.3/node_modules/@rsbuild/shared/compiled/css-loader',
            options: {
              importLoaders: 1,
              modules: {
                auto: true,
                exportLocalsConvention: 'camelCase',
                localIdentName: '[local]-[hash:base64:6]'
              },
              sourceMap: false
            }
          },
          /* config.module.rule('css').use('postcss') */
          {
            loader: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@rsbuild+shared@0.4.10_@swc+helpers@0.5.3/node_modules/@rsbuild/shared/compiled/postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  {
                    browsers: [
                      'chrome >= 87',
                      'edge >= 88',
                      'firefox >= 78',
                      'safari >= 14'
                    ],
                    info(e){e=e||{};e.from=e.from||process.cwd();return u(loadPrefixes(e))},
                    options: {
                      flexbox: 'no-2009',
                      overrideBrowserslist: [
                        'chrome >= 87',
                        'edge >= 88',
                        'firefox >= 78',
                        'safari >= 14'
                      ]
                    },
                    postcssPlugin: 'autoprefixer',
                    prepare(e){let r=loadPrefixes({env:t.env,from:e.opts.from});return{OnceExit(s){timeCapsule(e,r);if(t.remove!==false){r.processor.remove(s,e)}if(t.add!==false){r.processor.add(s,e)}}}}
                  }
                ],
                config: false
              },
              sourceMap: false
            }
          }
        ],
        resolve: {
          preferRelative: true
        }
      },
      /* config.module.rule('sass') */
      {
        test: /\.s(?:a|c)ss$/,
        sideEffects: true,
        use: [
          /* config.module.rule('sass').use('mini-css-extract') */
          {
            loader: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/mini-css-extract-plugin@2.8.1_webpack@5.90.3/node_modules/mini-css-extract-plugin/dist/loader.js'
          },
          /* config.module.rule('sass').use('css') */
          {
            loader: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@rsbuild+shared@0.4.10_@swc+helpers@0.5.3/node_modules/@rsbuild/shared/compiled/css-loader',
            options: {
              importLoaders: 3,
              modules: {
                auto: true,
                exportLocalsConvention: 'camelCase',
                localIdentName: '[local]-[hash:base64:6]'
              },
              sourceMap: false
            }
          },
          /* config.module.rule('sass').use('postcss') */
          {
            loader: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@rsbuild+shared@0.4.10_@swc+helpers@0.5.3/node_modules/@rsbuild/shared/compiled/postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  {
                    browsers: [
                      'chrome >= 87',
                      'edge >= 88',
                      'firefox >= 78',
                      'safari >= 14'
                    ],
                    info(e){e=e||{};e.from=e.from||process.cwd();return u(loadPrefixes(e))},
                    options: {
                      flexbox: 'no-2009',
                      overrideBrowserslist: [
                        'chrome >= 87',
                        'edge >= 88',
                        'firefox >= 78',
                        'safari >= 14'
                      ]
                    },
                    postcssPlugin: 'autoprefixer',
                    prepare(e){let r=loadPrefixes({env:t.env,from:e.opts.from});return{OnceExit(s){timeCapsule(e,r);if(t.remove!==false){r.processor.remove(s,e)}if(t.add!==false){r.processor.add(s,e)}}}}
                  }
                ],
                config: false
              },
              sourceMap: false
            }
          },
          /* config.module.rule('sass').use('resolve-url-loader') */
          {
            loader: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@rsbuild+shared@0.4.10_@swc+helpers@0.5.3/node_modules/@rsbuild/shared/compiled/resolve-url-loader',
            options: {
              join: (e,t)=>{const{debug:n}=e;const{resourcePath:s}=t;const a=o(n);return o=>{const{uri:u}=o;const c=r(o,e,t);assertAttempts(c,!!n);const{joined:l}=c.find((({isFallback:e})=>e))||{};const{joined:p}=c.find((({isSuccess:e})=>e))||{};a(i,[s,u,c]);return assertJoined(p||l||null)}},
              sourceMap: false
            }
          },
          /* config.module.rule('sass').use('sass') */
          {
            loader: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@rsbuild+shared@0.4.10_@swc+helpers@0.5.3/node_modules/@rsbuild/shared/compiled/sass-loader',
            options: {
              sourceMap: true,
              implementation: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@rsbuild+shared@0.4.10_@swc+helpers@0.5.3/node_modules/@rsbuild/shared/compiled/sass'
            }
          }
        ],
        resolve: {
          preferRelative: true
        }
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        sideEffects: true,
        use: [
          /* config.module.rule('less').use('mini-css-extract') */
          {
            loader: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/mini-css-extract-plugin@2.8.1_webpack@5.90.3/node_modules/mini-css-extract-plugin/dist/loader.js'
          },
          /* config.module.rule('less').use('css') */
          {
            loader: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@rsbuild+shared@0.4.10_@swc+helpers@0.5.3/node_modules/@rsbuild/shared/compiled/css-loader',
            options: {
              importLoaders: 2,
              modules: {
                auto: true,
                exportLocalsConvention: 'camelCase',
                localIdentName: '[local]-[hash:base64:6]'
              },
              sourceMap: false
            }
          },
          /* config.module.rule('less').use('postcss') */
          {
            loader: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@rsbuild+shared@0.4.10_@swc+helpers@0.5.3/node_modules/@rsbuild/shared/compiled/postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  {
                    browsers: [
                      'chrome >= 87',
                      'edge >= 88',
                      'firefox >= 78',
                      'safari >= 14'
                    ],
                    info(e){e=e||{};e.from=e.from||process.cwd();return u(loadPrefixes(e))},
                    options: {
                      flexbox: 'no-2009',
                      overrideBrowserslist: [
                        'chrome >= 87',
                        'edge >= 88',
                        'firefox >= 78',
                        'safari >= 14'
                      ]
                    },
                    postcssPlugin: 'autoprefixer',
                    prepare(e){let r=loadPrefixes({env:t.env,from:e.opts.from});return{OnceExit(s){timeCapsule(e,r);if(t.remove!==false){r.processor.remove(s,e)}if(t.add!==false){r.processor.add(s,e)}}}}
                  }
                ],
                config: false
              },
              sourceMap: false
            }
          },
          /* config.module.rule('less').use('less') */
          {
            loader: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@rsbuild+shared@0.4.10_@swc+helpers@0.5.3/node_modules/@rsbuild/shared/compiled/less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                paths: [
                  '/Users/bytedance/Works/rspack-repro/node_modules'
                ]
              },
              sourceMap: false,
              implementation: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@rsbuild+shared@0.4.10_@swc+helpers@0.5.3/node_modules/@rsbuild/shared/compiled/less'
            }
          }
        ],
        resolve: {
          preferRelative: true
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        'lib-lodash': {
          test: /[\\/]node_modules[\\/](lodash|lodash-es)[\\/]/,
          priority: 0,
          name: 'lib-lodash',
          reuseExistingChunk: true
        },
        'lib-axios': {
          test: /[\\/]node_modules[\\/](axios|axios-.+)[\\/]/,
          priority: 0,
          name: 'lib-axios',
          reuseExistingChunk: true
        },
        'lib-polyfill': {
          test: /[\\/]node_modules[\\/](tslib|core-js|@babel\/runtime|@swc\/helpers)[\\/]/,
          priority: 0,
          name: 'lib-polyfill',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      /* config.optimization.minimizer('swc') */
      new SwcMinimizerPlugin(
        {
          jsMinify: undefined,
          cssMinify: undefined,
          rsbuildConfig: {
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
            }
          }
        }
      ),
      /* config.optimization.minimizer('js') */
      new TerserPlugin(
        {
          terserOptions: {
            mangle: {
              safari10: true
            },
            format: {
              ascii_only: true
            }
          },
          extractComments: true
        }
      )
    ]
  },
  plugins: [
    /* config.plugin('mini-css-extract') */
    new MiniCssExtractPlugin(
      {
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/async/[name].[contenthash:8].css',
        ignoreOrder: true
      }
    ),
    /* config.plugin('html-index') */
    new HtmlWebpackPlugin(
      {
        meta: {
          charset: {
            charset: 'UTF-8'
          },
          viewport: 'width=device-width, initial-scale=1.0'
        },
        chunks: [
          'index'
        ],
        inject: 'head',
        minify: {
          removeComments: false,
          useShortDoctype: true,
          keepClosingSlash: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          removeEmptyAttributes: true,
          minifyJS: {
            mangle: {
              safari10: true
            },
            format: {
              ascii_only: true
            }
          },
          minifyCSS: true,
          minifyURLs: true
        },
        filename: 'index.html',
        template: '/Users/bytedance/Works/rspack-repro/node_modules/.pnpm/@rsbuild+core@0.4.10_webpack@5.90.3/node_modules/@rsbuild/core/static/template.html',
        entryName: 'index',
        templateParameters: (compilation, assets, assetTags, pluginOptions) => {
          const { mountId, templateParameters } = config.html;
          const defaultOptions = {
            mountId,
            entryName,
            assetPrefix,
            compilation,
            webpackConfig: compilation.options,
            htmlWebpackPlugin: {
              tags: assetTags,
              files: assets,
              options: pluginOptions
            }
          };
          return (0, import_shared.mergeChainedOptions)({
            defaults: defaultOptions,
            options: templateParameters,
            utils: { entryName }
          });
        },
        scriptLoading: 'defer',
        title: 'Rsbuild App'
      }
    ),
    /* config.plugin('html-basic-plugin') */
    new HtmlBasicPlugin(
      {
        info: {
          index: {}
        }
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env.NODE_ENV': '"production"',
        'process.env.ASSET_PREFIX': '""'
      }
    ),
    /* config.plugin('progress') */
    new ProgressPlugin(
      {
        id: 'Client'
      }
    )
  ],
  performance: {
    hints: false
  },
  entry: {
    index: [
      '/Users/bytedance/Works/rspack-repro/src/index.js'
    ]
  }
}