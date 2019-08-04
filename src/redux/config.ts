import {createStore, applyMiddleware, Store} from "redux";
import rootReducer, {RootState} from "./reducers";

declare var window: any;

function logger() {
    return (next: any) => (action: any) => {
        console.log(action);
        return next(action);
    };
}

/**
 *  initial store with middleware
 *  @func
 *
 *  @param {RootState}  initialState
 *
 * @returns {Store}
 */
export default function configureStore(initialState?: RootState): Store<RootState> {
    let create;
    if (typeof window !== "undefined") {
        if (window.__REDUX_DEVTOOLS_EXTENSION__) {
            create = window.__REDUX_DEVTOOLS_EXTENSION__()(createStore);
        }
    } else {
        create = createStore;
    }

    // Add middleware
    const createStoreWithMiddleware = applyMiddleware(logger)(create);

    // Create store with initial object
    const store = createStoreWithMiddleware(rootReducer, initialState) as Store<RootState>;

    if (module.hot) {
        module.hot.accept("./reducers", () => {
            const nextReducer = require("./reducers");
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
