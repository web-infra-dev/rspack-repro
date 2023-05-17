# rspack-repro

- [Rspack website](https://www.rspack.dev/)
- [Rspack repo](https://github.com/web-infra-dev/rspack)

A GitHub template for creating a Rspack minimal reproducible example.

Webpack is included for comparing the outputs.

## versions

```
    "@rspack/cli": "nightly",
    "webpack-cli": "^5.0.1",
    "webpack": "^5.79.0",
```

## Usages

`pnpm run build` would both run Webpack and Rspack with config `./config.mjs`

- Webpack will emits output in `./webpack-dist`
- Rspack will emits output in `./rspack-dist`

`./webpack-dist` and `./rspack-dist` are purposely not added to `.gitignore`.
It is recommended to commit these files so we quickly compare the outputs.
