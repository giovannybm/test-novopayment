import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import spanish from './lang/es.json'

const resources = {
  es: {
    translation: spanish
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "es", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;