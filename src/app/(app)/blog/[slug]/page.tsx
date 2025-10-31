import React from 'react'
import { contentfulClient } from '@/lib/contentful'
// import * as contentful from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import { format } from 'date-fns'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { Options, NodeRenderer } from '@contentful/rich-text-react-renderer'
import { Block, Inline } from '@contentful/rich-text-types'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FaArrowLeft } from 'react-icons/fa'

interface CustomNodeRenderer {
	[node: string]: NodeRenderer
}

const options: Options = {
	renderNode: {
		[BLOCKS.PARAGRAPH]: (_node: Block, children: React.ReactNode) => (
			<p className='mb-6 leading-relaxed text-gray-700'>{children}</p>
		),
		[BLOCKS.HEADING_2]: (_node: Block, children: React.ReactNode) => (
			<h2 className='mt-8 mb-4 text-2xl font-semibold'>{children}</h2>
		),
		[BLOCKS.HEADING_3]: (_node: Block, children: React.ReactNode) => (
			<h3 className='mt-6 mb-3 text-xl font-medium'>{children}</h3>
		),
		[BLOCKS.UL_LIST]: (_node: Block, children: React.ReactNode) => (
			<ul className='list-disc  mb-12 ml-8'>{children}</ul>
		),
		[BLOCKS.OL_LIST]: (_node: Block, children: React.ReactNode) => (
			<ol className='list-disc  mb-12'>{children}</ol>
		),
		[INLINES.HYPERLINK]: (node: Inline, children: React.ReactNode) => (
			<a
				href={node.data.uri}
				className='text-blue-600 underline hover:text-blue-800'
			>
				{children}
			</a>
		),
		[BLOCKS.QUOTE]: (_node: Block, children: React.ReactNode) => (
			<blockquote className='border-l-4 px-4 mx-8 italic text-gray-600 mb-6'>
				{children}
			</blockquote>
		),

		// …and so on for images, blockquotes, code, etc.
	} as CustomNodeRenderer,
}
// generate static paths for blog posts
type BlogPostSkeleton = {
	fields: {
		slug: string
	}
	contentTypeId: 'blog'
}

export async function generateStaticParams() {
	const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
		content_type: 'blog',
		select: ['fields.slug'],
	})
	return entries.items.map((item) => ({
		slug: item.fields.slug!,
	}))
}

export default async function page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params

	const post = await contentfulClient.getEntries({
		content_type: 'blog',
		'fields.slug': slug,
	})

	if (post.items.length === 0) {
		return <div>Post not found</div>
	}

	const { title, content, pictureUrl, createdAt, updatedAt } =
		post.items[0].fields

	return (
		<article className='px-4 py-12'>
			{pictureUrl && (
				<div
					className='w-full h-64 mb-8 rounded-lg bg-repeat'
					style={{
						backgroundImage: `url(${String(pictureUrl)})`,
						backgroundSize: '300px', // leave it as the image’s intrinsic size
						backgroundPosition: '0 0', // start tiling from the top-left
					}}
				/>
			)}
			<div className='max-w-4xl mx-auto mb-6'>
				<Link href='/blog' className='mb-6 inline-block '>
					<Button className='cursor-pointer'>
						<FaArrowLeft />
						All Posts
					</Button>
				</Link>

				{/* title */}
				<h1 className='text-4xl font-extrabold text-gray-900 mb-3'>
					{String(title)}
				</h1>

				{/* slug / meta */}
				<p className='text-xs text-gray-400 uppercase tracking-wide mb-6'>
					Created: {`${format(new Date(String(createdAt)), 'MMMM do, yyyy')}`}
					<br /> Updated:{' '}
					{`${format(new Date(String(updatedAt)), 'MMMM do, yyyy')}`}
				</p>

				{/* content */}
				<div className='max-w-4xl prose prose-lg prose-headings:font-semibold mx-auto'>
					{documentToReactComponents(content as Document, options)}
				</div>

				{/* optional footer / ID */}
				<footer className='mt-12 text-sm text-gray-500 border-t pt-4'>
					{/* <p>Post ID: {id}</p> */}
					{/* <p> temp footer </p> */}
				</footer>
			</div>
		</article>
	)
}
