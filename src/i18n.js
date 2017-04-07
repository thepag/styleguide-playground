import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';

i18n
  .use(XHR)
  .init({
    lng: 'en',
    fallback: 'en',
    ns: ['common'],
    defaultNS: 'common',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
