import 'react-circular-progressbar/dist/styles.css'
import React from 'react'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import StyledComponentsRegistry from './StyledComponentsRegistry'
import { NAME } from '@/constants'
import Layout from '@/components/Layout/Layout/Layout'
import ScrollToTop from '@/components/Layout/ScrollToTop/ScrollToTop'
import { QueryProvider } from '@/providers'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata = {
  title: `${NAME} - Portfolio`,
  description: 'Portfolio website',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

type RootLayoutProps = { children: React.ReactNode }

export default async function RootLayout({ children }: RootLayoutProps) {
  const headersList = await headers()
  const requestId =
    headersList.get('x-request-id') ??
    headersList.get('x-url') ??
    headersList.get('x-invoke-path') ??
    `r-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <StyledComponentsRegistry requestId={requestId}>
            <div className="App">
              <ScrollToTop />
              <Layout>{children}</Layout>
            </div>
          </StyledComponentsRegistry>
        </QueryProvider>
      </body>
    </html>
  )
}
