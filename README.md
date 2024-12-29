# rspack-repro

- [Rspack website](https://rspack.dev/)
- [Rspack repo](https://github.com/web-infra-dev/rspack)

A GitHub template for creating a Rspack minimal reproducible example.

webpack is included for comparing the outputs.

## Usages

`pnpm run build` would both run Rspack and webpack with config `./rspack.config.mjs`

- Rspack will emits output in `./rspack-dist`
- webpack will emits output in `./webpack-dist`

`./webpack-dist` and `./rspack-dist` are purposely not added to `.gitignore`.

It is recommended to commit these files so we quickly compare the outputs.
