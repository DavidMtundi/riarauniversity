# Stanford University Website - Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based (Institutional/University)
**Primary Reference:** Stanford University's existing site structure
**Secondary References:** Harvard, MIT, Yale (leading institutional websites)

**Design Principles:**
- Academic authority with approachable elegance
- Information-rich without overwhelming
- Clear content hierarchy across diverse sections
- Professional institutional presence
- Visual storytelling through imagery and data

## Typography System

**Font Family:** 
- Primary: 'Source Sans Pro' or 'Inter' (clean, professional sans-serif)
- Headings: 'Source Serif Pro' or 'Merriweather' (elegant serif for gravitas)

**Type Scale:**
- Hero Headlines: text-5xl to text-7xl, font-serif, font-bold
- Section Headings: text-3xl to text-4xl, font-serif, font-semibold
- Card Titles: text-xl to text-2xl, font-sans, font-semibold
- Body Text: text-base to text-lg, font-sans, leading-relaxed
- Small Text/Labels: text-sm, font-sans, uppercase tracking-wide
- Statistics/Numbers: text-4xl to text-6xl, font-bold
- Quotes: text-2xl, font-serif, italic

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Card spacing: p-6 to p-8
- Grid gaps: gap-6 to gap-8
- Element margins: mb-4, mb-6, mb-8, mb-12

**Container Strategy:**
- Full-width sections: w-full with inner max-w-7xl mx-auto px-6
- Standard content: max-w-6xl mx-auto px-6
- Text content: max-w-4xl for readability
- Grid containers: grid with responsive columns

## Component Library

### Navigation Header
- Full-width sticky header with university logo (left)
- Horizontal navigation menu with dropdowns for major sections
- Search icon and utility links (right aligned)
- Minimal height (h-16 to h-20) for content priority
- Subtle border-b for definition

### Hero Section
- Large hero with mission statement
- Height: min-h-screen or h-[600px]
- Overlay text on campus imagery (use backdrop-blur-sm on text container)
- Centered content with max-w-4xl
- Primary CTA button with backdrop-blur-md bg-opacity-90

### News/Stories Grid
- Multi-column grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Featured story: Full-width or 2-column span at top
- Story cards with:
  - Aspect ratio image (aspect-video or aspect-[4/3])
  - Category label (text-sm, uppercase, tracking-wide)
  - Headline (text-xl, font-semibold, line-clamp-2)
  - Excerpt (text-base, line-clamp-3)
  - Read more link
- Hover: subtle scale transform (scale-105)

### Profile Sections
- Alternating left/right layout with image and quote
- Large square or portrait image (w-64 to w-80)
- Pull quote in large serif type
- Name and title below quote
- "Read more" link
- Generous spacing: py-20 to py-24

### Statistics Section
- Grid layout: grid-cols-2 md:grid-cols-3 lg:grid-cols-6
- Each stat: Large number, small descriptor below
- Clean, minimal presentation
- Center-aligned text

### Academic Programs
- Two layouts:
  1. Three-column cards for education types (Undergraduate/Graduate/Lifelong)
  2. Simple list with icons for seven schools
- Cards include image, title, brief description, CTA link
- Equal height cards with object-cover images

### Events Calendar
- Horizontal scrollable or grid of 3-4 events
- Each event card:
  - Square thumbnail image
  - Date badge (positioned absolute top-left)
  - Event type label
  - Title
  - Time/location details
- "More events" link

### Content Cards (Reusable)
- Standard card: rounded-lg, border or shadow-sm
- Image at top (full-width, aspect-video)
- Content padding: p-6 to p-8
- Structured hierarchy: Label → Title → Description → Link
- Hover state: shadow-lg transition

### Section Patterns
- Section header: Overline label + Large heading + Optional description
- Content blocks within sections maintain consistent spacing
- Alternating image-left/image-right for variety
- Background variations: some sections with subtle background, most clean

### Footer
- Multi-column layout (grid-cols-2 md:grid-cols-4)
- University info, quick links, resources, social media
- Copyright and utility links at bottom
- Generous padding: pt-16 pb-8

## Images

**Hero Section:**
- Large, high-quality campus image showing iconic Stanford architecture (Hoover Tower, Main Quad, Memorial Church)
- Dimensions: Full viewport width, 600-800px height
- Treatment: Subtle overlay for text readability

**News/Story Cards:**
- Research labs, students in action, faculty portraits, campus scenes
- Aspect ratio: 16:9 or 4:3
- Quality: High-resolution, professional photography

**Profile Images:**
- Faculty/student portraits in academic or research settings
- Square format (1:1) or vertical portrait (3:4)
- Size: 240x240px to 320x320px

**Section Images:**
- Education sections: Students collaborating, classroom scenes
- Campus life: Student activities, recreation, facilities
- Arts: Museum interiors, performances, outdoor sculptures
- Athletics: Action shots, championship celebrations
- Healthcare: Medical facilities, patient care (stock imagery)

**Background Images:**
- Subtle campus imagery for certain sections
- Used sparingly with proper text contrast

## Accessibility

- All images have descriptive alt text
- Color contrast meets WCAG AA standards (but don't specify colors)
- Focus states clearly visible on interactive elements
- Semantic HTML structure throughout
- Keyboard navigation fully supported
- ARIA labels for navigation and cards

## Interactions (Minimal)

- Smooth scroll for anchor links
- Hover effects: subtle scale/shadow on cards and images
- Navigation dropdowns: fade in/out
- NO complex animations or scroll-triggered effects
- Focus on content, not motion

## Key Design Distinctions

- Professional institutional authority without stuffiness
- Balance of imagery and data
- Clear information architecture across many content types
- Responsive multi-column grids that stack on mobile
- Consistent card-based design system
- Strategic use of serif typography for gravitas
- Clean, organized presentation of complex information