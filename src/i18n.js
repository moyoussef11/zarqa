import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en.json";
import ar from "./lang/ar.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar",
    interpolation: {
      escapeValue: false,
      },
      react: {
          useSuspense: false
    }
  });

export default i18n;
