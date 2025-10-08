import { BarChart3, Mail, Settings, Zap } from 'lucide-react'

import { AnalyticsFeature } from './analytics.feature'
import { ContactsFeature } from './contacts.feature'
import { MarqueeEditor } from './editor.feature'
import { AnimatedBeam } from './kontur.feature'

export const features = [
	{
		title: 'Единая платформа',
		description:
			'Все компоненты работают как единое целое в закрытом контуре. Безопасно, производительно, надежно, на вашей инфраструктуре.',
		icon: Mail,
		colSpan: 'md:col-span-3',
		content: <AnimatedBeam />
	},
	{
		title: 'Интуитивный редактор',
		description:
			'Простой drag-and-drop редактор для создания красивых писем без навыков дизайна.',
		icon: Settings,
		colSpan: 'md:col-span-2',
		content: <MarqueeEditor />
	},
	{
		title: 'Аналитика и отчёты',
		description:
			'Анализируйте ключевые показатели эффективности каждого подписчика: открытия, клики, конверсии.',
		icon: BarChart3,
		colSpan: 'md:col-span-2',
		content: <AnalyticsFeature />
	},
	{
		title: 'Гибкое управление контактами и группами',
		description: 'Полноценный CRM для управления контактами и группами.',
		icon: Zap,
		colSpan: 'md:col-span-3',
		content: <ContactsFeature />
	}
]
