'use client'

import Image from 'next/image'
import React, { forwardRef, useRef } from 'react'

import {
	Auth0Icon,
	Minio,
	Nestjs,
	Rabbitmq,
	ReactIcon,
	Redis
} from '@/shared/icons'
import { cn } from '@/shared/lib/utils'
import { AnimatedBeam as AnimatedBeamComponent } from '@/shared/ui/animated-beam'

const Circle = forwardRef<
	HTMLDivElement,
	{ className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
				className
			)}
		>
			{children}
		</div>
	)
})

Circle.displayName = 'Circle'

export function AnimatedBeam() {
	const containerRef = useRef<HTMLDivElement>(null)
	const div1Ref = useRef<HTMLDivElement>(null)
	const div2Ref = useRef<HTMLDivElement>(null)
	const div3Ref = useRef<HTMLDivElement>(null)
	const div4Ref = useRef<HTMLDivElement>(null)
	const div5Ref = useRef<HTMLDivElement>(null)
	const div6Ref = useRef<HTMLDivElement>(null)
	const div7Ref = useRef<HTMLDivElement>(null)

	return (
		<div
			className='relative flex h-full w-full items-center justify-center overflow-hidden'
			ref={containerRef}
		>
			<div className='flex size-full max-h-full max-w-lg flex-col items-stretch justify-between gap-4'>
				<div className='flex flex-row items-center justify-between'>
					<Circle ref={div1Ref}>
						<Minio />
					</Circle>
					<Circle ref={div5Ref}>
						<Nestjs />
					</Circle>
				</div>
				<div className='flex flex-row items-center justify-between'>
					<Circle ref={div2Ref}>
						<Rabbitmq />
					</Circle>
					<Circle ref={div4Ref} className='size-16'>
						<Image
							src='/favicon-256x256.png'
							alt='Email'
							width={100}
							height={100}
						/>
					</Circle>
					<Circle ref={div6Ref}>
						<ReactIcon />
					</Circle>
				</div>
				<div className='flex flex-row items-center justify-between'>
					<Circle ref={div3Ref}>
						<Redis />
					</Circle>
					<Circle ref={div7Ref}>
						<Auth0Icon />
					</Circle>
				</div>
			</div>

			<AnimatedBeamComponent
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div4Ref}
				curvature={-75}
				endYOffset={-10}
			/>
			<AnimatedBeamComponent
				containerRef={containerRef}
				fromRef={div2Ref}
				toRef={div4Ref}
			/>
			<AnimatedBeamComponent
				containerRef={containerRef}
				fromRef={div3Ref}
				toRef={div4Ref}
				curvature={75}
				endYOffset={10}
			/>
			<AnimatedBeamComponent
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div4Ref}
				curvature={-75}
				endYOffset={-10}
				reverse
			/>
			<AnimatedBeamComponent
				containerRef={containerRef}
				fromRef={div6Ref}
				toRef={div4Ref}
				reverse
			/>
			<AnimatedBeamComponent
				containerRef={containerRef}
				fromRef={div7Ref}
				toRef={div4Ref}
				curvature={75}
				endYOffset={10}
				reverse
			/>
		</div>
	)
}
