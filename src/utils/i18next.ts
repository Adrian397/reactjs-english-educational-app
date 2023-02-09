import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "./locales/en.json";
import plCommon from "./locales/pl.json";

const supportedLngs = ["en", "pl"];

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon },
    pl: { common: plCommon },
  },
  lng: "pl",
  fallbackLng: "pl",
  supportedLngs,
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["navigator"],
    lookupLocalStorage: "i18nextLng",
  },
});

export default i18n;
