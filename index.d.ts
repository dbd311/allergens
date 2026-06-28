export interface LocalizedSynonymGroup {
  key: string;
  triggers: Record<string, string[]>;
  synonyms: Record<string, string[]>;
}

export const LOCALIZED_SYNONYM_GROUPS: LocalizedSynonymGroup[];
export const ALLERGEN_ALIASES: Record<string, string[]>;
