import coreWebVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  {
    ignores: ['out/**', 'node_modules/**', '.next/**', 'test-results/**'],
  },
  ...coreWebVitals,
  {
    rules: {
      // Reglas del compilador de React (nuevas en eslint-config-next 16).
      // El patrón "leer localStorage en useEffect y setState" es intencional:
      // evita desajustes de hidratación. Refactor pendiente a useSyncExternalStore.
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/immutability': 'warn',
      'react-hooks/preserve-manual-memoization': 'warn',
    },
  },
];

export default eslintConfig;
