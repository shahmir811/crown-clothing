import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  // Stripe takes price in cents so below we are converting dollars to cents
  const priceForStripe = price * 100;
  const PUBLISHABLE_KEY = 'pk_test_dnjtSmYFOpZHJms8EomK92pa00UCUYFF7O';

  const onToken = async token => {
    // console.log(token);
    // alert('Payment Successful');

    try {
      const response = await axios.post('/payment', {
        token,
        amount: priceForStripe
      });

      console.log(response.data);
      alert('Payment success');
    } catch (error) {
      console.log('ERROR: ', error);
      alert('ERROR: ', error);
    }
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='Crown Clothing PVT LTD'
      billingAddress
      shippingAddress
      // image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={token => onToken(token)}
      stripeKey={PUBLISHABLE_KEY}
    />
  );
};

export default StripeCheckoutButton;
