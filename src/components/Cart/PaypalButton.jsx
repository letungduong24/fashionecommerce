import React from 'react'
import { PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'
const PaypalButton = ({onSuccess, amount, onError}) => {
  return (
    <PayPalScriptProvider options={{'client-id': 'AQmVTijpMbOqm5Ww7cq2d4Y9drIxwOmr1IW3L1zzz56tUk5qMAJ6J99MVbg5mPtXpiho4T4TLhwGFk28'}}>
        <PayPalButtons
            style={{layout: 'vertical'}} 
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{amount: {value: amount}}]
                })
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then(onSuccess);
            }}
            onError={onError}
        />
    </PayPalScriptProvider>
  )
}

export default PaypalButton