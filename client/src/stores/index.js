import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer, errorReducer, profileReducer } from "../reducers";

var store;
export default {
  configureStore: () => {
    const reducers = combineReducers({
      auth: authReducer,
      errors: errorReducer,
      profile: profileReducer
    });
    store = createStore(
      reducers,
      compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );
    return store;
  },

  currentStore: () => {
    return store;
  }
};
