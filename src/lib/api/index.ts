import "whatwg-fetch";
import * as Interfaces from "./interfaces";

export default class API {
    private baseUrl = "https://cors-anywhere.herokuapp.com/http://www.metaweather.com/api";

    constructor() {

    }

    private getFetchOptions(method?: string): RequestInit {
        const options: RequestInit = {
            method: method || 'GET',
            headers: {
                Accept: 'application/json',
            },
            cache: 'default'
        };

        return options;
    }

    public searchLocation(params: Interfaces.ISearchLocationRequest): Promise<Interfaces.ISearchLocationResult[]> {
        return new Promise((resolve) => {
            fetch(`${this.baseUrl}/location/search/?query=${params.query}`, this.getFetchOptions())
                .then(response => {
                    return response.json()
                })
                .then(json => {
                    resolve(json as Interfaces.ISearchLocationResult[])
                });
        });
    }

    public getLocation(params: Interfaces.IGetLocationRequest): Promise<Interfaces.IGetLocationResult> {
        return new Promise((resolve) => {
            fetch(`${this.baseUrl}/location/${params.woeid}/`, this.getFetchOptions())
                .then(response => {
                    return response.json()
                })
                .then(json => {
                    resolve(json as Interfaces.IGetLocationResult)
                });
        });
    }
}
