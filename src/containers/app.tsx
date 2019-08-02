import * as React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import SearchContainer from "./search";

import "./app.less";


interface IProps {
}

interface IState {
}

class AppContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <Switch>
                <Route path={"/search"} component={SearchContainer}/>
                <Redirect to={"/search"} />
            </Switch>
        );
    }
}
export default AppContainer;
