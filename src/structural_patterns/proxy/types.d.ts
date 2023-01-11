export interface ThirdPartyPolyglotLib {
  listTranslations: () => string[];
  updateTranslations: (items: string[]) => string[];
}
