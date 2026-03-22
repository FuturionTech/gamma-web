<template>
  <!-- SaaS Hero Section with Video Background -->
  <section class="position-relative min-vh-100 overflow-hidden bg-dark">
    <!-- Video Background -->
    <div class="position-absolute top-0 start-0 w-100 h-100">
      <video
        class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover opacity-50"
        autoplay
        muted
        loop
        playsinline
        poster="/assets/videos/toronto_drone_footage.mp4"
      >
        <source src="/assets/videos/toronto_drone_footage.mp4" type="video/mp4">
        <!-- Fallback image -->
        <img src="https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2065&auto=format&fit=crop" alt="Toronto skyline">
      </video>
      <!-- Dark Overlay -->
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark" style="opacity: 0.4;"></div>
    </div>

    <!-- Main Content -->
    <div class="container position-relative" style="z-index: 10;">
      <div class="row min-vh-100 align-items-center py-5">
        <div class="col-12 col-lg-8 col-xl-7 text-center text-lg-start">

          <!-- Badge -->
          <div class="d-inline-flex align-items-center mb-4 animate-fade-in">
            <span class="badge bg-secondary text-white px-4 py-2 rounded-pill">
              <span class="pulse-dot me-2"></span>
              AI &amp; Data Consulting | Toronto
            </span>
          </div>

          <!-- Main Heading -->
          <h1 class="display-hero text-white mb-4 animate-fade-in-up">
            Your Data Has Answers.<br/>
            We Ask the <span class="text-secondary">Right Questions.</span>
          </h1>

          <!-- Subheading -->
          <p class="lead text-professional text-white opacity-75 mb-5 animate-fade-in-up animation-delay-1">
            Gamma Neutral partners with financial institutions, healthcare organizations, and government agencies
            to design AI systems, data architectures, and analytics platforms that solve specific business
            problems — not just generate dashboards.
          </p>

          <!-- CTA Buttons -->
          <div class="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-5 animate-fade-in-up animation-delay-2">
            <a href="/contact" class="btn btn-secondary btn-lg px-5 py-3 rounded-pill">
              Book a Discovery Call
              <i class="bi bi-arrow-right ms-2"></i>
            </a>
            <a href="/about" class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">
              See How We Work
            </a>
          </div>

          <!-- Trust Indicators -->
          <div class="animate-fade-in-up animation-delay-3">
            <p class="text-white-50 mb-3">Toronto-based AI &amp; data consulting firm</p>
          </div>
        </div>

        <!-- Right Side Floating Elements - Removed fake statistics -->
      </div>
    </div>

    <!-- Scroll Indicator -->
    <a href="#services" class="position-absolute bottom-0 start-50 translate-middle-x pb-4 text-white text-decoration-none animate-bounce" style="z-index: 10;" @click.prevent="scrollToServices">
      <i class="bi bi-chevron-double-down fs-4"></i>
    </a>
  </section>
</template>

<script setup>
const scrollToServices = () => {
  const el = document.getElementById('services')
  if (el) {
    const headerOffset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Video Background */
.object-fit-cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* Use Bootstrap's secondary color with white text */
.btn-secondary {
  font-weight: 600;
  transition: all 0.3s ease;
  color: white !important;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
  color: white !important;
}

/* Pulse Animation */
.pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
  }
}

/* Animations */
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
}

.animation-delay-1 {
  animation-delay: 0.2s;
}

.animation-delay-2 {
  animation-delay: 0.4s;
}

.animation-delay-3 {
  animation-delay: 0.6s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Floating Cards Animation */
.floating-card {
  animation: float 4s ease-in-out infinite;
}

.floating-card-delayed {
  animation: float 4s ease-in-out infinite;
  animation-delay: 1s;
}

.floating-card-slow {
  animation: float 5s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-10px) translateX(5px);
  }
  75% {
    transform: translateY(10px) translateX(-5px);
  }
}

/* Mouse Scroll Indicator */
.mouse-icon {
  width: 25px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  position: relative;
  margin: 0 auto;
}

.mouse-wheel {
  width: 3px;
  height: 8px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 8px;
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% {
    top: 8px;
    opacity: 1;
  }
  100% {
    top: 20px;
    opacity: 0;
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-10px) translateX(-50%);
  }
  60% {
    transform: translateY(-5px) translateX(-50%);
  }
}

/* Responsive */
@media (max-width: 991px) {
  .display-2 {
    font-size: 3rem;
  }
}

@media (max-width: 576px) {
  .display-2 {
    font-size: 2.5rem;
  }

  .lead {
    font-size: 1.1rem;
  }

  .floating-card,
  .floating-card-delayed,
  .floating-card-slow {
    display: none !important;
  }
}
</style>

