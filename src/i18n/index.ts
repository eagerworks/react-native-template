import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

import en from './locales/en';
import es from './locales/es';

const resources = { ...en, ...es };

i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  resources,
  fallbackLng: 'en',
  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
