import '@globals/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calendar APP',
  description: 'My Calendar APP',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
