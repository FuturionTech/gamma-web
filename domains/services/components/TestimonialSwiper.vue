<template>
  <section class="pt-5 mb-5">
    <div class="container pt-3 pt-md-4 pt-lg-5 mt-xl-2 mt-xxl-3">
      <h2 v-if="testimonials.length>0" class="display-6 pb-1 font-style-poppins text-center white-text">Ce qu'ils disent de nous</h2>
      
      <!-- Affichage du chargement -->
      <div v-if="homepageStore.loading" class="text-center">Chargement...</div>
      
      <!-- Affichage des témoignages -->
      <div v-else class="card border-0 overflow-hidden" v-if="testimonials.length">
        <div class="row py-1 py-sm-1 py-md-2 py-lg-3 py-xl-4 align-items-center">
          
          <!-- Témoignages avec images à gauche -->
          <div class="col-md-4 col-lg-3 offset-lg-1 mb-3 mb-md-0 text-center"> <!-- Ajout de text-center -->
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="testimonial.id" 
              class="binded-item" 
              :class="{ active: index === activeSlide }"
            >
            <NuxtImg
  v-if="testimonial.imageUrl"
  class="testimonial-img d-block rounded-2 mb-3 mx-auto"
  :src="testimonial.imageUrl"
  :alt="testimonial.name"
  style="object-fit: cover;"
/>

              <h4 class="mb-0 font-style-poppins white-text text-center">{{ testimonial.name }}</h4> <!-- Centrage du nom -->
            </div>
          </div>
          <!-- Témoignages sous forme de slider à droite -->
          <div class="col-md-8 col-lg-7">
            <swiper 
              :modules="modules" 
              :spaceBetween="30" 
              :pagination="paginationOptions" 
              @slideChange="onSlideChange"
            >
              <swiper-slide 
                v-for="(testimonial, index) in testimonials" 
                :key="index" 
                class="testimonial-slide rounded-2"
              >
                <p class="white-text lead mb-0 font-style-poppins">{{ testimonial.content }}</p>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        
        <!-- Pagination pour le swiper -->
        <div class="swiper-pagination position-relative bottom-0 pt-3 mt-1 m-2 mt-md-2" id="testimonials-bullets"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import { useServicesStore } from '~/domains/services/stores/useServicesStore';

// Utilisation du store Pinia
const homepageStore = useServicesStore();
const testimonials = computed(() => homepageStore.testimonials);
const activeSlide = ref(0); // Index de la diapositive active

const modules = [Pagination];

const paginationOptions = {
  el: '#testimonials-bullets',
  clickable: true,
  renderBullet: (index: number, className: string) => `<span class="${className}"></span>`,
};

// Mettre à jour l'index de la diapositive active
const onSlideChange = (swiper: any) => {
  activeSlide.value = swiper.activeIndex;
};

onMounted(() => {
  homepageStore.getTestimonials(100);  
});


</script>

<style scoped lang="scss">


.binded-item.active {
  display: block;
}

.binded-item {
  display: none;
}

.testimonial-img {
  width: 150px; /* Taille fixée */
  height: 150px; /* Taille fixée */
  object-fit: cover;
  object-position: center;
}

.testimonial-slide {

  border-radius: 10px;
  padding: 20px;
  height: 255px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-overflow: ellipsis; // Ajoute des points de suspension si le texte est trop long
}

@media (max-width: 768px) {
  .testimonial-slide {
    height: auto; // Hauteur automatique pour les petits écrans
  }
}
</style>
