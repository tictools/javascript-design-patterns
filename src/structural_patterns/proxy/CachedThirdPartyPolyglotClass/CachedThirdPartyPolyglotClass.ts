import { ThirdPartyPolyglotLib } from "../types";

export class CachedThirdPartyPolyglotClass implements ThirdPartyPolyglotLib {
  _polyglot: ThirdPartyPolyglotLib;
  _cache: string[];

  constructor(polyglot: ThirdPartyPolyglotLib) {
    this._polyglot = polyglot;
    this._cache = polyglot.listTranslations();
  }

  private flatItems(items: string[]) {
    return Array.from(new Set([...this._cache, ...items]));
  }

  private areEqual(items: string[]) {
    return JSON.stringify(this._cache) === JSON.stringify(items);
  }

  listTranslations() {
    return this._cache;
  }

  updateTranslations(items: string[]) {
    const translations = this.flatItems(items);
    const areEqual = this.areEqual(translations);
    if (!areEqual) {
      this._cache = this._polyglot.updateTranslations(items);
    }
    return this._cache;
  }
}
