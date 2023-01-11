import { CachedThirdPartyPolyglotClass } from "./CachedThirdPartyPolyglotClass/CachedThirdPartyPolyglotClass";
import { ThirdPartyPolyglotClass } from "./ThirdPartyPolyglotClass/ThirdPartyPolyglotClass";

let cachedTranslations, translations: string[];
const initialTranslationItems = ["foo", "bar"];
const polyglot = new ThirdPartyPolyglotClass(initialTranslationItems);
const cachedPolyglot = new CachedThirdPartyPolyglotClass(polyglot);

translations = polyglot.listTranslations();
cachedTranslations = cachedPolyglot.listTranslations();

console.log(" ✅  Instantiating :: ", { translations });
console.log(" ✅  Instantiating :: ", { cachedTranslations });

console.log("\n 📝  Updating with value ['foo']\n");
cachedPolyglot.updateTranslations(["foo"]);
cachedTranslations = cachedPolyglot.listTranslations();
translations = polyglot.listTranslations();
console.log(" ❌  Update action skipped :: ", { cachedTranslations });
console.log(" ❌  Update action skipped :: ", { translations });

console.log("\n 📝  Updating with value ['fizz']\n");
cachedPolyglot.updateTranslations(["fizz"]);
cachedTranslations = cachedPolyglot.listTranslations();
translations = polyglot.listTranslations();
console.log(" ✅  Updated with value ['fizz']:: ", { cachedTranslations });
console.log(" ✅  Updated with value ['fizz']:: ", { translations });
