import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'wuh.site - 日积跬步,以致千里',
  description: '吴尒红的个人博客',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
