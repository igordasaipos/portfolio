# Project Guidelines - Portfolio

## Overview
This is a modern, animated portfolio website built with Next.js 14, TypeScript, and Framer Motion. The project focuses on creating smooth, performant animations and a clean, minimalist design aesthetic.

## Tech Stack

### Core
- **Next.js 14** - App Router with Server Components
- **TypeScript** - Strict typing enabled
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library

### Key Dependencies
- `lucide-react` - Icon system
- `next-mdx-remote` - MDX blog support
- `sharp` - Image optimization

## Design Philosophy

### Visual Style
- **Minimalist**: Clean, uncluttered interface with focus on content
- **Subtle Animations**: Smooth transitions that enhance UX without being distracting
- **Dark Mode**: Full dark mode support with proper contrast ratios
- **Glassmorphism**: Subtle use of transparency and blur effects

### Color Palette
- **Light Mode**: Zinc-based grays (50-600)
- **Dark Mode**: Zinc-based grays (100-950)
- **Accent Colors**: Brand-specific colors for tools/social icons
- **Rings**: Subtle borders using `ring-zinc-200/50` (light) and `ring-zinc-800/50` (dark)

### Typography
- **Font**: Inter (system font with fallbacks)
- **Weights**: 400 (normal), 450 (medium), 500 (semibold)
- **Sizes**:
  - Headings: `text-lg` (18px)
  - Body: `text-base` (16px)
  - Small: `text-sm` (14px)

## Animation Patterns

### Page Transitions
```typescript
VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
}

TRANSITION_SECTION = {
  duration: 0.3
}
```

### Interactive Elements
- **Magnetic Effect**: Social links use magnetic hover with `intensity={0.3}`
- **Spotlight**: Work experience cards have subtle spotlight hover effect
- **Morphing Dialog**: Video previews expand with spring animation (`bounce: 0, duration: 0.3`)
- **Animated Background**: Blog posts use animated background on hover

## Component Patterns

### Reusable Components
Located in `/components/ui/`:
- `animated-background.tsx` - Hover-activated animated backgrounds
- `magnetic.tsx` - Magnetic hover effect wrapper
- `morphing-dialog.tsx` - Expandable dialog with smooth transitions
- `spotlight.tsx` - Gradient spotlight effect on hover
- `text-effect.tsx` - Text animation effects

### Component Structure
```typescript
// Always use 'use client' for interactive components
'use client'

// Proper TypeScript typing
type ComponentProps = {
  children: React.ReactNode
  // ... other props
}

// Clean, readable JSX with Tailwind classes
export function Component({ children }: ComponentProps) {
  return (
    <motion.div
      className="rounded-xl bg-zinc-50/40 ring-1 ring-zinc-200/50 dark:bg-zinc-950/40 dark:ring-zinc-800/50"
    >
      {children}
    </motion.div>
  )
}
```

## Layout Structure

### Grid System
- **Social Grid**: `grid-cols-4 gap-3 auto-rows-[120px]`
  - LinkedIn: `col-span-2 row-span-1`
  - Other social: `col-span-1 row-span-1`
  - CTA: `col-span-3 row-span-1`

- **Projects**: `grid-cols-1 sm:grid-cols-2 gap-6`
- **Tools**: `flex flex-wrap gap-3`

### Spacing
- **Section Spacing**: `space-y-16` (64px between sections)
- **Content Spacing**: `mb-4` or `mb-5` for headings
- **Card Padding**: `p-4` or `p-6` depending on size

## File Organization

### Data Management
All content data is centralized in `/app/data.ts`:
- `PROJECTS` - Portfolio projects with video demos
- `WORK_EXPERIENCE` - Professional experience timeline
- `BLOG_POSTS` - Blog post metadata
- `SOCIAL_LINKS` - Social media links
- `EMAIL` - Contact email

### Blog Posts
- Located in `/app/blog/[slug]/page.mdx`
- Use MDX for rich content with React components
- Export metadata for SEO

## Styling Guidelines

### Tailwind Class Order
1. Layout (flex, grid, position)
2. Sizing (w-, h-)
3. Spacing (p-, m-, gap-)
4. Typography (text-, font-)
5. Colors (bg-, text-, border-)
6. Effects (rounded-, ring-, shadow-)
7. States (hover:, dark:, group-)
8. Transitions (transition-, duration-)

### Dark Mode
- Always provide dark mode variants: `dark:bg-zinc-950`
- Use opacity for subtle effects: `/40`, `/50`
- Test contrast ratios for accessibility

### Responsive Design
- Mobile-first approach
- Key breakpoints: `sm:`, `md:`
- Use responsive grid: `grid-cols-1 sm:grid-cols-2`

## Performance Considerations

### Optimization
- Use `loading="lazy"` for images
- Optimize videos with proper compression
- Leverage Next.js automatic code splitting
- Use Server Components where possible

### Animations
- Prefer `transform` and `opacity` for 60fps animations
- Use `will-change` sparingly
- Implement proper cleanup in useEffect hooks

## Code Quality

### TypeScript
- Enable strict mode
- Define proper types for all components
- Use type inference where appropriate
- Avoid `any` type

### Linting
- Follow ESLint configuration
- Use Prettier for consistent formatting
- Run `npm run lint` before commits

### Git Workflow
- Write clear, descriptive commit messages
- Use conventional commits format
- Include co-author attribution for AI assistance

## Content Guidelines

### Copy Writing
- Keep descriptions concise (1-2 sentences)
- Focus on value and outcomes
- Use active voice
- Maintain professional yet approachable tone

### Project Showcases
- Include high-quality video demos
- Write clear project descriptions
- Link to live demos when available

### Blog Posts
- Use proper heading hierarchy (h1 > h2 > h3)
- Include metadata for SEO
- Add code examples with syntax highlighting
- Keep paragraphs short and scannable

## Accessibility

### WCAG Guidelines
- Maintain proper color contrast ratios
- Provide descriptive alt text for images
- Ensure keyboard navigation works
- Use semantic HTML elements

### Interactive Elements
- All clickable elements have proper hover states
- Links have underline or clear visual indication
- Focus states are visible and clear

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

## Environment Variables
Create `.env.local` for any environment-specific configuration:
```
NEXT_PUBLIC_SITE_URL=https://portfolio-one-coral-y1dv9smy3l.vercel.app/
```

## Deployment

### Vercel (Recommended)
- Automatic deployments on push to main
- Preview deployments for PRs
- Edge network for optimal performance

### Build Requirements
- Node.js 18+
- npm or yarn
- Next.js 14 compatible hosting

## Maintenance

### Regular Updates
- Keep dependencies updated monthly
- Test animations across browsers
- Verify responsive layouts on real devices
- Monitor Core Web Vitals

### Content Updates
- Update work experience in `/app/data.ts`
- Add new projects with video demos
- Publish blog posts regularly
- Keep social links current

## Future Enhancements

### Planned Features
- Blog pagination
- Project filtering/categories
- Contact form with validation
- RSS feed for blog
- Newsletter integration
- Analytics dashboard

### Performance Goals
- Lighthouse score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
