import { createStore, applyMiddleware, Store } from "redux";
import rootReducer, { RootState } from "./reducers";
import { devToolsEnhancer, composeWithDevTools } from "redux-devtools-extension/developmentOnly";

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
  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });
  return createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
}
