import {RootState} from "./reducers";

/**
 * Load store from local storage
 * @func
 *
 * @returns {RootState | undefined}
 */
export const loadState = (): RootState => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

/**
 * Write store to local storage
 * @func
 *
 * @param  {RootState} state
 *
 */
export const saveState = (state: RootState): void => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (e) {
        console.log(e);
    }
};
