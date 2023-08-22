import '@/globals.css'
import { Montserrat } from 'next/font/google'
import Loading from '../loading'
import { Suspense } from 'react'

export const metadata = {
  title: 'My project',
  description: 'Description of my project',
  icons: {
    icon: '/icon.ico',
  },
}

const montserrat = Montserrat({ subsets: ['latin'], weights: [100, 400, 600] })
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={montserrat.className}>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>

      </body>
    </html>
  )
}
