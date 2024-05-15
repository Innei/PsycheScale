import type { Metadata } from 'next'

import './globals.css'
import 'shiro-rc/dist/tw.css'
import { Providers } from './provider'
export const metadata: Metadata = {}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
