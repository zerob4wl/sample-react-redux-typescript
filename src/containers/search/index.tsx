import * as React from "react";
import * as _ from "lodash";
import {ISearchLocationResult} from "../../lib/api/interfaces";
import API from "../../lib/api";
import "./style.less";
import CityBox from "../../components/CityBox";
import {CircleLoader, RingLoader} from "react-spinners";
import { I18n } from 'react-i18next';
import i18n from "./i18n";

interface IProps {
}

interface IState {
    loading: boolean;
    results: ISearchLocationResult[];
    touch: boolean;
}

export default class SearchContainer extends React.Component<IProps, IState> {



    constructor(props: IProps) {
        super(props);
        this.state = {
            touch: false,
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
            touch: true,
            loading: true,
            results: [],
        });
        const api = new API();
        api.searchLocation({
            query: value,
        }).then((results) => {
            this.setState({
                results: results,
                loading: false,
            });
        });
    }

    public render() {
        return (
            <I18n i18n={i18n} >
              {
                (_) => (
                    <div className={"container middle center column"}>
                        <h1 className={"search-title"}>{_("Search")}</h1>
                        <input type="text" placeholder={_("Berlin")} className={"search-input"} onChange={this.searchForLocation}/>
                        <div className={"search-result container middle center space-between"}>
                            <div className="spinner">
                                <CircleLoader
                                    color={"#ff6369"}
                                    loading={this.state.loading}
                                />
                                {this.state.touch && !this.state.loading && this.state.results.length === 0 &&
                                <h5>{_("There is no result!")}</h5>
                                }
                            </div>
                            {this.state.results.map(city => (
                                <CityBox key={city.woeid} city={city}/>
                            ))}
                        </div>
                    </div>
            )
            }
            </I18n>

        );
    }
}
