'use client'

import { Mail, TrendingUp, Users } from 'lucide-react'

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '@/shared/ui/command'

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
	},
	{
		id: '5',
		name: 'Иван Кузнецов',
		email: 'i.kuznetsov@example.com',
		group: 'Подписчики',
		status: 'inactive'
	},
	{
		id: '6',
		name: 'Ольга Волкова',
		email: 'o.volkova@example.com',
		group: 'Активные',
		status: 'active'
	}
]

const groups = [
	{ name: 'VIP', count: 2, icon: TrendingUp, color: 'text-amber-500' },
	{ name: 'Активные', count: 3, icon: Users, color: 'text-green-500' },
	{ name: 'Подписчики', count: 2, icon: Mail, color: 'text-blue-500' }
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
			<Command className='rounded-lg border shadow-md'>
				<CommandInput placeholder='Поиск контактов, групп, сегментов...' />
				<CommandList className='max-h-[400px] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
					<CommandEmpty>Ничего не найдено.</CommandEmpty>

					<CommandGroup heading='Группы контактов'>
						{groups.map(group => {
							const Icon = group.icon
							return (
								<CommandItem key={group.name}>
									<Icon className={`mr-2 h-4 w-4 ${group.color}`} />
									<span className='flex-1'>{group.name}</span>
									<span className='text-muted-foreground text-xs'>
										{group.count} контактов
									</span>
								</CommandItem>
							)
						})}
					</CommandGroup>

					<CommandGroup heading='Недавние контакты'>
						{mockContacts.slice(0, 4).map(contact => (
							<CommandItem key={contact.id}>
								<div className='flex w-full items-center justify-between gap-2'>
									<div className='flex min-w-0 flex-1 items-center gap-2'>
										<div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-medium text-white'>
											{contact.name
												.split(' ')
												.map(n => n[0])
												.join('')}
										</div>
										<div className='flex min-w-0 flex-1 flex-col'>
											<span className='truncate text-sm font-medium'>
												{contact.name}
											</span>
											<span className='text-muted-foreground truncate text-xs'>
												{contact.email}
											</span>
										</div>
									</div>
									<div
										className={`rounded-full border px-2 py-0.5 text-xs font-medium ${getStatusBadgeColor(contact.status)}`}
									>
										{contact.group}
									</div>
								</div>
							</CommandItem>
						))}
					</CommandGroup>

					<CommandGroup heading='Сегментация'>
						<CommandItem>
							<TrendingUp className='mr-2 h-4 w-4 text-green-500' />
							<span>Активные за последний месяц</span>
							<span className='text-muted-foreground ml-auto text-xs'>245</span>
						</CommandItem>
						<CommandItem>
							<Mail className='mr-2 h-4 w-4 text-blue-500' />
							<span>Открыли последнее письмо</span>
							<span className='text-muted-foreground ml-auto text-xs'>187</span>
						</CommandItem>
						<CommandItem>
							<Users className='mr-2 h-4 w-4 text-purple-500' />
							<span>Новые подписчики</span>
							<span className='text-muted-foreground ml-auto text-xs'>42</span>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</Command>
		</div>
	)
}
