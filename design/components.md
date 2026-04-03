# Component Specifications

## Core Components

### Button
**Purpose**: Primary action trigger throughout the application

**Variants**:
- `primary`: Sage green background, white text - for main CTAs
- `secondary`: Light sage background, dark text - for secondary actions  
- `outline`: White background, sage border - for tertiary actions
- `ghost`: Transparent with hover state - for inline actions

**Sizes**:
- `sm`: 32px height, 14px text
- `md`: 40px height, 16px text (default)
- `lg`: 48px height, 18px text

**States**:
- Default: As specified
- Hover: 10% darker background
- Active: 20% darker background
- Disabled: 50% opacity, cursor not-allowed
- Loading: Show spinner, disable interaction

**Specifications**:
```css
/* Base */
padding: 0 24px;
border-radius: 8px;
font-weight: 500;
transition: all 200ms ease;

/* Primary */
background: #647864;
color: white;

/* Secondary */
background: #f6f7f6;
color: #171717;
```

### Card
**Purpose**: Content container for products, features, etc.

**Variants**:
- `default`: White background with subtle border
- `elevated`: White background with shadow
- `interactive`: Hover state with raised shadow

**Specifications**:
```css
background: white;
border: 1px solid #e5e5e5;
border-radius: 12px;
padding: 24px;
transition: all 200ms ease;

/* Hover (interactive) */
transform: translateY(-2px);
box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
```

### Input
**Purpose**: Form inputs for user data

**Types**:
- Text input
- Email input
- Number input
- Textarea
- Select dropdown

**States**:
- Default: Gray border
- Focus: Sage green border with glow
- Error: Red border with error message
- Disabled: Gray background

**Specifications**:
```css
height: 48px;
padding: 0 16px;
border: 2px solid #e5e5e5;
border-radius: 8px;
font-size: 16px;
transition: border-color 200ms ease;

/* Focus */
border-color: #647864;
box-shadow: 0 0 0 3px rgba(100, 120, 100, 0.1);
```

### Navigation
**Purpose**: Main site navigation

**Variants**:
- Desktop: Horizontal with dropdown menus
- Mobile: Hamburger with slide-out menu

**Specifications**:
```css
/* Desktop */
height: 80px;
background: white;
border-bottom: 1px solid #e5e5e5;

/* Links */
color: #525252;
font-weight: 500;
transition: color 200ms ease;

/* Hover */
color: #647864;
```

### Product Card
**Purpose**: Display individual products

**Layout**:
- Image container (4:3 ratio)
- Product name
- Description (2 lines max)
- Price
- Add to cart button

**Specifications**:
```css
width: 100%;
max-width: 320px;
background: white;
border-radius: 12px;
overflow: hidden;
transition: all 200ms ease;

/* Image Container */
aspect-ratio: 4/3;
background: #f5f5f5;

/* Content */
padding: 20px;
```

### Badge
**Purpose**: Status indicators, labels

**Variants**:
- `default`: Neutral gray
- `success`: Green for in-stock, active
- `warning`: Orange for low stock
- `error`: Red for out of stock
- `info`: Blue for new items

**Specifications**:
```css
display: inline-flex;
padding: 4px 12px;
border-radius: 100px;
font-size: 14px;
font-weight: 500;
```

### Icon Button
**Purpose**: Icon-only actions (cart, search, menu)

**Sizes**:
- `sm`: 32px
- `md`: 40px
- `lg`: 48px

**Specifications**:
```css
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
transition: all 200ms ease;

/* Hover */
background: #f6f7f6;
```

## Layout Components

### Container
**Purpose**: Consistent page width and padding

**Specifications**:
```css
max-width: 1280px;
margin: 0 auto;
padding: 0 24px;

/* Mobile */
@media (max-width: 768px) {
  padding: 0 16px;
}
```

### Grid
**Purpose**: Responsive product and content grids

**Variants**:
- 2 column (tablet)
- 3 column (desktop)
- 4 column (wide desktop)

**Specifications**:
```css
display: grid;
gap: 24px;

/* Responsive */
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
```

### Section
**Purpose**: Page sections with consistent spacing

**Specifications**:
```css
padding: 80px 0;

/* Mobile */
@media (max-width: 768px) {
  padding: 48px 0;
}
```

## Form Components

### Form Group
**Purpose**: Label + input + error message container

**Specifications**:
```css
margin-bottom: 24px;

/* Label */
font-weight: 500;
margin-bottom: 8px;
color: #404040;

/* Error Message */
font-size: 14px;
color: #ef4444;
margin-top: 4px;
```

### Checkbox/Radio
**Purpose**: Multiple choice inputs

**Specifications**:
```css
width: 20px;
height: 20px;
border: 2px solid #d4d4d4;
border-radius: 4px; /* checkbox */
border-radius: 50%; /* radio */

/* Checked */
background: #647864;
border-color: #647864;
```

## Feedback Components

### Toast
**Purpose**: Temporary notifications

**Variants**:
- Success
- Error
- Warning
- Info

**Specifications**:
```css
position: fixed;
bottom: 24px;
right: 24px;
max-width: 400px;
padding: 16px 24px;
border-radius: 8px;
box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
```

### Loading Spinner
**Purpose**: Loading states

**Sizes**:
- `sm`: 16px
- `md`: 24px
- `lg`: 32px

**Specifications**:
```css
animation: spin 1s linear infinite;
border: 2px solid #e5e5e5;
border-top-color: #647864;
border-radius: 50%;
```

## E-commerce Specific

### Price Display
**Purpose**: Consistent price formatting

**Specifications**:
```css
font-family: 'JetBrains Mono', monospace;
font-size: 24px;
font-weight: 600;
color: #171717;

/* Sale Price */
.original {
  text-decoration: line-through;
  color: #a3a3a3;
  font-size: 18px;
}

.sale {
  color: #ef4444;
}
```

### Quantity Selector
**Purpose**: Product quantity adjustment

**Specifications**:
```css
display: flex;
align-items: center;
border: 2px solid #e5e5e5;
border-radius: 8px;
height: 48px;

/* Buttons */
width: 48px;
height: 100%;
border: none;
background: transparent;

/* Input */
width: 60px;
text-align: center;
border: none;
font-family: 'JetBrains Mono', monospace;
```

### Shopping Cart Icon
**Purpose**: Cart status in header

**Specifications**:
```css
position: relative;

/* Item Count Badge */
position: absolute;
top: -8px;
right: -8px;
width: 20px;
height: 20px;
background: #647864;
color: white;
border-radius: 50%;
font-size: 12px;
font-weight: 600;
```