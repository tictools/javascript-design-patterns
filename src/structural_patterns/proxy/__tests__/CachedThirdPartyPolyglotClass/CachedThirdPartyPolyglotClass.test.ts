import { CachedThirdPartyPolyglotClass } from "../../CachedThirdPartyPolyglotClass/CachedThirdPartyPolyglotClass";
import { ThirdPartyPolyglotClass } from "../../ThirdPartyPolyglotClass/ThirdPartyPolyglotClass";
import { ThirdPartyPolyglotLib } from "../../types";

describe("given CachedThirdPartyPolyglotClass class", () => {
  const initialTranslations = ["foo", "bar"];
  let polyglot: ThirdPartyPolyglotLib;
  let spyOnUpdateTranslations: jest.SpyInstance<string[]>;

  beforeEach(() => {
    polyglot = new ThirdPartyPolyglotClass(initialTranslations);
    spyOnUpdateTranslations = jest.spyOn(polyglot, "updateTranslations");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("when an instance is created", () => {
    test("then method 'listTranslations' is defined", () => {
      const cache = new CachedThirdPartyPolyglotClass(polyglot);
      expect(cache.listTranslations).toBeDefined();
    });

    test("then method 'updateTranslations' is defined", () => {
      const cache = new CachedThirdPartyPolyglotClass(polyglot);
      expect(cache.updateTranslations).toBeDefined();
    });

    test("then translations list is defined with initial value", () => {
      const cache = new CachedThirdPartyPolyglotClass(polyglot);
      const cachedTranslationsList = cache.listTranslations();
      expect(cachedTranslationsList).toEqual(initialTranslations);
    });
  });
  describe("when translations are updated with new items", () => {
    test("then translation list is properly updated and cache value is returned", () => {
      const cache = new CachedThirdPartyPolyglotClass(polyglot);
      cache.updateTranslations(["fizz"]);
      expect(cache.listTranslations()).toEqual(["foo", "bar", "fizz"]);
    });

    test("then cache is checked and translation list is properly updated", () => {
      const cache = new CachedThirdPartyPolyglotClass(polyglot);
      cache.updateTranslations(["fizz"]);
      expect(spyOnUpdateTranslations).toHaveBeenCalled();
    });
  });

  describe("when translations are updated with any new item", () => {
    test("then translation list is not updated and cache value is returned", () => {
      const cache = new CachedThirdPartyPolyglotClass(polyglot);
      cache.updateTranslations(["foo", "bar"]);
      expect(spyOnUpdateTranslations).not.toHaveBeenCalled();
      expect(cache.listTranslations()).toEqual(["foo", "bar"]);
    });
  });
});
