/* eslint-disable @typescript-eslint/no-explicit-any */

export const revalidate = 3600

import { Button } from '@/components/ui/button'
import { contentfulClient } from '@/lib/contentful'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

export default async function Blog() {
	const entries = await contentfulClient.getEntries({
		content_type: 'blog',
	})

	return (
		<div className='bg-gray-200 h-dvh'>
			<div className='container mx-auto px-4 py-8 bg-gray-200'>
				<div className='grid grid-cols-1 md:grid-cols-3 items-center mb-8'>
					<div className='flex'>
						<Link href='/#blog'>
							<Button className='flex flex-row cursor-pointer w-30 p-5 mb-4 md:mb-0'>
								<FaArrowLeft />
								Home
							</Button>
						</Link>
					</div>
					<h1 className='text-4xl font-extrabold md:text-center'>Blog Posts</h1>
					<div />
				</div>

				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{entries.items.map((item: any) => {
						const { title, pictureUrl, createdAt, updatedAt } = item.fields
						return (
							<Link key={item.sys.id} href={`/blog/${item.fields.slug}`}>
								<Card className='bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full justify-between'>
									<CardHeader>
										<CardTitle className='text-2xl font-bold line-clamp-2 text-center'>
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
													className='rounded-lg mb-4'
												/>
											)}
										</CardContent>
										<CardDescription className='text-sm text-gray-500 text-center'>
											<p className='text-sm text-gray-400'>
												{`${format(
													new Date(String(updatedAt)),
													'MMMM do, yyyy'
												)}`}
											</p>
										</CardDescription>
									</div>
								</Card>
							</Link>
						)
					})}
				</div>
			</div>
		</div>
	)
}
