
import '@/globals.css'
import { Montserrat } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from '../component/headers/Header'
import Loading from './loading'
import { Suspense } from 'react'

const montserrat = Montserrat({ subsets: ['latin'], weights: [100, 400, 600] })

export const metadata = {
  title: 'Home',
  description: 'Mohammad Hamzah Iqbal\'s portfolio',
  icons: {
    icon: '/icon.ico',
  },
}

export default async function RootLayout({ children }) {


  return (
    <html lang="en" className=''>

      < body className={montserrat.className} >
        <Suspense fallback={<Loading />}>
          <Header />

          {children}
          <SpeedInsights />

        </Suspense>
      </ body>

    </html >
  )
}
