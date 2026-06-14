import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import ru from "./locales/ru.json";
import en from "./locales/en.json";
import uz from "./locales/uz.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        ru: {
            translation: ru,
        }, 
        en: {
            translation: en,
        },
        uz: {
            translation: uz
        }
    },
    detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "i18nextLng",
    },
    fallbackLng: "ru",
    interpolation: {
        escapeValue: false,
    }
  })

export default i18n;