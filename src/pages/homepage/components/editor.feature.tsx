import { cn } from '@/shared/lib/utils'
import { Marquee } from '@/shared/ui/marquee'

const templates = [
	'/assets/templates/1-preview.webp',
	'/assets/templates/2-preview.webp',
	'/assets/templates/3-preview.webp',
	'/assets/templates/4-preview.webp',
	'/assets/templates/5-preview.webp',
	'/assets/templates/6-preview.webp'
]

const firstRow = templates.slice(0, templates.length / 2)
const secondRow = templates.slice(templates.length / 2)

const TemplateCard = ({ src }: { src: string }) => {
	return (
		<figure
			className={cn(
				'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
				// light styles
				'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
				// dark styles
				'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
			)}
		>
			<img
				className='h-auto w-full rounded-lg'
				src={src}
				alt='Template preview'
			/>
		</figure>
	)
}

export function MarqueeEditor() {
	return (
		<div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
			<Marquee pauseOnHover className='[--duration:20s]'>
				{firstRow.map(template => (
					<TemplateCard key={template} src={template} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className='[--duration:20s]'>
				{secondRow.map(template => (
					<TemplateCard key={template} src={template} />
				))}
			</Marquee>
			<div className='from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r'></div>
			<div className='from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l'></div>
		</div>
	)
}
