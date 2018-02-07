import i18n from 'i18next';

i18n.init({
      nsSeparator: false,
      keySeparator: false,
      interpolation: {
        // React already does escaping
        escapeValue: false,
      },
      react :
      {
          wait : false
      },
      lng: "fa", // 'en' | 'fa'
      resources: {
          fa: {translation: require("./fa.po")}
      }
  }, function(err, t) {
  // initialized and ready to go!
});

export default i18n;
