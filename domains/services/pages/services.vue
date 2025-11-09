<template>
  <div>
    <!-- Services Hero Section -->
    <section class="container py-5 mb-md-3 mb-lg-4 mb-xxl-5 mt-navbar">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mt-3">
        <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/" class="text-decoration-none">Home</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">Services</li>
        </ol>
      </nav>

      <div class="text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">
        <h1 class="display-4 fw-bold mb-3">Our Services</h1>
        <p class="lead text-body-secondary mb-4 mb-lg-5 mx-auto" style="max-width: 600px;">
          We deliver innovative, secure, and scalable solutions that drive informed decision-making and operational excellence.
        </p>
      </div>
    </section>

    <!-- Services Grid Section -->
    <section class="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <!-- Service Cards -->
        <div class="col" v-for="(service, index) in services" :key="index">
          <div class="card service-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="card-body p-4 p-lg-5">
              <div class="service-icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3 mb-4 mx-auto text-center" style="width: fit-content;">
                <i :class="`${service.icon} fs-1 text-primary`"></i>
              </div>

              <h3 class="h4 fw-bold text-center mb-3">{{ service.title }}</h3>
              <p class="text-body-secondary text-center mb-4">{{ service.description }}</p>

              <div class="text-center">
                <span class="badge bg-primary bg-opacity-10 text-primary fw-medium px-3 py-2">
                  {{ service.category }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Approach Section -->
    <section class="bg-secondary bg-opacity-25 py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-6 fw-bold mb-3">Our Approach</h2>
          <p class="lead text-body-secondary mx-auto" style="max-width: 500px;">
            We follow a structured methodology to deliver results
          </p>
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
          <div v-for="(step, index) in approachSteps" :key="index" class="col">
            <div class="text-center">
              <div class="bg-primary rounded-circle p-3 mb-3 mx-auto" style="width: 64px; height: 64px; display: flex; align-items: center; justify-content: center;">
                <span class="text-white fw-bold fs-4">{{ index + 1 }}</span>
              </div>
              <h4 class="h6 fw-bold mb-2">{{ step.title }}</h4>
              <p class="fs-sm text-body-secondary mb-0">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="container py-5 my-md-3 my-lg-4 my-xxl-5">
      <div class="bg-primary bg-opacity-5 rounded-4 p-5 text-center">
        <h2 class="h1 fw-bold mb-3">Ready to Transform Your Data?</h2>
        <p class="lead text-body-secondary mb-4 mx-auto" style="max-width: 500px;">
          Let's discuss how our comprehensive data solutions can drive your business forward.
        </p>
        <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <NuxtLink to="/contact" class="btn btn-primary btn-lg px-4">
            <i class="bi-telephone-fill me-2"></i>
            Get Started Today
          </NuxtLink>
          <NuxtLink to="/about" class="btn btn-outline-primary btn-lg px-4">
            Learn More About Us
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#imports'
const { t, locale } = useI18n();

useHead({
  title: 'Our Services - Gamma Neutral Consulting',
  meta: [
    { name: 'description', content: 'Comprehensive data solutions including AI, Data Engineering, Cybersecurity, Business Intelligence, Big Data, Cloud Computing, and Project Management services.' },
    { name: 'keywords', content: 'artificial intelligence, data engineering, cybersecurity, business intelligence, big data, cloud computing, project management, data solutions, AI consulting' },
    { name: 'author', content: 'Gamma Neutral Consulting' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})

const services = ref([
  {
    title: 'Artificial Intelligence (AI)',
    description: 'Developing intelligent systems that automate processes and provide predictive insights.',
    icon: 'bi-cpu',
    category: 'AI & Machine Learning'
  },
  {
    title: 'Data Engineering',
    description: 'Designing and building robust data architectures to ensure seamless data flow and accessibility.',
    icon: 'bi-diagram-3',
    category: 'Data Infrastructure'
  },
  {
    title: 'Cybersecurity',
    description: 'Implementing advanced security measures to protect data integrity and privacy.',
    icon: 'bi-shield-check',
    category: 'Security & Compliance'
  },
  {
    title: 'Business Intelligence (BI)',
    description: 'Transforming data into actionable insights through advanced analytics and reporting tools.',
    icon: 'bi-graph-up-arrow',
    category: 'Analytics & Insights'
  },
  {
    title: 'Big Data',
    description: 'Leveraging large datasets to uncover trends and patterns that inform strategic decisions.',
    icon: 'bi-database',
    category: 'Data Analytics'
  },
  {
    title: 'Cloud Computing',
    description: 'Providing scalable and flexible cloud solutions that enhance collaboration and efficiency.',
    icon: 'bi-cloud-check',
    category: 'Cloud Solutions'
  },
  {
    title: 'Project Management',
    description: 'Ensuring successful project delivery through meticulous planning and execution.',
    icon: 'bi-kanban',
    category: 'Management & Strategy'
  }
]);

const approachSteps = ref([
  {
    title: 'Discovery',
    description: 'Understanding your business challenges and objectives.'
  },
  {
    title: 'Design',
    description: 'Crafting customized solutions that address your specific needs.'
  },
  {
    title: 'Development',
    description: 'Building and implementing the solution with precision.'
  },
  {
    title: 'Deployment',
    description: 'Ensuring smooth integration and adoption.'
  },
  {
    title: 'Support',
    description: 'Providing ongoing assistance to ensure sustained success.'
  }
]);

</script>

<style scoped>
/* Service Card Hover Effects */
.service-card {
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  background: var(--bs-body-bg);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12) !important;
}

/* Icon Wrapper Animation */
.service-icon-wrapper {
  transition: all 0.3s ease-in-out;
}

.service-card:hover .service-icon-wrapper {
  transform: scale(1.05);
  background: rgba(139, 92, 246, 0.15) !important;
}

/* Badge hover effect */
.service-card .badge {
  transition: all 0.3s ease-in-out;
}

.service-card:hover .badge {
  background: rgba(139, 92, 246, 0.15) !important;
  color: var(--bs-primary) !important;
}

/* Dark mode compatibility */
:global([data-bs-theme="dark"]) .service-card {
  background: var(--bs-dark) !important;
  border: 1px solid rgba(139, 92, 246, 0.1) !important;
}

:global([data-bs-theme="dark"]) .service-card:hover {
  box-shadow: 0 12px 30px rgba(139, 92, 246, 0.15) !important;
}

:global([data-bs-theme="dark"]) .service-icon-wrapper {
  background: rgba(139, 92, 246, 0.1) !important;
}

:global([data-bs-theme="dark"]) .service-card:hover .service-icon-wrapper {
  background: rgba(139, 92, 246, 0.2) !important;
}

/* Enhanced accessibility */
.service-card:focus-visible {
  outline: 2px solid var(--bs-primary);
  outline-offset: 2px;
}

/* Responsive hover effects - disable on touch devices */
@media (hover: none) {
  .service-card:hover {
    transform: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .service-card,
  .service-icon-wrapper,
  .badge {
    transition: none !important;
  }
}

/* Navbar spacing for pages without hero section */
.mt-navbar {
  padding-top: 120px;
}
</style>
