'use client'

import Image from 'next/image'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { throttle } from 'throttle-debounce'
import avatarImg from '@/assets/images/avatar.jpg'
import avatarRealImg from '@/assets/images/avatar-real.png'
import ButtonLink from './ui/button/button-link'
import Link from 'next/link'

interface Props {}

const Header: FC<Props> = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = throttle(100, () => {
			setIsScrolled(window.scrollY > 20)
		})

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header className='mb-16 sm:mb-20 px-4 py-2 sticky top-3 z-100'>
			<div
				className={twMerge(
					'flex items-center justify-between max-w-5xl mx-auto px-3 py-2 rounded-2xl transition-[background-color_max-width_backdrop-filter] ease-fast-in-slow-out',
					isScrolled ? 'bg-primary-800/90 backdrop-blur-3xl max-w-xs duration-450' : 'duration-1000'
				)}
			>
				<Link
					href='/'
					aria-label='Go to home page'
					className='group relative active:scale-[0.98] transition-transform block size-10 rounded-full perspective-[600px]'
				>
					<span className='relative block size-full rounded-full transition-transform duration-500 ease-fast-in-slow-out transform-3d group-hover:rotate-y-180'>
						<Image
							src={avatarImg}
							className='absolute inset-0 size-full rounded-full object-cover backface-hidden'
							alt='Arkadiusz Sroczyk, Arek Sroczyk'
							priority={true}
						/>
						<Image
							src={avatarRealImg}
							className='absolute inset-0 size-full rounded-full object-cover rotate-y-180 backface-hidden'
							alt='Arkadiusz Sroczyk, Arek Sroczyk'
						/>
					</span>
				</Link>

				{/* <nav>
					<ul className='flex items-center gap-6'>
						<li className='flex'>
							<Link
								href='/#about'
								className='text-white/75 hover:text-white transition-colors text-base'
							>
								About
							</Link>
						</li>
						<li className='flex'>
							<Link
								href='/#experience'
								className='text-white/75 hover:text-white transition-colors text-base'
							>
								Experience
							</Link>
						</li>
					</ul>
				</nav> */}

				<ButtonLink href='mailto:hello@areksroczyk.com' target='_blank'>
					Get in touch
				</ButtonLink>
			</div>
		</header>
	)
}

export default Header
