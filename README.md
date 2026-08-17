# Apollo Secondary School - Student Portal

[![Figma](https://img.shields.io/badge/Figma-Design-FF7262?logo=figma)](https://figma.com)
[![UI/UX](https://img.shields.io/badge/UI%2FUX-Prototype-00C4B4)](https://www.figma.com/proto/your-link)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1-0059B3)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-28A745)]()
[![Status](https://img.shields.io/badge/Status-Active-007BFF)]()

## Table of Contents

- [Overview](#overview)
- [Design Philosophy](#design-philosophy)
- [User Roles & Personas](#user-roles--personas)
- [Application Structure](#application-structure)
- [Design System](#design-system)
- [UI Components](#ui-components)
- [Accessibility Features](#accessibility-features)
- [User Flows](#user-flows)
- [Prototype Links](#prototype-links)
- [Design Decisions](#design-decisions)
- [Technical Considerations](#technical-considerations)
- [Feedback & Iteration](#feedback--iteration)
- [License](#license)

---

## Overview

The Apollo Secondary School Student Portal is a public-facing web platform designed to provide learners and parents with easy access to academic resources, notices, timetables, and school information. This document outlines the UI/UX design system and interaction patterns for the Student Portal.

### Key Objectives
- **Simplify Access**: Provide intuitive navigation for users of all technical abilities
- **Enhance Communication**: Keep parents and learners informed with timely school updates
- **Streamline Resource Management**: Make past papers, notices, and timetables easily accessible
- **Ensure Accessibility**: Design for users with varying abilities and device types
- **Build Trust**: Establish a professional, trustworthy digital presence for the school

---

## Design Philosophy

### Guiding Principles

| Principle | Description |
|-----------|-------------|
| **Clarity First** | Every element should serve a clear purpose; eliminate visual clutter |
| **Consistency** | Uniform design language across the platform |
| **Accessibility** | WCAG 2.1 Level AA compliance as a baseline |
| **Brand Alignment** | Reflect the school's identity and values |
| **Mobile-First** | Prioritize mobile experience for parents on the go |
| **Progressive Enhancement** | Core functionality works on all devices, enhanced on modern browsers |

### Design Process

```
Research → User Personas → Information Architecture → Wireframing → 
High-Fidelity Design → Usability Testing → Iteration → Prototype Delivery
```

---

## User Roles & Personas

### Learner / Parent

**Role**: Students and parents/guardians

**Capabilities**:
- View public notices, past papers, and timetables
- Subscribe to push notifications filtered by grade
- Toggle notice notifications on/off independently
- Receive Firebase-delivered alerts for new notices matching their grade

**Primary Tasks**:
- Access past papers for exam preparation
- Stay updated with school notices
- View timetables
- Receive important notifications

---

## Application Structure

### Student Portal (Public-Facing)

```
Student Portal
├── Home
├── Notices (View-Only)
├── Past Papers (View-Only)
├── Timetables (View-Only)
├── Blogs
├── Gallery
├── Staff Directory
├── Contact Us
└── PWA Support
    ├── Manifest
    ├── Service Worker
    └── Push Notifications
```

---

## 🎨 Design System

### Colour Palette

| Colour Name | Hex Value | Usage |
|-------------|-----------|-------|
| **Dusk Blue** | `#274c77` | Primary brand colour, buttons, headers |
| **Steel Blue** | `#6096ba` | Secondary elements, hover states |
| **Icy Blue** | `#e7ecef` | Backgrounds, subtle cards |
| **Platinum** | `#1b3552` | Dark text, high contrast elements |
| **White** | `#ffffff` | Text on dark backgrounds, cards |
| **Success** | `#28a745` | Positive actions, confirmations |
| **Warning** | `#ffc107` | Alerts, important notices |
| **Error** | `#dc3545` | Errors, critical actions |

### Typography

| Usage | Font | Weight | Size |
|-------|------|--------|------|
| Headings (H1) | Work Sans | 700 | 2.5rem (40px) |
| Headings (H2) | Work Sans | 600 | 2rem (32px) |
| Headings (H3) | Work Sans | 600 | 1.75rem (28px) |
| Body Text | Work Sans | 400 | 1rem (16px) |
| Small Text | Work Sans | 400 | 0.875rem (14px) |
| Labels | Work Sans | 500 | 0.75rem (12px) |

### Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `$spacer-1` | 4px | Tiny gaps |
| `$spacer-2` | 8px | Small gaps |
| `$spacer-3` | 16px | Standard padding |
| `$spacer-4` | 24px | Card padding |
| `$spacer-5` | 32px | Section spacing |
| `$spacer-6` | 48px | Large sections |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `$radius-sm` | 4px | Small elements |
| `$radius-md` | 8px | Cards, buttons |
| `$radius-lg` | 12px | Major containers |
| `$radius-full` | 50% | Circular elements |

---

## UI Components

### Navigation Components

| Component | Description | Interaction |
|-----------|-------------|-------------|
| **Top Bar** | School info, quick links | Sticky scroll |
| **Main Nav** | Primary navigation | Dropdowns, hover states |
| **Breadcrumbs** | Location indicator | Show current path |
| **Mobile Nav** | Hamburger menu | Slide-out drawer |

### Content Components

| Component | Description | Interaction |
|-----------|-------------|-------------|
| **Notice Card** | Title, content, date, category | Click to expand |
| **Past Paper Card** | Name, subject, grade, year, download | Download on click |
| **Timetable Card** | Grade, year, term, file | Download on click |
| **Blog Card** | Title, excerpt, image, date | Click to read |
| **Gallery Grid** | Image thumbnails | Click to enlarge |
| **Staff Card** | Name, role, photo, contact | Click for details |

### Form Components

| Component | Description | Validation |
|-----------|-------------|------------|
| **Search Bar** | Keyword search | Real-time filtering |
| **Notification Preferences** | Toggle notifications by grade | Instant save |

---

## Accessibility Features

### Compliance Standards
- **WCAG 2.1 Level AA** baseline
- **Section 508** compliance
- **South African POPIA** privacy compliance

### Implementation

| Feature | Implementation |
|---------|----------------|
| **Screen Reader Support** | ARIA labels on all interactive elements |
| **Keyboard Navigation** | Full keyboard operability |
| **Focus Indicators** | Visible focus rings |
| **Colour Contrast** | Minimum 4.5:1 ratio |
| **Semantic HTML** | Proper heading hierarchy |
| **Responsive Design** | Works across all screen sizes |
| **Alternative Text** | Images have descriptive alt text |
| **Form Labels** | Clear, visible labels |
| **Error Messages** | Descriptive, helpful errors |
| **Language Attribute** | `lang="en"` on HTML element |
| **Skip Links** | Skip to main content |
| **Reduced Motion** | Respects `prefers-reduced-motion` |

---

## User Flows

### Parent/Learner Content Consumption

```
Open Portal → Browse Content
                     ↓
          ┌──────────┼──────────┬────────────┐
          ↓          ↓          ↓            ↓
      View Notices  View Past   View        Receive Push
                   Papers    Timetables   Notifications
          ↓          ↓          ↓            ↓
    Filter/Search  Filter/Search  Filter/Search  Grade-Specific
    (Category, (Grade, Subject, (Grade, Term,    Alerts
     Importance)  Year)         Year)
```

---

## Prototype Links

### Interactive Prototypes

| Prototype | Platform | Link |
|-----------|----------|------|
| **Student Portal - Full Prototype** | Figma | [View Prototype](https://www.figma.com/proto/your-link) |
| **Mobile Experience** | Figma | [View Prototype](https://www.figma.com/proto/your-link) |
| **Component Library** | Figma | [View Library](https://www.figma.com/file/your-link) |

### Design Files

| File | Type | Link |
|------|------|------|
| **Design System** | Figma | [Open File](https://www.figma.com/file/your-link) |
| **Student Portal** | Figma | [Open File](https://www.figma.com/file/your-link) |
| **Mobile Designs** | Figma | [Open File](https://www.figma.com/file/your-link) |
| **User Flow Maps** | Figma | [Open File](https://www.figma.com/file/your-link) |

### Testing Access

| Environment | URL | Credentials |
|-------------|-----|-------------|
| **Figma Prototype** | [Link](https://www.figma.com/proto/your-link) | Public Access |
| **Usability Testing** | [Link](https://www.figma.com/proto/your-test-link) | Password: `apollo2026` |

---

## Design Decisions

### Key Decisions & Rationale

| Decision | Rationale | Impact |
|----------|-----------|--------|
| **Public-Facing Portal** | No authentication required for learner/parent access | Increased accessibility |
| **Grade-Filtered Notifications** | Push notifications match learner's grade level | Relevant, timely communication |
| **PWA Implementation** | Manifest + Service Worker for installable, offline-capable app | Mobile experience |
| **Design Tokens from School Badge** | Dusk blue, steel blue, icy blue, platinum | Brand consistency |
| **Material Design Principles** | Elevation, typography, spacing, motion | Familiar, consistent UI |
| **Accessibility First** | WCAG 2.1 AA compliance | Inclusive design |
| **Mobile-First Approach** | Designed for mobile devices first | Better UX on phones |

---

## 🛠️ Technical Considerations

### Browser Support

| Browser | Minimum Version | Support Level |
|---------|-----------------|---------------|
| Chrome | 90+ | Full |
| Firefox | 88+ | Full |
| Edge | 90+ | Full |
| Safari | 14+ | Full |
| Opera | 76+ | Full |
| iOS Safari | 14+ | Full |
| Android Chrome | 90+ | Full |

### Performance Targets

| Metric | Target |
|--------|--------|
| **First Contentful Paint** | < 1.5s |
| **Largest Contentful Paint** | < 2.5s |
| **Time to Interactive** | < 3.0s |
| **Cumulative Layout Shift** | < 0.1 |
| **First Input Delay** | < 100ms |
| **Page Load Time** | < 3.0s |
| **Time to First Byte** | < 200ms |
| **Lighthouse Score** | > 90 |

### Device Support

| Device Type | Resolution | Layout |
|-------------|------------|--------|
| **Desktop** | 1920x1080 | Full |
| **Laptop** | 1366x768 | Full |
| **Tablet** | 768x1024 | Adaptable |
| **Mobile** | 375x812 | Mobile-First |

---

## Feedback & Iteration

### Usability Testing Results

| Test Round | Date | Participants | Key Findings | Iterations |
|------------|------|--------------|--------------|------------|
| **Round 1** | Week 3 | 5 parents, 5 learners | Navigation clarity issues; search functionality needed | Improved nav labels, added search |
| **Round 2** | Week 6 | 5 parents, 5 learners | Mobile experience needed refinement; push notification clarity | Enhanced mobile layout, added notification toggle |
| **Round 3** | Week 9 | 10 parents, 10 learners | Parent and learner flows smooth and intuitive | Final refinements |

### Feedback Channels

- **User Testing Sessions**: Live moderated testing
- **Feedback Forms**: Integrated feedback collection
- **Analytics**: User behaviour tracking
- **Support Tickets**: Issue tracking system

---

## License

This UI/UX prototype and design system are proprietary to Apollo Secondary School. All rights reserved.

### Usage Rights

| User Type | Usage | Restrictions |
|-----------|-------|--------------|
| **School Staff** | Full use for school purposes | May not share outside school |
| **Contractors** | Development and testing | May not use for other projects |
| **External Users** | Not permitted | No access to design files |

---

## Quick Links

- [Design System](https://www.figma.com/file/your-link)
- [Student Portal Prototype](https://www.figma.com/proto/your-link)
- [Mobile Experience](https://www.figma.com/proto/your-link)
- [Component Library](https://www.figma.com/file/your-link)
- [User Flow Maps](https://www.figma.com/file/your-link)
- [Accessibility Audit](https://www.figma.com/file/your-link)

---

## ✅ Design Deliverables Checklist

- [x] User Personas
- [x] Information Architecture
- [x] Wireframes
- [x] High-Fidelity UI Designs
- [x] Interactive Prototype
- [x] Design System
- [x] Component Library
- [x] User Flow Maps
- [x] Usability Testing Report
- [x] Accessibility Audit
- [x] Technical Handoff Documentation
- [x] Developer Specifications

---

## Acknowledgments

- **Bootstrap 5** for the responsive framework
- **Font Awesome** for the iconography
- **Work Sans** for the typography system
- **Figma** for the design collaboration platform
- **Apollo Web Team** for continuous design and development collaboration

---

**Version**: 2.0  
**Last Updated**: August 2026  
**Status**: Active - Ready for Development

---

Made with ❤️ by the Apollo Web Team

<div align="center">

---

*© 2026 Apollo Secondary School. All Rights Reserved.*

</div>
