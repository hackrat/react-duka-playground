import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";
import CustomerLoginForm from "../../Molecules/CustomerLoginForm/index";
import Modal from "react-bootstrap/Modal";

const CustomerLogin = props => {
  const [showLoginBox, setShowLoginBox] = useState(false);

  const onClickToLogin = () => {
    setShowLoginBox(!showLoginBox);
  };

  return (
    <>
      {props.customer.token && (
        <Nav.Link href="/customer">Your Account</Nav.Link>
      )}
      
      {!props.customer.token && (
        <Nav.Link onClick={onClickToLogin}>Login</Nav.Link>
      )}

      {showLoginBox && (
        <Modal show={true} onHide={() => setShowLoginBox(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Login to your account</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              Login to your account to get access to your previous cart,
              wishlist or orders.
            </p>
            <CustomerLoginForm onCancel={() => setShowLoginBox(false)}/>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    customer: state.customer
  };
};

export default connect(mapStateToProps)(CustomerLogin);
