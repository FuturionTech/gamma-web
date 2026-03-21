# Gamma Neutral Consulting -- Website Improvement Proposal

**Prepared:** March 21, 2026
**Based on:** Competitive analysis of 8 premium consulting firm websites (Slalom, Thoughtworks, Quantiphi, Sigmoid, DataRobot, Avanade, Credera, Pythian) plus analysis of the current gamma-web codebase.

---

## Executive Summary

Gamma Neutral Consulting's current website has solid technical foundations (Nuxt 3, Bootstrap 5, domain architecture) but presents several issues common to early-stage consulting firms: generic copy, unsubstantiated claims, repetitive messaging, and missed opportunities to build credibility without fabricated metrics. This proposal provides concrete, implementable recommendations organized by effort level.

**Key findings from competitive research:**
- Premium firms lead with outcomes and provocative points of view, not feature lists
- Boutique firms build trust through specificity (named methodologies, frameworks, tooling) rather than vanity metrics
- The best consulting sites use 3-5 words in their hero headline, not 8-10
- Every premium firm has a "contact" CTA that implies a conversation, not a transaction
- Dark + one accent color is the dominant pattern; Gamma's black + purple is on-trend

---

## A. Content Recommendations

### A.1 Homepage Hero Section

**Current headline:** "Transform Your Data Into Strategic Insights"
**Current subtext:** "At Gamma Neutral Consulting, we empower businesses to harness the full potential of their data. We deliver innovative, secure, and scalable solutions that drive informed decision-making and operational excellence."

**Problems identified:**
- "Transform Your Data" is used by virtually every data consulting firm (Sigmoid, Pythian, Credera all use variants)
- Subtext is two sentences that say the same thing in different words
- "Empower businesses to harness the full potential" is the most overused phrase in consulting
- Badge text "Your Data Solutions" reads like a tagline placeholder

**Proposed alternatives (ranked by recommendation):**

**Option A -- Provocative/Confident (inspired by Thoughtworks, DataRobot):**
```
Badge: "AI & Data Consulting | Toronto"

Headline: "Your Data Has Answers. We Ask the Right Questions."

Subtext: "Gamma Neutral partners with financial institutions, healthcare
organizations, and government agencies to design AI systems, data
architectures, and analytics platforms that solve specific business problems
-- not just generate dashboards."

CTA: "Book a Discovery Call" (primary)
     "See How We Work" (secondary, links to /about or /services)
```

**Option B -- Direct/Authoritative (inspired by Slalom, Pythian):**
```
Badge: "Technology Consulting | Toronto, Canada"

Headline: "From Raw Data to Informed Decisions."

Subtext: "We help organizations in financial services, healthcare, and
government build the data infrastructure, AI capabilities, and security
posture they need to operate with confidence."

CTA: "Start a Conversation" (primary)
     "Explore Our Services" (secondary)
```

**Option C -- Outcome-Focused (inspired by Quantiphi, Sigmoid):**
```
Badge: "AI-First Consulting | Toronto"

Headline: "Build AI Systems That Actually Ship."

Subtext: "Most AI initiatives stall at the proof-of-concept stage.
Gamma Neutral takes data projects from strategy through production
deployment -- with the engineering rigor to make them last."

CTA: "Schedule a Consultation" (primary)
     "Our Approach" (secondary)
```

**Recommendation:** Option A is the strongest. It is specific without being limiting, implies expertise without claiming unverifiable metrics, and differentiates from the "transform your data" crowd.

---

### A.2 Service Descriptions

The current descriptions are generic and interchangeable. Compare the current "Deploy intelligent systems that automate processes, predict outcomes, and unlock insights from your data" -- this could describe literally any AI vendor.

**Principle from research:** The best firms (Quantiphi, Sigmoid, DataRobot) describe services in terms of **what the client gets** and **what specific problems they solve**, not abstract capabilities.

#### AI & Machine Learning (current: "AI & Machine Learning")
**Proposed name:** "Applied AI & Machine Learning"

**Current:** "Deploy intelligent systems that automate processes, predict outcomes, and unlock insights from your data."

**Proposed:** "We build AI systems that move past the pilot stage. From fraud detection models for financial institutions to patient risk scoring for healthcare providers, our ML engineering team designs, trains, and deploys models that integrate with your existing systems and deliver measurable outcomes in production."

**Features (rename to "What We Deliver"):**
- Custom ML model development and deployment
- Natural language processing and document intelligence
- Computer vision and image analysis pipelines
- MLOps and model monitoring infrastructure

---

#### Data Engineering (keep name)

**Current:** "Build robust data pipelines and architectures that ensure seamless data flow across your organization."

**Proposed:** "The foundation of every data initiative is reliable, well-governed data. We design and build the pipelines, warehouses, and lake architectures that turn scattered, siloed information into a unified, queryable asset -- whether you are processing real-time financial transactions or consolidating patient records across systems."

**What We Deliver:**
- ETL/ELT pipeline design and implementation
- Data warehouse and lakehouse architecture
- Real-time streaming and event-driven pipelines
- Data quality frameworks and governance tooling

---

#### Cloud Computing (keep name)

**Current:** "Migrate and optimize your infrastructure with scalable cloud solutions from AWS, Azure, and GCP."

**Proposed:** "We help organizations move to the cloud with a strategy that balances performance, cost, and compliance. Whether you are migrating a legacy on-premise system, optimizing an existing cloud deployment, or building a multi-cloud architecture for regulatory requirements, we handle the engineering so your team can focus on the business."

**What We Deliver:**
- Cloud migration planning and execution (AWS, Azure, GCP)
- Infrastructure as code and DevOps automation
- Cost optimization and FinOps implementation
- Multi-cloud and hybrid architecture design

---

#### Cybersecurity (keep name)

**Current:** "Protect your data assets with enterprise-grade security solutions and compliance frameworks."

**Proposed:** "Data-intensive organizations face unique security challenges. We assess your current posture, identify vulnerabilities in data pipelines and cloud infrastructure, and implement security controls that satisfy regulatory requirements in financial services (OSFI, PCI-DSS), healthcare (PHIPA, HIPAA), and government (Protected B, ITSG-33) without slowing down your data operations."

**What We Deliver:**
- Security architecture assessment and remediation
- Compliance framework implementation (SOC 2, ISO 27001, PIPEDA)
- Threat detection and incident response planning
- Identity and access management for data platforms

---

#### Business Intelligence (keep name)

**Current:** "Transform raw data into actionable insights with interactive dashboards and reports."

**Proposed:** "Dashboards are only valuable when they answer the questions your team actually asks. We design BI solutions that connect directly to your data infrastructure, surface the KPIs that matter to each role in your organization, and enable self-service analytics so your people can explore data without waiting on IT."

**What We Deliver:**
- Executive and operational dashboard design
- Self-service analytics platform implementation
- KPI framework development aligned to business objectives
- Power BI, Tableau, and Looker deployments

---

#### Big Data Solutions (rename to "Data Platform & Big Data")

**Current:** "Process and analyze massive datasets with distributed computing and advanced analytics."

**Proposed:** "When your data volumes outgrow traditional databases, you need architecture designed for scale. We build distributed data platforms using modern tools like Spark, Databricks, and cloud-native services that process terabytes efficiently while remaining cost-effective and maintainable by your team."

**What We Deliver:**
- Distributed processing architecture (Spark, Databricks, EMR)
- Data lakehouse design and implementation
- Stream processing for real-time analytics
- Performance optimization for large-scale queries

---

#### Project Management (consider renaming to "Delivery & Program Management")

**Current:** "Ensure successful project delivery through meticulous planning, execution, and stakeholder alignment."

**Proposed:** "Technology projects fail more often from poor execution than poor ideas. Our delivery leads embed within your team to manage scope, timelines, and stakeholder expectations using agile methodologies adapted to enterprise environments -- ensuring your data initiatives ship on time and within budget."

**What We Deliver:**
- Agile delivery management for data and AI projects
- Program governance and executive reporting
- Vendor coordination and technical stakeholder management
- Risk assessment and mitigation planning

---

### A.3 About Page

**Current issues:**
- Claims "95%+ accuracy" for ML models (unverifiable for a new firm)
- Claims "reducing operational costs by up to 40%" (unsubstantiated)
- Claims "99.9% uptime guarantee" (not appropriate for a consulting firm that doesn't host infrastructure)
- Mission statement is repeated verbatim from the homepage hero
- "Incorporated June 16, 2025" draws attention to the firm's youth

**Proposed approach -- how to present a young firm credibly:**

1. **Lead with the founder's expertise, not the company's age.** The firm is new; the people are not. Reframe the narrative:

Instead of:
> "Gamma Neutral Consulting Inc. is a Canadian technology consulting firm specializing in data solutions..."

Write:
> "Gamma Neutral was founded on a simple observation: too many organizations invest in data and AI technology without the engineering discipline to make it work. Our team brings hands-on experience from financial services, government, and healthcare technology programs -- and we built this firm to deliver the focused, senior-level attention that large consultancies cannot."

2. **Replace the mission statement with a point of view:**

Instead of:
> "Our mission is to deliver innovative, secure, and scalable solutions..."

Write:
> "We believe that the gap between a promising AI prototype and a production-ready system is where most data initiatives fail. Gamma Neutral exists to close that gap -- with rigorous engineering, pragmatic architecture decisions, and a commitment to solutions your team can actually maintain after we leave."

3. **Remove all unverifiable metrics.** Replace the "Core Capabilities" section (which has fake stats) with a "How We Work" section describing your methodology with specificity:
   - Discovery workshops with structured output
   - Architecture decision records
   - Iterative delivery with bi-weekly demos
   - Knowledge transfer and documentation as a deliverable

4. **Rewrite the founder bio** to emphasize specific domain experience:

Instead of:
> "Founder of Gamma Neutral Consulting with extensive experience in technology consulting, data engineering, and AI strategy across financial services and government sectors."

Write something like:
> "Philip Savane founded Gamma Neutral after [X years] building data platforms and AI systems for [specific types of organizations]. His experience spans [specific domains: e.g., risk analytics in banking, population health analytics in healthcare, data modernization for federal agencies]. He holds [relevant certifications/education] and is based in Toronto."

---

### A.4 Team Section

**Current state:** One team member with a placeholder avatar (UI Avatars API).

**Best practices from research:**

1. **Resulta's approach (best for small teams):** Instead of a sparse "team page," present the founder prominently and frame the rest as culture/values. Their approach: employee testimonials about culture, no executive grid, emphasis on "the kind of people we hire" rather than headcount.

2. **Pythian/Sigmoid approach:** No team page at all on the homepage. Team appears only in case studies and thought leadership bylines.

**Recommended approach for Gamma Neutral:**

- **Remove the dedicated Team page** until you have 3+ members. A single-person team page undermines credibility.
- **Integrate the founder into the About page** as a "Leadership" subsection (already partially done).
- **Add a "Growing Team" section** with language like:

> "Gamma Neutral brings together experienced consultants for each engagement. Our network includes specialists in data engineering, ML operations, cloud architecture, and cybersecurity -- assembled based on the specific needs of your project."

- **Get a real professional headshot.** The `ui-avatars.com` placeholder is immediately recognizable and signals "not ready." Even a high-quality casual photo is better.
- **Add the founder's real LinkedIn URL** (currently set to `#`).

---

### A.5 Industries Section

**Current state:** Six industries (Banks, Healthcare, Government, Retail, Manufacturing, Education) with descriptions that promise capabilities the firm may not have demonstrated yet.

**Problem:** Claiming deep expertise in 6 industries as a newly incorporated firm is not credible.

**Best practice from research:**
- Sigmoid focuses on only 3 verticals with deep specificity
- Quantiphi lists 12 but clearly marks 3-4 as "featured" with case studies
- Pythian avoids industry pages entirely, letting case studies demonstrate vertical expertise

**Recommended approach:**

1. **Lead with 2-3 industries where the founder has real experience** (likely Financial Services and Government based on the bio). Mark these as primary.

2. **Frame the others as "Emerging Focus Areas"** rather than claiming deep expertise:

For primary industries:
> "Financial Services: We work with banks, insurance companies, and investment firms to build AI-powered risk models, modernize legacy data infrastructure, and meet regulatory requirements from OSFI and PIPEDA."

For emerging areas:
> "Healthcare: We are building capabilities in health data interoperability, patient analytics, and PHIPA-compliant data architectures for Canadian healthcare organizations."

3. **Remove Manufacturing and Education** for now unless you have genuine experience. Four focused industries is more credible than six vague ones.

---

### A.6 CTA Language

**Current CTAs used across the site:**
- "Get In Touch" (hero)
- "Contact Us Today" (CTA section)
- "Get Started" (services)
- "Start Your Journey" (about)
- "Schedule Consultation" (about CTA)
- "Get Started Today" (services CTA)

**Problems:**
- "Get In Touch" and "Contact Us" are the weakest possible CTAs for consulting
- "Get Started" implies a product, not a service
- "Start Your Journey" is patronizing for B2B decision-makers

**Recommended CTA language (from competitive research):**

| Context | Recommended CTA | Rationale |
|---------|----------------|-----------|
| Homepage hero (primary) | "Book a Discovery Call" | Implies a structured, valuable conversation |
| Homepage hero (secondary) | "See How We Work" | Moves them deeper without commitment |
| Services page | "Discuss Your Project" | Acknowledges they have a specific need |
| About page | "Schedule a Consultation" | Professional, implies expertise |
| Solutions page | "Talk to a Specialist" | Implies domain expertise |
| Footer/global CTA | "Let's Talk About Your Data" | Conversational, specific to data consulting |
| Bottom-of-page CTA | "Ready to Move Forward?" | Assumes they are already interested |

**Key principle:** Every CTA should imply the prospect will **receive value** from the interaction (advice, assessment, insights), not just "get in touch" as if they are contacting customer support.

---

## B. UI/UX Recommendations

### B.1 Layout Improvements

#### Homepage
**Current structure:** Hero -> Services -> Benefits -> Process -> Industries -> CTA
**Recommended structure:** Hero -> Social Proof Bar -> Services (3 featured) -> How We Work (process) -> Industries (2-3 focused) -> CTA

**Key changes:**
1. **Add a thin social proof bar below the hero** (before services). Even without client logos, you can use: partner certifications (AWS, Azure, GCP), technology partnerships, or a simple statement like "Trusted by organizations in financial services, healthcare, and government." This is what Slalom, Avanade, and Quantiphi all do.

2. **Reduce the services grid on homepage to 3 featured services** with a "View All Services" link. Six cards on the homepage is overwhelming. Sigmoid and Thoughtworks both feature 3-4 on the homepage with a link to the full services page.

3. **Remove the Benefits section visual card** (the one showing "7 Services, 6 Industries, 5 Step Process"). These are not meaningful numbers to a prospect. Replace with a simple two-column layout: left side = 4 benefit points, right side = a relevant image or illustration.

4. **Simplify the Process section.** The current 5-step process (Discovery, Design, Development, Deployment, Support) is standard but the descriptions are too vague. Add one sentence of specificity to each step about what the client actually receives.

#### Services Page
**Current:** Hero -> 7 service cards -> Process steps -> CTA
**Recommended:** Hero (shorter, 50vh not 70vh) -> Service categories with expandable detail -> Approach section -> CTA

**Key change:** Service cards should link to individual service detail pages (currently they all link to `/contact`). Each service should have its own page with: detailed description, relevant use cases, technologies used, and a contextual CTA.

#### About Page
**Current:** Hero -> Company Overview -> Core Capabilities (6 cards) -> Process Steps -> Founder -> CTA
**Recommended:** Hero (compact) -> Point of View / Why We Exist -> How We Work (methodology) -> Leadership -> CTA

**Remove:** The "Core Capabilities" grid duplicates the Services page and contains unverifiable claims.

#### Contact Page
**Current layout is solid.** Minor improvements:
- Add a brief qualifying question in the form ("Tell us about your project") to filter leads
- Add a "What to expect" sidebar: "We will respond within 1 business day. Your initial consultation is complimentary and typically lasts 30-45 minutes."

### B.2 Typography

**Current:** Bootstrap 5 defaults with the "Around" template. `display-hero`, `display-2`, `display-3`, `display-4`, `display-5` used inconsistently.

**Recommendations:**
1. **Establish a clear heading hierarchy and stick to it:**
   - Page hero headlines: `display-4` (not `display-2` or `display-hero`)
   - Section headings: `h2` or `display-6`
   - Card titles: `h4` or `h5`
   - Body text: default `1rem` or `fs-lg` (1.125rem)

2. **Add a professional font pairing.** The "Around" template defaults are fine, but consider:
   - Headings: Inter or DM Sans (used by Credera, Tiger Analytics)
   - Body: Inter or system font stack
   - Avoid Poppins for body text (overused in template sites)

3. **Increase line-height for body text** to `1.7` (currently Bootstrap default ~1.5). Premium consulting sites use generous line-height for readability.

4. **Letter-spacing on headings:** Add `letter-spacing: -0.02em` on display headings (already done on contact page, should be consistent).

### B.3 Color Usage

**Current:** Primary #000000 (black), Accent #8b5cf6 (purple), various Bootstrap colors for cards.

**Assessment:** The black + purple palette is strong and contemporary. No major changes needed.

**Minor refinements:**
1. **Use purple more sparingly.** Currently, the hero CTA, service card gradients, and various badges all compete for attention. Reserve the purple accent for:
   - Primary CTA buttons only
   - Key interactive elements (links, hover states)
   - Section highlights (one per section maximum)

2. **Reduce the number of gradient colors.** Service cards currently use 6 different gradient colors (primary, info, success, danger, warning, purple). This creates visual chaos. Consider:
   - All service cards: same neutral dark background with an accent icon
   - Or: two-tone system (dark cards + purple accent icons)

3. **Standardize the hero gradients.** The site currently uses 3 different hero background approaches:
   - Homepage: video background with dark overlay
   - Services: purple gradient `(#667eea -> #764ba2 -> #8b5cf6)`
   - About: different purple gradient `(#667eea -> #764ba2)`
   - Contact: dark navy `(#1a1a2e -> #16213e)`

   **Recommendation:** Standardize all inner page heroes to the dark navy treatment (Contact page style). Reserve the video background for the homepage only. This creates visual hierarchy where the homepage feels special.

### B.4 Spacing and Visual Hierarchy

1. **Increase section padding.** Current `py-5` (3rem) is adequate but premium sites use more generous spacing. Consider `py-5 py-lg-6` (with custom `py-6 = 5rem` or `6rem`) for main sections.

2. **Add more whitespace between the section header and content.** Current gap between headings and card grids is too tight. Add `mb-5` or `mb-lg-5` after section headers.

3. **Reduce card hover transform.** Current `-8px` translateY on solutions cards is too aggressive. Use `-4px` maximum. Slalom and Avanade use `-2px` to `-4px`.

### B.5 Missing UI Patterns

Based on competitive research, the following patterns are used by every premium consulting site but are absent from gamma-web:

1. **Subtle scroll-triggered animations (AOS or similar)**
   - Currently using CSS-only `fadeInUp` on the hero only
   - Add: Intersection Observer-based fade-in for section content as it enters the viewport
   - Keep it subtle: opacity + small translateY (20px), 0.6s duration
   - Sigmoid and Quantiphi both use this extensively

2. **Case study / work example cards**
   - Every premium firm (Slalom, Thoughtworks, Avanade, Credera, Sigmoid) features case studies prominently
   - Even without real client work yet, prepare the component structure
   - Can initially populate with "Reference Architectures" or "Solution Blueprints" instead

3. **Process / methodology visualization**
   - Current process steps are a plain vertical list
   - Premium firms use horizontal timelines, connected step cards, or interactive accordions
   - Sigmoid uses a horizontal 4-panel accordion that expands on hover

4. **Trust signal bar / partner logos**
   - Technology partner logos (AWS, Azure, GCP, Databricks) displayed in a thin horizontal bar
   - Even without formal partnerships, "Technologies We Work With" is legitimate
   - Quantiphi, Sigmoid, Pythian, and Avanade all feature this prominently

5. **Sticky/smart header that hides on scroll down, returns on scroll up**
   - Current header is fixed and always visible
   - Sigmoid's pattern of hiding on scroll-down and revealing on scroll-up is a better UX for long pages

6. **Contact form with context**
   - Add a brief "What to expect" message next to the contact form
   - Slalom uses: "Let's talk about your next big project"
   - Credera uses assessment tools as a softer entry point

### B.6 Dark Mode

**Current state:** Partially implemented via Bootstrap `data-bs-theme` with manual overrides in scoped styles.

**Recommendations:**
1. Dark mode is a nice-to-have but not critical for a consulting website (target audience browses during business hours)
2. If keeping it, consolidate all dark mode overrides into a single SCSS file rather than scattering `:global(.dark-mode)` rules across 10+ components
3. Ensure the theme toggle is discoverable but not prominent -- it currently sits in the header, which is fine

### B.7 Mobile Experience Priorities

1. **Hero section:** The video background is heavy on mobile. Consider replacing it with a static gradient + image on screens below 768px (currently the floating cards are hidden but the video still loads).

2. **Service cards:** The 3-column grid on desktop becomes a single column on mobile. At 7 cards, this is a very long scroll. Consider a horizontal swipeable carousel on mobile (like Sigmoid's implementation).

3. **Navigation:** The mobile menu works but the CTA button placement could be improved. Move "Contact Us" to a sticky bottom bar on mobile rather than buried at the end of the hamburger menu.

4. **Touch targets:** Ensure all CTAs have minimum 44px height on mobile (some `btn-sm` elements may fall below this).

---

## C. Information Architecture

### C.1 Recommended Site Map

```
/                           Homepage
/services                   All Services (overview)
/services/ai-ml             Applied AI & Machine Learning
/services/data-engineering   Data Engineering
/services/cloud-computing    Cloud Computing
/services/cybersecurity      Cybersecurity
/services/business-intelligence  Business Intelligence
/services/data-platforms     Data Platform & Big Data
/about                      About Us (company + methodology + leadership)
/solutions                  Industry Solutions (overview)
/solutions/financial-services   Financial Services
/solutions/healthcare          Healthcare
/solutions/government          Government
/insights                   Insights & Resources (blog/articles) [future]
/careers                    Careers
/contact                    Contact
/privacy-policy             Privacy Policy
/terms-of-service           Terms of Service
```

### C.2 Navigation Structure Changes

**Current navigation:**
```
Home | Solutions (dropdown) | About (dropdown) | Careers | [Contact Us button]
```

**Recommended navigation:**
```
Services (dropdown) | Industries (dropdown) | About | Insights | Careers | [Book a Call button]
```

**Rationale:**
- "Services" should be the primary nav item (it is what prospects look for first)
- "Industries" replaces "Solutions" (clearer label for vertical-specific content)
- "Insights" is a placeholder for future blog/thought leadership (critical for SEO and credibility)
- "Home" link is unnecessary in the nav -- the logo handles this
- "About" dropdown can be simplified to a single page

### C.3 Pages to Add (Future)

1. **Insights / Blog** -- Critical for SEO and thought leadership. Every competitor has this. Even one article per month on topics like "How Canadian banks are adopting AI" or "Data governance requirements under PIPEDA" would build authority.

2. **Individual service detail pages** -- Each service deserves its own page with use cases, technologies, and contextual CTAs. Currently all 7 services are on a single page.

3. **Case studies template** -- Prepare the template now, populate as engagements complete. Structure: Challenge -> Approach -> Results -> Technologies Used.

4. **Resources / Whitepapers** -- Gated content for lead generation. Even a single well-written PDF ("A Decision-Maker's Guide to AI Readiness in Financial Services") provides enormous credibility.

### C.4 Pages to Remove or Consolidate

1. **Remove `/team` as a standalone page.** Fold the founder section into `/about`. A team page with one person is counterproductive.

2. **Consolidate `/about/methodology` into `/about`.** The methodology should be a section on the about page, not a separate route.

3. **Remove or hide `/about/licenses-and-approvals` and `/about/qhse-certificates`** until there are actual certifications to display. Empty certification pages damage credibility.

4. **FAQ page** -- Keep but deprioritize in navigation. FAQs are useful for SEO but rarely visited directly on consulting sites.

---

## D. Quick Wins vs Long-term

### Quick Wins (text/copy changes -- can implement in 1-2 days)

| # | Change | File(s) | Impact |
|---|--------|---------|--------|
| 1 | Rewrite hero headline and subtext | `HeroSection.vue` | High -- first impression |
| 2 | Replace all CTA button text per Section A.6 | Multiple components | Medium -- professionalism |
| 3 | Rewrite service descriptions per Section A.2 | `ServicesSection.vue`, `services.vue` | High -- credibility |
| 4 | Remove fake metrics from About page (95%, 40%, 99.9%) | `about.vue` | High -- removes red flags |
| 5 | Rewrite About page intro and mission per Section A.3 | `about.vue` | High -- positioning |
| 6 | Update founder bio with specific experience | `team.ts` | Medium -- credibility |
| 7 | Remove/hide team page, integrate into About | Route config + `about.vue` | Medium -- removes weakness |
| 8 | Fix hero badge text from "Your Data Solutions" to "AI & Data Consulting -- Toronto" | `HeroSection.vue` | Low -- polish |
| 9 | Standardize page titles and meta descriptions | All page components | Medium -- SEO |
| 10 | Remove LinkedIn placeholder link (`#`) from founder | `team.ts` | Low -- removes broken link |
| 11 | Replace the `ui-avatars.com` placeholder with a real photo | `team.ts` | High -- credibility |
| 12 | Reduce industries from 6 to 3-4 with honest framing | `IndustriesSection.vue` | Medium -- credibility |

### Medium Effort (layout adjustments, component changes -- 1-2 weeks)

| # | Change | Effort | Impact |
|---|--------|--------|--------|
| 13 | Standardize all inner-page hero backgrounds to dark navy | SCSS + page components | Medium -- visual consistency |
| 14 | Add "Technologies We Work With" logo bar (AWS, Azure, GCP, etc.) | New component on homepage | High -- trust signal |
| 15 | Redesign service cards to use consistent dark styling | `ServiceCard.vue` | Medium -- visual polish |
| 16 | Add scroll-triggered fade-in animations (AOS or Intersection Observer) | Global plugin + section components | Medium -- premium feel |
| 17 | Create individual service detail pages | New route + page components | High -- SEO + depth |
| 18 | Redesign process section with horizontal timeline or connected cards | `ProcessSection.vue` | Medium -- visual distinction |
| 19 | Improve contact form with "What to expect" sidebar content | `contact.vue` | Medium -- conversion |
| 20 | Add smart scroll header (hide on scroll-down, show on scroll-up) | `Header.vue` + composable | Low-Medium -- UX improvement |
| 21 | Mobile: Replace video background with static image below 768px | `HeroSection.vue` | Medium -- performance |
| 22 | Consolidate dark mode styles into single SCSS file | New `_dark-mode.scss` | Low -- code quality |
| 23 | Fix heading hierarchy inconsistency across pages | All page components | Low -- accessibility + SEO |

### Long-term (new pages, features, design work -- 1-3 months)

| # | Change | Effort | Impact |
|---|--------|--------|--------|
| 24 | Build Insights/Blog section with CMS integration | New domain module + API | High -- SEO + authority |
| 25 | Create case study template and first 2-3 case studies | New domain module | High -- trust + conversion |
| 26 | Build gated resource/whitepaper download system | New feature + email integration | High -- lead generation |
| 27 | Implement proper analytics (conversion tracking, heatmaps) | GTM + analytics setup | High -- data-driven optimization |
| 28 | Add an "AI Readiness Assessment" interactive tool | New page + logic | High -- differentiator (like Credera/Quantiphi) |
| 29 | Professional photography session (team, office, brand imagery) | External vendor | High -- replaces all Unsplash stock photos |
| 30 | Comprehensive SEO audit and technical optimization | Audit + implementation | High -- organic traffic |
| 31 | Add French language content (currently i18n scaffolded but empty) | Translation + content | Medium -- Canadian market |
| 32 | Mobile-first redesign with swipeable service carousel | Component redesign | Medium -- mobile conversion |

---

## Appendix: Competitive Patterns Summary

| Pattern | Slalom | Thoughtworks | Quantiphi | Sigmoid | DataRobot | Avanade | Credera | Pythian |
|---------|--------|-------------|-----------|---------|-----------|---------|---------|--------|
| Short hero headline (under 8 words) | Yes | Yes | Yes | Yes | No (long) | Yes | Yes | Yes |
| Video hero background | Yes | Yes | No | No | No | No | No | No |
| Client logo bar | Yes | Yes | Yes | Yes | Yes | Yes | No | Yes |
| Case studies on homepage | Yes | Yes | No | Yes | Yes | Yes | Yes | Yes |
| Individual service pages | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Team/people page | No | No | No | No | No | No | No | No |
| Blog/insights section | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Scroll animations | No | No | Yes | Yes | No | No | Yes | No |
| Assessment/tool as CTA | No | No | Yes | No | Yes | No | Yes | No |
| Dark + accent color scheme | No | Yes | No | No | Yes | No | Yes | Yes |
| Technology partner logos | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| Specific ROI metrics | No | No | No | Yes | Yes | No | No | Yes |

**Key takeaway:** Every single competitor has a blog/insights section and individual service pages. None of them have a team page on their homepage. All of them display technology partner logos. These are table-stakes patterns that gamma-web should prioritize.
