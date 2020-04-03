import { handleActions } from "redux-actions";
import * as Actions from "./constants";
import { geoLocationStoreState } from "./store";
import IAction from "../IActions";
import { IGetLocationResult } from "../../lib/api/interfaces";

const initialState: geoLocationStoreState = {
  locations: [],
  favorites: [],
};

export default handleActions<geoLocationStoreState, any>(
  {
    [Actions.ADD_LOCATION]: (state, action: IAction<IGetLocationResult>) => {
      return {
        ...state,
        locations: [...state.locations, action.payload],
      };
    },
    [Actions.UPDATE_LOCATION]: (state, action: IAction<IGetLocationResult>) => {
      let stateObj = Object.assign(state, {});
      const indexOFLocation = stateObj.locations.findIndex(location => action.payload.woeid === location.woeid);
      stateObj.locations[indexOFLocation] = action.payload;

      return stateObj;
    },
    [Actions.REMOVE_LOCATION]: (state, action: IAction<{ woeid: number }>) => {
      return {
        ...state,
        locations: state.locations.filter(location => location.woeid !== action.payload.woeid),
      };
    },
    [Actions.ADD_FAVORITES]: (state, action: IAction<{ woeid: number }>) => {
      return {
        ...state,
        favorites: [...state.favorites, action.payload.woeid],
      };
    },
    [Actions.REMOVE_FAVORITES]: (state, action: IAction<{ woeid: number }>) => {
      return {
        ...state,
        favorites: state.favorites.filter(woeid => woeid !== action.payload.woeid),
      };
    },
  },
  initialState
);
