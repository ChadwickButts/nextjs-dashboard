import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
    Customers: a.model({
        customer_id: a.string(),
        name: a.string(),
        email: a.string(),
        image_url: a.string()
    })
        .authorization(allow => [allow.publicApiKey()]),
    Invoices: a.model({
        customer_id: a.string(),
        amount: a.integer(),
        status: a.string(),
        date: a.string()
    })
        .authorization(allow => [allow.publicApiKey()])
});

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: 'apiKey',
        apiKeyAuthorizationMode: { expiresInDays: 30 }
    }
});