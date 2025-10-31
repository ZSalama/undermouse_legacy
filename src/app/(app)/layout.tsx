import '../globals.css'
// import BackgroundVideo from '@/components/BackgroundVideo/BackgroundVideo'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div>
            {/* <BackgroundVideo /> */}
            {children}
        </div>
    )
}
