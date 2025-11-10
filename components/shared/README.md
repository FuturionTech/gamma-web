# Shared Components Library

This directory contains reusable components that can be used across all pages and domains in the application. These components are designed to maintain consistency, reduce code duplication, and support future backend data integration.

## Directory Structure

```
components/shared/
├── cards/
│   ├── ServiceCard.vue          # Service offering cards
│   ├── BenefitCard.vue          # Benefit/advantage cards
│   ├── ProcessStepCard.vue      # Process step cards with numbering
│   └── IndustryCard.vue         # Industry-specific cards
├── sections/
│   └── SectionHeader.vue        # Reusable section headers
└── README.md                    # This file
```

---

## Components

### 1. ServiceCard

**Purpose**: Display service offerings with icons, descriptions, features, and links.

**Usage**:
```vue
<ServiceCard
  title="AI & Machine Learning"
  description="Deploy intelligent systems that automate processes..."
  :features="['Predictive Analytics', 'NLP', 'Computer Vision']"
  gradientClass="bg-gradient-primary"
  icon="bi-cpu"
  link="/services/ai"
  linkText="Learn More"
/>
```

**Props**:
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | String | Yes | - | Card title |
| `description` | String | Yes | - | Card description |
| `features` | Array | No | `[]` | List of features/capabilities |
| `icon` | String | No | `''` | Bootstrap icon class |
| `svgIcon` | Object/Function | No | `null` | SVG component for custom icons |
| `gradientClass` | String | No | `'bg-gradient-primary'` | Gradient background class |
| `link` | String | No | `''` | Link URL |
| `linkText` | String | No | `'Learn More'` | Link text |

**Available Gradients**:
- `bg-gradient-primary` (Purple)
- `bg-gradient-info` (Blue)
- `bg-gradient-success` (Green)
- `bg-gradient-danger` (Red)
- `bg-gradient-warning` (Orange)
- `bg-gradient-purple` (Purple variant)
- `bg-gradient-dark` (Dark gray)

---

### 2. SectionHeader

**Purpose**: Consistent section headers with title, subtitle, and optional badge.

**Usage**:
```vue
<SectionHeader
  title="Our Core Services"
  subtitle="Transform your business with our comprehensive data solutions"
  badge="Services"
  headingSize="h1"
  maxWidth="700px"
/>
```

**Props**:
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | String | Yes | - | Section title |
| `subtitle` | String | No | `''` | Section subtitle/description |
| `badge` | String | No | `''` | Optional badge text above title |
| `headingSize` | String | No | `'h1'` | Heading size class (h1-h4, display-3 to display-6) |
| `maxWidth` | String | No | `'600px'` | Max width for subtitle |

**Slots**:
- Default slot for custom content below subtitle

---

### 3. BenefitCard

**Purpose**: Simple cards for displaying benefits, advantages, or features.

**Usage**:
```vue
<BenefitCard
  title="Expert Team"
  description="Certified data professionals with proven expertise"
  icon="bi-people-fill"
  iconColor="primary"
/>
```

**Props**:
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | String | Yes | - | Benefit title |
| `description` | String | Yes | - | Benefit description |
| `icon` | String | No | `''` | Bootstrap icon class |
| `svgIcon` | Object/Function | No | `null` | SVG component for custom icons |
| `iconColor` | String | No | `'primary'` | Icon color (primary, success, warning, etc.) |

---

### 4. ProcessStepCard

**Purpose**: Display numbered process steps with descriptions and sub-items.

**Usage**:
```vue
<ProcessStepCard
  :stepNumber="1"
  title="Discovery"
  description="Understanding your business challenges..."
  :items="['Requirements Analysis', 'Stakeholder Interviews']"
  icon="bi-search"
  badgeColor="gradient"
/>
```

**Props**:
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `stepNumber` | String/Number | Yes | - | Step number or label |
| `title` | String | Yes | - | Step title |
| `description` | String | Yes | - | Step description |
| `items` | Array | No | `[]` | List of sub-items/features |
| `icon` | String | No | `''` | Bootstrap icon class |
| `svgIcon` | Object/Function | No | `null` | SVG component |
| `badgeColor` | String | No | `'gradient'` | Badge color (gradient, primary, success, etc.) |

---

### 5. IndustryCard

**Purpose**: Display industry-specific information with icons.

**Usage**:
```vue
<IndustryCard
  title="Banks & Financial Services"
  description="Enhancing data security and analytics for better decisions..."
  icon="bi-bank"
  iconColor="primary"
  link="/industries/finance"
  linkText="Learn more"
/>
```

**Props**:
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | String | Yes | - | Industry title |
| `description` | String | Yes | - | Industry description |
| `icon` | String | No | `''` | Bootstrap icon class |
| `svgIcon` | Object/Function | No | `null` | SVG component |
| `iconColor` | String | No | `'primary'` | Icon color |
| `link` | String | No | `''` | Link URL |
| `linkText` | String | No | `'Learn more'` | Link text |

---

## Design Principles

### 1. **Consistency**
All components follow the same design patterns:
- Rounded corners (border-radius: 1rem)
- Consistent spacing and padding
- Hover effects with lift animation
- Shadow levels

### 2. **Dark Mode Support**
All components include dark mode styles using Bootstrap's `data-bs-theme="dark"` attribute.

### 3. **Accessibility**
- Focus states with visible outlines
- Reduced motion support via `prefers-reduced-motion`
- Semantic HTML
- Proper ARIA labels where needed

### 4. **Responsiveness**
Components adapt to different screen sizes using Bootstrap's grid system and responsive utilities.

### 5. **Future-Ready**
Props are designed to accept data from backend APIs. Simply pass the data object:

```vue
<!-- Example with backend data -->
<ServiceCard
  v-for="service in services"
  :key="service.id"
  :title="service.title"
  :description="service.description"
  :features="service.features"
  :icon="service.icon"
  :link="service.link"
/>
```

---

## Color System

### Brand Colors
- **Primary Purple**: `#8b5cf6`
- **Secondary Purple**: `#667eea` to `#764ba2`
- **Success Green**: `#10b981`
- **Info Blue**: `#3b82f6`
- **Warning Orange**: `#f59e0b`
- **Danger Red**: `#ef4444`

### Gradients
All gradient classes use 135deg angle for consistency:
```css
linear-gradient(135deg, color1 0%, color2 100%)
```

---

## Best Practices

### 1. **Use TypeScript Props** (Future Enhancement)
When migrating to TypeScript, define prop types:
```ts
interface ServiceCardProps {
  title: string
  description: string
  features?: string[]
  // ...
}
```

### 2. **Backend Integration**
Structure your API responses to match component props:
```json
{
  "services": [
    {
      "id": 1,
      "title": "AI & Machine Learning",
      "description": "Deploy intelligent systems...",
      "features": ["Predictive Analytics", "NLP"],
      "icon": "bi-cpu",
      "gradientClass": "bg-gradient-primary",
      "link": "/services/ai"
    }
  ]
}
```

### 3. **Composition**
Combine components to create rich layouts:
```vue
<SectionWrapper spacing="lg" backgroundColor="light">
  <SectionHeader
    title="Our Services"
    subtitle="Comprehensive solutions..."
  />
  <div class="row g-4">
    <div class="col-lg-4" v-for="service in services" :key="service.id">
      <ServiceCard v-bind="service" />
    </div>
  </div>
</SectionWrapper>
```

---

## Testing

Before deployment, test:
1. ✅ Visual appearance in light and dark modes
2. ✅ Hover states and animations
3. ✅ Responsive behavior on mobile, tablet, desktop
4. ✅ Accessibility (keyboard navigation, screen readers)
5. ✅ Browser compatibility

---

## Contributing

When adding new shared components:
1. Follow the existing design patterns
2. Include dark mode support
3. Add accessibility features
4. Document all props
5. Update this README
6. Test thoroughly

---

## Questions?

For questions or issues with shared components, contact the development team or create an issue in the project repository.
