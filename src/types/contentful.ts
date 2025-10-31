import type { Asset, Entry, EntrySkeletonType } from 'contentful'
import type { Document } from '@contentful/rich-text-types'

export interface BlogPostFields {
	title: string
	slug: string
	content: Document
	picture: Asset
}

export type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, 'blog'>
export type BlogPostEntry = Entry<BlogPostSkeleton>
