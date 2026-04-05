<template>
  <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
    <div class="row g-4">
      <!-- Name Inputs - Locale Aware Order -->
      <template v-if="locale === 'fr'">
        <!-- Nom de famille (Last Name) first for French -->
        <div class="col-sm-6">
          <label class="form-label fs-small fw-bold text-uppercase ls-1 mb-2" for="last_name">{{ $t('contact.form.lastName') }}</label>
          <input
            v-model="formData.last_name"
            type="text"
            class="form-control premium-input shadow-none"
            id="last_name"
            :placeholder="$t('contact.form.lastNamePlaceholder')"
            required
          >
          <div class="invalid-feedback">{{ $t('contact.form.validation.lastName') }}</div>
        </div>

        <div class="col-sm-6">
          <label class="form-label fs-small fw-bold text-uppercase ls-1 mb-2" for="first_name">{{ $t('contact.form.firstName') }}</label>
          <input
            v-model="formData.first_name"
            type="text"
            class="form-control premium-input shadow-none"
            id="first_name"
            :placeholder="$t('contact.form.firstNamePlaceholder')"
            required
          >
          <div class="invalid-feedback">{{ $t('contact.form.validation.firstName') }}</div>
        </div>
      </template>

      <template v-else>
        <!-- First Name first for English/Others -->
        <div class="col-sm-6">
          <label class="form-label fs-small fw-bold text-uppercase ls-1 mb-2" for="first_name">{{ $t('contact.form.firstName') }}</label>
          <input
            v-model="formData.first_name"
            type="text"
            class="form-control premium-input shadow-none"
            id="first_name"
            :placeholder="$t('contact.form.firstNamePlaceholder')"
            required
          >
          <div class="invalid-feedback">{{ $t('contact.form.validation.firstName') }}</div>
        </div>

        <div class="col-sm-6">
          <label class="form-label fs-small fw-bold text-uppercase ls-1 mb-2" for="last_name">{{ $t('contact.form.lastName') }}</label>
          <input
            v-model="formData.last_name"
            type="text"
            class="form-control premium-input shadow-none"
            id="last_name"
            :placeholder="$t('contact.form.lastNamePlaceholder')"
            required
          >
          <div class="invalid-feedback">{{ $t('contact.form.validation.lastName') }}</div>
        </div>
      </template>

      <!-- Email -->
      <div class="col-sm-6">
        <label class="form-label fs-small fw-bold text-uppercase ls-1 mb-2" for="email">{{ $t('contact.form.email') }}</label>
        <input
          v-model="formData.email"
          type="email"
          class="form-control premium-input shadow-none"
          id="email"
          :placeholder="$t('contact.form.emailPlaceholder')"
          required
        >
        <div class="invalid-feedback">{{ $t('contact.form.validation.email') }}</div>
      </div>

      <!-- Phone -->
      <div class="col-sm-6">
        <label class="form-label fs-small fw-bold text-uppercase ls-1 mb-2" for="phone">{{ $t('contact.form.phone') }}</label>
        <input
          v-model="formData.phone"
          type="text"
          class="form-control premium-input shadow-none"
          id="phone"
          :placeholder="$t('contact.form.phonePlaceholder')"
        >
      </div>

      <!-- Subject -->
      <div class="col-sm-6">
        <label class="form-label fs-small fw-bold text-uppercase ls-1 mb-2" for="subject">
          {{ $t('contact.form.subject') }} 
          <span class="text-muted text-lowercase fw-normal">({{ $t('contact.form.subjectOptional') }})</span>
        </label>
        <input
          v-model="formData.subject"
          type="text"
          class="form-control premium-input shadow-none"
          id="subject"
          :placeholder="$t('contact.form.subjectPlaceholder')"
        >
      </div>

      <!-- Project Selection -->
      <div class="col-sm-6">
        <label class="form-label fs-small fw-bold text-uppercase ls-1 mb-2" for="project_description">
          {{ $t('contact.form.projectType') }}
          <span class="text-muted text-lowercase fw-normal">({{ $t('contact.form.subjectOptional') }})</span>
        </label>
        <select
          v-model="formData.project_type"
          class="form-select premium-input shadow-none"
          id="project_description"
        >
          <option value="" disabled selected>{{ $t('contact.form.projectTypePlaceholder') }}</option>
          <option value="ai-ml">{{ $t('contact.form.projectOptions.aiMl') }}</option>
          <option value="data-engineering">{{ $t('contact.form.projectOptions.dataEngineering') }}</option>
          <option value="cloud-migration">{{ $t('contact.form.projectOptions.cloudMigration') }}</option>
          <option value="cybersecurity">{{ $t('contact.form.projectOptions.cybersecurity') }}</option>
          <option value="business-intelligence">{{ $t('contact.form.projectOptions.bi') }}</option>
          <option value="big-data">{{ $t('contact.form.projectOptions.bigData') }}</option>
          <option value="other">{{ $t('contact.form.projectOptions.other') }}</option>
        </select>
      </div>

      <!-- Message -->
      <div class="col-sm-12">
        <label class="form-label fs-small fw-bold text-uppercase ls-1 mb-2" for="message">{{ $t('contact.form.message') }}</label>
        <textarea
          v-model="formData.message"
          class="form-control premium-input shadow-none"
          id="message"
          rows="5"
          :placeholder="$t('contact.form.messagePlaceholder')"
          required
        ></textarea>
        <div class="invalid-feedback">{{ $t('contact.form.validation.message') }}</div>
      </div>

      <!-- Submit Button -->
      <div class="col-sm-12 pt-3">
        <button
          type="submit"
          class="btn btn-primary-premium w-100 py-3 rounded-pill fw-bold shadow-lg"
          :disabled="isSubmitting"
        >
          <span v-if="!isSubmitting">
            {{ $t('contact.form.send') }}
            <i class="bi bi-send-fill ms-2"></i>
          </span>
          <span v-else>
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            {{ $t('contact.form.sending') }}
          </span>
        </button>
      </div>
    </div>

    <!-- Success Message -->
    <div v-if="showSuccess" class="alert-premium-success mt-4 d-flex align-items-center" role="alert">
      <div class="alert-icon me-3">
        <i class="bi bi-check-circle-fill"></i>
      </div>
      <div>
        <h5 class="h6 fw-bold mb-1">Message envoyé !</h5>
        <p class="small mb-0 opacity-80">{{ $t('contact.form.success') }}</p>
      </div>
    </div>

    <!-- Error Message -->
    <div v-if="showError" class="alert-premium-danger mt-4 d-flex align-items-center" role="alert">
      <div class="alert-icon me-3">
        <i class="bi bi-exclamation-triangle-fill"></i>
      </div>
      <div>
        <h5 class="h6 fw-bold mb-1">Erreur</h5>
        <p class="small mb-0 opacity-80">{{ errorMessage || $t('contact.form.error') }}</p>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useContactStore } from '../stores/useContactStore'

const { $trackEvent } = useNuxtApp()
const { locale } = useI18n()

interface ContactFormData {
  first_name: string
  last_name: string
  email: string
  phone: string
  subject: string
  project_type: string
  message: string
}

// Initialize store
const contactStore = useContactStore()

// Form data
const formData = ref<ContactFormData>({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  subject: '',
  project_type: '',
  message: ''
})

// Form states
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const errorMessage = ref('')

// Handle form submission
const handleSubmit = async () => {
  // Basic validation
  const form = document.querySelector('.needs-validation')
  if (!form.checkValidity()) {
    form.classList.add('was-validated')
    return
  }

  isSubmitting.value = true
  showSuccess.value = false
  showError.value = false
  errorMessage.value = ''

  try {
    // Call the store to send the contact request
    await contactStore.sendContactRequest(formData.value)

    // Reset form on success
    formData.value = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      subject: '',
      project_type: '',
      message: ''
    }

    form.classList.remove('was-validated')
    showSuccess.value = true

    // Analytics: track successful contact form submission
    $trackEvent('contact_form_submit', {
      subject: formData.value.subject || null,
      project_type: formData.value.project_type || null,
    })

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)

  } catch (error) {
    // Error is captured and displayed to the user via showError
    errorMessage.value = error instanceof Error ? error.message : 'Failed to send your message. Please try again.'
    showError.value = true

    // Hide error message after 5 seconds
    setTimeout(() => {
      showError.value = false
      errorMessage.value = ''
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* ================================
   PREMIUM INPUTS
   ================================ */
.premium-input {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #0f172a;
}

.premium-input:focus {
  border-color: #7c3aed;
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.08) !important;
}

.premium-input::placeholder {
  color: #94a3b8;
  font-weight: 400;
}

/* ================================
   BUTTONS & ACTIONS
   ================================ */
.btn-primary-premium {
  background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
  border: none;
  color: #ffffff;
  transition: all 0.3s ease;
}

.btn-primary-premium:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(124, 58, 237, 0.25) !important;
  color: #ffffff;
}

.btn-primary-premium:active {
  transform: translateY(0);
}

/* ================================
   ALERTS & VALIDATION
   ================================ */
.alert-premium-success {
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 16px;
  padding: 1.25rem;
  color: #065f46;
}

.alert-premium-danger {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 16px;
  padding: 1.25rem;
  color: #991b1b;
}

.alert-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.invalid-feedback {
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-left: 4px;
}

/* ================================
   UTILS
   ================================ */
.fs-small { font-size: 0.75rem; }
.ls-1 { letter-spacing: 0.05em; }

/* ================================
   DARK MODE
   ================================ */
:global([data-bs-theme="dark"]) .premium-input {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

:global([data-bs-theme="dark"]) .premium-input:focus {
  background: rgba(255, 255, 255, 0.05);
  border-color: #a78bfa;
}

:global([data-bs-theme="dark"]) .alert-premium-success {
  background: rgba(16, 185, 129, 0.1);
  color: #34d399;
}

:global([data-bs-theme="dark"]) .alert-premium-danger {
  background: rgba(239, 68, 68, 0.1);
  color: #f87171;
}
</style>