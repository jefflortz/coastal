import { type Metadata } from 'next'

import '@/styles/tailwind.css'
import { Analytics } from './Analytics'
import { getOrganizationSchema } from './schema'

export const metadata: Metadata = {
  title: {
    template: '%s - Coastal Growth Advisors',
    default:
      'Coastal Growth Advisors — Business Advisory & Executive Coaching, Plymouth MA',
  },
  description:
    'Business advisory and executive coaching for privately held, owner-operated businesses in Southeastern Massachusetts. The operating partner your business has been missing.',
  icons: {
    icon: '/favicon-512.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = getOrganizationSchema()

  return (
    <html lang="en" className="h-full bg-cga-navy text-base antialiased">
      <head>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
