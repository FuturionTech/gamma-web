<template>
  <!-- Professional Stats Section with Animated Counters -->
  <section class="py-5 my-lg-4 my-xl-5">
    <div class="container">
      <div class="bg-white rounded-5 shadow-sm p-4 p-md-5">
        <!-- Section Introduction -->
        <div class="row pb-5">
          <div class="col-xl-10 mx-auto text-center">
            <p class="fs-2 text-dark pb-md-2 mb-lg-4">
              From initial data assessment to full-scale implementation, we deliver
              <span class="fw-bold text-primary">measurable results</span>
              that transform how organizations leverage their data assets for
              <span class="fw-bold text-primary">competitive advantage.</span>
            </p>
          </div>
        </div>

      <!-- Main Stats Row -->
      <div class="row g-4 pb-5">
        <!-- Enterprise Clients -->
        <div class="col-6 col-lg-3">
          <div class="text-center text-lg-start">
            <div class="d-inline-flex align-items-baseline">
              <h3 class="display-1 text-primary fw-bold mb-0 counter-value" data-target="50">0</h3>
              <span class="display-6 text-primary ms-1">+</span>
            </div>
            <p class="fs-sm text-muted mb-0 mt-2">Enterprise Clients Served</p>
            <div class="progress mt-3" style="height: 4px;">
              <div class="progress-bar bg-primary progress-animation" style="width: 0%"></div>
            </div>
          </div>
        </div>

        <!-- Data Projects -->
        <div class="col-6 col-lg-3">
          <div class="text-center text-lg-start">
            <div class="d-inline-flex align-items-baseline">
              <h3 class="display-1 text-info fw-bold mb-0 counter-value" data-target="200">0</h3>
              <span class="display-6 text-info ms-1">+</span>
            </div>
            <p class="fs-sm text-muted mb-0 mt-2">Data Projects Completed</p>
            <div class="progress mt-3" style="height: 4px;">
              <div class="progress-bar bg-info progress-animation" style="width: 0%"></div>
            </div>
          </div>
        </div>

        <!-- Client Satisfaction -->
        <div class="col-6 col-lg-3">
          <div class="text-center text-lg-start">
            <div class="d-inline-flex align-items-baseline">
              <h3 class="display-1 text-success fw-bold mb-0 counter-value" data-target="99">0</h3>
              <span class="display-6 text-success ms-1">%</span>
            </div>
            <p class="fs-sm text-muted mb-0 mt-2">Client Satisfaction Rate</p>
            <div class="progress mt-3" style="height: 4px;">
              <div class="progress-bar bg-success progress-animation" style="width: 0%"></div>
            </div>
          </div>
        </div>

        <!-- ROI Achieved -->
        <div class="col-6 col-lg-3">
          <div class="text-center text-lg-start">
            <div class="d-inline-flex align-items-baseline">
              <h3 class="display-1 text-warning fw-bold mb-0 counter-value" data-target="400">0</h3>
              <span class="display-6 text-warning ms-1">%</span>
            </div>
            <p class="fs-sm text-muted mb-0 mt-2">Average ROI Delivered</p>
            <div class="progress mt-3" style="height: 4px;">
              <div class="progress-bar bg-warning progress-animation" style="width: 0%"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

// Counter animation function
const animateCounter = (element, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

// Progress bar animation
const animateProgress = (element, targetWidth, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.style.width = `${progress * targetWidth}%`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    // Intersection Observer for triggering animations
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');

          // Animate counter
          const target = parseInt(entry.target.dataset.target);
          animateCounter(entry.target, 0, target, 2000);

          // Animate associated progress bar
          const progressBar = entry.target.closest('.col-6')?.querySelector('.progress-bar');
          if (progressBar) {
            const percentage = (target > 100) ? 100 : target;
            animateProgress(progressBar, percentage, 2000);
          }
        }
      });
    }, observerOptions);

    // Observe all counter elements
    document.querySelectorAll('.counter-value').forEach(el => {
      observer.observe(el);
    });
  }
});
</script>

<style scoped>
/* Counter Animation Styles */
.counter-value {
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}

/* Progress Animation */
.progress-animation {
  transition: width 2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive Typography */
@media (max-width: 768px) {
  .display-1 {
    font-size: 3rem;
  }

  .display-6 {
    font-size: 1.5rem;
  }

  .fs-2 {
    font-size: 1.5rem !important;
  }
}

@media (max-width: 576px) {
  .display-1 {
    font-size: 2.5rem;
  }

  .col-6.col-lg-3 {
    margin-bottom: 2rem;
  }
}

/* Let Bootstrap theme handle dark mode automatically */
</style>