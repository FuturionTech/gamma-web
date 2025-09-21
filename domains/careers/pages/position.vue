<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-dark position-relative py-4" style="margin-top: 80px;">
      <div class="container position-relative z-2 py-4">
        <div class="row">
          <div class="col-lg-10">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="pt-2 pb-2 breadcrumb">
                <li class="breadcrumb-item">
                  <NuxtLink to="/" class="text-white-50">Home</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                  <NuxtLink to="/careers" class="text-white-50">Careers</NuxtLink>
                </li>
                <li class="breadcrumb-item text-white active" aria-current="page">{{ position?.title || 'Position' }}</li>
              </ol>
            </nav>

            <div v-if="position">
              <h1 class="h1 text-white mb-3">{{ position.title }}</h1>
              <div class="d-flex flex-wrap gap-3 text-white-50">
                <span><i class="bi bi-briefcase me-2"></i>{{ position.department }}</span>
                <span><i class="bi bi-geo-alt me-2"></i>{{ position.location }}</span>
                <span><i class="bi bi-clock me-2"></i>{{ position.type }}</span>
                <span v-if="position.remote" class="badge bg-success">Remote Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Position Details & Application -->
    <section class="container py-5" v-if="position">
      <div class="row g-5">
        <!-- Left Column - Job Details -->
        <div class="col-lg-8">
          <!-- Overview Card -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-4">
              <h3 class="h5 mb-3">Position Overview</h3>
              <p class="text-muted">{{ position.description }}</p>

              <div class="row g-3 mt-3">
                <div class="col-sm-6">
                  <div class="d-flex align-items-center">
                    <i class="bi bi-currency-dollar text-primary me-2 fs-5"></i>
                    <div>
                      <small class="text-muted d-block">Salary Range</small>
                      <strong>{{ position.salary }}</strong>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="d-flex align-items-center">
                    <i class="bi bi-graph-up text-primary me-2 fs-5"></i>
                    <div>
                      <small class="text-muted d-block">Experience</small>
                      <strong>{{ position.experience }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Responsibilities -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-4">
              <h3 class="h5 mb-3">Key Responsibilities</h3>
              <ul class="list-unstyled">
                <li v-for="(responsibility, index) in position.responsibilities" :key="index" class="mb-2">
                  <i class="bi bi-check-circle text-primary me-2"></i>
                  {{ responsibility }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Requirements -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-4">
              <h3 class="h5 mb-3">Requirements</h3>
              <ul class="list-unstyled">
                <li v-for="(requirement, index) in position.requirements" :key="index" class="mb-2">
                  <i class="bi bi-check-circle text-primary me-2"></i>
                  {{ requirement }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Nice to Have -->
          <div class="card border-0 shadow-sm mb-4" v-if="position.niceToHave && position.niceToHave.length">
            <div class="card-body p-4">
              <h3 class="h5 mb-3">Nice to Have</h3>
              <ul class="list-unstyled">
                <li v-for="(nice, index) in position.niceToHave" :key="index" class="mb-2">
                  <i class="bi bi-plus-circle text-success me-2"></i>
                  {{ nice }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Benefits -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-4">
              <h3 class="h5 mb-3">What We Offer</h3>
              <div class="row g-3">
                <div v-for="(benefit, index) in position.benefits" :key="index" class="col-md-6">
                  <div class="d-flex">
                    <i class="bi bi-star-fill text-warning me-2 mt-1"></i>
                    <span>{{ benefit }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Application Form -->
        <div class="col-lg-4">
          <div class="card border-0 shadow-sm sticky-top" style="top: 100px;">
            <div class="card-body p-4">
              <h3 class="h5 mb-4">Apply for this Position</h3>

              <form @submit.prevent="submitApplication" v-if="!applicationSubmitted">
                <!-- Name -->
                <div class="mb-3">
                  <label for="name" class="form-label">Full Name *</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="applicationForm.name"
                    required
                    placeholder="John Doe"
                  >
                </div>

                <!-- Email -->
                <div class="mb-3">
                  <label for="email" class="form-label">Email Address *</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="applicationForm.email"
                    required
                    placeholder="john@example.com"
                  >
                </div>

                <!-- Phone -->
                <div class="mb-3">
                  <label for="phone" class="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    v-model="applicationForm.phone"
                    required
                    placeholder="+1 (416) 555-1234"
                  >
                </div>

                <!-- LinkedIn -->
                <div class="mb-3">
                  <label for="linkedin" class="form-label">LinkedIn Profile</label>
                  <input
                    type="url"
                    class="form-control"
                    id="linkedin"
                    v-model="applicationForm.linkedin"
                    placeholder="https://linkedin.com/in/yourprofile"
                  >
                </div>

                <!-- Resume Upload -->
                <div class="mb-3">
                  <label for="resume" class="form-label">Resume/CV *</label>
                  <input
                    type="file"
                    class="form-control"
                    id="resume"
                    @change="handleResumeUpload"
                    accept=".pdf,.doc,.docx"
                    required
                  >
                  <small class="text-muted">PDF, DOC, or DOCX (Max 5MB)</small>
                </div>

                <!-- Cover Letter -->
                <div class="mb-3">
                  <label for="coverLetter" class="form-label">Cover Letter</label>
                  <textarea
                    class="form-control"
                    id="coverLetter"
                    rows="4"
                    v-model="applicationForm.coverLetter"
                    placeholder="Tell us why you're interested in this position..."
                  ></textarea>
                </div>

                <!-- Portfolio -->
                <div class="mb-3">
                  <label for="portfolio" class="form-label">Portfolio/GitHub</label>
                  <input
                    type="url"
                    class="form-control"
                    id="portfolio"
                    v-model="applicationForm.portfolio"
                    placeholder="https://github.com/username"
                  >
                </div>

                <!-- Availability -->
                <div class="mb-3">
                  <label for="availability" class="form-label">When can you start? *</label>
                  <select class="form-select" v-model="applicationForm.availability" required>
                    <option value="">Select...</option>
                    <option value="immediately">Immediately</option>
                    <option value="2-weeks">2 weeks</option>
                    <option value="1-month">1 month</option>
                    <option value="2-months">2 months</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <!-- Salary Expectation -->
                <div class="mb-3">
                  <label for="salary" class="form-label">Salary Expectations</label>
                  <input
                    type="text"
                    class="form-control"
                    id="salary"
                    v-model="applicationForm.salaryExpectation"
                    placeholder="e.g., $120,000 - $140,000"
                  >
                </div>

                <!-- Privacy Consent -->
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="consent"
                    v-model="applicationForm.consent"
                    required
                  >
                  <label class="form-check-label small" for="consent">
                    I consent to Gamma Neutral storing my data for recruitment purposes
                  </label>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="btn btn-primary w-100" :disabled="isSubmitting">
                  <span v-if="!isSubmitting">
                    <i class="bi bi-send me-2"></i>
                    Submit Application
                  </span>
                  <span v-else>
                    <span class="spinner-border spinner-border-sm me-2"></span>
                    Submitting...
                  </span>
                </button>

                <p class="text-muted small mt-3 mb-0">
                  * Required fields. We'll review your application and get back to you within 5 business days.
                </p>
              </form>

              <!-- Success Message -->
              <div v-else class="text-center">
                <div class="mb-3">
                  <i class="bi bi-check-circle text-success" style="font-size: 3rem;"></i>
                </div>
                <h5 class="text-success mb-3">Application Submitted!</h5>
                <p class="text-muted">
                  Thank you for applying to the {{ position.title }} position.
                  We'll review your application and contact you soon.
                </p>
                <NuxtLink to="/careers" class="btn btn-outline-primary">
                  View Other Positions
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Company Culture Card -->
          <div class="card border-0 shadow-sm mt-4">
            <div class="card-body p-4">
              <h5 class="mb-3">Why Join Gamma Neutral?</h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <i class="bi bi-check text-primary me-2"></i>
                  Work on cutting-edge AI projects
                </li>
                <li class="mb-2">
                  <i class="bi bi-check text-primary me-2"></i>
                  Learn from industry experts
                </li>
                <li class="mb-2">
                  <i class="bi bi-check text-primary me-2"></i>
                  Competitive compensation
                </li>
                <li class="mb-2">
                  <i class="bi bi-check text-primary me-2"></i>
                  Growth opportunities
                </li>
                <li class="mb-0">
                  <i class="bi bi-check text-primary me-2"></i>
                  Inclusive culture
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Position Not Found -->
    <section class="container py-5 text-center" v-else>
      <div class="py-5">
        <i class="bi bi-exclamation-circle text-warning" style="font-size: 3rem;"></i>
        <h2 class="mt-3 mb-3">Position Not Found</h2>
        <p class="text-muted mb-4">
          The position you're looking for doesn't exist or has been filled.
        </p>
        <NuxtLink to="/careers" class="btn btn-primary">
          View All Open Positions
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { getPositionById, type JobPosition } from '~/domains/careers/data/positions'

const route = useRoute()
const position = ref<JobPosition | undefined>()
const applicationSubmitted = ref(false)
const isSubmitting = ref(false)

// Get position data
position.value = getPositionById(route.params.id as string)

// Application form data
const applicationForm = reactive({
  name: '',
  email: '',
  phone: '',
  linkedin: '',
  resume: null as File | null,
  coverLetter: '',
  portfolio: '',
  availability: '',
  salaryExpectation: '',
  consent: false
})

// Handle resume upload
const handleResumeUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB')
      target.value = ''
      return
    }
    applicationForm.resume = file
  }
}

// Submit application
const submitApplication = async () => {
  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))

  // In a real application, you would:
  // 1. Upload the resume to a storage service
  // 2. Send the application data to your backend
  // 3. Send confirmation email to the applicant

  console.log('Application submitted:', applicationForm)

  isSubmitting.value = false
  applicationSubmitted.value = true

  // Scroll to top to show success message
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// SEO
useHead({
  title: position.value ? `${position.value.title} - Careers at Gamma Neutral` : 'Position - Gamma Neutral',
  meta: [
    {
      name: 'description',
      content: position.value
        ? `Apply for ${position.value.title} position at Gamma Neutral. ${position.value.summary}`
        : 'View job position details and apply at Gamma Neutral Consulting.'
    }
  ]
})
</script>

<style scoped>
/* Breadcrumb styles */
.breadcrumb {
  background: transparent;
  padding: 0;
  margin-bottom: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

.breadcrumb-item a {
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-item a:hover {
  color: white !important;
}

/* Form styles */
.form-control:focus,
.form-select:focus {
  border-color: #8b5cf6;
  box-shadow: 0 0 0 0.2rem rgba(139, 92, 246, 0.25);
}

/* Card hover effects */
.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

/* Sticky sidebar on desktop */
@media (min-width: 992px) {
  .sticky-top {
    position: sticky !important;
  }
}
</style>