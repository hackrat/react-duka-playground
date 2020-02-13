import React from "react";
import { Query } from "react-apollo";
import ErrorPage from "../ErrorPage";
import Loading from "../../Utils/Loading";
import EmptyCartPage from "./Empty";
import CartPage from "./component";

const CartPageQueryContainer = props => {
  if (props.locked) {
    props.unLock();
  }

  if (!props.cartId) {
    return <EmptyCartPage {...props} />;
  }

  return (
    <Query query={props.query} variables={{ cartId: props.cartId }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return <ErrorPage error={error.message} />;
        if (!data.cart.items || !data.cart.items.length) return <EmptyCartPage />;

        const newProps = { ...props, ...data };
        return <CartPage {...newProps} />;
      }}
    </Query>
  );
};

export default CartPageQueryContainer;
