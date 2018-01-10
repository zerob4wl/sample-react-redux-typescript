export interface ISearchLocationRequest {
    query: string;
}

export interface ISearchLocationResponse {
    title: string;
    location_type: string;
    latt_long: number;
    woeid: number;
    distance: number;
}
