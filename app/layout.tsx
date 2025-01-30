import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource'; // Path to your backend resource definition

const client = generateClient<Schema>({
  authMode: 'apiKey'
});

const fetchCustomers = async () => {
  const { data: customers, errors } = await client.models.Customers.list();
}

Amplify.configure(outputs);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
