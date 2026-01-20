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
			'Delivered and optimized <strong class="text-white/90">12+ high-impact websites</strong> across multiple industries, improving UX, conversions, and overall product quality.',
			'Took ownership of <strong class="text-white/90">front-end architecture and component design</strong> (React, Next.js, Astro), ensuring scalable, maintainable, and SEO-friendly solutions.',
			'Collaborated with the CEO on <strong class="text-white/90">product strategy, AI integration, and internal workflow optimization</strong> - reducing project turnaround time by 50%.'
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
			'Delivered <strong class="text-white/90">conversion-focused websites</strong> for various clients, improving brand perception, lead generation, and ROI through strategic design and UX best practices.',
			'<strong class="text-white/90">Managed full client workflows end-to-end</strong> - including communication, project planning, hosting, deployment, and analytics setup - ensuring smooth delivery and lasting client relationships.'
		],
		period: '04.2025 - Present • 6 months'
	},
	{
		id: 'goit-bootcamp',
		title: 'GoIT Bootcamp',
		logo: goitImg,
		url: 'https://goit.global/pl/',
		roles: ['Full Stack Developer', 'Intern'],
		achievements: [
			'Completed an <strong class="text-white/90">intense 10-month MERN full-stack program</strong> with a focus on agile teamwork.',
			'Built and deployed 5+ individual and team <strong class="text-white/90">real-world web apps.</strong>',
			'<strong class="text-white/90">Led a 4-person team</strong> developing a finance management web app.',
			'Worked under <strong class="text-white/90">senior mentor guidance</strong> following best practices and structured code reviews.',
			'Gained strong foundations in <strong class="text-white/90">modern web architecture</strong>, <strong class="text-white/90">Git workflows</strong>, <strong class="text-white/90">agile teamwork</strong>, and product delivery.'
		],
		period: '10.2022 - 10.2023 • a year'
	}
]
