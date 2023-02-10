import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "Welcome to React": "Welcome to React and react-i18next",
                    'Domestic': 'Domestic',
                }
            },
            it: {
                translation: {
                    "Welcome to React": "Benvenuti in React e react-i18next",
                    'Domestic': 'Domestico',
                }
            }
        },
        lng: "it",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;