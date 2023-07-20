import '@/globals.css'
import { Montserrat } from 'next/font/google'
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

      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
