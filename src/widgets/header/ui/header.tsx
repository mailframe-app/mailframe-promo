'use client'

import { useState } from 'react'

import { AnimatedThemeToggler } from '@/features/theme'

import { EXTERNAL_LINKS } from '@/shared/constants'
import {
	MobileNav,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	NavBody,
	NavItems,
	Navbar,
	NavbarButton,
	NavbarLogo
} from '@/shared/ui/resizable-navbar'

type HeaderItem = { name: string; link: string }

export type HeaderProps = {
	items?: HeaderItem[]
}

export function Header({
	items = [
		{ name: 'О сервисе', link: '#services' },
		{ name: 'Возможности', link: '#features' },
		{ name: 'FAQ', link: '#faq' }
	]
}: HeaderProps) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Navbar className='top-0 select-none'>
			<NavBody>
				{({ visible }) => (
					<>
						<div className='flex items-center gap-2'>
							<NavbarLogo />
						</div>
						<NavItems items={items} />
						<div className='relative z-20 flex items-center gap-2'>
							<AnimatedThemeToggler />
							{!visible && (
								<NavbarButton
									href={EXTERNAL_LINKS.LOGIN}
									target='_blank'
									variant='secondary'
									className='hidden lg:inline-block'
								>
									Войти
								</NavbarButton>
							)}
							<NavbarButton
								href={EXTERNAL_LINKS.REGISTER}
								target='_blank'
								variant='consta'
								className='hidden lg:inline-block'
							>
								Регистрация
							</NavbarButton>
						</div>
					</>
				)}
			</NavBody>

			<MobileNav>
				<MobileNavHeader>
					<NavbarLogo />
					<div className='flex items-center gap-2'>
						<AnimatedThemeToggler />
						<MobileNavToggle
							isOpen={isOpen}
							onClick={() => setIsOpen(v => !v)}
						/>
					</div>
				</MobileNavHeader>
				<MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
					{items.map(item => (
						<a
							key={item.name}
							href={item.link}
							className='text-sm text-neutral-700 dark:text-neutral-200'
							onClick={() => setIsOpen(false)}
						>
							{item.name}
						</a>
					))}
					<div className='mt-2 flex w-full gap-2'>
						<NavbarButton
							href={EXTERNAL_LINKS.LOGIN}
							target='_blank'
							variant='primary'
							className='w-full'
						>
							Вход
						</NavbarButton>
						<NavbarButton
							href={EXTERNAL_LINKS.REGISTER}
							target='_blank'
							variant='consta'
							className='w-full'
						>
							Регистрация
						</NavbarButton>
					</div>
				</MobileNavMenu>
			</MobileNav>
		</Navbar>
	)
}
