const isProd = process.env.NODE_ENV === 'production';
console.log('mode:', process.env.NODE_ENV);

module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
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
    '@typescript-eslint',
    'prettier',
  ],
  'rules': {
    'no-console': isProd ? 'error' : 'off',
    'no-debugger': isProd ? 'error' : 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'eqeqeq': 2,
    '@typescript-eslint/no-explicit-any': 1,
  },
  'settings': {
    'react': { 'pragma': 'React', 'version': 'detect' },
  },
};
