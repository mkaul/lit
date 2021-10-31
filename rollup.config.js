import nodeResolve from '@rollup/plugin-node-resolve';
export default {
  input: 'rollup-input.js',
  output: [
    { file: './lib/lit.js', format: 'esm' }
  ],
  plugins: [
    nodeResolve({
      exportConditions: ['development']
    })
  ]
}
