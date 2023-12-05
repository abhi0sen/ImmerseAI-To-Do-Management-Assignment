import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To Do Management',
  description: 'An project assignment for ImmerseAI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <h2 className="m-3">MyToDo</h2>
        {children}
      </body>
    </html>
  )
}
