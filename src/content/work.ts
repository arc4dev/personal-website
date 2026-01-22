import { ExperienceItem } from '@/utils/types'
import webProfessorImg from '@/assets/images/work/webprofessor.jpeg'
import goitImg from '@/assets/images/work/goit.jpeg'
import selfEmployedImg from '@/assets/images/avatar.jpg'

export const workItems: ExperienceItem[] = [
	{
		id: 'web-professor',
		title: 'Web Professor',
		logo: webProfessorImg,
		url: 'https://webprofessor.pl/',
		roles: ['Front End Developer'],
		achievements: [
			'Built and delivered <strong class="text-white/90">12+ high-performance web products</strong> for various sectors, driving a <strong class="text-white/90">47.2% average conversion lift</strong>.',
			'Scaled <strong class="text-white/90">high-traffic platforms</strong> for clients, implementing UX enhancements and optimizations that boosted lead generation.',
			'Partnered with the CEO to <strong class="text-white/90">automate AI workflows and SOPs</strong>, reducing project turnaround by <strong class="text-white/90">50%</strong> and significantly increasing team velocity.',
			'Built a scalable content infra using <strong class="text-white/90">PayloadCMS & Sanity</strong> with reusable React components, cutting subsequent website build times by <strong class="text-white/90">60%</strong>.'
		],
		period: '02.2024 - Present • 2 years'
	},
	{
		id: 'freelance-web-designer',
		title: 'Freelance Web Designer & Developer',
		logo: selfEmployedImg,
		roles: ['Self-employed'],
		url: 'https://areksroczyk.com/',
		achievements: [
			'Built and delivered <strong class="text-white/90">high-ROI web products</strong> (React, Next.js, Astro) with a focus on SEO, top-tier Core Web Vitals, and conversion-centric UX that transformed client business goals.',
			'Designed and implemented <strong class="text-white/90">custom UI/UX systems</strong> to elevate brand authority, aligning content architecture with strategic lead generation targets.',
			'Owned the <strong class="text-white/90">full product lifecycle</strong> - from technical discovery and stakeholder management to CI/CD (Vercel), CMS integration, and analytics setup for seamless project delivery.'
		],
		period: '04.2025 - Present • 8 months'
	},
	{
		id: 'goit-bootcamp',
		title: 'GoIT Bootcamp',
		logo: goitImg,
		url: 'https://goit.global/pl/',
		roles: ['Full Stack Developer', 'Intern'],
		achievements: [
			'Engineered and deployed a <strong class="text-white/90">portfolio of MERN full-stack applications</strong>, establishing robust API integrations and CI/CD workflows from day one.',
			'Led a <strong class="text-white/90">development team</strong> on a finance management app, enforcing React best practices and modular component structures to ensure maintainability.',
			'Delivered high-quality features in an <strong class="text-white/90">agile, startup-like environment</strong>, actively participating in structured code reviews and senior-led mentorship.',
			'Gained deep proficiency in <strong class="text-white/90">modern web architecture</strong> and Git workflows, focusing on building scalable, real-world products under intense 10-month training.'
		],
		period: '10.2022 - 10.2023 • a year'
	}
]
