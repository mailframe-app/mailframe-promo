import Link from 'next/link'

import { cn } from '@/shared/lib/utils'

export function NotFoundPage() {
	return (
		<div className='my-auto flex w-full flex-col items-center justify-center text-center'>
			<h1 className='from-primary via-primary/80 to-primary bg-gradient-to-r bg-clip-text text-8xl font-bold text-transparent md:text-9xl'>
				404
			</h1>

			<h2 className='mt-4 text-2xl font-bold tracking-tight md:text-3xl'>
				Страница не найдена
			</h2>

			<p className='text-muted-foreground mt-2 max-w-md md:text-lg'>
				Запрашиваемая страница не существует или была удалена
			</p>

			<Link
				href='/'
				className={cn(
					'mt-8 inline-flex items-center justify-center',
					'rounded-lg bg-[#0078D2] px-6 py-3 text-sm font-medium text-white',
					'transition-colors duration-200 ease-out',
					'hover:bg-[#0078D2]/90',
					'focus:ring-2 focus:ring-[#0078D2] focus:ring-offset-2 focus:outline-none'
				)}
			>
				Вернуться на главную
			</Link>
		</div>
	)
}
