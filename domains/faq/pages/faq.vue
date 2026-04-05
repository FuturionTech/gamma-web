<template>
  <div class="faq-page">
    <!-- ========================================
         HERO SECTION — Dark navy gradient
         ======================================== -->
    <section class="hero-gradient position-relative overflow-hidden" style="margin-top: 80px;">
      <div class="container position-relative z-2 py-5">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb" class="mb-4">
              <ol class="breadcrumb justify-content-center mb-0">
                <li class="breadcrumb-item">
                  <NuxtLink to="/" class="text-white text-opacity-75 text-decoration-none">
                    {{ $t('breadcrumbs.home') }}
                  </NuxtLink>
                </li>
                <li class="breadcrumb-item active text-white" aria-current="page">
                  {{ $t('breadcrumbs.faq') }}
                </li>
              </ol>
            </nav>

            <!-- Title -->
            <h1 class="display-4 fw-bold text-white mb-3">
              {{ $t('faq.pageTitle') }}
            </h1>

            <!-- Subtitle -->
            <p class="fs-5 text-white text-opacity-75 mb-4 mx-auto" style="max-width: 600px;">
              {{ $t('faq.subtitle') }}
            </p>

            <!-- Search Bar -->
            <div class="mx-auto" style="max-width: 520px;">
              <div class="position-relative">
                <i class="bi bi-search position-absolute top-50 translate-middle-y text-muted" style="left: 1.25rem; z-index: 1;"></i>
                <input
                  v-model="searchQuery"
                  type="text"
                  class="form-control form-control-lg ps-5 rounded-pill search-input"
                  :placeholder="$t('faq.searchPlaceholder')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================
         FAQ CONTENT
         ======================================== -->
    <section class="py-5">
      <div class="container py-4">
        <!-- Category Filter Pills -->
        <div v-if="categories.length > 1" class="d-flex flex-wrap justify-content-center gap-2 mb-5">
          <button
            v-for="cat in categories"
            :key="cat"
            class="btn btn-sm rounded-pill px-4 py-2 category-pill"
            :class="activeCategory === cat ? 'btn-primary' : 'btn-outline-secondary'"
            @click="activeCategory = cat"
          >
            {{ cat === 'all' ? $t('faq.allCategories') : cat }}
          </button>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <!-- Loading Shimmer -->
            <div v-if="faqStore.loading" class="faq-list">
              <div v-for="n in 6" :key="n" class="card border-0 shadow-sm rounded-4 mb-3 overflow-hidden">
                <div class="p-4">
                  <div class="d-flex align-items-center">
                    <div class="shimmer shimmer-icon me-3 rounded-3"></div>
                    <div class="flex-grow-1">
                      <div class="shimmer shimmer-line mb-0" :style="{ width: `${60 + (n * 7) % 30}%` }"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Error State -->
            <div v-else-if="faqStore.error" class="text-center py-5">
              <div class="card border-0 shadow-sm rounded-4 p-5">
                <i class="bi bi-exclamation-triangle fs-1 text-warning mb-3"></i>
                <p class="text-muted mb-3">{{ faqStore.error }}</p>
                <button class="btn btn-primary rounded-pill px-4" @click="faqStore.fetchFaqs()">
                  {{ $t('faq.retry') }}
                </button>
              </div>
            </div>

            <!-- No FAQs -->
            <div v-else-if="faqStore.faqs.length === 0" class="text-center py-5">
              <i class="bi bi-chat-dots fs-1 text-muted mb-3 d-block"></i>
              <p class="text-muted">{{ $t('faq.noFaqs') }}</p>
            </div>

            <!-- No Search Results -->
            <div v-else-if="filteredFaqs.length === 0" class="text-center py-5">
              <i class="bi bi-search fs-1 text-muted mb-3 d-block"></i>
              <p class="text-muted mb-1">{{ $t('faq.noResults') }}</p>
              <button class="btn btn-link text-primary p-0" @click="searchQuery = ''; activeCategory = 'all'">
                {{ $t('faq.clearSearch') }}
              </button>
            </div>

            <!-- FAQ Accordion -->
            <div v-else class="faq-list">
              <div
                v-for="(faq, index) in filteredFaqs"
                :key="faq.id"
                class="faq-item card border-0 shadow-sm rounded-4 mb-3"
                :class="{ 'faq-item-active': activeIndex === index }"
              >
                <button
                  class="faq-question d-flex align-items-center w-100 text-start p-4 border-0 bg-transparent"
                  @click="toggleQuestion(index)"
                  :aria-expanded="activeIndex === index"
                  :aria-controls="`faq-answer-${faq.id}`"
                >
                  <span
                    class="faq-icon-wrapper me-3 flex-shrink-0"
                    :class="activeIndex === index ? 'faq-icon-active' : ''"
                  >
                    <i class="bi" :class="activeIndex === index ? 'bi-dash' : 'bi-plus'"></i>
                  </span>
                  <span class="fw-semibold">{{ faq.question }}</span>
                </button>

                <div
                  :id="`faq-answer-${faq.id}`"
                  class="faq-answer"
                  :class="{ 'faq-answer-open': activeIndex === index }"
                >
                  <div class="px-4 pb-4 ps-5 ms-2">
                    <div class="text-muted lh-lg" v-html="sanitize(faq.answer)"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Results Count -->
            <p v-if="filteredFaqs.length > 0" class="text-muted small text-center mt-4">
              {{ $t('faq.showingCount', { count: filteredFaqs.length, total: faqStore.faqs.length }) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================
         CTA SECTION
         ======================================== -->
    <section class="bg-light py-5">
      <div class="container py-4">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <div class="card border-0 shadow-sm rounded-4 p-5 cta-card">
              <i class="bi bi-chat-square-text fs-1 text-primary mb-3"></i>
              <h3 class="h4 fw-bold mb-2">{{ $t('faq.sidebar.title') }}</h3>
              <p class="text-muted mb-4">{{ $t('faq.sidebar.description') }}</p>
              <NuxtLink to="/contact" class="btn btn-primary btn-lg rounded-pill px-5">
                <i class="bi bi-calendar-check me-2"></i>
                {{ $t('faq.sidebar.button') }}
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
import { useFaqStore } from '~/domains/faq/stores/useFaqStore'

const { sanitize } = useSanitize()
const { t, locale } = useI18n()
const faqStore = useFaqStore()

useHead({
  title: 'Frequently Asked Questions | Gamma Neutral Consulting',
  meta: [
    { name: 'description', content: 'Answers to common questions about Gamma Neutral Consulting — our services, engagement process, pricing, and how we work with clients.' },
    { name: 'keywords', content: 'FAQ, frequently asked questions, Artificial Intelligence consulting, AI consulting, data engineering, Gamma Neutral' },
    { name: 'author', content: 'Gamma Neutral Consulting Inc.' },
  ]
})

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
   HERO
   ================================ */
.hero-gradient {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

.breadcrumb {
  background: transparent;
  padding: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.65);
}

.search-input {
  border: 2px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-size: 1rem;
  padding: 0.75rem 1.25rem 0.75rem 3rem;
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.55);
}

.search-input:focus {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(139, 92, 246, 0.6);
  color: #ffffff;
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.15);
}

/* ================================
   CATEGORY PILLS
   ================================ */
.category-pill {
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.category-pill:hover {
  transform: translateY(-1px);
}

/* ================================
   FAQ ITEMS
   ================================ */
.faq-item {
  transition: all 0.3s ease;
  overflow: hidden;
}

.faq-item:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08) !important;
}

.faq-item-active {
  border-left: 3px solid #8b5cf6 !important;
}

.faq-question {
  cursor: pointer;
  transition: color 0.2s ease;
}

.faq-question:hover {
  color: #8b5cf6;
}

.faq-icon-wrapper {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(139, 92, 246, 0.08);
  color: #8b5cf6;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.faq-icon-active {
  background: #8b5cf6;
  color: #ffffff;
}

.faq-answer {
  display: none;
}

.faq-answer-open {
  display: block;
}

/* ================================
   SHIMMER LOADING
   ================================ */
@keyframes shimmer {
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}

.shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 800px 100%;
  animation: shimmer 1.8s ease-in-out infinite;
}

.shimmer-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.shimmer-line {
  height: 18px;
  border-radius: 6px;
}

[data-bs-theme="dark"] .shimmer {
  background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 75%);
  background-size: 800px 100%;
}

/* ================================
   CTA CARD
   ================================ */
.cta-card {
  transition: all 0.3s ease;
}

.cta-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1) !important;
}

/* ================================
   DARK MODE
   ================================ */
[data-bs-theme="dark"] .search-input {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

[data-bs-theme="dark"] .faq-item {
  background: rgba(255, 255, 255, 0.04) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
}

[data-bs-theme="dark"] .faq-item:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3) !important;
}

[data-bs-theme="dark"] .faq-item-active {
  border-left: 3px solid #8b5cf6 !important;
}

[data-bs-theme="dark"] .faq-question,
[data-bs-theme="dark"] .faq-question .fw-semibold {
  color: #e5e7eb !important;
}

[data-bs-theme="dark"] .faq-question:hover,
[data-bs-theme="dark"] .faq-question:hover .fw-semibold {
  color: #c4b5fd !important;
}

[data-bs-theme="dark"] .faq-answer .text-muted {
  color: rgba(255, 255, 255, 0.7) !important;
}

[data-bs-theme="dark"] .bg-light {
  background-color: rgba(255, 255, 255, 0.03) !important;
}

[data-bs-theme="dark"] .cta-card {
  background: rgba(255, 255, 255, 0.04) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
}

[data-bs-theme="dark"] .cta-card:hover {
  box-shadow: 0 12px 32px rgba(139, 92, 246, 0.12) !important;
  border-color: rgba(139, 92, 246, 0.25) !important;
}

[data-bs-theme="dark"] .category-pill.btn-outline-secondary {
  color: rgba(255, 255, 255, 0.6);
  border-color: rgba(255, 255, 255, 0.15);
}

[data-bs-theme="dark"] .category-pill.btn-outline-secondary:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

/* ================================
   RESPONSIVE
   ================================ */
@media (max-width: 991px) {
  .display-4 {
    font-size: 2.25rem;
  }
}

@media (max-width: 576px) {
  .display-4 {
    font-size: 1.75rem;
  }

  .faq-question {
    padding: 1rem !important;
  }

  .faq-answer > div {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}

/* ================================
   ACCESSIBILITY
   ================================ */
.faq-question:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: -2px;
  border-radius: inherit;
}

@media (prefers-reduced-motion: reduce) {
  .faq-item,
  .faq-icon-wrapper,
  .category-pill,
  .cta-card,
  .search-input {
    transition: none !important;
  }
}
</style>
