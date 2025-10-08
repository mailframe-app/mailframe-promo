// src/shared/ui/meta-head.tsx
import Head from 'next/head'

type MetaHeadProps = {
	title?: string
	description?: string
	keywords?: string
	ogImage?: string
	canonicalUrl?: string
	noIndex?: boolean
}

export function MetaHead({
	title = 'MailFrame',
	description = 'Платформа для создания шаблонов и отправки писем',
	keywords = 'шаблоны, отправка писем, email',
	ogImage = '/og-image.png',
	canonicalUrl = 'https://mailframe.ru',
	noIndex = false
}: MetaHeadProps) {
	const fullTitle = title
		? `${title} | Платформа для создания шаблонов и отправки писем`
		: 'Платформа для создания шаблонов и отправки писем'

	return (
		<Head>
			<title>{fullTitle}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
			<meta name='viewport' content='width=device-width, initial-scale=1' />

			{/* Canonical URL */}
			{canonicalUrl && <link rel='canonical' href={canonicalUrl} />}

			{/* Open Graph / Facebook */}
			<meta property='og:type' content='website' />
			<meta property='og:title' content={fullTitle} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={ogImage} />

			{/* Twitter */}
			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:title' content={fullTitle} />
			<meta property='twitter:description' content={description} />
			<meta property='twitter:image' content={ogImage} />

			{/* Favicon */}
			<link rel='icon' href='/favicon.ico' />

			{/* No index if specified */}
			{noIndex && <meta name='robots' content='noindex, nofollow' />}
		</Head>
	)
}
