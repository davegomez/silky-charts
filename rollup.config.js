import { readdirSync } from 'fs';
import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const CODES = [
  'THIS_IS_UNDEFINED',
  'MISSING_GLOBAL_NAME',
  'CIRCULAR_DEPENDENCY',
];

const getChunks = URI =>
  readdirSync(path.resolve(URI))
    .filter(x => x.includes('.js'))
    .reduce((a, c) => ({ ...a, [c.replace('.js', '')]: `src/${c}` }), {});

const discardWarning = warning => {
  if (CODES.includes(warning.code)) {
    return;
  }

  console.error(warning);
};

const env = process.env.NODE_ENV;

const plugins = [
  external(),
  babel({
    exclude: 'node_modules/**',
  }),
  resolve(),
  replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
  commonjs(),
  env === 'production' && terser(),
];

export default [
  {
    onwarn: discardWarning,
    input: 'src/index.js',
    output: {
      esModule: false,
      file: 'umd/silky-charts.js',
      format: 'umd',
      name: 'silkyCharts',
    },
    plugins,
  },
  {
    onwarn: discardWarning,
    input: getChunks('src'),
    output: [
      { dir: 'esm', format: 'esm', sourcemap: true },
      { dir: 'cjs', format: 'cjs', sourcemap: true },
    ],
    plugins,
  },
];
