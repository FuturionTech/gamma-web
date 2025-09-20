<template>
  <section class="container" style="margin-top: -260px;" data-bs-theme="dark">
    <div class="card rounded-1 border-0 bg-primary position-relative py-lg-4 py-xl-5">
      <!-- Decorative shapes -->
      <svg class="position-absolute end-0 mt-n2" width="242" height="331" viewBox="0 0 242 331" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M172.014 250.127C137.236 227.74 112.349 192.144 144.586 153.591C157.686 137.932 176.759 127.973 196.524 122.046C234.647 110.639 277.027 113.361 313.349 129.576C338.19 140.666 361.129 159.183 369.934 184.502C383.476 223.496 359.75 260.161 321.569 273.118C288.832 284.223 247.685 279.513 214.885 269.837C201.003 265.743 185.745 258.966 172.014 250.127Z"
          fill="#121519" fill-opacity=".07"
        ></path>
        <path
          d="M20.3265 69.264C19.7064 43.0736 29.8071 17.1878 62.3851 19.8622C75.6229 20.9505 87.9525 27.2066 98.3563 35.3132C118.426 50.9253 132.424 73.896 136.952 98.6413C140.044 115.562 138.424 134.218 127.978 148C111.901 169.236 83.4531 170.283 62.5246 155.209C44.5807 142.281 32.0983 119.217 25.3391 98.6799C22.4836 89.9885 20.5616 79.6021 20.3265 69.264Z"
          fill="#121519" fill-opacity=".07"
        ></path>
      </svg>
      <div class="card-body position-relative z-2 py-5">
        <form class="mx-auto needs-validation" style="max-width: 800px;" novalidate>
          <h2 class="h1 card-title text-center pb-4">{{ $t('contact.title') }}</h2>
          <div class="row g-4">
            <div class="col-sm-6">
              <label class="form-label fs-base" for="last-name">{{ $t('contact.last_name') }}</label>
              <input
                class="form-control form-control-lg"
                type="text"
                :placeholder="$t('contact.last_name_placeholder')"
                v-model="contactDetails.last_name"
                id="last-name"
                required
              />
            </div>
            <div class="col-sm-6">
              <label class="form-label fs-base" for="first-name">{{ $t('contact.first_name') }}</label>
              <input
                class="form-control form-control-lg"
                type="text"
                :placeholder="$t('contact.first_name_placeholder')"
                v-model="contactDetails.first_name"
                id="first-name"
                required
              />
            </div>
            <div class="col-sm-6">
              <label class="form-label fs-base" for="email">{{ $t('contact.email') }}</label>
              <input
                class="form-control form-control-lg"
                type="email"
                :placeholder="$t('contact.email_placeholder')"
                v-model="contactDetails.email"
                id="email"
                required
              />
            </div>
            <div class="col-sm-6">
              <label class="form-label fs-base" for="phone">{{ $t('contact.phone') }}</label>
              <input
                class="form-control form-control-lg"
                type="text"
                :placeholder="$t('contact.phone_placeholder')"
                v-model="contactDetails.phone"
                id="phone"
              />
            </div>
            <div class="col-sm-12">
              <label class="form-label fs-base" for="message">{{ $t('contact.message') }}</label>
              <textarea
                class="form-control form-control-lg"
                rows="6"
                :placeholder="$t('contact.message_placeholder')"
                v-model="contactDetails.message"
                id="message"
                required
              ></textarea>
            </div>
            <div class="col-sm-12 text-center pt-4">
              <button class="btn btn-lg btn-light" type="button" @click="submitForm">{{ $t('contact.send') }}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
  
  <script>
  import { ref } from 'vue';
  import { useContactStore } from '~/domains/contactus/stores/useContactStore';
  import { useI18n } from 'vue-i18n';
  import Swal from 'sweetalert2';
  import { useRuntimeConfig } from '#app';
  
  export default {
    setup() {
      const { t } = useI18n();
      const config = useRuntimeConfig();
  
      const contactStore = useContactStore();
      const { loading, sendContactRequest } = contactStore;
  
      const contactDetails = ref({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
      });
  
      const resetForm = () => {
        contactDetails.value = {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          message: '',
        };
        const form = document.querySelector('.needs-validation');
        form.classList.remove('was-validated');
      };
  
      const submitForm = async () => {
  const form = document.querySelector('.needs-validation');
  form.classList.add('was-validated');

  if (!form.checkValidity()) {
    Swal.fire({
      title: t('contact.error_title'),
      text: t('contact.error_message'),
      icon: 'warning',
      confirmButtonText: 'OK',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
    return;
  }

  try {
    Swal.fire({
      title: t('contact.sending_title'),
      text: t('contact.sending_message'),
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => Swal.showLoading(),
    });

    const applicationId = config.public.applicationId;
    await sendContactRequest(contactDetails.value, applicationId);

    Swal.fire({
      title: t('contact.success_title'),
      text: t('contact.success_message'),
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });

    resetForm();
  } catch (error) {
    Swal.fire({
      title: t('contact.error_title'),
      text: t('contact.error_message'),
      icon: 'error',
      confirmButtonText: t('contact.retry'),
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
    console.error('Erreur lors de l\'envoi du message :', error);
  }
};

      return {
        contactDetails,
        submitForm,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez ici vos styles supplémentaires si nécessaire */
  </style>
  