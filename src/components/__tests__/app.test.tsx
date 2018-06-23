import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../../containers/app";
import {Router, Switch, Route} from "react-router";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path="/" component={App}/>
        </Switch>
    </Router>, div);
    ReactDOM.unmountComponentAtNode(div);
});
