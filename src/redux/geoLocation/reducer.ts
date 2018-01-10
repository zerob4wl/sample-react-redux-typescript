import {handleActions} from "redux-actions";
import * as Actions from "./constants";
import {geoLocationStoreState} from "./store";
import IAction from "../IActions";
import {IGetLocationResult} from "../../lib/api/interfaces";


const initialState: geoLocationStoreState = {
    locations: [],
};


export default handleActions<geoLocationStoreState, any>({
    [Actions.ADD_LOCATION]: (state, action: IAction<IGetLocationResult>) => {
        return {
            ...state,
            locations: [...state.locations, action.payload],
        };
    },
    [Actions.REMOVE_LOCATION]: (state, action: IAction<{ woeid: number }>) => {
        return {
            ...state,
            locations: state.locations.filter(location => (location.woeid !== action.payload.woeid)),
        };
    },
}, initialState);
