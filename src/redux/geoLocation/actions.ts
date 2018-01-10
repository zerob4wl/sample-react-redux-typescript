import {createAction} from "redux-actions";
import * as Actions from "./constants";
import {IGetLocationResult} from "../../lib/api/interfaces";

export const addLocation = createAction<IGetLocationResult>(Actions.ADD_LOCATION);
export const removeLocation = createAction<{woeid : number}>(Actions.REMOVE_LOCATION);
