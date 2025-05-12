# @vanilla-web-components/design

A modern design system that works with React and vanilla web components.

## Installation

```bash
npm install @vanilla-web-components/design
```

## Usage with React

```jsx
// Import the main CSS file
import "@vanilla-web-components/design";

// Or import specific modules
import "@vanilla-web-components/design/color.css";
import "@vanilla-web-components/design/hue.css";

// Import themes
import "@vanilla-web-components/design/themes.css";
```

## Monochromatic Themes

The design system provides monochromatic themes for each base color. Each theme uses variations of a single hue for all UI elements.

Available themes:
- `gray`
- `burgundy`
- `red`
- `peach`
- `orange`
- `yellow`
- `green`
- `teal`
- `turquoise`
- `cyan`
- `navy`
- `blue` (default)
- `magenta`
- `pink`

To apply a theme, add the `data-theme` attribute to your root element:

```html
<!-- Blue Theme (default) -->
<div>...</div>

<!-- Red Theme -->
<div data-theme="red">...</div>

<!-- Green Theme -->
<div data-theme="green">...</div>
```

### Semantic Variables

Each theme provides semantic variables that automatically adapt to the current theme color:

```css
.my-component {
  /* Backgrounds */
  background: var(--background);
  background: var(--surface);
  background: var(--surface-hover);
  background: var(--surface-active);
  
  /* Text */
  color: var(--text-primary);
  color: var(--text-secondary);
  color: var(--text-tertiary);
  color: var(--text-disabled);
  
  /* Interactive Elements */
  background: var(--interactive);
  background: var(--interactive-hover);
  background: var(--interactive-active);
  background: var(--interactive-muted);
  
  /* Borders */
  border-color: var(--border);
  border-color: var(--border-hover);
  border-color: var(--border-active);
  
  /* Accents */
  color: var(--accent);
  color: var(--accent-hover);
  color: var(--accent-active);
  color: var(--accent-muted);
}
```

Each theme follows these principles:
- Lower numbers (0-3) are darker/more subtle
- Middle numbers (4-6) are for primary UI elements
- Higher numbers (7-10) are for emphasis/contrast
- Hover states use a slightly higher number than base
- Active states use an even higher number
- Muted states use a lower number

## Available CSS Modules

- `index.css` - Complete design system
- `color.css` - Color utilities
- `hue.css` - Hue-based color utilities
- `opacity.css` - Opacity utilities
- `color-classes.css` - Pre-generated color classes
- `themes.css` - Monochromatic theme system

## Features

- 🎨 Modern CSS design system
- ⚛️ React compatible
- 📦 Tree-shakeable
- 🗺️ Source maps support
- 🔧 PostCSS powered
- 🎯 Zero runtime dependencies
- 🌳 CSS modules support
- 🎨 14 monochromatic themes

## Development

```bash
# Install dependencies
npm install

# Build CSS files
npm run build

# Watch for changes during development
npm run watch
```

## License

MIT License

Copyright (c) 2025 vanilla-web-components
