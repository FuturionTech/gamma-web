<template>
  <section class="container py-5 my-lg-3 my-xl-4 my-xxl-5">
    <h2 class="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">{{ $t('homepage.partners.title') }}</h2>
    <p class="text-center pb-2 pb-sm-3">{{ $t('homepage.partners.description') }}</p>

    <!-- Shimmers de chargement -->
    <div
      v-if="loading"
      class="row row-cols-3 row-cols-md-4 g-2 g-md-4 pb-2 pb-sm-3 pb-md-4 pb-xl-5"
    >
      <div class="col" v-for="n in 8" :key="n">
        <div class="shimmer rounded"></div>
      </div>
    </div>

    <!-- Liste des partenaires -->
    <div
      v-else
      class="row row-cols-3 row-cols-md-4 g-2 g-md-4 pb-2 pb-sm-3 pb-md-4 pb-xl-5"
    >
      <div class="col" v-for="(partner, index) in partners" :key="partner.id || index">
        <NuxtImg
          class="d-block mx-auto"
          :src="partner.imageUrl"
          :alt="partner.name"
          width="220"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import { useHomepageStore } from '~/domains/homepage/stores/useHomepageStore';

// Utiliser le store Pinia
const aboutusStore = useHomepageStore();
const { getPatners } = aboutusStore;

// Accès réactif aux partenaires
const partners = computed(() => aboutusStore.partners);

// Indicateur de chargement
const loading = ref(true);

// Récupérer les partenaires lors du montage du composant
onMounted(async () => {
  try {
    await getPatners(50);
  } catch (error) {
    console.error('Erreur lors de la récupération des partenaires:', error);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
/* Shimmer style */
.shimmer {
  width: 100%;
  height: 120px;
  background: linear-gradient(
    90deg,
    rgba(245, 245, 245, 1) 25%,
    rgba(230, 230, 230, 1) 50%,
    rgba(245, 245, 245, 1) 75%
  );
  background-size: 200% 100%;
  animation: shimmer-animation 1.5s infinite;
}

/* Animation pour les shimmers */
@keyframes shimmer-animation {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Styles supplémentaires pour les shimmers */
.shimmer.rounded {
  border-radius: 10px;
}

img {
  max-height: 120px;
  object-fit: contain;
}
</style>
