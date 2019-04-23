// Lazy loading import
export default (lang = "en") => import(`./${lang}.json`);