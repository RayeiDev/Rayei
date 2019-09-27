import ReactNative from 'react-native';
import I18n from 'react-native-i18n';
import en from './locales/en.json';
import ar from './locales/ar.json';
I18n.fallbacks = true;
I18n.translations = {
  en, ar
}

const currentLocale = I18n.currentLocale();
export const isArabic = currentLocale.indexOf('ar') === 0;
console.log("currentLocale ", currentLocale);
// Is it a RTL language?
export const isRTL = currentLocale.indexOf('en') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  console.log("strings ", name, JSON.stringify(params));
  return I18n.t(name, params);
};


export default I18n;
