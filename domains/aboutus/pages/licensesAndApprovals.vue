<template>
  <div>
    <div style="padding-top: 70px;">
      <h2 v-if="!loading" class="text-center my-4 mt-5">
        {{ $t("certifications.licenseAndApproval") }}
      </h2>
      <div v-else class="shimmer-title"></div>
    </div>

    <div v-if="loading" class="container">
      <div class="row">
        <div v-for="n in 4" :key="n" class="col-md-6 mb-4">
          <div class="card shadow-2xl">
            <div class="card-body">
              <div class="shimmer-title"></div>
              <div class="shimmer-thumbnail"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="container">
      <nav aria-label="breadcrumb" class="mt-3">
        <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/">{{ $t('breadcrumbs.home') }}</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">{{ $t('breadcrumbs.licences') }}</li>
        </ol>
      </nav>

      <div class="row" v-if="filteredCertifications.length > 0">
        <div v-for="certification in filteredCertifications" :key="certification.id" class="col-md-6 mb-4">
          <div class="card shadow-lg transform-card hover:scale-105">
            <div class="card-body text-center">
              <h5 class="card-title">{{ certification.title }}</h5>
              <a @click="openImageModal(certification.fileUrl)">
                <div class="image-container">
                  <img
                    v-if="certification.fileUrl"
                    :src="certification.fileUrl"
                    class="certification-thumbnail rounded-xl"
                    alt="Certification image"
                  />
                  <div v-else class="shimmer-thumbnail"></div>
                  <div class="hover-message">{{ $t("clickToView") }}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center my-5">
        <div class="alert alert-warning" role="alert">
          <i class="fas fa-exclamation-circle"></i> {{ $t("certifications.noDocuments") }}
        </div>
      </div>
    </div>
  </div>

  <!-- Modal for displaying the image -->
  <div v-if="isModalOpen" class="modal fade-in" @click.self="closeImageModal">
    <div class="modal-content zoom-in">
      <span class="close" @click="closeImageModal">&times;</span>
      <img :src="currentImageUrl" class="modal-image" alt="Full-size certification image" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted } from "vue";
import { useAboutusStore } from "~/domains/aboutus/stores/useAboutusStore";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const certificationsStore = useAboutusStore();
const isModalOpen = ref(false);
const currentImageUrl = ref("");

const loadCertifications = async () => {
  certificationsStore.loading = true; // Assurer que loading est actif
  try {
    await certificationsStore.getCertifications();
  } catch (err) {
    console.error("❌ Erreur lors de la récupération des certifications :", err);
  } finally {
    certificationsStore.loading = false; // Assurer l'arrêt du loading
  }
};

onMounted(loadCertifications);



const loading = computed(() => certificationsStore.loading);


const filteredCertifications = computed(() => {
  const allowedCategories = ["licence", "agrément", "agrements"];
  return certificationsStore.certifications.filter((doc) => {
    const categoryName = doc.certificationCategory?.name
      ?.trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");
    return categoryName && allowedCategories.includes(categoryName) && doc.fileUrl?.match(/\.(jpg|jpeg|png|gif)$/i);
  });
});

const openImageModal = (imageUrl) => {
  currentImageUrl.value = imageUrl;
  isModalOpen.value = true;
};

const closeImageModal = () => {
  isModalOpen.value = false;
  currentImageUrl.value = ""; // Clear the image URL when closing the modal
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

/* Image container with hover effect */
.image-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.certification-thumbnail {
  width: 100%;
  height: 250px; /* Adjust size as needed */
  object-fit: cover;
  transition: transform 0.3s ease;
}

.certification-thumbnail:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
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

/* Beautiful card with subtle shadow and hover effect */
.card {
  height: 400px; /* Ajuste selon ton besoin */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  transition: color 0.3s ease;
}

.card:hover .card-title {
  color: #3498db; /* Blue color on hover */
}

/* Image thumbnail with rounded corners and hover zoom effect */


.certification-thumbnail:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

/* Placeholder shimmer effect */
.shimmer-thumbnail {
  width: 100%;
  height: 300px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 16px;
}

@keyframes shimmer {
  100% {
    background-position: 200% 0;
  }
}

/* Modal with smooth fade-in and zoom-in animation */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
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
  border-radius: 20px;
  padding: 20px;
  max-width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  animation: zoomIn 0.5s ease-out forwards;
}

@keyframes zoomIn {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

/* Close button with hover effect */
.close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 32px;
  color: #333;
  cursor: pointer;
  z-index: 1100;
  transition: color 0.3s ease;
}

.close:hover {
  color: #e74c3c; /* Red color on hover */
}

/* Modal image with smooth zoom effect */
.modal-image {
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 12px;
  transition: transform 0.3s ease-in-out;
}

/* Hover effect on the card */
.hover-zoom:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
