# STOO$H Design System
## Dark Professional Aesthetic

---

## 🎨 Visual Language Philosophy

The STOO$H design system embodies **fiscal authority** through a refined dark theme that prioritizes:
- **Readability**: High contrast ratios and clear typographic hierarchy
- **Trust**: Subtle, professional aesthetics without flashy distractions
- **Precision**: Monospaced typography for financial data alignment

---

## 🎯 Color Palette

### Primary Background
| Variable | Value | Usage |
|----------|-------|-------|
| `--stoosh-bg-primary` | `#0a0a0a` | Main application background |
| `--stoosh-bg-secondary` | `#121212` | Sidebar, header, elevated surfaces |
| `--stoosh-bg-tertiary` | `#1a1a1a` | Cards, transaction rows |

### Surface Colors
| Variable | Value | Usage |
|----------|-------|-------|
| `--stoosh-surface-card` | `#161616` | Primary card backgrounds |
| `--stoosh-surface-elevated` | `#1e1e1e` | Hover states, active cards |
| `--stoosh-surface-overlay` | `#252525` | Interactive overlays |

### Accent Colors
| Variable | Value | Usage |
|----------|-------|-------|
| `--stoosh-accent-burnt-orange` | `#FF4500` | Primary actions, active indicators |
| `--stoosh-accent-orange-hover` | `#FF5A1F` | Hover states for primary actions |
| `--stoosh-accent-orange-active` | `#E03E00` | Active/pressed states |

### Text Hierarchy
| Variable | Value | Usage |
|----------|-------|-------|
| `--stoosh-text-primary` | `#ffffff` | Headings, primary content |
| `--stoosh-text-secondary` | `#a0a0a0` | Body text, secondary content |
| `--stoosh-text-tertiary` | `#707070` | Muted text, placeholders |

### Status Colors
| Variable | Value | Usage |
|----------|-------|-------|
| `--stoosh-success` | `#22c55e` | Income, positive values |
| `--stoosh-danger` | `#ef4444` | Expenses, negative values |
| `--stoosh-warning` | `#f59e0c` | Warnings, alerts |

### Border System
| Variable | Value | Usage |
|----------|-------|-------|
| `--stoosh-border-subtle` | `rgba(255, 255, 255, 0.05)` | Default borders |
| `--stoosh-border-default` | `rgba(255, 255, 255, 0.08)` | Input borders, hover states |
| `--stoosh-border-strong` | `rgba(255, 255, 255, 0.12)` | Focus states |

---

## 🔠 Typography

### Font Stack
```css
--stoosh-font-display: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--stoosh-font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', monospace;
```

### Usage Guidelines
- **Display Font (Inter)**: Headers, navigation, UI labels
- **Monospace Font (JetBrains Mono)**: Financial figures, currency values, data tables

### Font Weights
| Variable | Weight | Usage |
|----------|--------|-------|
| `--stoosh-weight-regular` | 400 | Body text |
| `--stoosh-weight-medium` | 500 | Labels, secondary headings |
| `--stoosh-weight-semibold` | 600 | Primary headings, important numbers |
| `--stoosh-weight-bold` | 700 | Display titles |

### Financial Figure Classes
```css
.stoosh-figure          /* Base monospace styling */
.stoosh-figure-large    /* 1.75rem - Total balances, main metrics */
.stoosh-figure-medium   /* 1.25rem - Section totals, chart values */
.stoosh-figure-small    /* 0.875rem - Transaction amounts, inline values */
```

---

## 🧭 Layout Structure

### Application Layout
```
┌─────────────────────────────────────────────────────────────┐
│  Header (56px)                                              │
├─────────────────────────────────────────────────────────────┤
│  Sidebar (240px) │  Main Content Area                        │
│                  │                                           │
│  • Navigation    │  • Dashboard View                         │
│  • Brand         │  • Transaction List                         │
│                  │  • Analytics                              │
└──────────────────┴─────────────────────────────────────────┘
```

### Sidebar Navigation
- **Width**: 240px (expanded) / 64px (collapsed)
- **Active State**: Left border indicator in Burnt Orange + subtle background tint
- **Hover**: Subtle overlay with text color transition

### Header
- **Height**: 56px
- **Content**: Application title + contextual action buttons (Add/Export)

---

## 🔄 Motion & Interactions

### Animation Curves
```css
--stoosh-ease-snappy: cubic-bezier(0.4, 0, 0.2, 1);  /* Button interactions */
--stoosh-ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1); /* Transitions */
```

### Interaction Patterns
| Element | Interaction | Duration |
|---------|-----------|----------|
| Buttons | Snap hover, immediate press | 0.2s |
| Links | Color transition only | 0.2s |
| Cards | Background + border shift | 0.2s |
| Sidebar | Width transition | 0.3s |

---

## 🧩 Component Library

### Buttons
```html
<!-- Primary Action -->
<button class="stoosh-btn stoosh-btn-primary">Add Transaction</button>

<!-- Secondary Action -->
<button class="stoosh-btn stoosh-btn-secondary">Export</button>

<!-- Ghost/Icon -->
<button class="stoosh-btn stoosh-btn-ghost">
  <i class="bi bi-three-dots"></i>
</button>
```

### Transaction Row
```html
<div class="stoosh-transaction-row">
  <div class="d-flex align-items-center gap-3">
    <div class="stoosh-transaction-icon income">
      <i class="bi bi-arrow-up-circle-fill"></i>
    </div>
    <div class="stoosh-transaction-details">
      <p class="stoosh-transaction-name">Salary</p>
      <small class="stoosh-transaction-date">Jan 15, 2024</small>
    </div>
  </div>
  <span class="stoosh-transaction-amount income">+$5,000.00</span>
</div>
```

### Status Indicators
```html
<span class="stoosh-status-dot success"></span> <!-- Income -->
<span class="stoosh-status-dot danger"></span>  <!-- Expense -->
<span class="stoosh-status-dot warning"></span> <!-- Pending -->
```

---

## 📊 Data Table Specifications

### High-Density Layout
- **Row padding**: 12px 16px
- **Row spacing**: 4px vertical gap
- **Border radius**: 8px per row
- **Hover state**: Elevate to surface-overlay color

### Currency Alignment
- Monospaced font ensures decimal point alignment
- Letter-spacing: -0.02em for optical density
- Right-aligned amounts for easy scanning

---

## ♿ Accessibility Notes

- Minimum contrast ratio: 4.5:1 for text
- Focus rings use Burnt Orange accent
- Interactive elements have 44px minimum touch target
- Color is never the sole indicator of status (accompanied by icons)