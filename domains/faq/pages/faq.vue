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
          <h3 class="h5">{{ $t('faq.noAnswerTitle') }}</h3>
          <p class="mb-sm-4">{{ $t('faq.noAnswerDescription') }}</p>
          <NuxtLink class="btn btn-primary" to="contact">{{ $t('faq.contactUsButton') }}</NuxtLink>
        </div>
        <div class="col-md-8 col-lg-7">
          <div class="ps-md-3 ps-lg-4 ps-xl-5">
            <h2 class="h1 pb-sm-1 pb-md-3">{{ $t('faq.title') }}</h2>

            <!-- Accordion -->
            <div class="accordion" id="faq">
              <div v-for="(question, index) in questions" :key="index" class="accordion-item bg-transparent mb-n1 mb-xl-1">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button fs-6 py-3 px-0"
                    type="button"
                    @click="toggleQuestion(index)"
                    :class="{ collapsed: activeIndex !== index }"
                  >
                    {{ $t(`faq.question${index + 1}.title`) }}
                  </button>
                </h3>
                <div
                  class="accordion-collapse"
                  :class="{ show: activeIndex === index }"
                  :id="'question' + (index + 1)"
                >
                  <div class="accordion-body fs-sm">
                    <p v-html="$t(`faq.question${index + 1}.description`, formatParams(index))"></p>
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
import { ref } from 'vue'
import { useHead } from '#imports'

const { t } = useI18n()

// Métadonnées pour la page
useHead({
  title: t('meta.faq.title'),
  meta: [
    { name: 'description', content: t('meta.faq.description') },
    { name: 'keywords', content: t('meta.faq.keywords') },
    { name: 'author', content: 'COBUTAM' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
});

// Liste des questions (remplace ceci par des données dynamiques si nécessaire)
const questions = ref(Array.from({ length: 10 }));

// Stocke l'index de la question actuellement ouverte (null = toutes fermées)
const activeIndex = ref(null);

// Fonction pour ouvrir/fermer une question
const toggleQuestion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

// Formatage des paramètres pour l'affichage dynamique
const formatParams = (index) => {
  return {
    link: `<a href='https://maps.app.goo.gl/JG9BbxKpUkQNVgus8' target='_blank'>Voir sur Google Maps</a>`,
    contact: `<a href='mailto:commercial.cobutam@cobutam.com'>commercial.cobutam@cobutam.com</a>`
  };
};
</script>

<style scoped>
/* Cacher toutes les questions au début */
.accordion-collapse {
  display: none;
}

/* Afficher seulement la question active */
.accordion-collapse.show {
  display: block;
}

/* Appliquer le style correct au bouton quand il est fermé */
.accordion-button.collapsed {
  background-color: transparent !important; /* Rétablit la couleur normale */
  color: gray !important; /* Garde la couleur du texte */
  box-shadow: none !important; /* Supprime l'ombre */
}
</style>
