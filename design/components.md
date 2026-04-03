# SmartNest Component Library

## Foundation Components

### Button Component
```
Variants:
  - Primary: bg-copper text-dark, hover:glow-copper
  - Secondary: bg-transparent border-copper, hover:bg-copper/10
  - Ghost: text-copper, hover:text-amber
  - Danger: bg-terracotta text-white

Sizes:
  - Small: px-3 py-1.5 text-sm
  - Medium: px-4 py-2 text-base (default)
  - Large: px-6 py-3 text-lg

States:
  - Default: As specified
  - Hover: Glow effect + slight transform
  - Active: Darker shade
  - Disabled: opacity-50, cursor-not-allowed
  - Loading: Pulsing glow animation
```

### Device Card Component
```
Structure:
  - Glass background with copper border
  - LED status indicator (top-right)
  - Device icon/image
  - Device name and room
  - Mini-display showing key metric
  - Quick controls (toggle, slider)

States:
  - Default: Subtle glass effect
  - Hover: Lift + stronger glow
  - Active: Copper border glow
  - Offline: Grayscale + red LED

Sizes:
  - Compact: 200x150px (grid view)
  - Standard: 280x200px (default)
  - Expanded: 400x280px (detail view)
```

### Temperature Control
```
Elements:
  - Circular dial with copper accent
  - Current temp in large mono font
  - Target temp in amber
  - +/- buttons with hover glow
  - Mode indicator (heat/cool/auto)

Interactions:
  - Drag to adjust temperature
  - Click +/- for 1° changes
  - Long press for rapid change
  - Smooth transitions between values
```

### Smart Toggle
```
Design:
  - Pill-shaped track (40x20px)
  - Circular thumb with LED glow
  - Smooth slide animation (200ms)

States:
  - Off: Dark track, dim thumb
  - On: Amber track, glowing thumb
  - Disabled: Reduced opacity
  - Loading: Pulsing animation
```

## Layout Components

### Navigation Bar
```
Structure:
  - Fixed top, glass background
  - Logo with amber accent icon
  - Nav links with hover glow
  - Cart icon with item count
  - Mobile: Hamburger menu

Behavior:
  - Blur backdrop on scroll
  - Subtle shadow appearance
  - Mobile menu slides from right
```

### Product Bundle Card
```
Layout:
  - Hero image with gradient overlay
  - Bundle name in Manrope bold
  - Device count badge
  - Savings percentage in green
  - Price in mono font
  - "View Bundle" CTA

Effects:
  - Gradient border on hover
  - Subtle scale transform
  - Animated savings badge
```

### Feature Grid
```
Responsive columns:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3-4 columns

Card design:
  - Icon with gradient background
  - Title + description
  - Consistent spacing (1.5rem padding)
  - Hover: Lift + border glow
```

## Form Components

### Input Field
```
Design:
  - Dark background with subtle border
  - Copper focus glow
  - Floating label animation
  - Helper text in muted color

States:
  - Default: border-neutral-700
  - Focus: border-copper + glow
  - Error: border-terracotta + message
  - Success: border-sage + checkmark
```

### Select Dropdown
```
Custom styling:
  - Glass background
  - Copper chevron icon
  - Hover states for options
  - Smooth open/close animation
  - Search functionality for long lists
```

### Quiz Option Card
```
Interactive card:
  - Icon + title + description
  - Border changes on selection
  - Multiple selection support
  - Smooth transition effects
  - Accessible keyboard navigation
```

## Feedback Components

### LED Status Indicator
```
Sizes:
  - Small: 6px (inline status)
  - Medium: 8px (card status)
  - Large: 12px (hero sections)

Colors:
  - Green: Device online/active
  - Amber: Processing/warning
  - Red: Offline/error
  - Blue: Update available

Animation:
  - Steady: Normal state
  - Pulse: Active/processing
  - Fast blink: Alert/error
```

### Toast Notification
```
Positioning:
  - Top-right corner
  - Slide in from right
  - Stack multiple toasts

Types:
  - Success: Green accent + check icon
  - Warning: Amber accent + alert icon
  - Error: Red accent + x icon
  - Info: Blue accent + i icon

Behavior:
  - Auto-dismiss after 5s
  - Manual close button
  - Progress bar for timing
```

### Loading States
```
Variations:
  - Spinner: Copper gradient rotation
  - Skeleton: Pulsing glass blocks
  - Progress bar: Gradient fill
  - Dots: Three bouncing LEDs

Usage:
  - Spinner: Quick actions
  - Skeleton: Content loading
  - Progress: File uploads
  - Dots: Inline loading
```

## Special Effects

### Glow Effects
```css
.glow-copper {
  box-shadow: 0 0 20px rgba(184, 115, 51, 0.5);
}

.glow-amber {
  box-shadow: 0 0 30px rgba(255, 179, 71, 0.6);
}

.glow-led {
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
}
```

### Glass Morphism
```css
.glass {
  background: rgba(26, 24, 21, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(184, 115, 51, 0.2);
}
```

### Hover Transforms
```css
.hover-lift {
  transition: transform 0.2s ease;
}
.hover-lift:hover {
  transform: translateY(-5px);
}
```

## Animation Timings

- Micro-interactions: 150-200ms
- Page transitions: 300-500ms
- Loading animations: 1-2s loops
- Hover effects: 200ms ease
- Modal/drawer: 300ms ease-out

## Accessibility Notes

- All interactive elements have focus states
- Minimum touch target: 44x44px
- Color contrast meets WCAG AA
- Keyboard navigation supported
- Screen reader labels included
- Reduced motion respected