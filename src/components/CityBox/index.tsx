import * as React from "react";

import {IGetLocationResult, ISearchLocationResult} from "../../lib/api/interfaces";
import {StringToColor} from "../../lib/color";

import "./style.less";
import API from "../../lib/api";
import {connect} from "react-redux";
import {addFavorites, addLocation, removeFavorites, updateLocation} from "../../redux/geoLocation/actions";
import {RootState} from "../../redux/reducers";
import {find} from "lodash";
import StateIcon from "../StateIcon";
import {BarLoader} from "react-spinners";

interface IProps {
    city: ISearchLocationResult;
    locations?: IGetLocationResult[];
    addLocation?: (location: IGetLocationResult) => void;
    updateLocation?: (location: IGetLocationResult) => void;
    favorites?: number[];
    addFavorites?: (woeid: number) => void;
    removeFavorites?: (woeid: number) => void;
    key?: any;
}

interface IState {
    locationInfo?: IGetLocationResult;
    loading: boolean;
    reload: boolean;
    isFavorite: boolean;
}

@(connect(mapStateToProps, mapDispatchToProps) as any)  // TODO: should fixed after typescript issue resolved
export default class CityBox extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            reload: false,
            loading: false,
            isFavorite: props.favorites.indexOf(props.city.woeid) > -1,
        };

        this.toggleFavorites = this.toggleFavorites.bind(this);
    }

    static getDerivedStateFromProps(props: IProps) {
        return {
            isFavorite: props.favorites.indexOf(props.city.woeid) > -1,
            locationInfo: props.locations.find(l => props.city.woeid === l.woeid),
        };
    }

    public componentDidMount() {
        const locationInfo = this.getLocationInfoFromLocal(this.props.city.woeid);
        this.setState({
            reload: locationInfo ? true : false,
            loading: locationInfo ? false : true,
            locationInfo
        });

        const api = new API();
        api.getLocation({woeid: this.props.city.woeid})
            .then((result: IGetLocationResult) => {
                if (locationInfo) {
                    this.props.updateLocation(result);
                } else {
                    this.props.addLocation(result);
                }
                this.setState({
                    locationInfo: result,
                    loading: false,
                    reload: false,
                });
            });

    }

    private getLocationInfoFromLocal(woeid: number) {
        return find(this.props.locations, {woeid: woeid});
    }

    private toggleFavorites() {
        if (this.state.isFavorite) {
            this.props.removeFavorites(this.props.city.woeid);
        } else {
            this.props.addFavorites(this.props.city.woeid);
        }

    }

    render() {
        return (
            <div className={"city-box"}>
                <h3>{this.props.city.title}</h3>
                {this.state.locationInfo &&
                <div>
                    <h4>{this.state.locationInfo.consolidated_weather[0].the_temp}
                        <small>°C</small>
                    </h4>
                    <StateIcon state={this.state.locationInfo.consolidated_weather[0].weather_state_abbr}/>
                </div>
                }
                <div className={"spinner"}>
                    <BarLoader
                        color={"#ff6369"}
                        loading={this.state.loading}
                    />
                    <BarLoader
                        color={"#fefcf3"}
                        loading={this.state.reload}
                    />
                </div>
                <div className={"control"}>
                    <button onClick={this.toggleFavorites}>
                        {this.state.isFavorite ? "Remove From Favorites" : "Add To Favorites"}
                    </button>
                </div>
                <div className={"bg"} style={{backgroundColor: StringToColor(this.props.city.title)}}/>
            </div>
        );
    }
}

function mapStateToProps(state: RootState) {
    return {
        locations: state.geoLocation.locations,
        favorites: state.geoLocation.favorites
    };
}


function mapDispatchToProps(dispatch: (fn: any) => void) {
    return {
        addLocation: (location: IGetLocationResult) => dispatch(addLocation(location)),
        updateLocation: (location: IGetLocationResult) => dispatch(updateLocation(location)),
        addFavorites: (woeid: number) => dispatch(addFavorites({woeid})),
        removeFavorites: (woeid: number) => dispatch(removeFavorites({woeid})),
    };
}

