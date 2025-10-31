import { motion, MotionValue, useTransform } from 'framer-motion'
// import CTA_2 from '@/components/CTA_2'
// import MotionButton from '@/components/CTA_Button/CTA_Button'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Section1 = ({
	scrollYProgress,
}: {
	scrollYProgress: MotionValue<number>
}) => {
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
	const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
	return (
		<motion.div
			style={{ scale, rotate, zIndex: 20 }}
			className="sticky top-0 h-screen bg-[url('/hero_bg_1_1.png')] bg-cover bg-no-repeat bg-center flex flex-col justify-center text-black pl-10 pt-10 md:pl-10 lg:pl-20 xl:pl-30 2xl:pl-100"
		>
			{/* <CTA /> */}
			{/* <Image
                src='/hero_bg_1.png'
                alt='img'
                sizes='100vw'
                className='absolute top-0 left-0'
            /> */}
			<div className='flex flex-col z-50'>
				{/* <CTA_2 /> */}

				{/* <MotionButton className='cursor-pointer text-md md:text-3xl justify-center flex '>
                    Let&apos;s Talk Web
                </MotionButton> */}
				<h1 className='text-4xl md:text-7xl text-[var(--sidebar)]'>
					UnderMouse
				</h1>
				<h2 className='text-4xl md:text-7xl mt-1 text-[var(--sidebar)]'>
					Web Development
				</h2>

				<div className='flex flex-col md:flex-row gap-1 md:gap-6'>
					<Link href='#contact'>
						<Button className='w-fit mt-5 bg-[var(--sidebar)] text-black hover:text-[var(--sidebar)] ease-in-out transition-colors duration-300 hover:bg-black text-2xl md:text-4xl p-6 md:p-8 rounded-lg cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.1)]'>
							Talk with us
						</Button>
					</Link>
					<Link href='#portfolio'>
						<Button className='w-fit mt-5 bg-[var(--sidebar)] text-black hover:text-[var(--sidebar)] ease-in-out transition-colors duration-300 hover:bg-black text-2xl md:text-4xl p-6 md:p-8 rounded-lg cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.1)]'>
							View portfolio
						</Button>
					</Link>
				</div>
				{/* <p className='text-xl md:text-2xl mt-6 text-[var(--paralax))]'>
					Fast, responsive web apps that look great on any device.
				</p> */}
				<p className='text-xl md:text-2xl mt-6 text-[var(--paralax))]'>
					Clicking your business into gear.
				</p>
				<p className='text-xl md:text-2xl mt-1 text-[var(--paralax))]'>
					Free quotes available.
				</p>
			</div>
		</motion.div>
	)
}
