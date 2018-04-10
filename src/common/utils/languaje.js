import enData from '@/assets/i18n/en';
import esData from '@/assets/i18n/es';

const langs = {
  en: enData,
  es: esData
};

const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = { es: langs.es, en: langs.en };
const fallbackLocale = 'es';
const locale = languageWithoutRegionCode;
window.glob = {};

window.glob.language = languageWithoutRegionCode.toUpperCase();

export {
  locale,
  fallbackLocale,
  messages,
  languageWithoutRegionCode,
  language
};
