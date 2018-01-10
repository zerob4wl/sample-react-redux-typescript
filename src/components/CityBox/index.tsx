import * as React from "react";

import {IGetLocationResult, ISearchLocationResult} from "../../lib/api/interfaces";
import {StringToColor} from "../../lib/color";

import "./style.less";
import API from "../../lib/api";
import {connect} from "react-redux";
import {addLocation} from "../../redux/geoLocation/actions";
import {RootState} from "../../redux/reducers";
import * as _ from "lodash";

interface IProps {
    city: ISearchLocationResult;
    locations: IGetLocationResult[];
    addLocation: (location: IGetLocationResult) => void;
}

interface IState {
    locationInfo?: IGetLocationResult;
    loading: boolean;
}

class CityBox extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            loading: false,
        }
    }

    public componentDidMount() {
        const locationInfo = this.getLocationInfoFromLocal(this.props.city.woeid);
        this.setState({
            loading: locationInfo ? false : true,
            locationInfo
        });
        if (!locationInfo) {
            const api = new API();
            api.getLocation({woeid: this.props.city.woeid})
                .then((result: IGetLocationResult) => {
                    this.props.addLocation(result);
                    this.setState({
                        locationInfo: result,
                        loading: false,
                    })
                });
        }
    }

    private getLocationInfoFromLocal(woeid: number) {
        return _.find(this.props.locations, {woeid: woeid})
    }

    render() {
        console.log(this.state);
        return (
            <div className={"city-box"}>
                <h3>{this.props.city.title}</h3>
                {this.state.locationInfo &&
                <div>
                    <h4>{this.state.locationInfo.consolidated_weather[0].the_temp}
                        <small>°C</small>
                    </h4>
                </div>
                }
                <div className={"control"}>
                    <button>Add To List</button>
                </div>
                <div className={"bg"} style={{backgroundColor: StringToColor(this.props.city.title)}}></div>
            </div>
        )
    }
}

/**
 * @desc map store's props and component's props to component's props
 * @func
 * @param {RootState} state
 * @param {IOwnProps} ownProps
 * @returns {{currentStep: STEPS; selectedCampaignId: number; match: any; history: any}}
 */
function mapStateToProps(state: RootState) {
    return {
        locations: state.geoLocation.locations
    };
}


function mapDispatchToProps(dispatch: (fn: any) => void) {
    return {
        addLocation: (location: IGetLocationResult) => dispatch(addLocation(location)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityBox);
