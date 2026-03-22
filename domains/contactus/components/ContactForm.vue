<template>
  <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
    <div class="row g-4">
      <!-- First Name -->
      <div class="col-sm-6">
        <label class="form-label fs-base" for="first_name">{{ $t('contact.form.firstName') }}</label>
        <input
          v-model="formData.first_name"
          type="text"
          class="form-control form-control-lg"
          id="first_name"
          :placeholder="$t('contact.form.firstNamePlaceholder')"
          required
        >
        <div class="invalid-feedback">{{ $t('contact.form.validation.firstName') }}</div>
      </div>

      <!-- Last Name -->
      <div class="col-sm-6">
        <label class="form-label fs-base" for="last_name">{{ $t('contact.form.lastName') }}</label>
        <input
          v-model="formData.last_name"
          type="text"
          class="form-control form-control-lg"
          id="last_name"
          :placeholder="$t('contact.form.lastNamePlaceholder')"
          required
        >
        <div class="invalid-feedback">{{ $t('contact.form.validation.lastName') }}</div>
      </div>

      <!-- Email -->
      <div class="col-sm-6">
        <label class="form-label fs-base" for="email">{{ $t('contact.form.email') }}</label>
        <input
          v-model="formData.email"
          type="email"
          class="form-control form-control-lg"
          id="email"
          :placeholder="$t('contact.form.emailPlaceholder')"
          required
        >
        <div class="invalid-feedback">{{ $t('contact.form.validation.email') }}</div>
      </div>

      <!-- Phone -->
      <div class="col-sm-6">
        <label class="form-label fs-base" for="phone">{{ $t('contact.form.phone') }}</label>
        <input
          v-model="formData.phone"
          type="text"
          class="form-control form-control-lg"
          id="phone"
          :placeholder="$t('contact.form.phonePlaceholder')"
        >
      </div>

      <!-- Subject -->
      <div class="col-sm-6">
        <label class="form-label fs-base" for="subject">{{ $t('contact.form.subject') }} <span class="text-muted">{{ $t('contact.form.subjectOptional') }}</span></label>
        <input
          v-model="formData.subject"
          type="text"
          class="form-control form-control-lg"
          id="subject"
          :placeholder="$t('contact.form.subjectPlaceholder')"
        >
      </div>

      <!-- Project Description -->
      <div class="col-sm-12">
        <label class="form-label fs-base" for="project_description">{{ $t('contact.form.projectType') }} <span class="text-muted">{{ $t('contact.form.subjectOptional') }}</span></label>
        <select
          v-model="formData.project_type"
          class="form-select form-select-lg"
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
        <label class="form-label fs-base" for="message">{{ $t('contact.form.message') }}</label>
        <textarea
          v-model="formData.message"
          class="form-control form-control-lg"
          id="message"
          rows="6"
          :placeholder="$t('contact.form.messagePlaceholder')"
          required
        ></textarea>
        <div class="invalid-feedback">{{ $t('contact.form.validation.message') }}</div>
      </div>

      <!-- Submit Button -->
      <div class="col-sm-12 pt-4">
        <button
          type="submit"
          class="btn btn-primary btn-lg w-100"
          :disabled="isSubmitting"
        >
          <span v-if="!isSubmitting">
            {{ $t('contact.form.send') }}
            <i class="bi bi-send ms-2"></i>
          </span>
          <span v-else>
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            {{ $t('contact.form.sending') }}
          </span>
        </button>
      </div>
    </div>

    <!-- Success Message -->
    <div v-if="showSuccess" class="alert alert-success mt-4" role="alert">
      <i class="bi bi-check-circle me-2"></i>
      {{ $t('contact.form.success') }}
    </div>

    <!-- Error Message -->
    <div v-if="showError" class="alert alert-danger mt-4" role="alert">
      <i class="bi bi-exclamation-triangle me-2"></i>
      {{ errorMessage || $t('contact.form.error') }}
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useContactStore } from '../stores/useContactStore'

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
/* Clean form styles */
.form-control,
.form-select {
  border: 1px solid var(--bs-border-color, #dee2e6);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  background-color: var(--bs-body-bg, #ffffff);
  color: var(--bs-body-color, #212529);
}

.form-control:focus,
.form-select:focus {
  border-color: #8b5cf6;
  box-shadow: 0 0 0 0.2rem rgba(139, 92, 246, 0.15);
}

.form-check-input {
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 0.125rem;
  border: 2px solid var(--bs-border-color, #dee2e6);
  transition: all 0.3s ease;
}

.form-check-input:checked {
  background-color: #8b5cf6;
  border-color: #8b5cf6;
}

.form-check-input:focus {
  box-shadow: 0 0 0 0.2rem rgba(139, 92, 246, 0.15);
}

/* Button styles */
.btn-primary {
  background-color: #8b5cf6;
  border-color: #8b5cf6;
  font-weight: 600;
  border-radius: 0.5rem;
  padding: 0.75rem 2rem;
  transition: all 0.3s ease;
}

.btn-primary:hover:not(:disabled) {
  background-color: #7c3aed;
  border-color: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
}

.btn-primary:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

/* Labels */
.form-label {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--bs-body-color, #495057);
}

/* Validation */
.invalid-feedback {
  font-size: 0.875rem;
  margin-top: 0.25rem;
  color: #dc3545;
}

/* Alerts */
.alert {
  border-radius: 0.5rem;
  border: none;
  padding: 1rem 1.25rem;
}

.alert-success {
  background-color: var(--bs-success-bg-subtle, #d1fae5);
  color: var(--bs-success-text-emphasis, #065f46);
  border: 1px solid var(--bs-success-border-subtle, #a7f3d0);
}

.alert-danger {
  background-color: var(--bs-danger-bg-subtle, #fee2e2);
  color: var(--bs-danger-text-emphasis, #991b1b);
  border: 1px solid var(--bs-danger-border-subtle, #fecaca);
}

/* Checkboxes inline layout */
.form-check-inline {
  margin-right: 2rem;
  margin-bottom: 0.75rem;
}

/* Responsive */
@media (max-width: 575.98px) {
  .form-check-inline {
    display: block;
    margin-right: 0;
    margin-bottom: 0.75rem;
  }

  .btn-lg {
    padding: 0.75rem 1.5rem;
  }
}

/* Dark mode support */
:global([data-bs-theme="dark"]) .form-control,
:global([data-bs-theme="dark"]) .form-select {
  background-color: #1a1a2e;
  border-color: var(--bs-border-color);
  color: var(--bs-body-color);
}

:global([data-bs-theme="dark"]) .form-control:focus,
:global([data-bs-theme="dark"]) .form-select:focus {
  background-color: #1a1a2e;
  border-color: #8b5cf6;
  color: var(--bs-body-color);
}

:global([data-bs-theme="dark"]) .form-label {
  color: var(--bs-body-color);
}

:global([data-bs-theme="dark"]) .form-check-label {
  color: var(--bs-body-color);
}
</style>