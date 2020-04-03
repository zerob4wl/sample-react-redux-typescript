import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import AppContainer from "./containers/app";
import { store } from "./redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./translation/i18n";
import register from "./registerServiceWorker";

/* Register PWA to browser */
register();

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Router>
        <AppContainer />
      </Router>
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);
