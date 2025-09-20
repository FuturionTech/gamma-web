<template>
  <!-- CTA Section - Modern Dark Design -->
  <section class="py-5">
    <div class="container">
      <div class="bg-dark rounded-5 position-relative overflow-hidden py-5 px-4 px-sm-5">
        <!-- Light overlay for dark mode -->
        <div class="position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255,255,255, 0.02);"></div>

        <!-- Decorative SVG Pattern -->
        <svg class="position-absolute start-0 bottom-0 z-2 opacity-25" width="713" height="410" viewBox="0 0 713 410" fill="none" stroke="white" stroke-opacity="0.12" xmlns="http://www.w3.org/2000/svg">
          <path d="M682.907 484.533C695.503 444.57 705.228 400.872 691.238 361.386C672.894 309.65 617.745 278.967 563.532 270.375C509.32 261.768 454.065 270.505 399.207 272.603C344.348 274.702 285.906 268.882 241.992 235.917C181.111 190.21 163.777 104.969 109.285 51.7863C63.8512 7.45308 -6.63234 -9.27787 -67.1491 9.9424"></path>
          <path d="M641.482 482.967C653.4 445.169 662.6 403.82 649.367 366.472C632.013 317.53 579.846 288.506 528.564 280.379C477.267 272.236 425.011 280.507 373.121 282.492C321.231 284.477 265.935 278.97 224.403 247.786C166.796 204.54 150.415 123.91 98.8593 73.6098C55.8807 31.6733 -10.8023 15.8433 -68.0415 34.0275"></path>
          <path d="M600.052 481.4C611.277 445.751 619.968 406.784 607.477 371.559C591.113 325.409 541.928 298.044 493.561 290.383C445.194 282.705 395.92 290.508 346.984 292.363C298.047 294.234 245.913 289.041 206.762 259.639C152.445 218.868 137.002 142.834 88.3989 95.4004C47.876 55.8447 -14.9912 40.9323 -68.9688 58.0798"></path>
        </svg>

        <!-- Content -->
        <div class="position-relative z-3 text-center px-3 px-sm-0 pb-2 py-sm-3 py-md-4 py-lg-5">
          <h2 class="display-3 text-white pt-xl-2">Get Started with Gamma Neutral</h2>
          <p class="text-white-50 fs-lg pb-4 pb-lg-5 mb-2 mb-sm-3 mb-lg-0 mb-xl-2">
            Transform your data into actionable insights and drive your business forward with our expert consulting services.
          </p>
          <a class="btn btn-lg btn-secondary px-5 py-3" href="/contact">
            Contact Us Today
            <i class="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// CTA Section Component
</script>

<style scoped>
/* Button hover effect */
.btn-secondary {
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
}

/* Responsive text sizing */
@media (max-width: 768px) {
  .display-3 {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .display-3 {
    font-size: 2rem;
  }

  .fs-lg {
    font-size: 1rem;
  }
}
</style>