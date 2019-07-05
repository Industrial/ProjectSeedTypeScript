module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    // 'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/arrow-parens': [true],
    '@typescript-eslint/await-promise': [true],
    '@typescript-eslint/max-classes-per-file': false,
    '@typescript-eslint/no-console': [false],
    '@typescript-eslint/no-floating-promises': [true],
    '@typescript-eslint/object-literal-key-quotes': [false],
    '@typescript-eslint/object-literal-sort-keys': [false],
    '@typescript-eslint/ordered-imports': [false],
    '@typescript-eslint/quotemark': [true, 'single', 'avoid-escape'],
    '@typescript-eslint/semicolon': [true, 'never'],
    '@typescript-eslint/trailing-comma': [true],
    'jsx-quotes': ['error', 'prefer-single'],
    // 'sort-imports': [
    //   'error',
    //   {
    //     ignoreCase: false,
    //     ignoreDeclarationSort: false,
    //     ignoreMemberSort: false,
    //     memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
    //   },
    // ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
