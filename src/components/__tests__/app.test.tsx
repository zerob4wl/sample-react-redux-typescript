import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../../containers/app";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
