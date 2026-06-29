// ESM entry point — re-exports from the CJS build so that Vite/Rollup
// can resolve named imports like:
//   import { LOCALIZED_SYNONYM_GROUPS } from 'allergens'
import cjs from './index.js';

export const { LOCALIZED_SYNONYM_GROUPS, ALLERGEN_ALIASES, LOCALIZED_GENERIC_RISKS } = cjs;
