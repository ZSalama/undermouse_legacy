// revalidate every hour

export const revalidate = 3600

import React from 'react'

import Hero_Client from './Hero_Client'

import { contentfulClient } from '@/lib/contentful'

export default async function page() {
	const blog = await contentfulClient.getEntries({
		content_type: 'blog',

		limit: 3,

		order: ['-fields.createdAt'],
	})

	return <Hero_Client blog={blog.items} />
}
