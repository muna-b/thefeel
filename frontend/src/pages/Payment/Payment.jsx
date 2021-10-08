import { useState } from 'react'
import StripeContainer from '../../components/Stripe/StripeContainer'

function Payment() {
    const [showItem, setShowItem] = useState(false)
    return (
        <div>
            <h3> Tatata</h3>
            {showItem ? <StripeContainer /> : <> <h6>9,99€</h6> <button onClick={() => setShowItem(true)}>Souscrire</button> </>}
        </div>
    )
}

export default Payment
