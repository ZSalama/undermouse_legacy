import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			new URL('https://assets.contentful.com/x2wrt0bdfgy5/**'),
			new URL('https://images.ctfassets.net/x2wrt0bdfgy5/**'),
			new URL('https://3lt7b2w4z5.ufs.sh/f/**'),
		],
	},
}

export default nextConfig
