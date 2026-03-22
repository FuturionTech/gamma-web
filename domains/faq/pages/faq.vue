<template>
  <div>
    <!-- FAQ -->
    <section class="container py-5 my-lg-3 my-xl-4 my-xxl-5">
      <div style="padding-top: 70px;">
        <nav aria-label="breadcrumb">
        <ol class="pt-lg-3 breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/">{{ $t('breadcrumbs.home') }}</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">{{ $t('breadcrumbs.faq') }}</li>
        </ol>
      </nav>
      </div>


      <div class="row py-2 py-sm-4 py-md-5">
        <div class="col-sm-9 col-md-4 col-lg-5 mb-5 mb-md-0">
          <div class="position-relative mb-sm-2">
            <div class="bg-light d-flex align-items-center justify-content-center" style="height: 200px; border-radius: 5%;"><i class="ai-circle-help h1 text-muted"></i></div>
          </div>
          <h3 class="h5">{{ $t('faq.sidebar.title') }}</h3>
          <p class="mb-sm-4">{{ $t('faq.sidebar.description') }}</p>
          <NuxtLink class="btn btn-primary" to="/contact">{{ $t('faq.sidebar.button') }}</NuxtLink>
        </div>
        <div class="col-md-8 col-lg-7">
          <div class="ps-md-3 ps-lg-4 ps-xl-5">
            <h2 class="h1 pb-sm-1 pb-md-3">{{ $t('faq.pageTitle') }}</h2>

            <!-- Loading State -->
            <div v-if="faqStore.loading" class="text-center py-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p class="text-muted mt-3">{{ $t('faq.loading') }}</p>
            </div>

            <!-- Error State -->
            <div v-else-if="faqStore.error" class="alert alert-warning">
              <i class="bi bi-exclamation-triangle me-2"></i>
              {{ faqStore.error }}
            </div>

            <!-- No FAQs -->
            <div v-else-if="faqStore.faqs.length === 0" class="text-center py-5">
              <p class="text-muted">{{ $t('faq.noFaqs') }}</p>
            </div>

            <!-- Accordion -->
            <div v-else class="accordion" id="faq">
              <div v-for="(faq, index) in faqStore.faqs" :key="faq.id" class="accordion-item bg-transparent mb-n1 mb-xl-1">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button fs-6 py-3 px-0"
                    type="button"
                    @click="toggleQuestion(index)"
                    :class="{ collapsed: activeIndex !== index }"
                  >
                    {{ faq.question }}
                  </button>
                </h3>
                <div
                  class="accordion-collapse"
                  :class="{ show: activeIndex === index }"
                >
                  <div class="accordion-body fs-sm">
                    <p v-html="sanitize(faq.answer)"></p>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Accordion -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useHead } from '#imports'
import { useFaqStore } from '~/domains/faq/stores/useFaqStore'

const { sanitize } = useSanitize()
const { locale } = useI18n()
const faqStore = useFaqStore()

useHead({
  title: 'Frequently Asked Questions | Gamma Neutral Consulting',
  meta: [
    { name: 'description', content: 'Answers to common questions about Gamma Neutral Consulting — our services, engagement process, pricing, and how we work with clients.' },
    { name: 'keywords', content: 'FAQ, frequently asked questions, AI consulting, data engineering, Gamma Neutral' },
    { name: 'author', content: 'Gamma Neutral Consulting Inc.' },
  ]
})

const activeIndex = ref(null)

const toggleQuestion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

// Re-fetch FAQs when locale changes
watch(locale, () => {
  faqStore.fetchFaqs()
})

onMounted(() => {
  faqStore.fetchFaqs()
})
</script>

<style scoped>
/* Hide all questions by default */
.accordion-collapse {
  display: none;
}

/* Show only the active question */
.accordion-collapse.show {
  display: block;
}

/* Apply correct styling when button is collapsed */
.accordion-button.collapsed {
  background-color: transparent !important;
  color: gray !important;
  box-shadow: none !important;
}

/* Dark mode support */
:global([data-bs-theme="dark"]) .bg-light {
  background-color: rgba(255, 255, 255, 0.04) !important;
}

:global([data-bs-theme="dark"]) .accordion-item {
  border-color: var(--bs-border-color);
}

:global([data-bs-theme="dark"]) .accordion-button {
  color: var(--bs-body-color);
}

:global([data-bs-theme="dark"]) .accordion-button.collapsed {
  color: rgba(255, 255, 255, 0.5) !important;
}

:global([data-bs-theme="dark"]) .accordion-body {
  color: var(--bs-body-color);
}
</style>
