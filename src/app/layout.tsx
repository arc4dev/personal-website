import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

import Header from '@/components/header'
import Footer from '@/components/footer'
import LenisProvider from '@/components/lenis-provider'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Arek Sroczyk | Front-end Developer',
	description:
		'Personal website of Arek Sroczyk, a 22 y/o Front-end Developer specializing in creating websites and web applications.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<LenisProvider>
				<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					<Header />
					<main>{children}</main>
					<Footer />

					<SpeedInsights />
				</body>
			</LenisProvider>
		</html>
	)
}
