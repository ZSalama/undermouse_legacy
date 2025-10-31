'use client'
import { useScroll, motion } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect, useRef } from 'react'
import { Section1 } from '@/components/Section1'
import { Section2 } from '@/components/Section2'
import dynamic from 'next/dynamic'
import About from '@/components/About/About'
import ScrollingText from '@/components/ScrollingText/ScrollingText'
import Footer from '@/components/Footer/Footer'
import Portfolio from '@/components/Portfolio/Portfolio'
import Blog from '@/components/Blog/Blog'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Contact = dynamic(() => import('@/components/Contact/Contact'), {
	ssr: false,
})

export default function Hero_Client(blog: any) {
	const container = useRef<HTMLDivElement | null>(null)
	const page_container = useRef<HTMLDivElement | null>(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	})

	const page_container_parallax = useScroll({
		target: page_container,
		offset: ['start start', 'end end'],
	})

	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, [])

	return (
		<>
			<div className='bg-gray-200'>
				<div
					ref={container}
					className='relative h-[200vh] bg-gray-900   align-center mx-auto'
				>
					<motion.div
						id='scroll-indicator'
						style={{
							scaleX: page_container_parallax.scrollYProgress,
							position: 'fixed',
							top: 0,
							left: 0,
							right: 0,
							height: 10,
							originX: 0,
							zIndex: 999,
						}}
						className='bg-[var(--sidebar)]'
					/>

					<Section1 scrollYProgress={scrollYProgress} />
					<Section2 scrollYProgress={scrollYProgress} />
				</div>
				<ScrollingText />
				<div className=' px-5 md:px-8 bg-gray-200 lg:px-12 text-5xl font-bold mx-4 md:mx-auto md:w-2xl lg:w-4xl mt-20'>
					About
				</div>
				<div className='flex justify-center'>
					<About className='mt-10 md:mb-20' />
				</div>
				<div
					className='flex mt-20 px-5 md:px-8 bg-gray-200 lg:px-12 text-5xl font-bold mx-4 md:mx-auto md:w-2xl lg:w-4xl items-center justify-between'
					id='blog'
				>
					<Link href='/blog'>Blog</Link>{' '}
					<Link href='/blog'>
						<Button className='w-fit bg-[var(--sidebar)] text-black hover:text-[var(--sidebar)] ease-in-out transition-colors duration-300 hover:bg-black text-2xl md:text-4xl p-4 sm:p-8 rounded-lg cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.1)]'>
							See more
						</Button>
					</Link>
				</div>
				<div className='flex justify-center max-w-4xl mx-auto'>
					<Blog className='mb-20 mt-10 md:mt-10' data={blog} />
				</div>
				<div
					className='mt-20 px-5 md:px-8 bg-gray-200 lg:px-12 text-5xl font-bold mx-4 md:mx-auto md:w-2xl lg:w-4xl'
					id='portfolio'
				>
					Portfolio
				</div>
				<div className='flex justify-center max-w-4xl mx-auto'>
					<Portfolio className='mb-20 mt-10 md:mt-10' />
				</div>

				<div
					className=' px-5 md:px-8 bg-gray-200 lg:px-12 text-5xl font-bold mx-4 md:mx-auto md:w-2xl lg:w-4xl'
					id='contact'
				>
					Contact
				</div>
				<div className='flex justify-center mt-15'>
					<Contact className='h-full bg-gray-200 pt-5 mb-50 md:mb-20' />
				</div>

				<footer className='flex justify-center bg-white'>
					<Footer className='h-full pt-5' />
				</footer>
			</div>
		</>
	)
}
