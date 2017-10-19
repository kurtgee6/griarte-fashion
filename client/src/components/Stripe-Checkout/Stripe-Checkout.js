import React from 'react';
import {render} from 'react-dom';
import {StripeProvider} from 'react-stripe-elements';

import MyStoreCheckout from './MyStoreCheckout.js';

export default class TakeMoney extends React.Component {
  render() { 
    
      return (
      <StripeProvider apiKey="pk_live_FxnpamVYUuQg69CM1ana3qKI">
        <MyStoreCheckout />
      </StripeProvider>
    );
  
  }

};
