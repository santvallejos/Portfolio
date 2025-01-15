import { labels, showDefaultLang } from "./ui.ts";

const defaultLang = 'es';

export function useTranslations(lang: keyof typeof labels) {
    return function t(key: keyof typeof labels[typeof defaultLang]) {
        return labels[lang][key] || labels[defaultLang][key];
    }
}