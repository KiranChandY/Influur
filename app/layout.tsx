import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { MenuBar } from "@/components/menu-bar"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Fixed Top Nav - Now global */}
        <div className="fixed top-4 left-0 w-full flex justify-center z-50">
          <MenuBar />
        </div>

        {/* Main content with top padding */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
