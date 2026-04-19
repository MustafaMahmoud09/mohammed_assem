=========================================================
  Mohamed Assem — Network Engineer Portfolio
  README.txt
=========================================================

PROJECT OVERVIEW
----------------
A modern, fully responsive, professional personal portfolio
website for Mohamed Assem, a Cisco-certified Network Engineer
based in Giza, Cairo, Egypt. Built with pure HTML5, CSS3, and
vanilla JavaScript — no frameworks required.

=========================================================
FILE STRUCTURE
=========================================================

portfolio/
├── index.html      → Main markup & all sections
├── style.css       → All styles, CSS variables, responsive rules
├── script.js       → Interactivity, animations, form handling
└── README.txt      → This file

=========================================================
SECTIONS
=========================================================

1. HERO           — Name, title, intro, CTA buttons, animated
                    network topology illustration, floating chips

2. ABOUT          — Professional bio, personal info card,
                    highlight stats, CV download button

3. SKILLS         — Animated progress bars (scroll-triggered) +
                    tool cards with hover effects

4. EXPERIENCE     — Vertical timeline with icons, type badges,
                    dates, bullet points, and tech tags

5. CERTIFICATIONS — Card grid with status badges:
                    Achieved / In Progress / Planned

6. PROJECTS       — 3 realistic project cards with descriptions,
                    deliverables, and tech stack tags

7. CONTACT        — Info + functional form UI (no backend),
                    availability indicator

8. FOOTER         — Logo, tagline, nav links, copyright

=========================================================
TECHNICAL STACK
=========================================================

• HTML5         — Semantic structure, accessibility attributes
• CSS3          — Custom properties (variables), Flexbox, CSS Grid,
                  smooth transitions, keyframe animations,
                  backdrop-filter glass effect, media queries
• JavaScript    — IntersectionObserver API, scroll throttle,
                  mobile menu, form validation, skill bar triggers
• Font Awesome  — Icon library (CDN)
• Google Fonts  — Syne (display headlines) + DM Sans (body text)

=========================================================
DESIGN SYSTEM
=========================================================

COLOR PALETTE:
  --bg-primary:   #111827   (main background)
  --bg-secondary: #1f2937   (alt section background)
  --bg-card:      #1a2332   (card background)
  --text-main:    #f3f4f6   (primary text)
  --text-sec:     #9ca3af   (secondary text)
  --accent:       #60a5fa   (primary accent / blue)
  --accent-cyan:  #67e8f9   (secondary accent / cyan)

TYPOGRAPHY:
  Display font : Syne (headings, name, section titles)
  Body font    : DM Sans (paragraphs, labels, UI text)

=========================================================
RESPONSIVE BREAKPOINTS
=========================================================

  Mobile       : 320px – 767px   (hamburger menu, stacked layout)
  Tablet       : 768px – 1023px  (2-column grids, condensed nav)
  Laptop       : 1024px – 1439px (full layout)
  Large Screen : 1440px+         (wider container)
  4K           : 2560px+         (scaled font-size base)

=========================================================
HOW TO USE
=========================================================

1. Open index.html directly in any modern browser.
   No build tools, npm, or server required.

2. To customize:
   • Edit personal details in index.html
   • Adjust colors in the :root block of style.css
   • Update project descriptions in the #projects section
   • Replace the CV download href="#" with actual PDF path

3. To add a real CV download:
   • Place your CV file (e.g. Mohamed_Assem_CV.pdf) in the
     same folder as index.html
   • Replace all href="#" download attributes with:
     href="Mohamed_Assem_CV.pdf"

4. To connect the contact form to a backend:
   • Replace the setTimeout() in script.js (section 5) with
     a real fetch() POST to your API / FormSpree endpoint

=========================================================
PERFORMANCE NOTES
=========================================================

• All external resources loaded from CDN (Font Awesome,
  Google Fonts) — no local dependencies needed
• Scroll listener is throttled with requestAnimationFrame
• IntersectionObserver used (no scroll event polling)
• CSS transitions prefer transform + opacity (GPU-composited)
• No heavy frameworks = fast initial load time

=========================================================
BROWSER SUPPORT
=========================================================

  Chrome 90+   ✓
  Firefox 88+  ✓
  Safari 14+   ✓
  Edge 90+     ✓
  Mobile iOS   ✓
  Android      ✓

=========================================================
AUTHOR
=========================================================

Portfolio for: Mohamed Assem
Role:          Network Engineer | CCNA Certified
Location:      Giza, Cairo, Egypt
Email:         mohamedassem774@gmail.com
Phone:         +20 109 144 7918

=========================================================
LICENSE
=========================================================

Personal use only. All content, personal data, and
professional information belong to Mohamed Assem.

=========================================================
