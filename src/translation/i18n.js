import { createI18n } from 'vue-i18n';
import messages from "./messages.js";
export const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  messages,
});
