<template>
  <div>
    <!-- Coordonnées -->
    <section class="bg-secondary py-5 mt-5">
      <div class="container pt-5 pb-lg-2 pb-xl-4 py-xxl-5">
        <nav aria-label="breadcrumb" class="mt-3">
        <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/">{{ $t('breadcrumbs.home') }}</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">{{ $t('breadcrumbs.contact') }}</li>
        </ol>
      </nav>

        <!-- Titre de la page -->
        <h1 class="display-2">{{ $t('contacts.title') }}</h1>
        <p class="fs-lg pb-4 mb-2 mb-sm-3">{{ $t('contacts.description') }}</p>

        <!-- Cartes des détails -->
        <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 pb-2 pb-sm-4 pb-lg-5">

          <!-- Adresse -->
          <div class="col">
            <div class="card rounded-1 border-0 h-100">
              <div class="card-body">
                <h4 class="card-title mb-4">{{ $t('contacts.address.title') }}</h4>
                <p class="fs-lg fw-medium pb-3 mb-3">07 B.P 061 Ouagadougou 07, Ouagadougou, Kadiogo BF</p>
                <NuxtLink class="btn btn-sm btn-outline-primary" href="https://maps.app.goo.gl/jtrZ24RTaEDKGLMR8">
                  <i class="ai-map-pin me-1"></i>
                  {{ $t('contacts.address.button') }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Téléphone -->
          <div class="col">
            <div class="card rounded-1 border-0 h-100">
              <div class="card-body">
                <h4 class="card-title mb-4">{{ $t('contacts.phone.title') }}</h4>

                <ul class="list-unstyled mb-0">
                  <li class="pb-1 mb-2">
                    <span class="d-block fs-sm text-body-secondary mb-1">{{ $t('contacts.phone.main') }}</span>
                    <a class="nav-link fs-lg p-0" href="tel:+22670212025">+226&nbsp;70&nbsp;21&nbsp;20&nbsp;25</a><br>
                    <a class="nav-link fs-lg p-0" href="tel:+22625350148">+226&nbsp;25&nbsp;35&nbsp;01&nbsp;48</a>
                  </li>
                  <li>
                    <span class="d-block fs-sm text-body-secondary mb-1">{{ $t('contacts.phone.reception') }}</span>
                    <a class="nav-link fs-lg p-0" href="tel:+22670246883">+226&nbsp;70&nbsp;24&nbsp;68&nbsp;83</a><br>
                    <a class="nav-link fs-lg p-0" href="tel:+22620970545">+226&nbsp;20&nbsp;97&nbsp;05&nbsp;45</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Horaires -->
          <div class="col">
            <div class="card rounded-1 border-0 h-100">
              <div class="card-body">
                <h4 class="card-title mb-4">{{ $t('contacts.schedule.title') }}</h4>
                <ul class="list-unstyled mb-0">
                  <li class="pb-1 mb-2">
                    <span class="d-block fs-sm text-body-secondary mb-1">{{ $t('contacts.schedule.weekdays') }}</span>
                    <div class="d-flex align-items-center">
                      <span class="text-nav fs-lg fw-medium">07:30</span>
                      <span class="border-top mx-4" style="width: 36px; height: 1px;"></span>
                      <span class="text-nav fs-lg fw-medium">16:30</span>
                    </div>
                  </li>
                  <li>
                    <span class="d-block fs-sm text-body-secondary mb-1">{{ $t('contacts.schedule.weekends') }}</span>
                    <div class="d-flex align-items-center">
                      <span class="text-nav fs-lg fw-medium">{{ $t('contacts.schedule.closed') }}</span>
                      <span class="border-top mx-4" style="width: 36px; height: 1px;"></span>
                      <span class="text-nav fs-lg fw-medium"></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Email -->
          <div class="col">
            <div class="card rounded-1 border-0 h-100">
              <div class="card-body">
                <h4 class="card-title mb-4">{{ $t('contacts.email.title') }}</h4>
                <ul class="list-unstyled mb-0">
                  <li class="pb-1 mb-2">
                    <span class="d-block fs-sm text-body-secondary mb-1">{{ $t('contacts.email.main') }}</span>
                    <a class="nav-link fs-lg p-0" href="mailto:info@cobutam.com">info@cobutam.com
                    </a>
                  </li>
                  <li>
                    <span class="d-block fs-sm text-body-secondary mb-1">{{ $t('contacts.email.reception') }}</span>
                    <a class="nav-link fs-lg p-0" href="mailto:cobutambobo@cobutam.bf">cobutambobo@cobutam.bf</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="height: 250px;"></div>
    </section>

    <ContactForm />
    <!-- Address (Map) -->
    <section class="container pt-5 mt-sm-2 mt-md-3 mt-lg-4 mt-xxl-5 mb-n4 mb-md-n2 mb-lg-0 " >

<!-- Map for screens < 992px -->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.894630842059!2d-1.559711!3d12.389985999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2e95525528f465%3A0x28b755c8b04fe00e!2sCOBUTAM!5e0!3m2!1sen!2sbf!4v1734695054329!5m2!1sen!2sbf" width="600" height="450" style="border:0 ; border-radius: 15px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>
</div>
</template>


<script setup>
import {nextTick, onMounted} from 'vue'
import { ref } from 'vue';
import ContactForm from '~/domains/contactus/components/ContactForm';
import { useI18n } from 'vue-i18n'; 
import { useHead } from '#imports'
const { t, locale } = useI18n();

useHead({
  title: t('meta.contact.title'),
  meta: [
    { name: 'description', content: t('meta.contact.description') },
    { name: 'keywords', content: t('meta.contact.keywords') },
    { name: 'author', content: 'COBUTAM' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})



onMounted(() => {
  nextTick().then(() => {
    initMap();
  });
});

const initMap = () => {
  const mapList = document.querySelectorAll('.interactive-contact-map')

  if (mapList.length === 0) return

  for (let i = 0; i < mapList.length; i++) {
    const mapOptions = mapList[i].dataset.mapOptions
    let map

    // Map options: Inline JSON data
    if (mapOptions && mapOptions !== '') {
      const mapOptionsObj = JSON.parse(mapOptions),
          mapLayer =
              mapOptionsObj.mapLayer ||
              'https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx',
          mapCenter = mapOptionsObj.center ? mapOptionsObj.center : [0, 0],
          mapZoom = mapOptionsObj.zoom || 1,
          scrollWheelZoom =
              mapOptionsObj.scrollWheelZoom === false ? false : true,
          markers = mapOptionsObj.markers

      // Map setup
      /* eslint-disable no-undef */
      map = L.map(mapList[i], {
        scrollWheelZoom: scrollWheelZoom,
      }).setView(mapCenter, mapZoom)

      // Tile layer
      L.tileLayer(mapLayer, {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        attribution:
            '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
        crossOrigin: true,
      }).addTo(map)

      // Markers
      if (markers) {
        for (let n = 0; n < markers.length; n++) {
          const iconUrl = markers[n].iconUrl,
              shadowUrl = markers[n].shadowUrl,
              markerIcon = L.icon({
                iconUrl: iconUrl || 'assets/img/map/marker-icon.png',
                iconSize: [30, 43],
                iconAnchor: [14, 43],
                shadowUrl: shadowUrl || 'assets/img/map/marker-shadow.png',
                shadowSize: [41, 41],
                shadowAnchor: [13, 41],
                popupAnchor: [1, -40],
              }),
              popup = markers[n].popup

          const marker = L.marker(markers[n].position, {
            icon: markerIcon,
          }).addTo(map)

          if (popup) {
            marker.bindPopup(popup)
          }
        }
      }

      // Map option: No options provided
    } else {
      map = L.map(mapList[i]).setView([0, 0], 1)

      L.tileLayer(
          'https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx',
          {
            tileSize: 512,
            zoomOffset: -1,
            minZoom: 1,
            attribution:
                '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
            crossOrigin: true,
          }
      ).addTo(map)
    }
    /* eslint-enable no-undef */
  }
}

</script>

<style scoped>
@import url("/assets/vendor/leaflet/dist/leaflet.css");

.interactive-contact-map, .interactive-map {
  height: 350px; /* Adjust height as necessary */
  width: 100%; /* Ensure the container has a width */
}
</style>
