import * as React from "react";
import * as _ from "lodash";
import {ISearchLocationResult} from "../../lib/api/interfaces";
import API from "../../lib/api";
import "./style.less";
import CityBox from "../../components/CityBox";
import {CircleLoader} from "react-spinners";
import {withI18n} from "react-i18next";

interface IProps {
    t: any;
}

interface IState {
    loading: boolean;
    results: ISearchLocationResult[];
    touch: boolean;
}

@(withI18n as any)()
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
        const {t: i18n} = this.props;
        return (
            <div className={"container middle center column"}>
                <h1 className={"search-title"}>{i18n("Search")}</h1>
                <input type="text" placeholder={i18n("Berlin")} className={"search-input"}
                       onChange={this.searchForLocation}/>
                <div className={"search-result container middle center space-between"}>
                    <div className="spinner">
                        <CircleLoader
                            color={"#ff6369"}
                            loading={this.state.loading}
                        />
                        {this.state.touch && !this.state.loading && this.state.results.length === 0 &&
                        <h5>{i18n("There is no result!")}</h5>
                        }
                    </div>
                    {this.state.results.map(city => (
                        <CityBox key={city.woeid} city={city}/>
                    ))}
                </div>
            </div>
        );
    }
}
