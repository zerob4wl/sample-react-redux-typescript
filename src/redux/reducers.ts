import { combineReducers, Reducer } from "redux";
import geoLocationReducer from "./geoLocation/reducer";
import { geoLocationStoreState } from "./geoLocation/store";

export interface RootState {
  geoLocation: geoLocationStoreState;
}

export default combineReducers<RootState>({
  geoLocation: geoLocationReducer,
});
