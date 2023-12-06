import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link"
import Navbar from '@/components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To Do Management',
  description: 'An project assignment for ImmerseAI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
