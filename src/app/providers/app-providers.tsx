import { ThemeProvider } from '@/app/providers/theme-provider'

export function AppProvider({ children }: { children?: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	)
}
