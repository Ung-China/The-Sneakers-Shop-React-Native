import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {translateEN} from './locales/en';
import {translateKH} from './locales/kh';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources: {
    en: {translation: translateEN},
    kh: {translation: translateKH},
  },
});

export default i18n;
