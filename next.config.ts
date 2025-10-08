import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	// Enable standalone output for Docker deployment
	output: 'standalone',

	// Enable compression
	compress: true,

	// Production optimizations
	productionBrowserSourceMaps: false,
	reactStrictMode: true,

	// Headers for security and caching
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on'
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=63072000; includeSubDomains; preload'
					}
				]
			}
		]
	}
}

export default nextConfig
