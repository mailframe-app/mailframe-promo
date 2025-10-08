import { NextPage } from 'next'
import { AppProps } from 'next/app'

import { NextPageLayout } from '@/shared/lib/next'

import AppLayout from '../layouts/app-layout'
import { AppProvider } from '../providers/app-providers'

type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
	P,
	IP
> & {
	getLayout?: NextPageLayout
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? (page => page)
	return (
		<AppProvider>
			<AppLayout>
				{getLayout(<Component {...pageProps} />, pageProps)}
			</AppLayout>
		</AppProvider>
	)
}
