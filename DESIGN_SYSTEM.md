# 🎨 Hostel Booking App - Design System Documentation

## Overview
This document defines the complete design system for the Hostel Booking mobile application. Follow these specifications precisely to ensure visual consistency and user experience excellence across all screens.

---

## 📐 Design Philosophy

**Core Principles:**
- **Minimalist Dark Theme**: Clean, professional dark gray as primary color
- **High Contrast**: Excellent readability with proper text-background contrast
- **Consistent Spacing**: 4px grid system (4, 8, 12, 16, 20, 24, 32, 40)
- **Smooth Interactions**: Subtle shadows, rounded corners, smooth transitions
- **Mobile-First**: Optimized for iOS and Android platforms

---

## 🎨 Color Palette

### Primary Colors
```json
{
  "primary": "#1f2937",           // Dark Gray - Main actions, selected states
  "primaryText": "#1f2937",       // Main heading text
  "background": "#f8f9fa",        // Light gray background
  "cardBackground": "#ffffff",    // White cards/containers
  "lightBackground": "#f3f4f6"    // Stats, subtle backgrounds
}
```

### Secondary Colors
```json
{
  "secondary": "#6b7280",         // Medium gray - Secondary text, icons
  "tertiary": "#9ca3af",          // Light gray - Placeholders, disabled
  "divider": "#d1d5db"            // Dividers, separators
}
```

### Border Colors
```json
{
  "border": "#e5e7eb",            // Default borders
  "borderLight": "#f3f4f6"        // Light borders
}
```

### Status & Accent Colors
```json
{
  "success": "#10b981",           // Green - Success states
  "error": "#ef4444",             // Red - Errors, destructive actions
  "warning": "#f59e0b",           // Orange - Warnings
  "info": "#3b82f6",              // Blue - Informational (rarely used)
  "heart": "#ef4444",             // Red - Favorite/like icon
  "star": "#fbbf24"               // Gold/Yellow - Star ratings
}
```

### Text Colors
```json
{
  "textPrimary": "#1f2937",       // Primary text (headings, important)
  "textSecondary": "#6b7280",     // Secondary text (descriptions)
  "textTertiary": "#9ca3af",      // Tertiary text (placeholders)
  "textWhite": "#ffffff"          // White text (on dark backgrounds)
}
```

### Shadow
```json
{
  "shadow": "#000000"             // Black with opacity for shadows
}
```

---

## 📝 Typography

### Font Family
- **Primary**: System Default (San Francisco for iOS, Roboto for Android)
- **Weight Range**: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

### Text Styles

#### Headers
```javascript
{
  h1: { fontSize: 40, fontWeight: 'bold', color: '#1f2937' },
  h2: { fontSize: 24, fontWeight: '700', color: '#1f2937' },
  h3: { fontSize: 20, fontWeight: '700', color: '#1f2937' },
  h4: { fontSize: 18, fontWeight: '600', color: '#1f2937' },
  h5: { fontSize: 16, fontWeight: '600', color: '#1f2937' }
}
```

#### Body Text
```javascript
{
  bodyLarge: { fontSize: 16, fontWeight: '400', color: '#1f2937' },
  bodyMedium: { fontSize: 14, fontWeight: '400', color: '#6b7280' },
  bodySmall: { fontSize: 12, fontWeight: '400', color: '#6b7280' }
}
```

#### Labels & Captions
```javascript
{
  label: { fontSize: 14, fontWeight: '600', color: '#1f2937' },
  caption: { fontSize: 12, fontWeight: '500', color: '#6b7280' },
  placeholder: { fontSize: 16, fontWeight: '400', color: '#9ca3af' }
}
```

---

## 🔘 Component Styles

### Buttons

#### Primary Button
```javascript
{
  backgroundColor: '#1f2937',
  borderRadius: 24,           // or 12 for rectangular
  paddingVertical: 16,
  paddingHorizontal: 32,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 4
}
```

#### Secondary Button
```javascript
{
  backgroundColor: '#ffffff',
  borderRadius: 20,
  paddingVertical: 8,
  paddingHorizontal: 20,
  borderWidth: 1,
  borderColor: '#e5e7eb'
}
```

#### Selected State
```javascript
{
  backgroundColor: '#1f2937',
  borderColor: '#1f2937',
  color: '#ffffff'           // Text color
}
```

### Input Fields

#### Text Input
```javascript
{
  backgroundColor: '#f9fafb',
  borderRadius: 12,
  paddingHorizontal: 16,
  paddingVertical: 14,
  borderWidth: 1,
  borderColor: '#e5e7eb',
  fontSize: 16,
  color: '#1f2937'
}
```

#### Search Bar
```javascript
{
  backgroundColor: '#ffffff',
  borderRadius: 12,
  paddingHorizontal: 16,
  paddingVertical: 12,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 2
}
```

### Cards

#### Standard Card
```javascript
{
  backgroundColor: '#ffffff',
  borderRadius: 16,
  padding: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3
}
```

#### Hotel/Hostel Card
```javascript
{
  backgroundColor: '#ffffff',
  borderRadius: 20,
  overflow: 'hidden',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.08,
  shadowRadius: 10,
  elevation: 3
}
```

### Toggle Switches
```javascript
{
  trackColor: { 
    false: '#e5e7eb',        // Inactive
    true: '#1f2937'          // Active
  },
  thumbColor: {
    active: '#ffffff',
    inactive: '#9ca3af'
  }
}
```

### Icons

#### Standard Icon Sizes
```javascript
{
  small: 14,
  medium: 20,
  large: 24,
  extraLarge: 32
}
```

#### Icon Colors by Context
```javascript
{
  primary: '#6b7280',        // Default icons
  active: '#1f2937',         // Active/selected icons
  heart: '#ef4444',          // Like/favorite
  star: '#fbbf24',           // Rating stars
  white: '#ffffff'           // Icons on dark backgrounds
}
```

---

## 📏 Spacing & Layout

### Spacing Scale (4px grid)
```javascript
{
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32
}
```

### Screen Padding
```javascript
{
  horizontal: 20,           // Standard left/right padding
  vertical: 16,             // Standard top/bottom padding
  sectionGap: 24            // Gap between sections
}
```

### Border Radius
```javascript
{
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 20,
  pill: 24,                 // For pill-shaped buttons
  circle: '50%'             // For circular elements
}
```

---

## 🎭 Interaction States

### Touch States
```javascript
{
  default: { opacity: 1 },
  pressed: { opacity: 0.7 },
  disabled: { opacity: 0.4 }
}
```

### Animation Durations
```javascript
{
  fast: 150,               // ms - Quick transitions
  normal: 300,             // ms - Standard animations
  slow: 500                // ms - Emphasized animations
}
```

---

## 📱 Screen-Specific Patterns

### Navigation Bar
- **Height**: Auto (SafeAreaView)
- **Background**: `#f8f9fa`
- **Back Button**: Dark gray `#1f2937`, 24px icon
- **Title**: 18px, Semi-Bold, `#1f2937`, centered

### Bottom Tab Bar
- **Height**: Custom (50-60px + safe area)
- **Background**: Dark gray `#374151`
- **Active Icon**: White `#ffffff`
- **Inactive Icon**: Gray `#9ca3af`
- **Active Indicator**: Optional pill shape

### Lists & Scrolling
- **Separator**: 1px line, `#f3f4f6`
- **Item Height**: Minimum 60px for touch targets
- **Show Indicators**: `showsVerticalScrollIndicator={false}`

---

## 🔍 Accessibility

### Minimum Touch Targets
- **Buttons**: 44x44 points (iOS), 48x48dp (Android)
- **Icons**: Minimum 24x24 with padding

### Color Contrast Ratios
- **Large Text** (18pt+): Minimum 3:1
- **Normal Text**: Minimum 4.5:1
- **UI Elements**: Minimum 3:1

### Font Sizes
- **Minimum Body Text**: 14px
- **Minimum Label**: 12px
- **Maximum Line Length**: 50-60 characters

---

## 🎨 Component Library

### Status Indicators
```javascript
// Success
{ backgroundColor: '#10b981', color: '#ffffff' }

// Error
{ backgroundColor: '#ef4444', color: '#ffffff' }

// Warning
{ backgroundColor: '#f59e0b', color: '#ffffff' }
```

### Badges
```javascript
{
  backgroundColor: '#1f2937',
  borderRadius: 12,
  paddingHorizontal: 8,
  paddingVertical: 4,
  fontSize: 12,
  color: '#ffffff'
}
```

### Dividers
```javascript
{
  horizontal: { height: 1, backgroundColor: '#f3f4f6' },
  vertical: { width: 1, backgroundColor: '#f3f4f6' }
}
```

---

## 📋 Implementation Guidelines

### DO ✅
- Use the exact hex color codes provided
- Maintain 4px grid spacing system
- Apply consistent border radius values
- Use proper shadow depths for elevation
- Follow font weight hierarchy
- Ensure minimum touch target sizes

### DON'T ❌
- Don't use random color values
- Don't mix different spacing scales
- Don't use inconsistent border radius
- Don't apply excessive shadows
- Don't use font sizes below 12px
- Don't create new color variations

---

## 🔄 Version Control
- **Version**: 1.0.0
- **Last Updated**: October 6, 2025
- **Design Lead**: App Design Team
- **Status**: Active / Production

---

## 📚 References
- React Native Styling: https://reactnative.dev/docs/style
- iOS Human Interface Guidelines
- Material Design for Android
- Accessibility Guidelines: WCAG 2.1 AA

---

*This design system ensures visual consistency and excellent user experience across the entire application. Any deviations should be discussed with the design team.*
