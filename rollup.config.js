import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import ignore from 'rollup-plugin-ignore';
import pkg from './package.json';

const external = Object.keys(pkg.peerDependencies || {});
const allExternal = [...external, Object.keys(pkg.dependencies || {})];
const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];

const createCommonPlugins = () => [
  babel({
    extensions,
    exclude: 'node_modules/**',
  }),
  commonjs({
    include: /node_modules/,
  }),
];

const main = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: allExternal,
  plugins: [...createCommonPlugins(), resolve({ extensions })],
};

const unpkg = {
  input: 'src/index.js',
  output: {
    name: pkg.name,
    file: pkg.unpkg,
    format: 'umd',
    exports: 'named',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'styled-components': 'styled',
    },
  },
  external,
  plugins: [
    ...createCommonPlugins(),
    ignore(['stream']),
    terser(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve({
      extensions,
      preferBuiltins: false,
    }),
  ],
};

export default [main, unpkg];
