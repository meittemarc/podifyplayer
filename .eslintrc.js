/* module.exports = {
  root: true,
  extends: '@react-native',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: true, // Correct location
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', // Disable unused variables warnings
    curly: 'off', // Disable enforcing curly braces
    'no-useless-escape': 'off', // Disable warnings for unnecessary escape characters
    'react-native/no-inline-styles': 'off', // Allow inline styles in React Native
    'react-hooks/exhaustive-deps': 'off', // Disable exhaustive-deps rule for useEffect
  },
};
*/
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Utilisation du parser TypeScript
  parserOptions: {
    ecmaVersion: 2021, // Support des nouvelles syntaxes ECMAScript
    sourceType: 'module',
    project: './tsconfig.json', // Utilise le fichier TypeScript pour une analyse avancée
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'import',
    'jsx-a11y',
    'prettier',
  ],
  extends: [
    '@react-native', // Configuration de base pour React Native
    'eslint:recommended', // Règles ESLint recommandées
    'plugin:@typescript-eslint/recommended', // Règles spécifiques à TypeScript
    'plugin:react/recommended', // Bonnes pratiques React
    'plugin:react-native/all', // Bonnes pratiques React Native
    'plugin:jsx-a11y/recommended', // Accessibilité JSX
    'prettier', // Désactive les règles ESLint en conflit avec Prettier
  ],
  rules: {
    // 'prettier/prettier': 'error', // Enforce Prettier formatting
    // '@typescript-eslint/no-unused-vars': 'off', // Disable unused variables warnings
    // '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow inferred return types
    // '@typescript-eslint/no-explicit-any': 'warn', // Warn when using `any`
    // curly: 'off', // Disable enforcing curly braces
    // 'no-useless-escape': 'off', // Disable warnings for unnecessary escape characters
    // 'react-native/no-inline-styles': 'off', // Allow inline styles in React Native
    // 'react-hooks/exhaustive-deps': 'off', // Disable exhaustive-deps rule for useEffect

    // Bonnes pratiques générales
    'prettier/prettier': ['error', {endOfLine: 'auto'}], // Applique Prettier comme règle ESLint
    'no-console': 'warn', // Avertir sur les `console.log`
    'import/order': ['error', {'newlines-between': 'always'}], // Organiser les imports

    // Règles spécifiques à TypeScript
    '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}], // Ignorer les variables inutilisées commençant par "_"
    '@typescript-eslint/explicit-function-return-type': 'off', // Ne pas forcer la déclaration du type de retour
    '@typescript-eslint/no-explicit-any': 'warn', // Avertir sur `any`
    '@typescript-eslint/no-non-null-assertion': 'warn', // Avertir sur les "!"

    // Règles spécifiques à React
    'react/jsx-uses-react': 'off', // Plus nécessaire avec React 17+
    'react/react-in-jsx-scope': 'off', // Plus nécessaire avec React 17+
    'react-native/no-inline-styles': 'warn', // Avertir sur les styles en ligne
    'react-native/no-unused-styles': 'error', // Éviter les styles inutilisés
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'android/',
    'ios/',
    '.eslintrc.js',
    'metro.config.js',
  ], // Exclure certains dossiers
};

// module.exports = {
//   root: true,
//   parser: '@typescript-eslint/parser', // Use TypeScript parser
//   /*   parserOptions: {
//     ecmaVersion: 2021,
//     sourceType: 'module',
//     warnOnUnsupportedTypeScriptVersion: true, // Correct location
//     project: './tsconfig.json', // Ensure ESLint recognizes TypeScript settings
//   }, */
//   plugins: ['@typescript-eslint', 'react', 'react-native'],
//   extends: [
//     '@react-native',
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended', // Use recommended TypeScript rules
//     'plugin:react/recommended',
//     'plugin:react-native/all',
//     'prettier', // Ensure ESLint and Prettier work together
//   ],
//   rules: {
//     'prettier/prettier': 'error', // Enforce Prettier formatting
//     '@typescript-eslint/no-unused-vars': 'off', // Disable unused variables warnings
//     '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow inferred return types
//     '@typescript-eslint/no-explicit-any': 'warn', // Warn when using `any`
//     curly: 'off', // Disable enforcing curly braces
//     'no-useless-escape': 'off', // Disable warnings for unnecessary escape characters
//     'react-native/no-inline-styles': 'off', // Allow inline styles in React Native
//     'react-hooks/exhaustive-deps': 'off', // Disable exhaustive-deps rule for useEffect
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
//   ignorePatterns: ['node_modules/', 'dist/', 'android/', 'ios/'],
// };
