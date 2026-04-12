<template>
  <div class="faq-page">
    <!-- ========================================
         HERO SECTION — Dark navy gradient
         ======================================== -->
    <section class="hero-gradient position-relative overflow-hidden hero-offset">
      <!-- Ambient light effect -->
      <div class="hero-glow-orb hero-glow-1"></div>
      <div class="hero-glow-orb hero-glow-2"></div>
      
      <div class="container position-relative z-2 pt-5">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb" class="mb-4 reveal-fade-up">
              <ol class="breadcrumb justify-content-center mb-0">
                <li class="breadcrumb-item">
                  <NuxtLink to="/" class="text-white text-opacity-60 text-decoration-none hover-white">
                    {{ $t('breadcrumbs.home') }}
                  </NuxtLink>
                </li>
                <li class="breadcrumb-item active text-white fw-medium" aria-current="page">
                  {{ $t('breadcrumbs.faq') }}
                </li>
              </ol>
            </nav>
 
            <!-- Title -->
            <h1 class="display-3 fw-bold text-white mb-4 tracking-tight reveal-fade-up-1">
              {{ $t('faq.pageTitle') }}
            </h1>
 
            <!-- Subtitle -->
            <p class="fs-5 text-white text-opacity-80 mb-5 mx-auto leading-relaxed reveal-fade-up-2" style="max-width: 680px;">
              {{ $t('faq.subtitle') }}
            </p>
 
            <!-- Search Bar — Glassmorphic -->
            <div class="mx-auto reveal-fade-up-3" style="max-width: 600px;">
              <div class="glass-search-container p-2 rounded-pill shadow-xl">
                <div class="position-relative d-flex align-items-center w-100">
                  <i class="bi bi-search ms-4 text-white text-opacity-50"></i>
                  <input
                    v-model="searchQuery"
                    type="text"
                    class="form-control form-control-lg border-0 bg-transparent text-white ps-3 py-3 shadow-none reveal-search-input"
                    :placeholder="$t('faq.searchPlaceholder')"
                  />
                  <button v-if="searchQuery" @click="searchQuery = ''" class="btn btn-link text-white text-opacity-40 p-2 me-2 border-0 shadow-none">
                     <i class="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <!-- Bottom wave/curve separator -->
      <div class="hero-separator">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L60 115C120 110 240 105 360 103.3C480 101.7 600 110.3 720 112.5C840 114.7 960 110.3 1080 103.3C1200 96.3 1320 86.7 1380 81.7L1440 76.7V120H0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>

    <!-- ========================================
         FAQ CONTENT
         ======================================== -->
    <section class="py-5 position-relative bg-white-to-gray">
      <div class="container py-4 position-relative z-1">
        <!-- Category Filter Pills -->
        <div v-if="categories.length > 1" class="d-flex flex-wrap justify-content-center gap-3 mb-5 reveal-fade-up">
          <button
            v-for="cat in categories"
            :key="cat"
            class="filter-pill"
            :class="{ 'active': activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat === 'all' ? $t('faq.allCategories') : cat }}
          </button>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-9">
            <!-- Loading Shimmer -->
            <div v-if="faqStore.loading" class="faq-list">
              <div v-for="n in 5" :key="n" class="glass-card-v2 p-4 rounded-4 mb-3 border-0">
                <div class="d-flex align-items-center">
                  <Shimmer width="44px" height="44px" radius="12px" class="me-3 flex-shrink-0" />
                  <div class="flex-grow-1">
                    <Shimmer :width="`${70 + (n * 5) % 25}%`" height="1.25rem" pill />
                  </div>
                </div>
              </div>
            </div>

            <!-- Error State -->
            <div v-else-if="faqStore.error" class="text-center py-5">
              <div class="glass-card-v3 rounded-5 p-5 mx-auto reveal-fade-up" style="max-width: 520px;">
                <div class="error-icon-wrapper-v2 mx-auto mb-4">
                  <i class="bi bi-cloud-slash"></i>
                </div>
                <h3 class="h4 fw-bold mb-3 tracking-tight">{{ $t('faq.errorTitle') }}</h3>
                <p class="text-muted mb-4 leading-relaxed">{{ $t('faq.errorMessage') }}</p>
                <button class="btn btn-primary-premium rounded-pill px-5 py-3 mx-auto" @click="faqStore.fetchFaqs()">
                  <i class="bi bi-arrow-clockwise me-2"></i>{{ $t('faq.retry') }}
                </button>
              </div>
            </div>

            <!-- No FAQs -->
            <div v-else-if="faqStore.faqs.length === 0" class="text-center py-5 reveal-fade-up">
              <div class="glass-card-v3 rounded-5 p-5 mx-auto" style="max-width: 520px;">
                  <div class="empty-icon-wrapper mx-auto mb-4">
                    <i class="bi bi-chat-dots"></i>
                  </div>
                  <h3 class="h4 fw-bold mb-3 tracking-tight">{{ $t('faq.noFaqs') }}</h3>
              </div>
            </div>

            <!-- No Search Results -->
            <div v-else-if="filteredFaqs.length === 0" class="text-center py-5 reveal-fade-up">
              <div class="glass-card-v3 rounded-5 p-5 mx-auto" style="max-width: 520px;">
                  <div class="empty-icon-wrapper mx-auto mb-4">
                    <i class="bi bi-search"></i>
                  </div>
                  <h3 class="h4 fw-bold mb-3 tracking-tight">{{ $t('faq.noResults') }}</h3>
                  <p class="text-muted mb-4">{{ $t('faq.noResultsSubtitle', 'Try adjusting your search or category filter.') }}</p>
                  <button class="btn btn-outline-primary-premium rounded-pill px-5 py-3 mx-auto" @click="searchQuery = ''; activeCategory = 'all'">
                    {{ $t('faq.clearSearch') }}
                  </button>
              </div>
            </div>

            <!-- FAQ Accordion -->
            <div v-else class="faq-list">
              <div
                v-for="(faq, index) in filteredFaqs"
                :key="faq.id"
                class="faq-item-v2 glass-card-v2 mb-3 rounded-4 overflow-hidden"
                :class="{ 'faq-item-active': activeIndex === index }"
                :style="{ '--delay': index * 0.05 + 's' }"
              >
                <button
                  class="faq-question-v2 d-flex align-items-center w-100 text-start p-4 border-0 bg-transparent transition-all"
                  @click="toggleQuestion(index)"
                  :aria-expanded="activeIndex === index"
                  :aria-controls="`faq-answer-${faq.id}`"
                >
                  <span
                    class="faq-index-badge me-3 flex-shrink-0"
                    :class="activeIndex === index ? 'faq-index-active' : ''"
                  >
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                  <span class="fw-bold tracking-tight fs-5 flex-grow-1">{{ faq.question }}</span>
                  <span class="faq-chevron ms-3" :class="{ 'rotated': activeIndex === index }">
                    <i class="bi bi-plus-lg fs-5"></i>
                  </span>
                </button>

                <div
                  :id="`faq-answer-${faq.id}`"
                  class="faq-answer-v2"
                  :class="{ 'faq-answer-open': activeIndex === index }"
                >
                  <div class="px-4 pb-4 ps-5 ms-4 border-top border-opacity-10 pt-4">
                    <div class="text-muted leading-relaxed" v-html="sanitize(faq.answer || faq.content)"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Results Count -->
            <p v-if="filteredFaqs.length > 0" class="text-muted small text-center mt-5 opacity-60">
              {{ $t('faq.showingCount', { count: filteredFaqs.length, total: faqStore.faqs.length }) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================
         CTA SECTION — Premium Dark Mode
         ======================================== -->
    <section class="cta-section-v2 overflow-hidden py-5">
      <div class="container py-5 relative z-1">
        <div class="cta-inner glass-card-dark p-5 rounded-5 text-center reveal-fade-up">
          <div class="ambient-glow-cta"></div>
          
          <div class="relative z-1">
            <div class="cta-icon-box mb-4 mx-auto">
              <i class="bi bi-chat-square-text text-white"></i>
            </div>
            <h2 class="display-4 fw-bold text-white mb-4 tracking-tight px-md-5">
              {{ $t('faq.sidebar.title') }}
            </h2>
            <p class="fs-5 text-white text-opacity-70 mb-5 mx-auto px-md-5" style="max-width: 760px;">
              {{ $t('faq.sidebar.description') }}
            </p>
            
            <div class="d-flex flex-column flex-sm-row gap-4 justify-content-center align-items-center">
              <NuxtLink to="/contact" class="btn btn-primary-premium btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg">
                <i class="bi bi-calendar-check-fill me-2"></i>
                {{ $t('faq.sidebar.button') }}
              </NuxtLink>
              <NuxtLink to="/services" class="btn btn-outline-light-premium btn-lg px-5 py-3 rounded-pill fw-bold">
                {{ $t('services.page.ctaSecondary') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useHead } from '#imports'
import Shimmer from '~/components/shared/utils/Shimmer.vue'
import { useFaqStore } from '~/domains/faq/stores/useFaqStore'

const { sanitize } = useSanitize()
const { t, locale } = useI18n()
const faqStore = useFaqStore()

const faqTitle = 'FAQ | AI & Data Consulting Questions | Gamma Neutral'
const faqDescription = 'Answers to common questions about Gamma Neutral Consulting — our services, engagement process, pricing, and how we work with clients.'
useHead({
  title: faqTitle,
  meta: [
    { name: 'description', content: faqDescription },
    { name: 'keywords', content: 'FAQ, frequently asked questions, Artificial Intelligence consulting, AI consulting, data engineering, Gamma Neutral' },
    { name: 'author', content: 'Gamma Neutral Consulting Inc.' },
  ],
})
usePageSeo({
  title: faqTitle,
  description: faqDescription,
  path: '/faq',
})
useBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'FAQ', url: '/faq' },
])

const activeIndex = ref(null)
const searchQuery = ref('')
const activeCategory = ref('all')

const toggleQuestion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

// Extract unique categories from FAQ data
const categories = computed(() => {
  const cats = faqStore.faqs
    .map((f) => f.category)
    .filter((c) => c && c.trim() !== '')
  const unique = [...new Set(cats)]
  return unique.length > 0 ? ['all', ...unique] : []
})

// Filter FAQs by search query and category
const filteredFaqs = computed(() => {
  let results = faqStore.faqs

  if (activeCategory.value !== 'all') {
    results = results.filter((f) => f.category === activeCategory.value)
  }

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    results = results.filter(
      (f) =>
        f.question.toLowerCase().includes(query) ||
        f.answer.toLowerCase().includes(query)
    )
  }

  return results
})

// Reset state when filters change
watch(searchQuery, () => {
  activeIndex.value = null
})

watch(activeCategory, () => {
  activeIndex.value = null
})

// Re-fetch FAQs when locale changes
watch(locale, () => {
  activeIndex.value = null
  searchQuery.value = ''
  activeCategory.value = 'all'
  faqStore.fetchFaqs()
})

onMounted(() => {
  faqStore.fetchFaqs()
})
</script>

<style scoped>
/* ================================
   COMMON TOKENS & UTILS
   ================================ */
.tracking-tight { letter-spacing: -0.02em; }
.leading-relaxed { line-height: 1.7; }
.opacity-60 { opacity: 0.6; }
.shadow-xl { box-shadow: 0 20px 40px rgba(0,0,0,0.15); }

/* ================================
   HERO STYLE
   ================================ */
.hero-offset {
  margin-top: 80px;
}

.hero-gradient {
  background: #0f172a;
  min-height: 540px;
  display: flex;
  align-items: center;
  padding-bottom: 8rem;
}

.hero-glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  pointer-events: none;
  z-index: 1;
}

.hero-glow-1 {
  width: 400px;
  height: 400px;
  background: rgba(124, 58, 237, 0.3);
  top: -100px;
  right: -50px;
}

.hero-glow-2 {
  width: 300px;
  height: 300px;
  background: rgba(59, 130, 246, 0.2);
  bottom: 0px;
  left: -50px;
}

.glass-search-container {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-search-container:focus-within {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(124, 58, 237, 0.5);
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.15);
  transform: scale(1.02);
}

.reveal-search-input::placeholder {
  color: rgba(255, 255, 255, 0.4) !important;
}

.hero-separator {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  color: #ffffff;
  line-height: 0;
}

[data-bs-theme="dark"] .hero-separator {
  color: #0b0f19;
}

.hover-white:hover {
  color: #ffffff !important;
}

/* ================================
   FILTERS
   ================================ */
.filter-pill {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  padding: 0.6rem 1.75rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #64748b;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.03);
}

.filter-pill:hover {
  transform: translateY(-2px);
  background: #ffffff;
  color: #1a1a2e;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.filter-pill.active {
  background: #7c3aed;
  color: #ffffff;
  border-color: #7c3aed;
  box-shadow: 0 10px 20px rgba(124, 58, 237, 0.2);
}

[data-bs-theme="dark"] .filter-pill {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.08);
  color: #94a3b8;
}

[data-bs-theme="dark"] .filter-pill:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

[data-bs-theme="dark"] .filter-pill.active {
  background: #7c3aed;
  color: #ffffff;
}

/* ================================
   FAQ ITEMS V2
   ================================ */
.bg-white-to-gray {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

[data-bs-theme="dark"] .bg-white-to-gray {
  background: #0b0f19;
}

.faq-item-v2 {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: translateY(20px);
  animation: reveal-faq 0.6s ease-out var(--delay) forwards;
}

@keyframes reveal-faq {
  to { opacity: 1; transform: translateY(0); }
}

.glass-card-v2 {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
}

.faq-item-v2:hover {
  transform: translateY(-4px);
  border-color: rgba(124, 58, 237, 0.3) !important;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
}

.faq-item-active {
  border-color: rgba(124, 58, 237, 0.5) !important;
  background: #ffffff;
}

.faq-index-badge {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  border-radius: 12px;
  color: #7c3aed;
  font-weight: 800;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.faq-index-active {
  background: #7c3aed;
  color: #ffffff;
  transform: scale(1.1);
}

.faq-chevron {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: #94a3b8;
}

.faq-chevron.rotated {
  transform: rotate(135deg);
  color: #7c3aed;
}

.faq-answer-v2 {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-answer-open {
  max-height: 1000px;
  opacity: 1;
}

/* ================================
   EMPTY & ERROR STATES
   ================================ */
.glass-card-v3 {
  background: #ffffff;
  border: 1px solid #eef2f6;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
}

.error-icon-wrapper-v2 {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  font-size: 2.5rem;
  border-radius: 20px;
}

.empty-icon-wrapper {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(124, 58, 237, 0.1);
  color: #7c3aed;
  font-size: 2.5rem;
  border-radius: 20px;
}

/* ================================
   CTA PREMIUM
   ================================ */
.cta-section-v2 {
  background: #ffffff;
}

[data-bs-theme="dark"] .cta-section-v2 {
  background: #0b0f19;
}

.cta-inner {
  background: linear-gradient(145deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.ambient-glow-cta {
  position: absolute;
  top: -20%;
  right: -20%;
  width: 60%;
  height: 100%;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%);
  filter: blur(40px);
}

.cta-icon-box {
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.btn-primary-premium {
  background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
  border: none;
  box-shadow: 0 10px 20px rgba(124, 58, 237, 0.2);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  color: #ffffff;
}

.btn-primary-premium:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 30px rgba(124, 58, 237, 0.3);
  color: #ffffff;
}

.btn-outline-light-premium {
  background: transparent;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.btn-outline-light-premium:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

/* ================================
   DARK MODE OVERRIDES
   ================================ */
[data-bs-theme="dark"] .glass-card-v2 {
  background: rgba(15, 23, 42, 0.6);
  border-color: rgba(255, 255, 255, 0.06);
}

[data-bs-theme="dark"] .faq-item-active {
  background: rgba(15, 23, 42, 0.9);
  border-color: rgba(124, 58, 237, 0.5) !important;
}

[data-bs-theme="dark"] .faq-index-badge {
  background: rgba(255, 255, 255, 0.05);
  color: #c4b5fd;
}

[data-bs-theme="dark"] .glass-card-v3 {
  background: rgba(15, 23, 42, 0.6);
  border-color: rgba(255, 255, 255, 0.08);
}

@media (max-width: 767px) {
  .hero-offset { margin-top: 64px; }
  .display-3 { font-size: 2.5rem; }
  .cta-inner { padding: 3rem 1.5rem !important; }
  .faq-question-v2 { padding: 1.25rem !important; }
}
</style>
