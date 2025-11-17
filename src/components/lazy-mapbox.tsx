'use client'

import dynamic from 'next/dynamic'

const LazyMapBox = dynamic(() => import('@/components/mapbox'), {
	ssr: false,
	loading: () => (
		<div className='w-full h-full flex items-center justify-center animate-in fade-in duration-700'>
			<div className='flex flex-col items-center gap-3'>
				<div className='size-16 rounded-full border-2 border-white/20 border-t-white/80 animate-spin' />
				<p className='text-white/50 text-sm font-mono uppercase tracking-wider'>Loading map...</p>
			</div>
		</div>
	)
})

export default LazyMapBox

