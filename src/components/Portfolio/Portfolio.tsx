import {
	Card,
	CardContent,
	// CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

import dynamic from 'next/dynamic'
import 'react-multi-carousel/lib/styles.css'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import Link from 'next/link'

const portfolioCards = [
	{
		title: 'MS-Tracker',
		image: '/ms_tracker.png',
		category: 'Project',
		link: 'https://ms-tracker.vercel.app',
	},
	{
		title: 'Val Art Gallery',
		image: '/val_gallery_pre.png',
		category: 'E-Commerce',
		link: 'https://val-gallery.vercel.app',
	},
	{
		title: 'RL Painting Solutions',
		image: '/rlpaintingsolutions_prev.png',
		category: 'Landing Page',
		link: 'https://rlpaintingsolutions.com',
	},
	{
		title: 'PromptBinder',
		image: '/promptbinder.png',
		category: 'Productivity',
		link: 'https://aipromptbinder.com',
	},
	{
		title: 'Portfolio',
		image: '/portfolio.png',
		category: 'Portfolio',
		link: 'https://portfolio-delta-black-99.vercel.app',
	},
]

const Carousel = dynamic(() => import('react-multi-carousel'), {
	ssr: false,
})

type Props = {
	className?: string
}

export default function Portfolio({ className }: Props) {
	const carouselRef = useRef<typeof Carousel>(null)
	return (
		// className={`relative p-5 md:p-8 lg:p-12 bg-white gap-6 mx-4 md:mx-auto w-xl md:w-2xl lg:w-4xl rounded-xl shadow-md

		<div
			className={`${className}  w-full  text-center  justify-center flex flex-col`}
		>
			<div className='border-box mx-4 md:mx-auto md:w-2xl lg:w-4xl overflow-hidden'>
				<Carousel
					swipeable={false}
					draggable={false}
					showDots={true}
					responsive={{
						bigdesktop: {
							breakpoint: {
								max: 3000,
								min: 200,
							},
							items: 3,
							partialVisibilityGutter: 40,
						},
						desktop: {
							breakpoint: {
								max: 2000,
								min: 1024,
							},
							items: 3,
							partialVisibilityGutter: 40,
						},
						mobile: {
							breakpoint: {
								max: 600,
								min: 0,
							},
							items: 1,
							partialVisibilityGutter: 30,
						},
						tablet: {
							breakpoint: {
								max: 1024,
								min: 600,
							},
							items: 2,
							partialVisibilityGutter: 30,
						},
					}}
					infinite={true}
					autoPlay={false}
					keyBoardControl={true}
					transitionDuration={1000}
					dotListClass='custom-dot-list-style'
					// itemClass='p-3 mb-5  shadow-lg rounded-xl'
					// containerClass=''
					itemClass='px-2 mb-8 '
					arrows={false}
					renderArrowsWhenDisabled={false}
					renderButtonGroupOutside={true}
					customButtonGroup={
						<ButtonGroup
							next={() => carouselRef.current}
							previous={() => carouselRef.current}
						/>
					}
					slidesToSlide={1}
				>
					{portfolioCards.map((card, index) => (
						<div
							key={index}
							className='h-full justify-center items-center flex'
						>
							{portfolioCard({
								title: card.title,
								image: card.image,
								category: card.category,
								link: card.link,
							})}
						</div>
					))}
				</Carousel>
			</div>
		</div>
	)
}

const portfolioCard = ({
	title,
	image,
	category,
	link,
}: {
	title: string
	image: string
	category: string
	link: string
}) => {
	return (
		<Card className='bg-white h-full flex flex-col w-fit'>
			<CardHeader className='flex-shrink-0'>
				<CardTitle className='text-3xl'>{title}</CardTitle>
				{/* <CardDescription>Card Description</CardDescription> */}
			</CardHeader>

			<CardContent className='flex-1 flex px-2'>
				<div className='relative w-full aspect-[3/2] rounded-xl overflow-hidden p-0'>
					<Image
						src={image}
						alt={`${title} preview`}
						fill
						className='object-cover rounded-xl'
						sizes='(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw'
					/>
				</div>
			</CardContent>
			<CardFooter className='justify-center flex mt-auto flex-shrink-0'>
				<p className='text-lg'>
					Category: {category} <br /> Link:{' '}
					<Link
						href={link}
						className='underline underline-offset-1'
						target='_blank'
						rel='noopener noreferrer'
					>
						{link.replace('https://', '')}
					</Link>
				</p>
			</CardFooter>
		</Card>
	)
}

const ButtonGroup = ({
	next,
	previous,
}: {
	next: () => void
	previous: () => void
}) => {
	return (
		<div className='flex flex-row items-center justify-center gap-4 py-4'>
			<button
				className='cursor-pointer bg-[var(--secondary)] shadow px-6 py-3 rounded hover:bg-[var(--popover)] active:bg-green-400 hover:text-[var(--primary)]'
				onClick={previous}
			>
				<ArrowLeft className='w-5 h-5' />
			</button>
			<button
				className='cursor-pointer bg-[var(--secondary)] shadow px-6 py-3 rounded hover:bg-[var(--popover)] active:bg-green-400 hover:text-[var(--primary)]'
				onClick={next}
			>
				<ArrowRight className='w-5 h-5' />
			</button>
		</div>
	)
}
