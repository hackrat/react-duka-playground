import React from "react";
import { connect } from "react-redux";
import customerActions from "state/redux/ducks/customer/actions";
import CustomerLoginForm from "./component";

const CustomerLoginFormContainer  = props => {
  return <CustomerLoginForm {...props} />;
};

const mapStateToProps = (state, props) => {
  props.token = state.customer.token;
  props.locked = state.customer.locked;
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (email, password) => {
      dispatch(customerActions.loginCustomer(email, password));
    },
    unLock: () => {
      dispatch(customerActions.unlock());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerLoginFormContainer);
