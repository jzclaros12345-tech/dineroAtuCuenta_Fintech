// @fp-path: src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const supportedLocales = ["es", "en"] as const;
type Locale = (typeof supportedLocales)[number];

function isValidLocale(locale: string | undefined): locale is Locale {
  return supportedLocales.includes(locale as Locale);
}

export default getRequestConfig(async () => {
  const store = await cookies();
  const raw = store.get("NEXT_LOCALE")?.value;
  const locale: Locale = isValidLocale(raw) ? raw : "es";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
