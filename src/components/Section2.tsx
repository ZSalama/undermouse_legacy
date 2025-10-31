import { motion, MotionValue, useTransform } from 'framer-motion'

export const Section2 = ({
	scrollYProgress,
}: {
	scrollYProgress: MotionValue<number>
}) => {
	const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

	return (
		<motion.div
			style={{ scale, rotate }}
			className="relative h-screen bg-[var(--primary)] z-50 md:top-0 lg:top-0 bg-[url('/hero_bg_2_flipped.png')] bg-cover bg-no-repeat bg-center"
		>
			{/* <Image
                src='/hero_bg_2_flipped.png'
                alt='img'
                fill
                className=''
                // className='w-200 h-200'
            /> */}
		</motion.div>
	)
}
