import * as React from "react";
import * as _ from "lodash";
import {ISearchLocationResult} from "../../lib/api/interfaces";
import API from "../../lib/api";
import "./style.less";
import CityBox from "../../components/CityBox";

interface IProps {
}

interface IState {
    loading: boolean;
    results: ISearchLocationResult[];
}

export default class SearchContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            loading: false,
            results: [],
        };

        this.searchForLocation = this.searchForLocation.bind(this);
        this.fetchData = _.debounce(this.fetchData.bind(this), 1000);
    }

    private searchForLocation(e: any) {
        if (e.target.value) {
            this.fetchData(e.target.value);
        }
    }

    private fetchData(value: string) {
        this.setState({
            loading: true,
        });
        const api = new API();
        api.searchLocation({
            query: value,
        }).then((results) => {
            console.log(results);
            this.setState({
                results: results,
                loading: false,
            })
        });
    }

    public render() {
        console.log(this.state);
        return (
            <div className={"container middle center column"}>
                <h1 className={"search-title"}>Search Your Location</h1>
                <input type="text" placeholder="Berlin" className={"search-input"} onChange={this.searchForLocation}/>
                <div className={"search-result container middle center space-between"}>
                    {this.state.results.map(city => (
                        <CityBox key={city.woeid} city={city}/>
                    ))}
                </div>
            </div>
        );
    }
}
