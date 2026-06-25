import '@/styles/tailwind.css'
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head>
        <GoogleTagManager gtmId="GTM-NH3FZ5QQ" />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
