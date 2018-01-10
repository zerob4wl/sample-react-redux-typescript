import * as React from "react";
import {STATE_ABBR} from "../../lib/api/interfaces";


interface IProps {
    state: STATE_ABBR,
    width?: number,
}

interface IState {
    state: STATE_ABBR,
}

export default class StateIcon extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            state: props.state,
        }
    }

    public componentWillReceiveProps(props: IProps) {
        if (props.state != props.state) {
            this.setState({
                state: props.state,
            });
        }
    }

    render() {
        return (
            <img src={`http://www.metaweather.com/static/img/weather/${this.state.state}.svg`}
                 style={{width: this.props.width || 32}}/>
        );
    }
}
