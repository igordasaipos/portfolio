# Content Copy - Portfolio Homepage

## Hero Section

### Tagline
```
Focused on creating intuitive and performant web experiences.
Bridging the gap between design and development.
```

**Tone**: Professional, concise, value-focused
**Character Count**: 104 characters
**Purpose**: Immediately communicate the core value proposition

---

## Social Bento Grid

### LinkedIn Card
- **Label**: LinkedIn
- **Size**: 2x1 (wider card)
- **Icon**: LinkedIn logo
- **Link**: Profile URL

### GitHub Card
- **Label**: GitHub
- **Size**: 1x1
- **Icon**: GitHub logo (monochrome)
- **Link**: GitHub profile

### Instagram Card
- **Label**: Instagram
- **Size**: 1x1
- **Icon**: Instagram logo
- **Link**: Instagram profile

### Twitter/X Card
- **Label**: Twitter
- **Size**: 1x1
- **Icon**: X/Twitter logo
- **Link**: Twitter profile

### Contact CTA Card
- **Headline**: Let's work together
- **Description**: Get in touch for opportunities
- **Size**: 3x1 (full width)
- **Action**: Opens email client
- **Icon**: Arrow (→)

**Design Notes**:
- Cards have subtle hover states
- Icons are monochrome (zinc-600/zinc-400)
- Glassmorphic background with ring borders

---

## Tools Section

### Section Header
```
Tools
```

### Tool List
1. **Figma**
   - Icon: Official Figma logo (multicolor)
   - Purpose: Design tool

2. **Lovable**
   - Icon: Gradient circle with checkmark
   - Purpose: AI development tool

3. **Webflow**
   - Icon: Blue wave logo
   - Purpose: No-code web design

4. **WordPress**
   - Icon: Blue circle with white W
   - Purpose: Content management

5. **Cursor**
   - Icon: Minimalist black/white design
   - Purpose: AI code editor

**Visual Style**:
- Pills with rounded corners
- Brand colors for icons
- Clean, scannable layout

---

## Selected Projects

### Section Header
```
Selected Projects
```

### Project 1: Motion Primitives Pro
```
Advanced components and templates to craft beautiful websites.
```
- **Media**: Video demo (auto-play, loop, muted)
- **Link**: https://pro.motion-primitives.com/
- **Interaction**: Click to expand video in modal

### Project 2: Motion Primitives
```
UI kit to make beautiful, animated interfaces.
```
- **Media**: Video demo (auto-play, loop, muted)
- **Link**: https://motion-primitives.com/
- **Interaction**: Click to expand video in modal

**Content Strategy**:
- Focus on value proposition
- Keep descriptions under 12 words
- Show, don't tell (video demos)

---

## Work Experience

### Section Header
```
Work Experience
```

### Position 1
- **Company**: Reglazed Studio
- **Title**: CEO
- **Period**: 2024 - Present
- **Link**: Company website

### Position 2
- **Company**: Freelance
- **Title**: Design Engineer
- **Period**: 2022 - 2024
- **Link**: Portfolio

### Position 3
- **Company**: Freelance
- **Title**: Front-end Developer
- **Period**: 2017 - Present
- **Link**: Portfolio

**Design Notes**:
- Cards have spotlight hover effect
- Chronological order (newest first)
- Period format: "YYYY - Present" or "YYYY - YYYY"

---

## Blog Section

### Section Header
```
Blog
```

### Post 1
**Title**: Exploring the Intersection of Design, AI, and Design Engineering
**Description**: How AI is changing the way we design

### Post 2
**Title**: Why I left my job to start my own company
**Description**: A deep dive into my decision to leave my job and start my own company

### Post 3
**Title**: What I learned from my first year of freelancing
**Description**: A look back at my first year of freelancing and what I learned

### Post 4
**Title**: How to Export Metadata from MDX for Next.js SEO
**Description**: A guide on exporting metadata from MDX files to leverage Next.js SEO features.

**Interaction**:
- Animated background on hover
- Full-width clickable cards
- Smooth transitions between hover states

---

## Connect Section

### Section Header
```
Connect
```

### Contact Copy
```
Feel free to contact me at [email]
```

### Social Links
- **Format**: Magnetic pills with arrow icon
- **Labels**: Github, Twitter, LinkedIn, Instagram
- **Interaction**: Magnetic hover effect (follows cursor)
- **Style**: Pill-shaped with subtle hover color change

**Tone**: Friendly, approachable, open to opportunities

---

## Copy Writing Guidelines

### Voice & Tone
- **Professional**: Maintain credibility and expertise
- **Concise**: Respect the reader's time
- **Confident**: Show expertise without arrogance
- **Approachable**: Be human and relatable

### Best Practices

#### Headlines
- Max 8 words
- Start with action verbs when possible
- Focus on benefits, not features

#### Descriptions
- 1-2 sentences maximum
- Lead with value proposition
- Use active voice
- Avoid jargon and buzzwords

#### CTAs
- Clear action words (e.g., "Get in touch", "Let's work together")
- Create urgency without pressure
- Focus on mutual benefit

### Content Hierarchy
1. **Primary**: Hero tagline, section headers
2. **Secondary**: Project names, job titles
3. **Tertiary**: Descriptions, supporting text

### SEO Considerations
- Include relevant keywords naturally
- Write descriptive meta titles and descriptions
- Use proper heading hierarchy (h1 > h2 > h3)
- Keep URLs clean and descriptive

---

## Microcopy

### Buttons & Links
- **Email CTA**: "Let's work together" + "Get in touch for opportunities"
- **Social links**: Platform names (Github, Twitter, LinkedIn, Instagram)
- **Project links**: Implied through clickable cards
- **Blog links**: Implied through clickable cards

### Hover States
- **Projects**: Video preview indication (cursor: zoom-in)
- **Social links**: Arrow icon + color change
- **Blog posts**: Animated background highlight

---

## Accessibility Copy

### Alt Text Template
```
[Tool name] logo
[Platform name] icon
Preview video for [Project name]
```

### ARIA Labels
- External links: Include "Opens in new tab"
- Email links: "Send email to [address]"
- Video modals: "Expand video preview"

---

## Localization Notes

### Future Considerations
- All copy is currently in English
- Content structure supports i18n
- Date formats follow ISO standards
- Links use absolute URLs for portability

---

## Content Updates

### When to Update

#### Immediate
- New projects launch
- Job changes
- Blog post publication
- Contact information changes

#### Monthly
- Blog post ideas
- Project descriptions refinement
- Work experience details

#### Quarterly
- Tool stack review
- Copy optimization
- SEO keyword analysis

### Update Process
1. Edit `/app/data.ts` for structured content
2. Update component copy directly in JSX
3. Test on mobile and desktop
4. Verify dark mode appearance
5. Check hover states and interactions
6. Commit with descriptive message

---

## Brand Voice Examples

### ✅ Good Examples
- "Focused on creating intuitive and performant web experiences"
- "Advanced components and templates to craft beautiful websites"
- "Get in touch for opportunities"

### ❌ Avoid
- "I'm passionate about coding!!!" (too casual, excessive punctuation)
- "Leveraging cutting-edge technologies to synergize..." (jargon-heavy)
- "Check out my awesome projects" (vague, unprofessional)

---

## Content Metrics

### Current Stats
- **Hero Section**: 104 characters
- **Project Descriptions**: 8-12 words each
- **Blog Titles**: 6-12 words each
- **Total Sections**: 7 main sections

### Performance Goals
- Reading level: 8th grade (Flesch-Kincaid)
- Avg. sentence length: 15 words
- Passive voice: < 10%
- Character count per description: < 150

---

## Version History

### v1.0 - Current
- Initial portfolio launch
- 2 featured projects
- 3 work experiences
- 4 blog posts
- 5 tools listed
- 4 social platforms

### Future Versions
- v1.1: Add case studies
- v1.2: Expand blog section
- v1.3: Add testimonials
- v2.0: Complete redesign with new sections
