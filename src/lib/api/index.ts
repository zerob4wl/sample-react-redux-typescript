import "whatwg-fetch";
import * as Interfaces from "./interfaces";

export default class API {
    private baseUrl = "https://www.metaweather.com/api";

    constructor() {

    }

    private getFetchOptions(method?: string): RequestInit {
        const myHeaders = new Headers();
        myHeaders.append("Access-Control-Allow-Origin", "myheader");
        const options: RequestInit = {
            method: method || 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        return options;
    }

    public searchLocation(params: Interfaces.ISearchLocationRequest): Promise<Interfaces.ISearchLocationResponse[]> {
        return new Promise<Interfaces.ISearchLocationResponse[]>((resolve) => {
            return fetch(`${this.baseUrl}/location/search/?query=${params.query}`, this.getFetchOptions());
        });
    }
}
