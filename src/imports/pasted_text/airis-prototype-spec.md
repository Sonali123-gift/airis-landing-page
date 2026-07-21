Absolutely. If your lecturer is grading **UI/UX quality**, don't ask Figma AI to make only a "wireframe." Instead, have it generate a **complete product prototype** with navigation, interactions, components, and realistic user flows.

Below is a much stronger prompt.

---

# MASTER PROMPT FOR FIGMA AI AGENT

## ROLE

You are a Senior UI/UX Designer from Google and Apple with expertise in SaaS, healthcare technology, mobile-first UX, conversion optimization, accessibility, and interaction design.

Design a **complete high-fidelity interactive website prototype** for a futuristic smart contact lens company called **Airis**.

The prototype should feel like a real website that could be handed directly to developers.

Use Auto Layout, reusable Components, Variables, Design Tokens, Constraints, and Interactive Components.

---

# DESIGN STYLE

Modern Apple + Google Material 3 + Notion + Stripe aesthetic.

Style should feel:

* Premium
* Futuristic
* Healthcare
* AI
* Minimal
* Trustworthy

Color Palette

Primary:
Deep Blue (#2563EB)

Secondary:
Cyan (#38BDF8)

Accent:
Emerald (#10B981)

Background:
White (#FFFFFF)

Cards:
#F8FAFC

Text:
#111827

Border Radius:
16px

Button Radius:
14px

Soft Shadows

Glassmorphism for hero section

Rounded cards

Smooth gradients

8-point spacing system

Use Inter font.

---

# CREATE THESE PAGES

## 1. Home Page

Sections

Navigation

Hero

Benefits

How It Works

Features

AI Technology

Testimonials

FAQ

Newsletter

Footer

Navigation should contain

Home

Features

Technology

FAQ

About

Contact

Join Waitlist button

---

Hero

Large image of Airis smart lens

Headline

See Clearly.
Live Confidently.

Description

The world's first invisible AI smart contact lens designed to improve vision while monitoring eye health.

Buttons

Join Waitlist

Learn More

Scroll indicator

Animated gradient background

Floating glass cards

Micro animations

---

Benefits

Three interactive cards

Smart Vision

Health Monitoring

Privacy First

Hover

Lift animation

Shadow increase

Icon rotates

Click

Opens dedicated feature page

---

How It Works

Timeline

Step 1

Wear Lens

↓

Step 2

AI Scans Eye

↓

Step 3

Receive Insights

↓

Step 4

Track Health

Each step clickable

Opens detailed explanation modal

---

Features

6 feature cards

Adaptive Vision

Night Mode

Health Analytics

Wireless Charging

Emergency Detection

AI Assistant

Each card

Hover animation

Click opens dedicated feature page

---

Technology Section

Interactive diagram

Lens

↓

Sensors

↓

AI Processor

↓

Cloud Sync

↓

Mobile App

Every node clickable

Shows popup

---

Testimonials

Carousel

Next button

Previous button

Dots

Cards enlarge on hover

---

FAQ

Accordion

Questions expand smoothly

Chevron rotates

---

Newsletter

Email field

Join Waitlist button

Validation

Success message

---

Footer

Privacy Policy

Terms

Careers

Support

Social Media

---

# PAGE 2

Features

Each feature has

Large image

Description

Technical specifications

Benefits

Related features

Back button

Learn More button

---

# PAGE 3

Technology

3D illustration placeholder

Explain

AI

Micro Sensors

Battery

Wireless Communication

Interactive hotspots

Click hotspot

Information popup

---

# PAGE 4

About

Company Story

Mission

Vision

Timeline

Team

Statistics

---

# PAGE 5

FAQ

Search bar

Accordion

Categories

Eye Safety

Technology

Pricing

Compatibility

Shipping

---

# PAGE 6

Contact

Contact form

Name

Email

Message

Submit

Google Maps placeholder

Social links

---

# PAGE 7

Join Waitlist

Form

First Name

Last Name

Email

Country

Occupation

Checkbox

I agree to Privacy Policy

Join Waitlist button

Confirmation animation

Success page

---

# PAGE 8

Success

Big checkmark

Thank You!

You've successfully joined the Airis Early Access Program.

Return Home

Explore Features

---

# PROTOTYPE CONNECTIONS

Every button should actually navigate.

Home

↓

Learn More

↓

Features

↓

Technology

↓

Join Waitlist

↓

Success

↓

Home

Navigation

Home

Features

Technology

About

FAQ

Contact

Every menu item should navigate.

---

Buttons

Join Waitlist

→ Waitlist Form

Learn More

→ Features

Read More

→ Detail Page

Contact Us

→ Contact Page

Back

→ Previous Page

Logo

→ Home

FAQ

→ Expand Accordion

Testimonials

→ Next Slide

Feature Card

→ Feature Detail

Technology Node

→ Popup

---

# MICRO INTERACTIONS

Hover

Buttons become lighter

Shadow increases

Scale 102%

Cards lift 8px

Icons rotate slightly

Click

Ripple effect

Smooth transition

Tap

Shrink 98%

Loading animation

Accordion

300ms animation

Dropdown

Fade

Carousel

Slide animation

Modal

Blur background

---

# RESPONSIVE DESIGNS

Create

Desktop
1440 px

Tablet
768 px

Mobile
390 px

Navigation

Desktop

Horizontal

Tablet

Hamburger

Mobile

Drawer Menu

Cards

Desktop

3 columns

Tablet

2 columns

Mobile

1 column

Buttons

Desktop

48px height

Mobile

56px height

---

# ACCESSIBILITY

WCAG AA

Keyboard navigation

Visible focus states

44px touch targets

Proper contrast

Readable typography

---

# DESIGN SYSTEM

Create Components

Primary Button

Secondary Button

Navigation

Card

Feature Card

FAQ Accordion

Input Field

Modal

Footer

Use Auto Layout

Variants

Interactive Components

Component Properties

Variables

Constraints

Styles

---

# BANNER ADS

Design

728×90

300×250

160×600

Each banner

Modern

Animated appearance

Strong CTA

Same branding

Clicking banner links to Home Page.

---

# WIREFLOW

Create a separate User Flow page showing:

```
Banner Ad
      │
      ▼
Landing Page
      │
      ▼
Learn More
      │
      ▼
Technology
      │
      ▼
Join Waitlist
      │
      ▼
Registration Form
      │
      ▼
Success Page
```

Also create a sitemap showing all page relationships.

---

# FINAL DELIVERABLE

Generate:

* High-fidelity UI (not low-fidelity wireframes)
* Fully connected prototype
* Interactive navigation
* Hover, click, tap states
* Component library
* Design system
* User flow diagram
* Sitemap
* Desktop, Tablet, and Mobile versions
* Three banner ads
* Waitlist form
* Success page
* Realistic icons and placeholder images
* Pixel-perfect spacing and modern UI patterns suitable for a university digital marketing/web design project.

---

### One important note

Current Figma AI agents can generate layouts and some prototype links, but they **usually won't create a fully wired prototype with every interaction** in one go. A good workflow is:

1. Run the prompt above to generate all screens.
2. Then use a follow-up prompt:

   > "Connect every button, navigation item, card, and CTA using Figma Prototype. Add Smart Animate transitions (300 ms ease-in-out). Create hover, pressed, and disabled variants for all interactive components. Ensure there are no dead-end screens and every page has a clear path back to Home."

This two-step approach typically produces a much richer, presentation-ready prototype than trying to do everything in a single prompt.
