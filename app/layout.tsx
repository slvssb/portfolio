import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import FooterNav from '~/components/footer-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Selva',
  description: 'My personal website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="dots opacity-10 bg-35% sm:bg-10%" />

        <div className="h-screen p-5">
          <div className="h-full flex flex-col border">
            {children}
            <FooterNav />
          </div>
        </div>
      </body>
    </html>
  )
}
