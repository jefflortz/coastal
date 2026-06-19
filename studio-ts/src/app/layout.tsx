import { type Metadata } from 'next'

import '@/styles/tailwind.css'

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
  return (
    <html lang="en" className="h-full bg-cga-navy text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
