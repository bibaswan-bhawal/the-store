import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J9oefGKNo8NIVqM0gKpwpBoY8MiPqZRajZrmPLNf7iZtwce5H8g1wJzKIYDVjnS464jsdrHKDmlNjzvhtqC6YBK00rpjM5XxA';

    const onToken = token => {
        console.log(token);
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='the-Store'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;