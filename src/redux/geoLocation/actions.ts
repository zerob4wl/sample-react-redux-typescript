import { createAction } from "redux-actions";
import * as Actions from "./constants";
import { IGetLocationResult } from "../../lib/api/interfaces";

export const addLocation = createAction<IGetLocationResult>(Actions.ADD_LOCATION);
export const removeLocation = createAction<{ woeid: number }>(Actions.REMOVE_LOCATION);
export const updateLocation = createAction<{ woeid: number }>(Actions.UPDATE_LOCATION);

export const addFavorites = createAction<{ woeid: number }>(Actions.ADD_FAVORITES);
export const removeFavorites = createAction<{ woeid: number }>(Actions.ADD_FAVORITES);
