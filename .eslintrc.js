module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'prettier'
  ],
  plugins: [
    'import',
    'prettier',
    'sort-destructure-keys',
    'sort-imports-es6-autofix',
    'sort-keys-fix'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true,
        'avoidEscape': true
      }
    ],
    'semi': ['error', 'never'],
    'spaced-comment': 'error',
    'strict': ['error', 'never'],
    'import/default': 'error',
    'import/first': 'error',
    'import/no-cycle': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 'error',
    'prettier/prettier': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-imports-es6-autofix/sort-imports-es6': ['error', {
      'ignoreCase': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
    }],
    'sort-keys-fix/sort-keys-fix': 'error'
  }
}
