import js from '@eslint/js'
import * as tseslint from 'typescript-eslint'
import parser from 'svelte-eslint-parser'
import prettier from 'eslint-plugin-prettier'

const svelte = await import('eslint-plugin-svelte') // ⬅️ top-level await

export default [
  js.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked,

  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.app.json'],
        tsconfigRootDir: process.cwd(),
      },
    },
  },

  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.app.json'],
        tsconfigRootDir: process.cwd(),
        extraFileExtensions: ['.svelte'],
      },
    },
    plugins: {
      svelte: svelte.default,
    },
    processor: 'svelte/svelte',
  },

  {
    files: ['**/*.{js,ts,svelte}'],
    plugins: { prettier },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          semi: false,
          singleQuote: true,
          printWidth: 100,
        },
      ],
    },
  },

  {
    ignores: ['eslint.config.js', 'svelte.config.js'],
  },
]
