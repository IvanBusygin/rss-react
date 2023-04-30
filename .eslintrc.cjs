const isProd = process.env.NODE_ENV === 'production';
console.log('mode:', process.env.NODE_ENV);

module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  'overrides': [],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': './tsconfig.json',
  },
  'plugins': [
    'react',
    'react-hooks',
    'import',
    'jsx-a11y',
    '@typescript-eslint',
    'prettier',
  ],
  'rules': {
    'no-console': [isProd ? 'error' : 'off', { "allow": ["error"] }],
    'no-debugger': isProd ? 'error' : 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'eqeqeq': 2,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-unused-vars': 1,
    'react/no-unused-state': 1,
    'react/no-unused-prop-types': 1,
    'react/no-unused-class-component-methods': 1,
    'react/static-property-placement': 0,
    'react/jsx-props-no-spreading': 0,
    "no-param-reassign": ["error", { // для redux: Assignment to property of function parameter 'state'
      "props": true,
      "ignorePropertyModificationsFor": ["state"]
    }],
    '@typescript-eslint/no-use-before-define': 'off',
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
  },
  'settings': {
    'react': { 'pragma': 'React', 'version': 'detect' },
  },
};
