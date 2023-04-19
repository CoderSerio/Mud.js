import pkg from './package.json';

// 为了将引入的 npm 包，也打包进最终结果中
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

// 一段自定义的内容，以下内容会添加到打包结果中
const footer = `
if(typeof window !== 'undefined') {
  window.MUD_VERSION = '${pkg.version}'
}`;

export default {
  input: './src/index.js',
  output: [
    // {
    //   file: pkg.main,
    //   format: 'cjs',
    //   footer,
    // },
    {
      file: pkg.module,
      format: 'esm',
      footer,
    },
  ],
  plugins: [
    commonjs(),
    resolve()
  ]
};