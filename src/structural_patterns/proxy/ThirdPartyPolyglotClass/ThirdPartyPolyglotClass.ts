import { ThirdPartyPolyglotLib } from "../types";

export class ThirdPartyPolyglotClass implements ThirdPartyPolyglotLib {
  private _translationList: string[];

  constructor(translations: string[]) {
    this._translationList = translations;
  }

  listTranslations() {
    return this._translationList;
  }

  updateTranslations(items: string[]) {
    this._translationList = Array.from(
      new Set([...this._translationList, ...items])
    );
    return this._translationList;
  }
}
