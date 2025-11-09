<template>
  <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
    <div class="row g-4">
      <!-- Name -->
      <div class="col-sm-6">
        <label class="form-label fs-base" for="name">Name</label>
        <input
          v-model="formData.name"
          type="text"
          class="form-control form-control-lg"
          id="name"
          placeholder="Your name"
          required
        >
        <div class="invalid-feedback">Please enter your name!</div>
      </div>

      <!-- Company -->
      <div class="col-sm-6">
        <label class="form-label fs-base" for="company">Company</label>
        <input
          v-model="formData.company"
          type="text"
          class="form-control form-control-lg"
          id="company"
          placeholder="Your company name"
        >
      </div>

      <!-- Email -->
      <div class="col-sm-6">
        <label class="form-label fs-base" for="email">Email</label>
        <input
          v-model="formData.email"
          type="email"
          class="form-control form-control-lg"
          id="email"
          placeholder="Email address"
          required
        >
        <div class="invalid-feedback">Please provide a valid email address!</div>
      </div>

      <!-- Phone -->
      <div class="col-sm-6">
        <label class="form-label fs-base" for="phone">Phone</label>
        <input
          v-model="formData.phone"
          type="text"
          class="form-control form-control-lg"
          id="phone"
          placeholder="Phone number"
        >
      </div>

      <!-- Message -->
      <div class="col-sm-12">
        <label class="form-label fs-base" for="message">How can we help?</label>
        <textarea
          v-model="formData.message"
          class="form-control form-control-lg"
          id="message"
          rows="6"
          placeholder="Enter your message here..."
          required
        ></textarea>
        <div class="invalid-feedback">Please enter your message!</div>
      </div>

      <!-- Submit Button -->
      <div class="col-sm-12 pt-4">
        <button
          type="submit"
          class="btn btn-primary btn-lg w-100"
          :disabled="isSubmitting"
        >
          <span v-if="!isSubmitting">
            Send Message
            <i class="bi bi-send ms-2"></i>
          </span>
          <span v-else>
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Sending...
          </span>
        </button>
      </div>
    </div>

    <!-- Success Message -->
    <div v-if="showSuccess" class="alert alert-success mt-4" role="alert">
      <i class="bi bi-check-circle me-2"></i>
      Thank you for your message! We'll get back to you within 24 hours.
    </div>

    <!-- Error Message -->
    <div v-if="showError" class="alert alert-danger mt-4" role="alert">
      <i class="bi bi-exclamation-triangle me-2"></i>
      Something went wrong. Please try again or email us directly at info@gammaneutral.ca
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

// Form data
const formData = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

// Form states
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

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

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Reset form on success
    formData.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    }

    form.classList.remove('was-validated')
    showSuccess.value = true

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)

  } catch (error) {
    console.error('Form submission error:', error)
    showError.value = true

    // Hide error message after 5 seconds
    setTimeout(() => {
      showError.value = false
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
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
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
  border: 2px solid #dee2e6;
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
  color: #495057;
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
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #a7f3d0;
}

.alert-danger {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #fecaca;
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
:global(.dark-mode) .form-control,
:global(.dark-mode) .form-select {
  background-color: #1a1a1a;
  border-color: #374151;
  color: #e5e7eb;
}

:global(.dark-mode) .form-control:focus,
:global(.dark-mode) .form-select:focus {
  background-color: #1a1a1a;
  border-color: #8b5cf6;
  color: #e5e7eb;
}

:global(.dark-mode) .form-label {
  color: #e5e7eb;
}

:global(.dark-mode) .form-check-label {
  color: #e5e7eb;
}

:global(.dark-mode) .text-muted {
  color: #9ca3af !important;
}
</style>