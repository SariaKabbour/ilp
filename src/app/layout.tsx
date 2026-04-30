import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Classes',
  description: 'View my classes with course materials, videos and PDFs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
