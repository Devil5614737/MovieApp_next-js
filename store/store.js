import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducer/rootReducer";



// const composeEnhancers =
//   (typeof window !== "undefined" && __REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
