'use client'

import { type FC, useEffect, useRef, useState } from 'react'
import mapboxgl, { LngLatLike } from 'mapbox-gl'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import avatar from '@/assets/images/avatar-raw.png'
import 'mapbox-gl/dist/mapbox-gl.css'

const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
const latlng: LngLatLike = [17.03367, 51.11034]

const MapBox: FC = () => {
	const mapContainerRef = useRef<HTMLDivElement>(null)
	const mapRef = useRef<mapboxgl.Map | null>(null)
	const markerRef = useRef<mapboxgl.Marker | null>(null)
	const [isLoaded, setIsLoaded] = useState(false)
	const [shouldInitMap, setShouldInitMap] = useState(() => {
		if (typeof window === 'undefined') return false
		return !('IntersectionObserver' in window)
	})

	useEffect(() => {
		const container = mapContainerRef.current
		if (!container || shouldInitMap) return
		if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

		const observer = new IntersectionObserver(
			(entries) => {
				const isIntersecting = entries.some(
					(entry) => entry.isIntersecting || entry.intersectionRatio > 0
				)
				if (isIntersecting) {
					setShouldInitMap(true)
					observer.disconnect()
				}
			},
			{
				rootMargin: '200px'
			}
		)

		observer.observe(container)

		return () => {
			observer.disconnect()
		}
	}, [shouldInitMap])

	useEffect(() => {
		if (!shouldInitMap || !mapContainerRef.current) return

		if (!accessToken) {
			console.error('Mapbox access token is missing')
			return
		}

		let isMounted = true

		mapboxgl.accessToken = accessToken

		mapRef.current = new mapboxgl.Map({
			container: mapContainerRef.current,
			center: latlng, // starting position [lng, lat],
			zoom: 3, // starting zoom,
			style: 'mapbox://styles/mapbox/dark-v11',
			attributionControl: false,
			scrollZoom: false
		})

		// Set loaded to true when map is ready
		mapRef.current.on('load', () => {
			if (isMounted) {
				// Small delay to ensure smooth transition
				setTimeout(() => {
					setIsLoaded(true)
				}, 100)
			}
		})

		// Custom marker element
		const el = document.createElement('div')
		el.className = 'custom-marker'
		el.style.width = '72px'
		el.style.height = '72px'
		el.style.borderRadius = '50%'
		el.style.border = '2px solid white'
		el.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'
		el.style.padding = '10px'
		el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)'
		el.style.cursor = 'pointer'
		el.style.display = 'flex'
		el.style.alignItems = 'center'
		el.style.justifyContent = 'center'

		// Inner avatar circle
		const avatarEl = document.createElement('div')
		avatarEl.style.width = '100%'
		avatarEl.style.height = '100%'
		avatarEl.style.borderRadius = '50%'
		avatarEl.style.backgroundImage = `url(${avatar.src})`
		avatarEl.style.backgroundSize = 'cover'
		avatarEl.style.backgroundPosition = 'center'

		el.appendChild(avatarEl)

		// Add marker to map
		markerRef.current = new mapboxgl.Marker(el).setLngLat(latlng).addTo(mapRef.current)

		return () => {
			isMounted = false
			markerRef.current?.remove()
			mapRef.current?.remove()
		}
	}, [shouldInitMap])

	const handleZoomIn = () => {
		mapRef.current?.zoomIn()
	}

	const handleZoomOut = () => {
		mapRef.current?.zoomOut()
	}

	return (
		<div className='w-full h-full relative'>
			{/* Map Container with transition */}
			<div
				style={{ height: '100%', width: '100%' }}
				ref={mapContainerRef}
				className={twMerge(
					'map-container w-full h-full [&_.mapboxgl-ctrl-logo]:hidden! transition-all duration-700 ease-in-out',
					isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-105'
				)}
			></div>

			{/* Custom Zoom Controls */}
			<div
				className={twMerge(
					'absolute bottom-3 right-3 flex gap-2 transition-[opacity_transform] duration-500 delay-400 ease-in-out',
					isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
				)}
			>
				<button
					onClick={handleZoomOut}
					className='rounded-full cursor-pointer bg-primary active:scale-[0.93] size-9 flex items-center justify-center transition-[transform_outline-color] ease-fast-in-slow-out duration-500 outline-2 outline-white/5 hover:outline-white/10'
					aria-label='Zoom out'
				>
					<MinusIcon className='size-5 text-white' />
				</button>
				<button
					onClick={handleZoomIn}
					className='rounded-full cursor-pointer bg-primary active:scale-[0.93] size-9 flex items-center justify-center transition-[transform_outline-color] ease-fast-in-slow-out duration-500 outline-2 outline-white/5 hover:outline-white/10'
					aria-label='Zoom in'
				>
					<PlusIcon className='size-5 text-white' />
				</button>
			</div>
		</div>
	)
}

export default MapBox
