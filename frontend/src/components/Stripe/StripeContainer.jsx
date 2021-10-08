import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'

function StripeContainer() {
    const PUBLIC_KEY = "pk_test_51JROkhFcrBaA262mlJsECJUuICN9A0cD6J17XS7BBc2gJB433RQm5UApCOwjeFCYCe3L8XUjpnxFK9GTvvgaN0xN00bDw8XV4V"
    const stripeTestPromise = loadStripe(PUBLIC_KEY)
    return (
        <Elements stripe={ stripeTestPromise }>
                <PaymentForm />
           
        </Elements>
    )
}

export default StripeContainer
