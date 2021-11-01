// import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";
// import en from "./en";
// import ab from "./ab";

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: en,
//       ab: ab,
//     },
//     fallbackLng: "en",
//     debug: process.env.NODE_ENV !== "production",
//     ns: ["translations"],
//     keySeparator: false,
//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     },
//   });
// export default i18n;

import i18n from "i18next";
import XHR from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(XHR).use(LanguageDetector).init({
  // backend: {
  //   loadPath:
  //     `/locales/{{lng}}/{{ns}}.json`
  // },
  fallbackLng: "en",
  load: "languageOnly",
  debug: true,
});

export default i18n;
