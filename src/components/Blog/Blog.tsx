'use client'
import React from 'react'
// import { contentfulClient } from '@/lib/contentful'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'

export interface BlogProps {
	className?: string
	data: any
}

export default function Blog({ className, data }: BlogProps) {
	const posts = data.blog
	return (
		<div
			className={`${className} w-full text-center justify-center flex flex-col sm:flex-row gap-4 my-8 mx-4 md:mx-auto max-w-xl md:max-w-2xl lg:max-w-4xl`}
		>
			{posts.map((item: any) => {
				const { title, pictureUrl, updatedAt } = item.fields

				return (
					<Link href={`/blog/${item.fields.slug}`} key={item.sys.id}>
						<Card className='bg-white shadow-lg hover:shadow-xl transition-shadow duration-300  h-80 md:h-full justify-between'>
							<CardHeader>
								<CardTitle className='text-2xl font-bold line-clamp-2'>
									{String(title)}
								</CardTitle>
							</CardHeader>

							<div>
								<CardContent className='flex flex-col items-center'>
									{pictureUrl && (
										<Image
											src={`${pictureUrl}`}
											alt={String(title)}
											width={500}
											height={500}
											className='rounded-lg mb-4 object-cover h-48 w-full'
										/>
									)}
								</CardContent>
								<CardDescription className='text-sm text-gray-500'>
									<p className='text-sm text-gray-400'>
										{`${format(new Date(String(updatedAt)), 'MMMM do, yyyy')}`}
									</p>
								</CardDescription>
							</div>

							{/* <CardFooter className='justify-center flex'>
							<p className='text-sm text-gray-500'>ID: {title}</p>
						</CardFooter> */}
						</Card>
					</Link>
				)
			})}
		</div>
	)
}
