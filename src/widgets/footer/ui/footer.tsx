import Image from 'next/image'
import Link from 'next/link'

import { EXTERNAL_LINKS } from '@/shared/constants'

export function Footer() {
	return (
		<div className='relative w-full overflow-hidden border-t border-neutral-100 bg-[#F9FAFB] px-8 pt-20 pb-0 select-none dark:border-white/[0.1] dark:bg-[#21272B]'>
			<div className='mx-auto flex max-w-7xl flex-col items-start justify-between text-sm text-neutral-500 sm:flex-row md:px-8'>
				<div>
					<div className='mb-4 md:mr-4 md:flex'>
						<Link
							href='/'
							className='relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black'
						>
							<Image
								alt='MailFrame logo'
								width={30}
								height={30}
								src='/favicon-64x64.png'
								className='rounded-sm'
							/>
							<span className='font-medium text-black dark:text-white'>
								MailFrame
							</span>
						</Link>
					</div>
				</div>
				<div className='mt-10 flex flex-col items-start gap-10 sm:mt-0 md:mt-0 lg:flex-row'>
					{/* <div className='flex w-full flex-col justify-center space-y-4'>
						<p className='hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300'>
							Pages
						</p>
						<ul className='hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300'>
							<li className='list-none'>
								<a
									href='#'
									className='hover:text-text-neutral-800 transition-colors'
								>
									Home
								</a>
							</li>
							<li className='list-none'>
								<a
									href='#'
									className='hover:text-text-neutral-800 transition-colors'
								>
									Features
								</a>
							</li>
							<li className='list-none'>
								<a
									href='#'
									className='hover:text-text-neutral-800 transition-colors'
								>
									Pricing
								</a>
							</li>
							<li className='list-none'>
								<a
									href='#'
									className='hover:text-text-neutral-800 transition-colors'
								>
									Contact
								</a>
							</li>
							<li className='list-none'>
								<a
									href='#'
									className='hover:text-text-neutral-800 transition-colors'
								>
									Blog
								</a>
							</li>
						</ul>
					</div> */}

					<div className='flex flex-col justify-center space-y-4 lg:min-w-[254px] lg:flex-none'>
						<p className='hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300'>
							Политика
						</p>
						<ul className='hover:text-text-neutral-800 list-none space-y-4 text-sm text-neutral-600 transition-colors dark:text-neutral-300'>
							<li className='list-none'>
								{/* <a
									href='#'
									target='_blank'
									className='hover:text-text-neutral-800 transition-colors cursor-not-allowed'
								>
									Политика конфиденциальности
								</a> */}
								<span className='text-text-neutral-800 cursor-not-allowed transition-colors'>
									Политика конфиденциальности
								</span>
							</li>
							<li className='list-none'>
								{/* <a
									href='#'
									className='hover:text-text-neutral-800 transition-colors cursor-not-allowed'
								>
									Условия использования
								</a> */}
								<span className='text-text-neutral-800 cursor-not-allowed transition-colors'>
									Условия использования
								</span>
							</li>
							<li className='list-none'>
								{/* <a
									href='#'
									className='hover:text-text-neutral-800 transition-colors cursor-not-allowed'
								>
									Антиспам политика
								</a> */}
								<span className='text-text-neutral-800 cursor-not-allowed transition-colors'>
									Антиспам политика
								</span>
							</li>
						</ul>
					</div>
					<div className='flex flex-col justify-center space-y-4 lg:w-32 lg:flex-none'>
						<p className='hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300'>
							Ссылки
						</p>
						<ul className='hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300'>
							<li className='list-none'>
								<a
									href={EXTERNAL_LINKS.TELEGRAM}
									target='_blank'
									className='hover:text-text-neutral-800 transition-colors'
								>
									Telegram
								</a>
							</li>
							<li className='list-none'>
								<a
									href={EXTERNAL_LINKS.GITHUB}
									className='hover:text-text-neutral-800 transition-colors'
									target='_blank'
								>
									GitHub
								</a>
							</li>
						</ul>
					</div>
					<div className='flex flex-col justify-center space-y-4 lg:max-w-sm lg:flex-1'>
						<p className='hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300'>
							Сервис
						</p>
						<ul className='hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300'>
							<li className='list-none'>
								<a
									href={EXTERNAL_LINKS.LOGIN}
									target='_blank'
									className='hover:text-text-neutral-800 transition-colors'
								>
									Вход
								</a>
							</li>
							<li className='list-none'>
								<a
									href={EXTERNAL_LINKS.REGISTER}
									target='_blank'
									className='hover:text-text-neutral-800 transition-colors'
								>
									Регистрация
								</a>
							</li>
							<li className='list-none'>
								<a
									href={EXTERNAL_LINKS.DOCS}
									target='_blank'
									className='hover:text-text-neutral-800 transition-colors'
								>
									База знаний
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<p className='pointer-events-none inset-x-0 mt-10 -mb-4 bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-center text-5xl font-bold text-transparent select-none md:-mb-10 md:text-9xl lg:-mb-14 lg:text-[12rem] xl:-mb-16 xl:text-[13rem] dark:from-neutral-950 dark:to-neutral-800'>
				MailFrame
			</p>
		</div>
	)
}
