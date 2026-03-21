<template>
  <div>
    <!-- FAQ -->
    <section class="container py-5 my-lg-3 my-xl-4 my-xxl-5">
      <div style="padding-top: 70px;">
        <nav aria-label="breadcrumb">
        <ol class="pt-lg-3 breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">FAQ</li>
        </ol>
      </nav>
      </div>


      <div class="row py-2 py-sm-4 py-md-5">
        <div class="col-sm-9 col-md-4 col-lg-5 mb-5 mb-md-0">
          <div class="position-relative mb-sm-2">
            <div class="bg-light d-flex align-items-center justify-content-center" style="height: 200px; border-radius: 5%;"><i class="ai-circle-help h1 text-muted"></i></div>
          </div>
          <h3 class="h5">Can't find the answer you're looking for?</h3>
          <p class="mb-sm-4">Reach out to our team and we'll get back to you as soon as possible.</p>
          <NuxtLink class="btn btn-primary" to="/contact">Contact Us</NuxtLink>
        </div>
        <div class="col-md-8 col-lg-7">
          <div class="ps-md-3 ps-lg-4 ps-xl-5">
            <h2 class="h1 pb-sm-1 pb-md-3">Frequently Asked Questions</h2>

            <!-- Loading State -->
            <div v-if="faqStore.loading" class="text-center py-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p class="text-muted mt-3">Loading FAQs...</p>
            </div>

            <!-- Error State -->
            <div v-else-if="faqStore.error" class="alert alert-warning">
              <i class="bi bi-exclamation-triangle me-2"></i>
              {{ faqStore.error }}
            </div>

            <!-- No FAQs -->
            <div v-else-if="faqStore.faqs.length === 0" class="text-center py-5">
              <p class="text-muted">No FAQs available at this time.</p>
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
import { ref, onMounted } from 'vue'
import { useHead } from '#imports'
import { useFaqStore } from '~/domains/faq/stores/useFaqStore'

const { sanitize } = useSanitize()
const faqStore = useFaqStore()

useHead({
  title: 'FAQ - Gamma Neutral Consulting',
  meta: [
    { name: 'description', content: 'Frequently asked questions about Gamma Neutral Consulting services, data solutions, and consulting process.' },
    { name: 'keywords', content: 'FAQ, frequently asked questions, data consulting, AI consulting, Gamma Neutral' },
    { name: 'author', content: 'Gamma Neutral Consulting Inc.' },
  ]
})

const activeIndex = ref(null)

const toggleQuestion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

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
</style>
