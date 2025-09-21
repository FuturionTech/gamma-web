<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-dark position-relative py-5">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><NuxtLink to="/" class="text-white-50">Home</NuxtLink></li>
                <li class="breadcrumb-item active text-white" aria-current="page">Contact</li>
              </ol>
            </nav>

            <!-- Page Title -->
            <h1 class="display-4 fw-bold text-white mb-4">Let's Connect</h1>
            <p class="lead text-white-50 mb-5">
              Ready to transform your data into competitive advantage? Our team of experts is here to help you navigate your digital transformation journey.
            </p>

            <!-- Quick Contact Info -->
            <div class="d-flex flex-column flex-sm-row gap-4">
              <div>
                <p class="text-white-50 mb-1">Call us</p>
                <a href="tel:+14165551234" class="text-white text-decoration-none fs-5">+1 (416) 555-1234</a>
              </div>
              <div>
                <p class="text-white-50 mb-1">Email us</p>
                <a href="mailto:info@gammaneutral.com" class="text-white text-decoration-none fs-5">info@gammaneutral.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Contact Section -->
    <section class="py-5 bg-light">
      <div class="container py-5">
        <div class="row g-5">
          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="card shadow-sm border-0">
              <div class="card-body p-5">
                <h2 class="h3 mb-4">Send us a message</h2>
                <ContactForm />
              </div>
            </div>
          </div>

          <!-- Contact Information Sidebar -->
          <div class="col-lg-4">
            <!-- Office Card -->
            <div class="card shadow-sm border-0 mb-4">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-primary bg-opacity-10 rounded-3 p-3 me-3">
                    <i class="bi bi-building text-primary fs-5"></i>
                  </div>
                  <h3 class="h5 mb-0">Office</h3>
                </div>
                <p class="mb-2">123 Bay Street, Suite 1000</p>
                <p class="mb-3">Toronto, ON M5J 2T3</p>
                <a href="https://maps.google.com" target="_blank" class="btn btn-sm btn-outline-primary">
                  <i class="bi bi-map me-1"></i> Get Directions
                </a>
              </div>
            </div>

            <!-- Working Hours Card -->
            <div class="card shadow-sm border-0 mb-4">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-success bg-opacity-10 rounded-3 p-3 me-3">
                    <i class="bi bi-clock text-success fs-5"></i>
                  </div>
                  <h3 class="h5 mb-0">Working Hours</h3>
                </div>
                <div class="mb-2">
                  <div class="d-flex justify-content-between">
                    <span>Monday - Friday</span>
                    <strong>9:00 - 18:00</strong>
                  </div>
                </div>
                <div>
                  <div class="d-flex justify-content-between">
                    <span>Saturday - Sunday</span>
                    <strong class="text-muted">Closed</strong>
                  </div>
                </div>
              </div>
            </div>

            <!-- Support Card -->
            <div class="card shadow-sm border-0">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-info bg-opacity-10 rounded-3 p-3 me-3">
                    <i class="bi bi-headset text-info fs-5"></i>
                  </div>
                  <h3 class="h5 mb-0">Support</h3>
                </div>
                <p class="mb-2">
                  <small class="text-muted d-block">Support Hotline</small>
                  <a href="tel:+18885551234" class="text-decoration-none">+1 (888) 555-1234</a>
                </p>
                <p class="mb-0">
                  <small class="text-muted d-block">Support Email</small>
                  <a href="mailto:support@gammaneutral.com" class="text-decoration-none">support@gammaneutral.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="position-relative">
      <div class="ratio ratio-21x9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92394.75654292!2d-79.47318668450347!3d43.68425227912119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d5c4c4c4c5%3A0x4c4c4c4c4c4c4c!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sca!4v1634567890123!5m2!1sen!2sca"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import ContactForm from '~/domains/contactus/components/ContactForm'

// SEO Meta tags
useHead({
  title: 'Contact Us - Gamma Neutral Consulting',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Gamma Neutral Consulting. Transform your data into actionable insights with our expert team in Toronto.'
    },
    {
      name: 'keywords',
      content: 'contact gamma neutral, data consulting toronto, business analytics contact, data transformation services'
    },
    {
      name: 'author',
      content: 'Gamma Neutral Consulting'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    }
  ]
})
</script>

<style scoped>
/* Clean Modern Design */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 1rem;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08) !important;
}

/* Hero Section */
.bg-dark {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%) !important;
}

/* Typography */
.display-4 {
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Icon Containers */
.bg-primary.bg-opacity-10 {
  background-color: rgba(139, 92, 246, 0.1) !important;
}

.bg-success.bg-opacity-10 {
  background-color: rgba(16, 185, 129, 0.1) !important;
}

.bg-info.bg-opacity-10 {
  background-color: rgba(14, 165, 233, 0.1) !important;
}

/* Breadcrumb styling for dark background */
.breadcrumb {
  background: transparent;
  padding: 0;
  margin-bottom: 1.5rem;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

.breadcrumb-item a {
  text-decoration: none;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}

/* Button Enhancement */
.btn-outline-primary {
  border-width: 2px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(139, 92, 246, 0.2);
}

/* Links in cards */
.card a {
  color: inherit;
  transition: color 0.3s ease;
}

.card a:hover {
  color: var(--bs-primary);
}

/* Responsive adjustments */
@media (max-width: 991.98px) {
  .display-4 {
    font-size: 2.5rem;
  }

  .card-body {
    padding: 2rem !important;
  }
}

@media (max-width: 575.98px) {
  .display-4 {
    font-size: 2rem;
  }

  .lead {
    font-size: 1.1rem;
  }

  .card-body.p-5 {
    padding: 2rem !important;
  }
}

/* Map section */
.ratio {
  border: 0;
  overflow: hidden;
}

/* Dark mode support */
:global(.dark-mode) .bg-light {
  background-color: #0f0f0f !important;
}

:global(.dark-mode) .card {
  background-color: #1a1a1a !important;
  color: #e5e7eb !important;
}

:global(.dark-mode) .text-muted {
  color: #9ca3af !important;
}

:global(.dark-mode) .shadow-sm {
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.05) !important;
}
</style>