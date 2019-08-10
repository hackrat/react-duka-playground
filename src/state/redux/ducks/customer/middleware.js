// Middleware
import types from "./types";
import loginCustomer from "./middleware/loginCustomer";

export default (store) => {
  return next => {
    return async action => {
      next(action);

      switch (action.type) {
        case types.LOGIN_CUSTOMER:
          return loginCustomer(store, action);

        default:
          return;
      }
    };
  };
};

