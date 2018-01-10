export interface ISearchLocationRequest {
    query: string;
}

export interface ISearchLocationResult {
    title: string;
    location_type: string;
    latt_long: number;
    woeid: number;
    distance: number;
}

export interface IGetLocationRequest {
    woeid: number;
}

export interface IGetLocationResult {
    consolidated_weather: IConsolidatedWeather[];
    latt_long: string;
    location_type: string;
    parent: ISearchLocationResult;
    sources: ISource[];
    sun_rise: Date;
    sun_set: Date;
    time: Date;
    timezone: string;
    timezone_name: string
    title: string
    woeid: number;
}

export interface IConsolidatedWeather {
    air_pressure: number;
    applicable_date: Date;
    humidity: number;
    id: number;
    max_temp: number;
    min_temp: number;
    predictability: number;
    the_temp: number;
    visibility: number;
    weather_state_abbr: string;
    weather_state_name: string;
    wind_direction: number;
    wind_direction_compass: string;
    wind_speed: number;
}

export interface ISource {
    crawl_rate: number;
    slug: string;
    title: string;
    url: string;
}
