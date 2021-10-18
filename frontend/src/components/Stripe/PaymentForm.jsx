import { useState } from 'react'
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js'
import axios from 'axios'

function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type : "card",
            card : elements.getElement(CardElement) 
        })
    

        if(!error){
            try {
                const {id} = paymentMethod
                const response = await axios.post('http://localhost:3001/payment', {                    
                    amout : 999,
                    id
                })
                if(response.data.success){
                    console.log('successful payment')
                    setSuccess(true)
                }
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
        { !success ?
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <CardElement />
                </div>
            </fieldset>
            <button>Payer</button>
        </form>
        :
        <div>
            <h6>Vous avez Souscris </h6>
        </div>
        } 
        </>
    )
}

export default PaymentForm
