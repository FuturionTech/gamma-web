<template>
    <!-- Team -->
    <section class="pt-5 mt-2 mt-xl-4 mt-xxl-5">
      <div class="container pt-3 pt-sm-4 pt-lg-5 mt-xl-2 mt-xxl-3">
        
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          <template v-if="isLoading">
            <!-- Shimmers for loading state -->
            <div v-for="n in 6" :key="'shimmer-' + n" class="col">
              <div class="card shimmer-card rounded-2 overflow-hidden position-relative">
                <div class="shimmer-image"></div>
              </div>
            </div>
          </template>
  
          <template v-else>
            <div class="fs-sm text-uppercase mb-3" v-if="teams.lenght>0">{{ $t('team.sectionTitle') }}</div>
<h2 class="display-6 pb-3 mb-lg-4" v-if="teams.lenght>0">{{ $t('team.heading') }}</h2>
            <div v-for="teamMember in teams" :key="teamMember.id" class="col">
              <div class="card card-hover border-0 rounded-2 overflow-hidden position-relative fixed-card-size">
                <NuxtImg
                  :src="teamMember.profilePictureUrl || '/assets/img/default-profile.jpg'"
                  :alt="teamMember.name"
                  class="w-100 h-100 card-img"
                />
                <div class="overlay">
                  <div
                    class="card-body d-flex flex-column justify-content-end h-100 position-relative z-2 text-center text-white"
                    data-bs-theme="dark"
                  >
                    <h3 class="h5 mb-1">{{ teamMember.name }}</h3>
                    <p class="text-body mb-3">{{ teamMember.role }}</p>
                    <div class="d-flex justify-content-center">
                      <a
                        v-for="link in teamMember.socialMediaLinks"
                        :key="link.id"
                        :href="link.url"
                        class="btn btn-icon btn-sm btn-light rounded-circle mx-2"
                        :aria-label="link.platform.name"
                      >
                        <i :class="'ai-' + link.platform.name.toLowerCase()"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { computed, onMounted, ref } from "vue";
  import { useAboutusStore } from "~/domains/aboutus/stores/useAboutusStore";
  
  const aboutusStore = useAboutusStore();
  const { getTeams } = aboutusStore;
  
  const teams = computed(() => aboutusStore.teams);
  const isLoading = ref(true);
  
  onMounted(async () => {
    try {
      await getTeams(50); // Charger les données avec un application_id fictif
    } catch (error) {
      console.error("Error fetching teams:", error);
    } finally {
      isLoading.value = false;
    }
  });
  </script>
  
  <style scoped>
  /* Shimmer styles */
  .shimmer-card {
    height: 350px;
    background-color: #f6f7f8;
  }
  
  .shimmer-image {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  
  .fixed-card-size {
    height: 350px;
  }
  
  .card-img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Overlay for text visibility */
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .card:hover .overlay {
    opacity: 1;
  }
  
  .card-body {
    color: white;
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  </style>
  