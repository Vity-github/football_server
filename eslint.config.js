// eslint.config.js
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 基础 ESLint 推荐规则
  js.configs.recommended,

  // TypeScript 配置
  {
    files: ['**/*.ts', '**/*.tsx'], // 只对 TypeScript 文件应用
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json', // 指向你的 tsconfig.json
      },
      globals: {
        node: true,
        es6: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // === 基础规则 ===
      'no-unused-vars': 'off', // 关闭基础规则
      'no-console': 'error',
      eqeqeq: ['error', 'always'],

      // === TypeScript 规则 ===
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          caughtErrors: 'all',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error', // 禁止 any 类型
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // === 代码风格 ===
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
    },
  },
];
