<template>
  <div>
    <!-- Titre avec un shimmer en cas de chargement -->
    <div style="padding-top: 70px;">
      <h2 v-if="!loading" class="text-center my-4 mt-5">
        {{ $t("certifications.qhse") }}
      </h2>
      <div v-else class="shimmer-title"></div> <!-- Shimmer du titre -->
    </div>

    <!-- Affichage des shimmers en attendant les certifications -->
    <div v-if="loading" class="container">
      <div class="row">
        <div v-for="n in 1" :key="n" class="col mb-4">
          <div class="card shadow-sm">
            <div class="card-body text-center">
              <div class="shimmer-title"></div> <!-- Shimmer du titre -->
              <div class="shimmer-thumbnail"></div> <!-- Shimmer de l'aperçu -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Affichage des images une fois chargées -->
    <!-- Affichage des images une fois chargées -->
<div v-else class="container">
  <nav aria-label="breadcrumb" class="mt-3">
        <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/">{{ $t('breadcrumbs.home') }}</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">{{ $t('breadcrumbs.qhse') }}</li>
        </ol>
      </nav>

  <div class="row">
    <template v-if="filteredCertifications.length > 0">
      <div v-for="certification in filteredCertifications" :key="certification.id" class="offset-md-1 col-md-10 mb-4">
        <div class="card shadow-sm hover-zoom">
          <div class="card-body text-center">
            <h5 class="card-title mb-4">{{ certification.title }}</h5>
            <a @click="openImageModal(certification.fileUrl)">
              <div class="image-container">
                <img
                  v-if="certification.fileUrl"
                  :src="certification.fileUrl"
                  class="image-thumbnail"
                  alt="Image Preview"
                />
                <div class="hover-message">{{ $t("clickToView") }}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </template>
    
    <!-- Message affiché s'il n'y a aucune certification -->
    <div v-else class="text-center my-5">
        <div class="alert alert-warning" role="alert">
          <i class="fas fa-exclamation-circle"></i> {{ $t("certifications.noDocuments") }}
        </div>
      </div>
  </div>
</div>


    <!-- Modal pour afficher l'image -->
    <div v-if="isModalOpen" class="modal" @click.self="closeImageModal">
      <div class="modal-content fade-in">
        <span class="close" @click="closeImageModal">&times;</span>
        <img :src="currentfileUrl" class="modal-image" alt="Full-size Image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useAboutusStore } from "~/domains/aboutus/stores/useAboutusStore";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const certificationsStore = useAboutusStore();
const isModalOpen = ref(false);
const currentfileUrl = ref("");

onMounted(async () => {
  try {
    certificationsStore.certifications = []; // Réinitialiser les certifications pour forcer le chargement
    await certificationsStore.getCertifications(); // Charger les certifications à chaque affichage de la page
  } catch (err) {
    console.error("❌ Erreur lors de la récupération des certifications :", err);
  }
});


const loading = computed(() => certificationsStore.loading);

const filteredCertifications = computed(() => {
  return certificationsStore.certifications.filter((doc) => {
    return doc.certificationCategory?.name?.trim().toLowerCase() === "qhse" && doc.fileUrl;
  });
});

const openImageModal = (fileUrl) => {
  currentfileUrl.value = fileUrl;
  isModalOpen.value = true;
};

const closeImageModal = () => {
  isModalOpen.value = false;
};

onMounted(() => {
  if (!sessionStorage.getItem("reloaded")) {
    sessionStorage.setItem("reloaded", "true");
    window.location.reload();
  } else {
    sessionStorage.removeItem("reloaded");
  }
});
</script>

<style scoped>
.image-thumbnail {
  width: 100%;
  max-height: 1200px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.image-thumbnail:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Hover message styling */
.hover-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.image-container:hover .hover-message {
  opacity: 1;
  visibility: visible;
}

.shimmer-thumbnail {
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
}

@keyframes shimmer {
  100% {
    background-position: 200% 0;
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
  padding-top: 70px;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
  100% {
    opacity: 1;
  }
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  animation: slideIn 0.5s ease-out forwards;
}

@keyframes slideIn {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
  z-index: 1100;
  color: #333;
  transition: color 0.3s ease;
}

.close:hover {
  color: #e74c3c;
}

.modal-image {
  width: 100%;
  height: auto;
}
</style>
