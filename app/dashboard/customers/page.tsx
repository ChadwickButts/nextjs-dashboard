import type { Schema } from '../../../amplify/data/resource';
import { generateClient } from "aws-amplify/api";

export default function Page() {

    const client = generateClient<Schema>();

    const addCustomer = async () => {
        await client.models.Customers.create( {
            customer_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
            name: 'Evil Rabbit',
            email: 'evil@rabbit.com',
            image_url: '/customers/evil-rabbit.png',
          })
    }
    return <>
        <p>Customers Page</p>
        <button onClick={addCustomer}>Add Customer</button>
    </>
}