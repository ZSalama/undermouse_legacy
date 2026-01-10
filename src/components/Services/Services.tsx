import React from 'react'
import { Reorder } from 'framer-motion'
import { useMotionValue, motion } from 'framer-motion'
import { useRaisedShadow } from './use-raised-shadow'
import { useState } from 'react'
import { Grip, ArrowBigRight } from 'lucide-react'
import CTA from '../CTA'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog'
import { Button } from '../ui/button'

interface Props {
	value: [string, string]
}

const words: [string, string][] = [
	[
		'Branding',
		"Your website is often the first impression customers have of your business, and branding ensures that impression is clear, consistent, and memorable. I help define and translate your brand's personality—colors, typography, imagery, tone, and layout—into a cohesive online presence that reflects who you are and what you stand for. \n\n Whether you already have a brand or know you need one but are not sure where to start, I work with you to create a look and feel that builds trust, recognition, and credibility across your website and digital touchpoints.",
	],
	[
		'Analytics',
		'Analytics turn your website from a guessing game into a decision-making tool. I set up and configure tracking so you can see how visitors find your site, what pages they interact with, and where potential customers drop off. \n\n More importantly, I help translate that data into insights you can actually use—understanding what is working, what needs improvement, and how to adjust your website to better support your business goals.',
	],
	[
		'Design',
		"Good design is not just about aesthetics—it is about clarity and communication. I design websites that look professional, modern, and aligned with your brand while keeping the layout clean and easy to understand. \n\nEvery design choice is intentional, helping guide visitors' attention, highlight what matters most, and create a polished experience that makes your business feel established and trustworthy.",
	],

	[
		'SEO',
		'Search Engine Optimization (SEO) helps customers find you when they are actively searching for your services. I build websites with SEO best practices baked in—from page structure and metadata to performance and accessibility—so your site is positioned to rank effectively. \n\nRather than quick hacks, I focus on long-term, sustainable SEO foundations that improve visibility, attract the right audience, and support steady growth over time.',
	],

	[
		'Mobile',
		'Most visitors will see your website on their phone first. I ensure your site is fully responsive, fast, and easy to use on all screen sizes, from mobile phones to large desktops. \n\nThis means touch-friendly navigation, readable text, optimized images, and layouts that adapt naturally—so your website feels effortless to use, no matter how customers access it.',
	],
	[
		'UX/UI',
		'UX (User Experience) and UI (User Interface) determine how intuitive and enjoyable your website is to use. I focus on structuring content, navigation, and interactions so visitors always know where they are, what to do next, and how to take action. \n\nThe result is a smoother experience that reduces friction, builds confidence, and helps turn visitors into customers without them having to think about it.',
	],
	[
		'And More',
		'Beyond the core essentials, I help with performance optimization, integrations, accessibility, content structure, and ongoing improvements as your business evolves. Websites are not static—they grow alongside your goals. \n\nIf you are unsure whether something is possible or worth doing, I can help you evaluate options and implement solutions that make sense for your business today while leaving room for tomorrow.',
	],
]

// const words: [string, string][] = [
//     ['Analytics', '#analytics'],
//     ['About', '#about'],
//     ['Portoflio', '#portfolio'],
// ]

export default function Services() {
	const [items, setItems] = useState(words)

	return (
		<div className='bg-gray-200 p-8'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:h-full md:h-full px-0 md:px-[5%] lg:px-[10%]'>
				{/* Full-width title at the top */}
				<h1 className='col-span-full text-center text-[4.5vw] max-w-4xl mx-auto font-bold'>
					Services
				</h1>

				<div className='text-lg md:text-4xl lg:text-4xl flex justify-center items-center text-left flex-col gap-4 my-auto'>
					We can help you:{' '}
					<CTA className='text-lg md:text-4xl lg:text-[4.5vw]  ' />
				</div>
				<Reorder.Group
					axis='y'
					onReorder={setItems}
					values={items}
					className='flex flex-col gap-4 items-center'
				>
					{items.map((item) => (
						<Item key={item[0]} value={item} />
					))}
				</Reorder.Group>
			</div>
		</div>
	)
}

const Item = ({ value }: Props) => {
	const y = useMotionValue(0)
	const boxShadow = useRaisedShadow(y)

	const [text, contents] = value

	return (
		<Reorder.Item
			value={value}
			id={text}
			style={{ boxShadow, y, cursor: 'grab' }}
			className='relative flex items-center justify-center bg-[var(--sidebar)] rounded-lg p-4 shadow-md mb-4 text-center w-[15rem] md:max-w-md lg:w-[20rem]'
		>
			<span className='absolute left-4'>
				<Grip className='w-5 h-5' />
			</span>
			<span className='pointer-events-none'>{text}</span>
			<motion.div className='absolute right-4'>
				<Dialog>
					<DialogTrigger asChild className='p-0'>
						<Button variant='ghost' className='p-0 m-0' asChild>
							<ArrowBigRight className='w-7 h-7' />
						</Button>
					</DialogTrigger>
					<DialogContent className='bg-[var(--sidebar)] text-[var(--sidebar-foreground)] border-[rgba(31,19,0,0.15)] shadow-[0_20px_60px_rgba(31,19,0,0.35)]'>
						<DialogHeader className='border-b border-[rgba(31,19,0,0.12)] pb-3'>
							<DialogTitle className='text-[var(--sidebar-foreground)]'>
								{text}
							</DialogTitle>
						</DialogHeader>
						{contents.split('\n\n').map((paragraph, i) => (
							<p
								key={i}
								className='mb-4 last:mb-0 text-[var(--sidebar-foreground)] opacity-90'
							>
								{paragraph}
							</p>
						))}
					</DialogContent>
				</Dialog>
			</motion.div>
		</Reorder.Item>
	)
}
