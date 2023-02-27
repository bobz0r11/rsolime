import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import it from 'constants/translations/it.json';
import en from 'constants/translations/en.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            },
            it: {
                translation: it,
            }
        },
        lng: 'it',
        fallbackLng: 'en',
        supportedLngs: ['it', 'en'],
    });

export default i18n;