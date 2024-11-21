import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-poppins" })

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Full-Stack Engineer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-gradient-to-b from-gray-900 to-gray-800 text-white`}>
        {children}
      </body>
    </html>
  )
}

