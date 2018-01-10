import * as React from "react";
import * as _ from "lodash";
import {ISearchLocationResponse} from "../../lib/api/interfaces";
import API from "../../lib/api";

interface IProps {
}

interface IState {
    loading: boolean;
    results: ISearchLocationResponse[];
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
        this.fetchData(e.target.value);
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
                results,
                loading: false,
            })
        });
    }

    public render() {
        return (
            <div>
                <input onChange={this.searchForLocation}/>
                {this.state.results.map(result => {
                    <div>
                        <img src={`https://dummyimage.com/600x400/54855a/879cf0&text=${result.title}`}/>
                        <h3>{result.title}</h3>
                    </div>
                })}
            </div>
        );
    }
}
