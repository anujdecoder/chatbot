import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...pluginQuery.configs['flat/recommended'],

  {
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'no-unused-expressions': 'off',
      'import/no-extraneous-dependencies': 0,
      'no-console': 'error',
      complexity: ['error', 2],
      'max-depth': ['error', { max: 2 }],
      'max-params': ['error', 3],
      'max-statements': ['error', 6],
      'no-unused-vars': 'error',
      'no-unused-labels': 'error',
    },
  },
];
