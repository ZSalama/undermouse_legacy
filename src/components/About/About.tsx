import Image from 'next/image'

type Props = {
	className?: string
}

export default function About({ className }: Props) {
	return (
		<section
			className={`rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-md md:px-12 md:py-16 ${className}`}
		>
			<div className='grid w-full gap-10 md:grid-cols-12 md:items-start'>
				<div className='space-y-6 text-left text-slate-700 md:col-span-7 lg:col-span-8'>
					<h3 className='text-2xl font-semibold text-slate-900 md:text-3xl'>
						Meet Zack Salama, your neighbor in web design
					</h3>
					<p className='text-lg leading-relaxed'>
						I started UnderMouse Creative to help Fernandina Beach businesses
						show up brilliantly online. I want to bring my passion for high
						quality web design to the local shops, cafes, and service providers
						that make our community unique.
					</p>
					<p className='text-lg leading-relaxed'>
						When we work together, you get more than a developer—you get a local
						partner who understands shrimp festival rushes, tourism seasonality,
						and the importance of word-of-mouth. I handle the tech, strategy,
						and updates so you can focus on running your business.
					</p>
				</div>
				<div className='relative mx-auto h-40 w-40 overflow-hidden rounded-2xl border border-amber-100 bg-amber-50 shadow-inner md:col-span-5 md:h-52 md:w-52 lg:col-span-4 lg:h-64 lg:w-64'>
					<Image
						src='/undermouse_profile_og_cropped.webp'
						alt='Zack Salama, founder of UnderMouse Creative'
						fill
						className='object-cover'
						sizes='(min-width: 1024px) 240px, (min-width: 768px) 200px, 160px'
						priority
					/>
				</div>
				<ul className='grid gap-4 md:col-span-12 md:grid-cols-2 '>
					<li className='rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm text-amber-900'>
						Certified in UX strategy, accessibility, and technical SEO
					</li>
					<li className='rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700'>
						Works with restaurants, boutiques, contractors, realtors, and
						service providers
					</li>
					<li className='rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700'>
						Available for on-site strategy sessions anywhere in Nassau County
					</li>
					<li className='rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm text-amber-900'>
						Committed to transparent communication and clear timelines from day
						one
					</li>
				</ul>
			</div>
		</section>
	)
}
