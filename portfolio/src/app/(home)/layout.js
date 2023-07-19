
import '@/globals.css'
import { Montserrat } from 'next/font/google'

import Header from '../component/Header'

const montserrat = Montserrat({ subsets: ['latin'], weights: [100, 400, 600] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>

      <body className={montserrat.className} >
        <Header />
        {children}
      </body>

    </html >
  )
}
