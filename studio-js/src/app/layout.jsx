import '@/styles/tailwind.css'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <GoogleTagManager gtmId="GTM-NH3FZ5QQ" />
      <body className="flex min-h-full flex-col">{children}</body>
      <GoogleAnalytics gaId="G-BSTESBF5Y9" />
    </html>
  )
}
