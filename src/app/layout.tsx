import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
// import NavBar from '@/components/NavBar/NavBar'
import { PostHogProvider } from './providers'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'UnderMouse',
    description: 'Website for UnderMouse',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <PostHogProvider>
                    {/* <NavBar /> */}
                    {children}
                </PostHogProvider>
            </body>
        </html>
    )
}
