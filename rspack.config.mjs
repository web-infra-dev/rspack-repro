import path from 'path'


/**
 * @type {import('@rspack/cli').Configuration}
 */
const config = {
    entry: {
      main: './src/index.js',
    },
    output: {
      filename: 'main.js',
    },
};

export default config