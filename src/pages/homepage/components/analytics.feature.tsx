'use client'

import {
	ArrowDown,
	ArrowUp,
	BarChart3,
	Mail,
	MousePointerClick,
	TrendingUp
} from 'lucide-react'

interface Metric {
	title: string
	value: string
	trend: number
	icon: typeof BarChart3
	color: string
	bgColor: string
}

const metrics: Metric[] = [
	{
		title: 'Open Rate',
		value: '78.4%',
		trend: 12.5,
		icon: Mail,
		color: 'text-blue-600',
		bgColor: 'bg-blue-500/10'
	},
	{
		title: 'Click Rate',
		value: '45.2%',
		trend: 8.3,
		icon: MousePointerClick,
		color: 'text-purple-600',
		bgColor: 'bg-purple-500/10'
	},
	{
		title: 'Конверсии',
		value: '12.8%',
		trend: -2.1,
		icon: TrendingUp,
		color: 'text-green-600',
		bgColor: 'bg-green-500/10'
	},
	{
		title: 'Всего отправок',
		value: '24.5K',
		trend: 15.7,
		icon: BarChart3,
		color: 'text-amber-600',
		bgColor: 'bg-amber-500/10'
	}
]

export function AnalyticsFeature() {
	return (
		<div className='grid grid-cols-2 gap-2 px-3'>
			{metrics.map(metric => {
				const Icon = metric.icon
				const isPositive = metric.trend > 0
				const TrendIcon = isPositive ? ArrowUp : ArrowDown

				return (
					<div
						key={metric.title}
						className='group relative overflow-hidden rounded-lg border border-gray-950/[.1] bg-gray-950/[.01] p-2 transition-all hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
					>
						<div className='mb-2 flex items-start justify-between'>
							<div className={`${metric.bgColor} rounded-lg p-1.5`}>
								<Icon className={`h-3.5 w-3.5 ${metric.color}`} />
							</div>
							<div
								className={`flex items-center gap-0.5 text-[10px] font-medium ${isPositive ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}
							>
								<TrendIcon className='h-2.5 w-2.5' />
								<span>{Math.abs(metric.trend)}%</span>
							</div>
						</div>

						<div className='space-y-0.5'>
							<div className='text-xl font-bold text-gray-900 dark:text-gray-100'>
								{metric.value}
							</div>
							<div className='text-[10px] text-gray-600 dark:text-gray-400'>
								{metric.title}
							</div>
						</div>

						{/* Animated pulse effect */}
						<div className='absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]' />
					</div>
				)
			})}
		</div>
	)
}
