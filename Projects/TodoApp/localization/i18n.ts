import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, tr } from './translations/language';
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORE_LANGUAGE_KEY = "settings.lang";
const languageDetectorPlugin = {
    type: "languageDetector",
    async: true,
    init: () => { },
    detect: async function (callback: (lang: string) => void) {
        try {
            // get stored language from Async storage  // put your own language detection logic here
            await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then((language) => {
                if (language) { //if language was stored before, use this language in the app
                    return callback(language);
                } else { //if language was not stored yet, use english
                    return callback("tr");
                }
            });
        } catch (error) {
            console.log("Error reading language", error);
        }
    },
    cacheUserLanguage: async function (language: string) {
        try {
            //save a user's language choice in Async storage
            await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
        } catch (error) { }
    },
};
const resources = { en: { translation: en, }, tr: { translation: tr, }, };

i18n.use(initReactI18next).use<any>(languageDetectorPlugin).init({
    resources,
    compatibilityJSON: 'v3',    // fallback language is set to english
    fallbackLng: "tr",
    interpolation: {
        escapeValue: false,
    },
});
export default i18n;