// eslint.config.js
import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import prettierPlugin from 'eslint-plugin-prettier';
import vueI18nPlugin from '@intlify/eslint-plugin-vue-i18n';
import tsParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2022,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
        vueFeatures: {
          customBlocks: ['i18n'],
        },
      },
    },
    plugins: {
      '@intlify/vue-i18n': vueI18nPlugin,
      '@typescript-eslint': tsPlugin,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      'vue-i18n': {
        localeDir: './src/**/locales/*.{json,json5,yaml,yml}',
        messageSyntaxVersion: '^9.0.0',
      },
    },
    rules: {
      // typescript
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-function': 'off',

      // core
      'no-irregular-whitespace': 'off',
      'no-undef': 'warn',
      'no-useless-escape': 'warn',
      'newline-after-var': 'off',

      // vue
      'vue/attribute-hyphenation': 'off',
      'vue/v-on-event-hyphenation': ['error', 'never'],
      'vue/attributes-order': [
        'warn',
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT',
          ],
          alphabetical: false,
        },
      ],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/component-name-in-template-casing': [
        'error',
        'kebab-case',
        {
          registeredComponentsOnly: true,
        },
      ],
      'vue/component-definition-name-casing': ['error', 'kebab-case'],

      // formatting
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: ['const', 'let'], next: '*' },
        { blankLine: 'never', prev: ['const', 'let'], next: ['const', 'let'] },
        { blankLine: 'always', prev: ['block-like', 'multiline-const'], next: '*' },
        { blankLine: 'always', prev: '*', next: ['return', 'block-like', 'multiline-const'] },
      ],

      // imports
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',

      // i18n
      '@intlify/vue-i18n/no-missing-keys': 'warn',
      '@intlify/vue-i18n/no-unused-keys': [
        'warn',
        {
          src: './src',
          extensions: ['.ts', '.vue'],
        },
      ],
      '@intlify/vue-i18n/no-v-html': 'off',
    },
  },

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          printWidth: 100,
          trailingComma: 'es5',
        },
      ],
    },
  },
];
