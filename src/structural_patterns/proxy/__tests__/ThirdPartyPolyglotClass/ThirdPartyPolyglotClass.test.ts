import { ThirdPartyPolyglotClass } from "../../ThirdPartyPolyglotClass/ThirdPartyPolyglotClass";

describe("given ThirdPartyPolyglotLib class", () => {
  const initialTranslations = ["foo", "bar"];
  describe("when an instance is created", () => {
    test('"then method "listTranslation" should be defined', () => {
      const polyglot = new ThirdPartyPolyglotClass(initialTranslations);
      expect(polyglot.listTranslations).toBeDefined();
    });

    test('"then method "updateTranslations" should be defined', () => {
      const polyglot = new ThirdPartyPolyglotClass(initialTranslations);
      expect(polyglot.updateTranslations).toBeDefined();
    });
  });

  describe("when method", () => {
    test('"listTranslation" is called then expected value should be returned', () => {
      const polyglot = new ThirdPartyPolyglotClass(initialTranslations);
      const translationsList = polyglot.listTranslations();
      expect(Array.isArray(translationsList)).toBeTruthy();
      expect(translationsList).toEqual(["foo", "bar"]);
    });

    test('"then method "updateTranslations" is called then updated value should be returned', () => {
      const polyglot = new ThirdPartyPolyglotClass(initialTranslations);
      polyglot.updateTranslations(["fizz", "buzz"]);
      const translationsList = polyglot.listTranslations();
      expect(translationsList).toEqual(
        expect.arrayContaining([expect.any(String)])
      );
      expect(translationsList).toEqual(["foo", "bar", "fizz", "buzz"]);
    });
  });
});
