import React from 'react';
import {Elements} from 'react-stripe-elements';

import CheckoutForm from './CheckOutForm.js';

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <Elements>
        <CheckoutForm />
      </Elements>
    );
  }
}

export default MyStoreCheckout;