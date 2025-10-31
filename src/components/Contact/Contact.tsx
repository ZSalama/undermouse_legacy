'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formSchema } from '@/lib/types'

type FormSchema = z.infer<typeof formSchema>

type Props = {
	className?: string
}

export default function Contact({ className }: Props) {
	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
			favoriteColor: '',
		},
	})

	// 2. Define a submit handler.
	async function onSubmit(value: FormSchema) {
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(value),
			})
			if (!res.ok) throw new Error('Network response was not ok')
			// Optional: show a success toast or reset form
			alert('Message sent!')
			form.reset()
		} catch (error) {
			console.error(error)
			alert('Failed to send message.')
		}
	}

	return (
		<section
			className={`${className} flex flex-col bg-white gap-6 p-6 rounded-xl text-lg shadow-md`}
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col gap-6'
				>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-lg'>Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder='Your name'
										className='w-full'
									/>
								</FormControl>
								<FormDescription className='text-sm'>
									What should we call you?
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-lg'>Email</FormLabel>
								<FormControl>
									<Input
										{...field}
										type='email'
										placeholder='you@example.com'
										className='w-full'
									/>
								</FormControl>
								<FormDescription>So I can get back to you.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='favoriteColor'
						render={({ field }) => (
							<FormItem className='col-span-1 hidden '>
								<FormLabel className='text-lg'>Favorite Color</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder='e.g. Blue'
										className='w-full'
									/>
								</FormControl>
								<FormDescription>Just for fun!</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='message'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-lg'>Message</FormLabel>
								<FormControl>
									<textarea
										{...field}
										placeholder='I would like to...'
										className='text-sm w-full h-32 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--sidebar)]'
									/>
								</FormControl>
								<FormDescription>How can we help?</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type='submit'
						className='cursor-pointer w-fit text-lg p-6 bg-[var(--sidebar)] hover:bg-[var(--sidebar-foreground)] font-medium transition-colors justify-center items-center text-black hover:text-[var(--sidebar)]'
					>
						Send Message
					</Button>
				</form>
				<p className='text-l'>
					Prefer email? Reach out directly at hello@undermousecreative.com
				</p>
			</Form>
		</section>
	)
}
