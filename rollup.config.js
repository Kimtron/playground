import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

// Rollup fallback configuration for BonBon
// Created by Kimberley Hale - The treat is both, and one is the fallback
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle-fallback.js',
    format: 'iife',
    name: 'BonBon'
  },
  plugins: [
    resolve(),
    commonjs()
  ],
  onwarn(warning, warn) {
    // Skip certain warnings
    if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
    warn(warning);
  }
};
