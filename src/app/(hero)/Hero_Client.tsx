'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'
import ScrollingText from '@/components/ScrollingText/ScrollingText'
import { Button } from '@/components/ui/button'

const Contact = dynamic(() => import('@/components/Contact/Contact'), {
	ssr: false,
})

const services = [
	{
		title: 'Custom Local Website Design',
		description:
			'Conversion-focused sites that showcase your Fernandina Beach story, menu, services, and calls-to-action on every device.',
	},
	{
		title: 'Google & Local SEO Setup',
		description:
			'Listing optimization, location pages, and schema that help neighbors find you on Google Maps and “near me” searches.',
	},
	{
		title: 'Online Booking & Ordering',
		description:
			'Seamless integrations for reservations, service appointments, and e-commerce so customers can take action anytime.',
	},
	{
		title: 'Care Plans & Support',
		description:
			'Monthly updates, security, and fresh content so your website keeps working as hard as you do.',
	},
]

const packages = [
	{
		name: 'Launch Package',
		price: '$1,200',
		cadence: 'one-time investment',
		description:
			'Perfect for new local businesses ready for a professional online presence.',
		features: [
			'Up to 5 custom-designed pages',
			'Google Business Profile refresh',
			'Mobile-first, ADA-aware layouts',
			'Training session for easy updates',
		],
	},
	{
		name: 'Growth Package',
		price: '$2,100',
		cadence: 'one-time investment',
		description:
			'For established teams that need lead capture, automations, and SEO momentum.',
		features: [
			'Up to 10 pages with blog setup',
			'Local SEO keyword plan',
			'Online booking or ordering integration',
			'Email marketing & CRM connection',
		],
	},
	{
		name: 'Care Plan',
		price: '$149',
		cadence: 'per month',
		description:
			'Keep things fast, secure, and fresh with proactive support from a local partner.',
		features: [
			'Hosting, backups, & security monitoring',
			'Unlimited minor content edits',
			'Monthly performance & SEO report',
			'Priority support with 24-hour response',
		],
	},
]

const testimonials = [
	{
		quote:
			'UnderMouse gave our Fernandina Beach restaurant a website that looks as good as the dining room. Online reservations are up 38% and locals tell us they found us on Google every week.',
		name: 'Lena Martinez',
		role: 'Owner, Saltwater Table',
	},
	{
		quote:
			'Our boutique had relied on word-of-mouth for years. The new site added local pickup ordering and our sales jumped within the first month. Zack is responsive and truly cares about our success.',
		name: 'Nicole Dorsey',
		role: 'Founder, Amelia Island Mercantile',
	},
	{
		quote:
			'We needed a professional site fast for a new service launch. UnderMouse handled design, copy, and SEO. We signed three new maintenance contracts the same week it went live.',
		name: 'Caleb Johnson',
		role: 'General Manager, Atlantic Home Services',
	},
]

const highlights = [
	{
		label: '48-hour kickoff',
		description:
			'Get a strategy session and action plan within two business days.',
	},
	{
		label: 'Local-first approach',
		description:
			'Built around Fernandina Beach visitors, tourism seasons, and neighborhood search trends.',
	},
	{
		label: 'Transparent pricing',
		description:
			'Flat-fee projects, month-to-month support, and no surprise invoices—ever.',
	},
]

const processSteps = [
	{
		title: 'Discover',
		description:
			'We meet at your shop, on a call, or over coffee downtown to map your goals, offers, and local audience.',
	},
	{
		title: 'Design & Build',
		description:
			'Custom copy, photography guidance, and web design built on modern Next.js tech for speed and security.',
	},
	{
		title: 'Launch & Optimize',
		description:
			'Launch with on-page SEO, Google Business Profile tuning, and analytics so you can track leads.',
	},
	{
		title: 'Grow Together',
		description:
			'Ongoing updates, seasonal campaigns, and experiments that keep you top-of-mind for locals and visitors.',
	},
]

export default function Hero_Client() {
	return (
		<div className='bg-slate-50 text-slate-900'>
			<section className='flex relative overflow-hidden bg-slate-900 text-white'>
				<div className='mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 md:flex-row md:items-center md:gap-16 md:py-28'>
					<div className='relative z-10 flex-1'>
						<p className='text-sm uppercase tracking-[0.4em] text-amber-300'>
							Fernandina Beach &amp; Amelia Island
						</p>
						<h1 className='mt-4 text-4xl font-bold leading-tight md:text-6xl'>
							Websites that bring more locals to your door.
						</h1>
						<p className='mt-6 text-lg text-slate-100 md:text-xl'>
							UnderMouse Creative builds high-converting websites for
							restaurants, shops, and service pros in Fernandina Beach, Florida.
							From design and copy to SEO and support, we help you turn online
							searches into loyal customers.
						</p>
						<div className='mt-8 flex flex-col gap-4 sm:flex-row'>
							<Link href='#contact'>
								<Button className='h-14 rounded-full bg-amber-300 px-8 text-lg font-semibold text-slate-900 transition-colors hover:bg-amber-200 cursor-pointer'>
									Schedule a free consult
								</Button>
							</Link>
							<Link href='#pricing'>
								<Button
									variant='outline'
									className='h-14 rounded-full border-amber-300 px-8 text-lg font-semibold text-slate-900 transition-colors cursor-pointer'
								>
									View pricing
								</Button>
							</Link>
						</div>
					</div>
					<div className='relative z-10 flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10'>
						<h2 className='text-lg font-semibold text-amber-300'>
							What you get
						</h2>
						<ul className='mt-4 space-y-4 text-base text-slate-100'>
							{highlights.map((highlight) => (
								<li
									key={highlight.label}
									className='rounded-2xl border border-white/10 p-4'
								>
									<p className='text-lg font-semibold text-white'>
										{highlight.label}
									</p>
									<p className='mt-1 text-sm text-slate-200'>
										{highlight.description}
									</p>
								</li>
							))}
						</ul>
						<p className='mt-6 text-sm text-slate-300'>
							Serving Fernandina Beach, Amelia Island, Yulee, and the
							surrounding Nassau County area.
						</p>
					</div>
				</div>
				<div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.25),_transparent_55%)]' />
			</section>

			<ScrollingText />

			<section
				id='about'
				className='mx-auto flex max-w-5xl flex-col gap-12 px-6 py-20'
			>
				<div className='mx-auto text-center'>
					<span className='text-sm font-semibold uppercase tracking-[0.3em] text-amber-500'>
						Who we are
					</span>
					<h2 className='mt-4 text-3xl font-bold md:text-4xl'>
						Rooted in Fernandina Beach, driven by results
					</h2>
					<p className='mt-4 text-lg text-slate-600 md:text-xl'>
						Work directly with a local developer who understands the rhythm of
						Centre Street, the needs of tourism-driven businesses, and the
						expectations of year-round residents.
					</p>
				</div>
				<About />
			</section>

			<section id='services' className='bg-white py-20'>
				<div className='mx-auto max-w-6xl px-6'>
					<div className='mx-auto max-w-3xl text-center'>
						<span className='text-sm font-semibold uppercase tracking-[0.3em] text-amber-500'>
							Services
						</span>
						<h2 className='mt-4 text-3xl font-bold md:text-4xl'>
							Everything your small business website needs
						</h2>
						<p className='mt-4 text-lg text-slate-600'>
							Partner with a single team for design, copy, technology, and
							marketing. Every project is built to deliver measurable results
							for Fernandina Beach businesses.
						</p>
					</div>
					<div className='mt-12 grid gap-6 sm:grid-cols-2'>
						{services.map((service) => (
							<div
								key={service.title}
								className='rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-shadow hover:shadow-lg'
							>
								<h3 className='text-xl font-semibold text-slate-900'>
									{service.title}
								</h3>
								<p className='mt-3 text-base text-slate-600'>
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id='pricing' className='bg-slate-900 py-20 text-white'>
				<div className='mx-auto max-w-6xl px-6'>
					<div className='mx-auto max-w-3xl text-center'>
						<span className='text-sm font-semibold uppercase tracking-[0.3em] text-amber-300'>
							Pricing
						</span>
						<h2 className='mt-4 text-3xl font-bold md:text-4xl'>
							Straightforward packages for every stage
						</h2>
						<p className='mt-4 text-lg text-slate-200'>
							Start with a launch plan, then layer on growth tools and support
							as your business evolves. Every project includes strategy, design,
							copy, and implementation.
						</p>
					</div>
					<div className='mt-12 grid gap-8 md:grid-cols-3'>
						{packages.map((pkg) => (
							<div
								key={pkg.name}
								className='flex justify-between h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur'
							>
								<div>
									<div>
										<h3 className='text-2xl font-semibold text-white'>
											{pkg.name}
										</h3>
										<p className='mt-2 text-4xl font-bold text-amber-300'>
											{pkg.price}
										</p>
										<p className='text-sm uppercase tracking-wide text-slate-300'>
											{pkg.cadence}
										</p>
										<p className='mt-4 text-sm text-slate-200'>
											{pkg.description}
										</p>
									</div>
									<ul className='mt-6 space-y-3 text-sm text-slate-100'>
										{pkg.features.map((feature) => (
											<li key={feature} className='flex items-start gap-2'>
												<span className='mt-1 h-2 w-2 rounded-full bg-amber-300' />
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>
								<div>
									<div className='mt-8'>
										<Link href='#contact'>
											<Button className='w-full rounded-full bg-amber-300 text-slate-900 hover:bg-amber-200'>
												Start this package
											</Button>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
					<p className='mt-10 text-center text-sm text-slate-300'>
						Need something unique? Request a custom proposal during your free
						consult.
					</p>
				</div>
			</section>

			<section id='testimonials' className='bg-white py-20'>
				<div className='mx-auto max-w-6xl px-6'>
					<div className='mx-auto max-w-3xl text-center'>
						<span className='text-sm font-semibold uppercase tracking-[0.3em] text-amber-500'>
							Testimonials
						</span>
						<h2 className='mt-4 text-3xl font-bold md:text-4xl'>
							Trusted by Fernandina Beach business owners
						</h2>
						<p className='mt-4 text-lg text-slate-600'>
							Hear from entrepreneurs who teamed up with UnderMouse Creative to
							launch faster and sell more.
						</p>
					</div>
					<div className='mt-12 grid gap-6 md:grid-cols-3'>
						{testimonials.map((testimonial) => (
							<figure
								key={testimonial.name}
								className='flex h-full justify-between flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm'
							>
								<blockquote className='text-base text-slate-700'>
									“{testimonial.quote}”
								</blockquote>
								<figcaption className='mt-6'>
									<p className='text-sm font-semibold text-slate-900'>
										{testimonial.name}
									</p>
									<p className='text-sm text-slate-600'>{testimonial.role}</p>
								</figcaption>
							</figure>
						))}
					</div>
				</div>
			</section>

			<section id='process' className='bg-slate-100 py-20'>
				<div className='mx-auto max-w-6xl px-6'>
					<div className='mx-auto max-w-3xl text-center'>
						<span className='text-sm font-semibold uppercase tracking-[0.3em] text-amber-500'>
							Process
						</span>
						<h2 className='mt-4 text-3xl font-bold md:text-4xl'>
							A collaborative process that respects your time
						</h2>
						<p className='mt-4 text-lg text-slate-600'>
							Stay in the loop with weekly updates, shared timelines, and clear
							next steps. We do the heavy lifting so you can keep running your
							business.
						</p>
					</div>
					<div className='mt-12 grid gap-6 md:grid-cols-2'>
						{processSteps.map((step, index) => (
							<div
								key={step.title}
								className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'
							>
								<div className='flex items-center gap-4'>
									<span className='flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-lg font-semibold text-amber-700'>
										{index + 1}
									</span>
									<h3 className='text-xl font-semibold text-slate-900'>
										{step.title}
									</h3>
								</div>
								<p className='mt-4 text-base text-slate-600'>
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id='contact' className='bg-white py-20'>
				<div className='mx-auto max-w-6xl px-6'>
					<div className='flex flex-col lg:flex-row gap-12'>
						<div className='rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm'>
							<span className='text-sm font-semibold uppercase tracking-[0.3em] text-amber-500'>
								Let’s talk
							</span>
							<h2 className='mt-4 text-3xl font-bold text-slate-900 md:text-4xl'>
								Tell us about your next website
							</h2>
							<p className='mt-4 text-lg text-slate-600'>
								Share your goals, budget, and timeline. We’ll follow up within
								one business day with a tailored plan for your Fernandina Beach
								business.
							</p>
							<div className='mt-8 space-y-3 text-base text-slate-700'>
								{/* <p>
									<strong className='font-semibold text-slate-900'>
										Phone:
									</strong>{' '}
									<a
										className='text-amber-600 underline-offset-4 hover:underline'
										href='tel:19042898925'
									>
										(904) 289-8925
									</a>
								</p> */}
								<p>
									<strong className='font-semibold text-slate-900'>
										Email:
									</strong>{' '}
									<a
										className='text-amber-600 underline-offset-4 hover:underline'
										href='mailto:undermouseweb@gmail.com'
									>
										undermouseweb@gmail.com
									</a>
								</p>
								<p>
									<strong className='font-semibold text-slate-900'>
										Service area:
									</strong>{' '}
									Fernandina Beach, Amelia Island, Yulee, and coastal Nassau
									County.
								</p>
							</div>

							<div className='mt-10 rounded-2xl border border-amber-200 bg-white p-6 text-sm text-slate-600'>
								<p className='font-semibold text-slate-900'>
									What happens next?
								</p>
								<ol className='mt-3 space-y-2 list-decimal list-inside'>
									<li>Schedule a free 30-minute discovery call.</li>
									<li>
										Review a custom proposal with timeline and deliverables.
									</li>
									<li>
										Kick off with a local photoshoot &amp; content collection
										checklist.
									</li>
								</ol>
							</div>
						</div>
						<Contact className='h-full bg-white p-10 shadow-none ring-1 ring-slate-200 lg:p-12' />
					</div>
				</div>
			</section>

			<footer className='bg-slate-900 py-12 text-white'>
				<Footer className='bg-transparent text-white' />
			</footer>
		</div>
	)
}
