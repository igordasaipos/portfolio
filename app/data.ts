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
    company: 'Saipos',
    title: 'Designer de produtos',
    start: 'Mar 2024',
    end: 'Present',
    link: 'https://www.saipos.com',
    id: 'work1',
  },
  {
    company: 'CRM PipeRun',
    title: 'Web designer pleno',
    start: 'Mar 2023',
    end: 'Mar 2024',
    link: 'https://www.piperun.com',
    id: 'work2',
  },
  {
    company: 'GVdasa Inteligência Educacional',
    title: 'UX Designer',
    start: 'Nov 2021',
    end: 'Mai 2023',
    link: 'https://www.gvdasa.com.br',
    id: 'work3',
  },
  {
    company: 'Go Deep (F1 Commerce)',
    title: 'UI Designer',
    start: 'Mar 2020',
    end: 'Nov 2021',
    link: 'https://www.godeep.ag',
    id: 'work4',
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
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/igorpinheirocc',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/igorpinheirocc',
  },
]

export const EMAIL = 'your@email.com'
