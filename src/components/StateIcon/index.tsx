import * as React from "react";
import { STATE_ABBR } from "../../lib/api/interfaces";

interface IProps {
  state: STATE_ABBR;
  width?: number;
}

interface IState {
  state: STATE_ABBR;
}

export default class StateIcon extends React.Component<IProps, IState> {
  render() {
    return (
      <img
        src={`http://www.metaweather.com/static/img/weather/${this.props.state}.svg`}
        style={{ width: this.props.width || 32 }}
      />
    );
  }
}
