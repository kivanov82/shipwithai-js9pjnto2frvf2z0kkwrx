# Smart Home Store Style Guide

## Brand Identity

### Vision
We make smart homes feel natural, not technical. Our design creates a sense of calm control - technology that adapts to you, not the other way around.

### Design Principles

1. **Approachable Technology**
   - Use warm, natural colors (sage greens, soft grays)
   - Avoid technical jargon in UI copy
   - Show benefits, not specifications

2. **Clear Hierarchy**
   - Important actions are obvious
   - Information is scannable
   - Next steps are always clear

3. **Trustworthy & Professional**
   - Consistent spacing and alignment
   - High-quality imagery
   - Clear pricing and policies

4. **Responsive & Accessible**
   - Mobile-first design
   - WCAG AA compliance
   - Clear focus states

## Color Usage

### Primary Palette
- **Sage Green (#647864)**: Primary brand color, CTAs, links
- **Light Sage (#f6f7f6)**: Backgrounds, secondary buttons
- **Charcoal (#171717)**: Primary text
- **Medium Gray (#525252)**: Secondary text
- **Light Gray (#e5e5e5)**: Borders, dividers

### Semantic Colors
- **Success**: Use primary sage green
- **Error**: #ef4444 (red)
- **Warning**: #f59e0b (amber)
- **Info**: #3b82f6 (blue)

### Usage Guidelines
- Primary CTAs: Sage green background, white text
- Secondary CTAs: Light sage background, dark text
- Links: Sage green, underline on hover
- Backgrounds: White primary, light sage accents
- Never use more than 3 colors in one component

## Typography

### Font Stack
```css
font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale
- **Display**: 48px/1.2 (desktop) → 36px (mobile)
- **H1**: 36px/1.3 → 28px
- **H2**: 28px/1.4 → 24px
- **H3**: 24px/1.4 → 20px
- **H4**: 20px/1.5 → 18px
- **Body**: 16px/1.6
- **Small**: 14px/1.5
- **Caption**: 12px/1.5

### Font Weights
- **Regular (400)**: Body text, descriptions
- **Medium (500)**: Buttons, navigation
- **Semibold (600)**: Headings, prices
- **Bold (700)**: Hero headlines only

### Text Guidelines
- Max line length: 65-75 characters
- Paragraph spacing: 1.5em
- Letter spacing: Normal (0)
- Avoid all caps except for small labels

## Spacing System

Base unit: 4px

### Scale
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px
- **4xl**: 80px

### Component Spacing
- Button padding: 12px 24px
- Card padding: 24px
- Section padding: 80px (desktop), 48px (mobile)
- Grid gap: 24px
- Form field spacing: 24px

## Layout Principles

### Grid System
- 12-column grid
- Max width: 1280px
- Gutters: 24px
- Margins: 24px (16px mobile)

### Breakpoints
- Mobile: 0-767px
- Tablet: 768px-1023px
- Desktop: 1024px-1279px
- Wide: 1280px+

### Component Layout
- Cards: Max 3 per row desktop, stack on mobile
- Products: 4 columns wide, 3 desktop, 2 tablet, 1 mobile
- Forms: Single column, max 480px wide

## Imagery

### Product Images
- Aspect ratio: 4:3
- Background: Light gray (#f5f5f5)
- Show product in context when possible
- Consistent lighting and angle

### Icons
- Style: Outlined, 2px stroke
- Sizes: 16px, 20px, 24px
- Color: Inherit from parent
- Hover: Sage green tint

### Illustrations
- Simple, geometric style
- Sage green accent color
- Light gray secondary
- Use sparingly for empty states

## Interactive States

### Buttons
- **Default**: As designed
- **Hover**: 10% darker background, cursor pointer
- **Active**: 20% darker background
- **Focus**: 3px sage green outline, 2px offset
- **Disabled**: 50% opacity, cursor not-allowed

### Links
- **Default**: Sage green, no underline
- **Hover**: Underline, darker green
- **Active**: Darkest green
- **Visited**: Same as default (for consistency)

### Form Inputs
- **Default**: 2px gray border
- **Hover**: Darker border
- **Focus**: Sage green border, subtle glow
- **Error**: Red border, error message below
- **Disabled**: Gray background

### Cards
- **Default**: Subtle border
- **Hover**: Raised shadow, slight scale (1.02)
- **Active**: Pressed appearance

## Animation

### Timing
- **Fast**: 150ms (hover states)
- **Normal**: 200ms (most transitions)
- **Slow**: 300ms (page transitions)

### Easing
- **Default**: ease-out (acceleration)
- **Enter**: ease-out
- **Exit**: ease-in
- **Move**: ease-in-out

### Guidelines
- Animate one property at a time
- Use transform over position
- Avoid animating during scroll
- Respect prefers-reduced-motion

## Accessibility

### Color Contrast
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum
- Test with color blindness simulators

### Focus States
- Visible keyboard focus indicators
- 3px outline, 2px offset
- Sage green color
- Never remove outline

### Screen Readers
- Semantic HTML structure
- Descriptive alt text
- ARIA labels where needed
- Skip navigation links

### Interactive Elements
- Minimum touch target: 44x44px
- Clear hover states
- Descriptive button text
- Loading states announced

## Component Patterns

### Forms
- Label above input
- Clear error messages
- Inline validation
- Success feedback
- Progress indicators for multi-step

### Navigation
- Sticky header on scroll
- Mobile hamburger menu
- Breadcrumbs on deep pages
- Clear active states

### E-commerce
- Product cards with quick view
- Persistent cart in header
- Clear pricing display
- Stock status visible
- One-click add to cart

### Feedback
- Toast notifications (bottom right)
- Loading spinners in buttons
- Skeleton screens for loading
- Empty states with actions

## Voice & Tone

### Writing Principles
1. **Clear, not clever**: Simple language wins
2. **Benefits over features**: "Control your lights from anywhere" not "WiFi-enabled"
3. **Encouraging**: "Let's set up your smart home" not "Configuration required"
4. **Human**: Write like you're helping a friend

### UI Copy Examples
- **Button**: "Add to Cart" not "Purchase"
- **Error**: "Please enter a valid email" not "Invalid input"
- **Success**: "Added to your cart!" not "Operation successful"
- **Empty state**: "No products match your search. Try different keywords?" not "No results"

## Do's and Don'ts

### Do's
- ✅ Use consistent spacing
- ✅ Test on real devices
- ✅ Consider loading states
- ✅ Provide feedback for actions
- ✅ Make CTAs obvious

### Don'ts
- ❌ Use more than 2 font weights per component
- ❌ Center-align body text
- ❌ Use pure black (#000)
- ❌ Animate on scroll
- ❌ Hide important info in hover states

## Implementation Notes

### CSS Architecture
- Use CSS custom properties for tokens
- Component-based styling
- Mobile-first media queries
- Avoid !important

### Performance
- Optimize images (WebP with fallbacks)
- Lazy load below the fold
- Minimize animation on mobile
- Use system fonts for fallbacks

### Browser Support
- Chrome, Safari, Firefox, Edge (latest 2 versions)
- iOS Safari 14+
- Progressive enhancement for older browsers