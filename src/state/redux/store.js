import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import cartReducer, { cartMiddleware, cartInitialState } from "./ducks/cart";
import customerReducer, {
  customerMiddleware,
  customerInitialState
} from "./ducks/customer";
import messagesReducer, { messagesInitialState } from "./ducks/messages";
import commonReducer, { commonMiddleware } from "./ducks/common";
import searchReducer from "./ducks/search";

import { autoRehydrate } from "redux-phoenix"; // @todo: Load from session storage

const reducers = combineReducers({
  cart: cartReducer,
  messages: messagesReducer,
  customer: customerReducer,
  search: searchReducer,
  common: commonReducer
});

const initialState = {
  cart: cartInitialState,
  messages: messagesInitialState,
  customer: customerInitialState
};

const middleware = applyMiddleware(
  cartMiddleware,
  customerMiddleware,
  commonMiddleware
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancements = composeEnhancers(middleware, autoRehydrate);

const store = createStore(reducers, initialState, enhancements);

export default store;
