import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, Switch} from "react-router";
import {createBrowserHistory} from "history";
import {Provider} from "react-redux";
import AppContainer from "./containers/app";
import {store} from "./redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./translation/i18n";

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={AppContainer}/>
            </Switch>
        </Router>
        </I18nextProvider>
    </Provider>,
    document.getElementById("root")
);
