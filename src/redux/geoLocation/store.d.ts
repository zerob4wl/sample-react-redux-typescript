import { IGetLocationResult } from "./../../lib/api/interfaces";

declare type geoLocationStoreState = {
  locations: IGetLocationResult[];
  favorites: number[];
};
