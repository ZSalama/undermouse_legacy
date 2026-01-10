import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const tiers = [
	{
		name: 'Starter',
		price: '$850',
		description: 'Launch fast with a clean, credible single-page site.',
		features: [
			'Custom design and copy guidance',
			'Mobile-first layout',
			'Contact form setup',
			'Basic SEO foundation',
		],
	},
	{
		name: 'Growth',
		price: '$1,650',
		description: 'A multi-page site built to convert and scale.',
		features: [
			'Up to 5 pages',
			'Analytics + conversion tracking',
			'Performance optimization',
			'CMS-ready structure',
		],
		featured: true,
	},
	{
		name: 'Signature',
		price: 'Custom',
		description: 'Complex builds, integrations, and bespoke experiences.',
		features: [
			'Advanced animations and interactions',
			'Custom integrations',
			'Content architecture + strategy',
			'Priority support',
		],
	},
]

export default function Pricing() {
	return (
		<section
			className='relative overflow-hidden bg-gray-200 py-16 md:py-20'
			id='pricing'
		>
			<div className='mx-auto w-full max-w-6xl px-5 md:px-8 lg:px-12'>
				<div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
					<div className='max-w-2xl'>
						<h2 className='mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-black'>
							Pricing
						</h2>
						<p className='mt-4 text-lg md:text-xl text-black/70'>
							Every build is tailored, but these starting points make it easy to
							choose the right level of support.
						</p>
					</div>
					<Link href='#contact'>
						<Button className='w-fit bg-[var(--sidebar)] text-black hover:text-[var(--sidebar)] ease-in-out transition-colors duration-300 hover:bg-black text-xl md:text-2xl p-4 md:p-6 rounded-lg cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.1)]'>
							Get a quote
						</Button>
					</Link>
				</div>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{tiers.map((tier) => (
						<div
							key={tier.name}
							className={`relative flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-white/80 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur ${
								tier.featured
									? 'border-black bg-[var(--sidebar)]/60 text-black'
									: 'text-black'
							}`}
						>
							<div>
								<div className='flex items-center gap-3'>
									<h3 className='text-2xl font-bold'>{tier.name}</h3>
									{tier.featured ? (
										<span className='w-fit rounded-full bg-black px-3 ml-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sidebar)]'>
											Most popular
										</span>
									) : null}
								</div>
								<p className='mt-2 text-base text-black/70'>
									{tier.description}
								</p>
								<div className='mt-6 flex items-baseline gap-2'>
									<span className='text-4xl font-bold'>{tier.price}</span>
									{tier.price !== 'Custom' ? (
										<span className='text-sm text-black/60'>starting</span>
									) : null}
								</div>
								<ul className='mt-6 space-y-3 text-base text-black/80'>
									{tier.features.map((feature) => (
										<li key={feature} className='flex items-start gap-2'>
											<span className='mt-1 h-2 w-2 rounded-full bg-black' />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>
							<Link href='#contact' className='mt-8'>
								<Button className='w-full bg-black text-[var(--sidebar)] hover:text-black ease-in-out transition-colors duration-300 hover:bg-[var(--sidebar)] text-lg md:text-xl p-4 rounded-lg cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.1)]'>
									{tier.price === 'Custom' ? 'Request scope' : 'Start here'}
								</Button>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
