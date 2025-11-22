type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Tool = {
  name: string
  icon: string
  iconType?: 'boxicon' | 'svg'
}

export const TOOLS: Tool[] = [
  {
    name: 'Figma',
    icon: '/icons/figma.svg',
    iconType: 'svg',
  },
  {
    name: 'Lovable',
    icon: '/icons/lovable.svg',
    iconType: 'svg',
  },
  {
    name: 'Webflow',
    icon: '/icons/webflow.svg',
    iconType: 'svg',
  },
  {
    name: 'WordPress',
    icon: '/icons/wordpress.svg',
    iconType: 'svg',
  },
  {
    name: 'Cursor',
    icon: '/icons/cursor.svg',
    iconType: 'svg',
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Superelements.io',
    description:
      'Component Library for Elementor',
    link: 'https://superelements.io/',
    video:
      'https://www.youtube.com/watch?v=vptLCiaCndI&t=10s',
    id: 'project1',
  },
  {
    name: 'iFood Move',
    description: 'Sistema para coleta de melhorias no produto',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7366264130992824321/',
    video: '/1756254225196.jpeg',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'your@email.com'
