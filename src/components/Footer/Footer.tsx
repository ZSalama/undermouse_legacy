import Link from 'next/link'

type Props = {
	className?: string
}

export default function Footer({ className }: Props) {
	const currentYear = new Date().getFullYear()
	return (
		<div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>
			<div className='flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm backdrop-blur md:flex-row md:items-center md:justify-between md:text-base'>
				<div className='space-y-2 text-left'>
					<p className='text-lg font-semibold'>UnderMouse Creative</p>
					<p className='max-w-sm text-sm opacity-80'>
						Local website design studio serving Fernandina Beach, Amelia Island,
						Yulee, and coastal Nassau County.
					</p>
				</div>
				<div className='space-y-2 text-left text-sm opacity-80'>
					<p>undermouseweb@gmail.com</p>
					<p>Available Monday – Friday, 9am to 5pm ET</p>
				</div>
				<div className='space-y-2 text-left text-sm opacity-80'>
					<p>&copy; {currentYear} UnderMouse Creative. All rights reserved.</p>
					<Link
						href='https://github.com/ZSalama/undermouse'
						target='_blank'
						rel='noopener noreferrer'
						className='underline-offset-4 hover:underline'
					>
						View the project on GitHub
					</Link>
				</div>
			</div>
		</div>
	)
}
