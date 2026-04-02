# SmartNest Component Library

## Design Philosophy
Warm-tech aesthetic combining cozy home comfort with high-tech smart features. Dark theme with copper/amber accents and subtle glow effects.

## Core Components

### 1. Button
**Purpose**: Primary actions throughout the application

**Variants**:
- **Primary**: Copper background with white text
  - Default: `bg-copper text-white shadow-copper-glow`
  - Hover: `transform -translate-y-0.5 shadow-copper-glow-lg`
  - Active: `transform translate-y-0`
  - Disabled: `opacity-50 cursor-not-allowed`
  
- **Secondary**: Transparent with copper border
  - Default: `bg-transparent border-copper text-copper`
  - Hover: `bg-copper/10`
  
- **Ghost**: Minimal, text only
  - Default: `text-muted-foreground`
  - Hover: `text-amber`

**Sizes**:
- Small: `px-3 py-1.5 text-sm`
- Medium: `px-4 py-2 text-base`
- Large: `px-6 py-3 text-lg`

### 2. Device Card
**Purpose**: Display smart home devices with status and controls

**Structure**:
```
┌─────────────────────────┐
│ [LED] Device Name       │
│ ┌─────────────────────┐ │
│ │   [Device Visual]    │ │
│ │    or Metrics        │ │
│ └─────────────────────┘ │
│ Status: Connected       │
│ [Controls]              │
└─────────────────────────┘
```

**States**:
- Default: Dark card with subtle border
- Hover: Copper border glow
- Active: Copper background tint
- Offline: Reduced opacity, red LED

### 3. LED Status Indicator
**Purpose**: Show device connectivity and activity

**States**:
- Connected: Green with pulse animation
- Active: Amber with glow
- Error: Red with fast pulse
- Offline: Gray, no animation

**CSS**:
```css
.led {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: pulse 2s infinite;
}
```

### 4. Temperature Control
**Purpose**: Adjust temperature settings with visual feedback

**Components**:
- Display: Large monospace numbers with glow
- Slider: Gradient from cool (sage) to warm (amber)
- Buttons: +/- with copper hover states

### 5. Smart Toggle
**Purpose**: On/off controls for devices

**States**:
- Off: Dark background, gray track
- On: Amber glow, copper track
- Transition: Smooth 200ms slide

### 6. Glass Panel
**Purpose**: Elevated content sections with depth

**Properties**:
```css
background: rgba(26, 24, 21, 0.7);
backdrop-filter: blur(12px);
border: 1px solid rgba(184, 115, 51, 0.2);
```

### 7. Product Bundle Card
**Purpose**: Showcase product bundles with savings

**Features**:
- Gradient border on hover
- Savings badge with amber background
- Device count indicator
- Price in monospace font

### 8. Quiz Option Card
**Purpose**: Interactive quiz selections

**States**:
- Default: Dark with subtle border
- Hover: Lift effect with glow
- Selected: Copper border and background tint
- Disabled: Reduced opacity

### 9. Form Elements

**Input Fields**:
- Dark background with subtle border
- Copper focus ring
- Monospace for numbers/codes
- Error state with red border

**Labels**:
- Muted text color
- Required indicator in amber

### 10. Navigation

**Header**:
- Glass morphism effect
- Sticky with backdrop blur
- Logo in copper gradient
- Links with amber hover

**Mobile Menu**:
- Slide-in from right
- Dark overlay
- Full-height with padding

## Animation Guidelines

**Timing**:
- Micro-interactions: 150-200ms
- Page transitions: 300-500ms
- Loading states: Infinite pulse

**Easing**:
- Default: `cubic-bezier(0.4, 0, 0.2, 1)`
- Bounce: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`

## Responsive Behavior

**Breakpoints**:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Scaling**:
- Touch targets minimum 44px
- Cards stack on mobile
- Typography scales down 10-15%
- Spacing reduces by 25% on mobile

## Accessibility

- All interactive elements have focus states
- Color contrast meets WCAG AA standards
- LED indicators have text alternatives
- Form errors announced to screen readers
- Keyboard navigation fully supported