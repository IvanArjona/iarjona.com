var es = require("./translations.es.json");
var en = require("./translations.en.json");

const i18n = {
  translations: {
    es,
    en,
  },
  defaultLang: "es",
  useBrowserDefault: true,
};

module.exports = i18n;
