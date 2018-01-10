import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, Switch, Redirect} from "react-router";
import {createBrowserHistory} from "history";
import {Provider} from "react-redux";
import AppContainer from "./containers/app";
import {store} from "./redux/store";

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={AppContainer}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);
