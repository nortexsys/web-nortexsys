import { dictionary, type Locale } from "./config";

export async function getDictionary(locale: Locale) {
  return dictionary[locale]();
}
