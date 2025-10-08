'use client'

import { Mail, TrendingUp, Users } from 'lucide-react'

interface Contact {
	id: string
	name: string
	email: string
	group: string
	status: 'active' | 'inactive' | 'vip'
}

const mockContacts: Contact[] = [
	{
		id: '1',
		name: 'Александр Иванов',
		email: 'a.ivanov@example.com',
		group: 'VIP',
		status: 'vip'
	},
	{
		id: '2',
		name: 'Мария Петрова',
		email: 'm.petrova@example.com',
		group: 'Активные',
		status: 'active'
	},
	{
		id: '3',
		name: 'Дмитрий Сидоров',
		email: 'd.sidorov@example.com',
		group: 'Подписчики',
		status: 'active'
	},
	{
		id: '4',
		name: 'Елена Смирнова',
		email: 'e.smirnova@example.com',
		group: 'VIP',
		status: 'vip'
	}
]

const stats = [
	{ label: 'Всего контактов', value: '1,247', icon: Users, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
	{ label: 'Активных', value: '856', icon: TrendingUp, color: 'text-green-500', bgColor: 'bg-green-500/10' },
	{ label: 'VIP клиентов', value: '124', icon: Mail, color: 'text-amber-500', bgColor: 'bg-amber-500/10' }
]

function getStatusBadgeColor(status: Contact['status']) {
	switch (status) {
		case 'vip':
			return 'bg-amber-500/10 text-amber-500 border-amber-500/20'
		case 'active':
			return 'bg-green-500/10 text-green-500 border-green-500/20'
		case 'inactive':
			return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
	}
}

export function ContactsFeature() {
	return (
		<div className='relative h-full w-full px-4'>
			<div className='flex h-full flex-col gap-4 rounded-lg border border-gray-950/[.1] bg-gray-950/[.01] p-4 dark:border-gray-50/[.1] dark:bg-gray-50/[.10]'>
				{/* Статистика */}
				<div className='grid grid-cols-3 gap-3'>
					{stats.map(stat => {
						const Icon = stat.icon
						return (
							<div key={stat.label} className='flex flex-col gap-1'>
								<div className={`flex h-8 w-8 items-center justify-center rounded-lg ${stat.bgColor}`}>
									<Icon className={`h-4 w-4 ${stat.color}`} />
								</div>
								<div className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
									{stat.value}
								</div>
								<div className='text-xs text-neutral-500 dark:text-neutral-400'>
									{stat.label}
								</div>
							</div>
						)
					})}
				</div>

				{/* Разделитель */}
				<div className='h-px bg-neutral-200 dark:bg-neutral-800' />

				{/* Список контактов */}
				<div className='flex-1 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
					<div className='mb-2 text-xs font-medium text-neutral-500 dark:text-neutral-400'>
						Недавние контакты
					</div>
					<div className='space-y-2'>
						{mockContacts.map(contact => (
							<div
								key={contact.id}
								className='flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800'
							>
								<div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-medium text-white'>
									{contact.name
										.split(' ')
										.map(n => n[0])
										.join('')}
								</div>
								<div className='min-w-0 flex-1'>
									<div className='truncate text-sm font-medium text-neutral-900 dark:text-neutral-100'>
										{contact.name}
									</div>
									<div className='truncate text-xs text-neutral-500 dark:text-neutral-400'>
										{contact.email}
									</div>
								</div>
								<div
									className={`rounded-full border px-2 py-0.5 text-xs font-medium ${getStatusBadgeColor(contact.status)}`}
								>
									{contact.group}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
