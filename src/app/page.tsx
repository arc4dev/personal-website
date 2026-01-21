import Image from 'next/image'
import avatarImg from '@/assets/images/avatar-real.png'
import XTwitterIcon from '@/assets/icons/socials/x-twitter'
import { BriefcaseBusiness, GraduationCap, Layers } from 'lucide-react'
import LinkedinIcon from '@/assets/icons/socials/linkedin'
import { instagramUrl, linkedInUrl, xTwitterUrl } from '@/content/constants'
import ExperienceCard from '@/components/experience-card'
import { workItems } from '@/content/work'
import { educationItems } from '@/content/education'
import jakaszkolaMockupImg from '@/assets/images/work/jakaszkola-mockup.jpg'
import leanStartupBookImg from '@/assets/images/recent-read.jpg'
import AnimatedArrowButton from '@/components/ui/button/animated-arrow-button'
import { technologiesByCategory } from '@/content/technologies'
import MapBox from '@/components/mapbox'
import InstagramIcon from '@/assets/icons/socials/instagram'
import { Suspense } from 'react'

export default function Home() {
	return (
		<div className='px-4 sm:px-6'>
			{/* Hero Bento Section */}
			<section className='mb-20'>
				<div className='bento-grid fade-in-initial intersect:animate-fade-in will-change-transform intersect-once'>
					{/* Main card */}
					<div className='bg-primary relative bento-hero rounded-3xl px-6 py-8 sm:p-10 lg:p-8'>
						<div className='px-4 py-1.5 rounded-t-xl bg-primary absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2'>
							<div className='bg-green relative rounded-full size-2'>
								<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2.5 animate-ping rounded-full bg-green/50'></div>
							</div>
							<div className='uppercase font-mono whitespace-nowrap tracking-wider font-regular text-white/25 text-[11px] sm:text-xs'>
								{/* Building{' '}
								<a
									href='https://jakaszkola.pl/'
									className='hover:text-white/50 transition-colors'
									target='_blank'
									rel='nofollow noopenner norefferer'
								>
									jakaszkola.pl
								</a> */}
								Chilling out
							</div>
						</div>

						<figure className='flex flex-col items-center mb-3'>
							<Image
								src={avatarImg}
								priority={true}
								className='size-24 md:size-28 rounded-full mb-3'
								alt='Arkadiusz Sroczyk, Arek Sroczyk, Front-end Developer, Engineer, Full-stack Developer, Software Engineer'
							/>

							<figcaption className='uppercase text-center font-mono px-3 rounded-full py-0.5 tracking-widest text-white/50 text-[11px] md:text-xs'>
								Developer. Engineer. Creator.
							</figcaption>
						</figure>

						<h1 className='text-center max-w-[20ch] mx-auto text-balance sm:text-[40px] md:text-5xl leading-none text-[34px] font-semibold tracking-[-0.04em]'>
							I like to build things from zero to one
						</h1>
						{/* <p className='text-white/80 text-balance max-w-[50ch] mx-auto text-center text-15 sm:text-base'>
							I&apos;m Arek, 22y/o Front-end Developer passionate about turning ideas into real
							products.
						</p> */}
					</div>

					{/* Mapbox */}
					<div className='rounded-3xl lg:aspect-square overflow-hidden bg-primary relative bento-map'>
						<Suspense
							fallback={
								<div className='w-full h-full flex items-center justify-center animate-in fade-in duration-700'>
									<div className='flex flex-col items-center gap-3'>
										<div className='size-16 rounded-full border-2 border-white/20 border-t-white/80 animate-spin' />
										<p className='text-white/50 text-sm font-mono uppercase tracking-wider'>
											Loading map...
										</p>
									</div>
								</div>
							}
						>
							<MapBox />
						</Suspense>
					</div>

					{/* Recent read */}
					<a
						href='https://www.amazon.pl/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898'
						target='_blank'
						rel='nofollow noopener noreferrer'
						aria-label='Check Lean Startup book on Amazon'
						className='bg-primary group rounded-3xl group relative bento-read h-56 md:h-auto overflow-hidden active:outline-primary-800 outline-2 outline-primary hover:outline-primary-800 active:scale-[0.98] transition-[transform_outline-color]'
					>
						<Image
							src={leanStartupBookImg}
							priority={true}
							alt='Lean Startup book cover'
							className='rounded-3xl group-hover:-rotate-25 group-hover:-translate-x-7 w-auto h-48 md:h-68 lg:h-54 absolute top-1/2 -translate-y-1/2 -right-12 -rotate-20 transition-all duration-600 ease-fast-in-slow-out shadow-[-7px_0_20px_rgba(247,246,242,0.13)]'
						/>
						<AnimatedArrowButton className='absolute left-3 bottom-10' />
						<p className='absolute left-3 bottom-3 text-sm tracking-[-0.04em] font-medium text-white/75'>
							Recently read
						</p>
					</a>

					{/* Interests */}
					{/* <div className='rounded-2xl bg-primary h-14 overflow-hidden flex items-center'>
						<Marquee className='mask-x-from-80%'>
							{interests.map((interest) => {
								return (
									<span
										key={interest}
										className='px-3 py-1.5 tracking-[-0.04em] leading-tight bg-white/5 text-white/75 rounded-full text-sm font-medium whitespace-nowrap'
									>
										{interest}
									</span>
								)
							})}
						</Marquee>
					</div> */}

					{/* Socials */}
					<a
						href={xTwitterUrl}
						target='_blank'
						aria-label='Check Arek Sroczyk X profile'
						rel='nofollow noopener noreferrer'
						className='aspect-square flex items-center outline-2 bento-twitter outline-primary hover:outline-primary-800 active:scale-[0.98] transition-[transform_outline-color] active:outline-primary-800 justify-center rounded-3xl bg-primary relative group'
					>
						<div className='bg-black p-2 md:p-3 rounded-xl '>
							<XTwitterIcon className='size-8' />
						</div>

						<AnimatedArrowButton
							className='absolute left-3 bottom-3 '
							aria-label='Visit X profile'
						/>
					</a>

					<a
						href={linkedInUrl}
						target='_blank'
						rel='nofollow noopener noreferrer'
						aria-label='Check Arek Sroczyk LinkedIn profile'
						className='aspect-square flex items-center outline-2 bento-linkedin active:outline-primary-800 outline-primary hover:outline-primary-800 active:scale-[0.98] transition-[transform_outline-color] justify-center rounded-3xl bg-primary relative group'
					>
						<div className='bg-[#0E76A8] p-2 md:p-3 rounded-xl '>
							<LinkedinIcon className='size-8' />
						</div>

						<AnimatedArrowButton
							className='absolute left-3 bottom-3'
							aria-label='Visit LinkedIn profile'
						/>
					</a>

					<a
						href={instagramUrl}
						target='_blank'
						rel='nofollow noopener noreferrer'
						aria-label='Check Arek Sroczyk Instagram profile'
						className='aspect-square flex items-center outline-2 bento-instagram active:outline-primary-800 outline-primary hover:outline-primary-800 active:scale-[0.98] transition-[transform_outline-color] justify-center rounded-3xl bg-primary relative group'
					>
						<div className='bg-linear-220 from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-1 md:p-2 rounded-xl'>
							<InstagramIcon className='size-10' />
						</div>

						<AnimatedArrowButton
							className='absolute left-3 bottom-3'
							aria-label='Visit Instagram profile'
						/>
					</a>

					{/* Featured project */}
					<a
						href='https://jakaszkola.pl/'
						target='_blank'
						rel='nofollow noopener noreferrer'
						aria-label='Check Jakaszkola.pl project'
						className='bg-primary group rounded-3xl group relative bento-project h-56 md:h-62 lg:h-auto overflow-hidden active:outline-primary-800 outline-2 outline-primary hover:outline-primary-800 active:scale-[0.98] transition-[transform_outline-color]'
					>
						<Image
							src={jakaszkolaMockupImg}
							alt='Jakaszkola.pl project mockup'
							className='rounded-3xl group-hover:-rotate-26 group-hover:-translate-x-8 w-auto h-56 md:h-68 lg:h-86 absolute top-1/2 -translate-y-1/2 right-0 -rotate-20 transition-all duration-600 ease-fast-in-slow-out shadow-[-7px_0_20px_rgba(247,246,242,0.13)]'
						/>
						<p className='absolute flex flex-col  gap-1 left-3 top-1/2 -translate-y-1/2 group-hover:scale-90 duration-500 group-hover:blur-[2px] ease-fast-in-slow-out origin-left transition-all text-white text-2xl font-semibold tracking-[-0.04em]'>
							Jakaszkola.pl
							<span className='text-white/50 text-xs font-mono uppercase tracking-wider max-w-[25ch]'>
								Featured project
							</span>
						</p>
						<AnimatedArrowButton className='absolute left-3 bottom-3 ' />
					</a>

					<div className='bento-empty hidden md:flex rounded-3xl bg-primary overflow-hidden relative p-5 lg:aspect-square items-center justify-center border border-white/5'>
						{/* <div
							className='absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_18%_22%,rgba(170,241,123,0.2),transparent_42%),radial-gradient(circle_at_82%_8%,rgba(255,255,255,0.12),transparent_38%)]'
							aria-hidden='true'
						></div> */}

						<p className='text-center text-balance flex flex-col gap-1'>
							<span className='text-white/50 text-xs font-mono uppercase tracking-wider max-w-[25ch]'>
								Reminder
							</span>
							<span className='font-semibold text-transparent bg-clip-text bg-[linear-gradient(120deg,rgba(230,232,236,0.9),rgba(120,134,148,0.95))]'>
								Just Do It.
							</span>
						</p>
					</div>
				</div>
			</section>

			<div className='my-12 w-full h-0.5 bg-primary-800 rounded-full max-w-sm mx-auto'></div>

			{/* Work Experience Section */}
			<section className='mb-20 max-w-3xl mx-auto'>
				<div className='fade-in-initial intersect:animate-fade-in will-change-transform intersect-once'>
					<p className='flex items-center text-xs gap-1 text-white/50 justify-center mb-1 uppercase font-mono'>
						<BriefcaseBusiness className='size-3.5' />
						<span>Professional</span>
					</p>
					<h2 className='text-center text-balance sm:text-3xl leading-tight text-[26px] font-semibold tracking-[-0.04em] mb-8'>
						Work Experience
					</h2>

					<div className='flex flex-col gap-4'>
						{workItems.map((item) => (
							<ExperienceCard key={item.id} item={item} />
						))}
					</div>
				</div>
			</section>

			{/* Education Section */}
			<section className='mb-20 max-w-3xl mx-auto'>
				<div className='fade-in-initial intersect:animate-fade-in will-change-transform intersect-once'>
					<p className='flex items-center text-xs gap-1 text-white/50 justify-center mb-1 uppercase font-mono'>
						<GraduationCap className='size-3.5' />
						<span>Learning</span>
					</p>
					<h2 className='text-center text-balance sm:text-3xl leading-tight text-[26px] font-semibold tracking-[-0.04em] mb-8'>
						Education
					</h2>
					<div className='flex flex-col gap-4'>
						{educationItems.map((item) => (
							<ExperienceCard key={item.id} item={item} />
						))}
					</div>
				</div>
			</section>

			{/* Technologies Section */}
			<section className='mb-20 max-w-3xl mx-auto'>
				<div className='fade-in-initial intersect:animate-fade-in will-change-transform intersect-once'>
					<p className='flex items-center text-xs gap-1 text-white/50 justify-center mb-1 uppercase font-mono'>
						<Layers className='size-3.5' />
						<span>Tech stack</span>
					</p>
					<h2 className='text-center text-balance sm:text-3xl leading-tight text-[26px] font-semibold tracking-[-0.04em] mb-8'>
						Technologies I use to build
					</h2>

					<div className='flex flex-col gap-3'>
						{Object.entries(technologiesByCategory).map(([category, techs]) => (
							<div key={category} className='px-4 py-6 rounded-3xl bg-primary'>
								<h3 className='text-xs uppercase font-mono font-medium text-white/50 mb-4 tracking-wider text-center'>
									{category}
								</h3>
								<ul className='flex flex-wrap justify-center items-center gap-2'>
									{techs.map((tech) => {
										const Icon = tech.icon
										return (
											<li key={tech.id} className='group'>
												<a
													href={tech.url}
													target='_blank'
													rel='nofollow noopener noreferrer'
													className='flex focus-visible:ring-2 ring-white/20 px-3 py-1.5 items-center gap-2 tracking-[-0.04em] leading-tight bg-white/5 hover:bg-white/15 focus-visible:outline-hidden text-white/75 rounded-full transition-[background-color_transform] text-sm font-medium whitespace-nowrap active:scale-[0.98]'
												>
													<Icon className='size-3.5 opacity-90' />
													<span>{tech.name}</span>
												</a>
											</li>
										)
									})}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
