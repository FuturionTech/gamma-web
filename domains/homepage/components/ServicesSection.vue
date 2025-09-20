<template>
  <!-- Services Grid Section -->
  <section class="py-5 my-5">
    <div class="container">
      <!-- Services Grid -->
      <div class="row g-4">
        <!-- AI & Machine Learning -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card card h-100 p-4 rounded-4 border-0 shadow-sm hover-shadow-lg transition-all">
            <div class="service-icon mb-4">
              <div class="icon-wrapper bg-gradient-primary">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="white" stroke-width="2"/>
                  <path d="M12 8v8M8 12h8" stroke="white" stroke-width="2"/>
                </svg>
              </div>
            </div>
            <h3 class="h4 mb-3">AI & Machine Learning</h3>
            <p class="text-muted mb-4">
              Deploy intelligent systems that automate processes, predict outcomes, and unlock insights from your data.
            </p>
            <ul class="list-unstyled mb-4">
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Predictive Analytics</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Natural Language Processing</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Computer Vision</span>
              </li>
            </ul>
            <a href="/services/ai" class="btn-link fw-semibold">
              Learn More <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Data Engineering -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card card h-100 p-4 rounded-4 border-0 shadow-sm hover-shadow-lg transition-all">
            <div class="service-icon mb-4">
              <div class="icon-wrapper bg-gradient-info">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="5" rx="1" stroke="white" stroke-width="2"/>
                  <rect x="3" y="10" width="18" height="5" rx="1" stroke="white" stroke-width="2"/>
                  <rect x="3" y="17" width="18" height="5" rx="1" stroke="white" stroke-width="2"/>
                </svg>
              </div>
            </div>
            <h3 class="h4 mb-3">Data Engineering</h3>
            <p class="text-muted mb-4">
              Build robust data pipelines and architectures that ensure seamless data flow across your organization.
            </p>
            <ul class="list-unstyled mb-4">
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">ETL/ELT Pipelines</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Real-time Processing</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Data Lake Design</span>
              </li>
            </ul>
            <a href="/services/data-engineering" class="btn-link fw-semibold">
              Learn More <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Cloud Computing -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card card h-100 p-4 rounded-4 border-0 shadow-sm hover-shadow-lg transition-all">
            <div class="service-icon mb-4">
              <div class="icon-wrapper bg-gradient-success">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" stroke="white" stroke-width="2"/>
                </svg>
              </div>
            </div>
            <h3 class="h4 mb-3">Cloud Computing</h3>
            <p class="text-muted mb-4">
              Migrate and optimize your infrastructure with scalable cloud solutions from AWS, Azure, and GCP.
            </p>
            <ul class="list-unstyled mb-4">
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Cloud Migration</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Serverless Architecture</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Cost Optimization</span>
              </li>
            </ul>
            <a href="/services/cloud" class="btn-link fw-semibold">
              Learn More <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Cybersecurity -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card card h-100 p-4 rounded-4 border-0 shadow-sm hover-shadow-lg transition-all">
            <div class="service-icon mb-4">
              <div class="icon-wrapper bg-gradient-danger">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 7v6c0 4.5 2.5 8.5 8 10 5.5-1.5 8-5.5 8-10V7l-8-5z" stroke="white" stroke-width="2"/>
                  <path d="M9 12l2 2 4-4" stroke="white" stroke-width="2"/>
                </svg>
              </div>
            </div>
            <h3 class="h4 mb-3">Cybersecurity</h3>
            <p class="text-muted mb-4">
              Protect your data assets with enterprise-grade security solutions and compliance frameworks.
            </p>
            <ul class="list-unstyled mb-4">
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Threat Detection</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Compliance Management</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">24/7 Monitoring</span>
              </li>
            </ul>
            <a href="/services/security" class="btn-link fw-semibold">
              Learn More <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Business Intelligence -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card card h-100 p-4 rounded-4 border-0 shadow-sm hover-shadow-lg transition-all">
            <div class="service-icon mb-4">
              <div class="icon-wrapper bg-gradient-warning">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="9" stroke="white" stroke-width="2"/>
                  <rect x="14" y="3" width="7" height="5" stroke="white" stroke-width="2"/>
                  <rect x="14" y="12" width="7" height="9" stroke="white" stroke-width="2"/>
                  <rect x="3" y="16" width="7" height="5" stroke="white" stroke-width="2"/>
                </svg>
              </div>
            </div>
            <h3 class="h4 mb-3">Business Intelligence</h3>
            <p class="text-muted mb-4">
              Transform raw data into actionable insights with interactive dashboards and reports.
            </p>
            <ul class="list-unstyled mb-4">
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Interactive Dashboards</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">KPI Monitoring</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Strategic Reporting</span>
              </li>
            </ul>
            <a href="/services/bi" class="btn-link fw-semibold">
              Learn More <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Big Data -->
        <div class="col-lg-4 col-md-6">
          <div class="service-card card h-100 p-4 rounded-4 border-0 shadow-sm hover-shadow-lg transition-all">
            <div class="service-icon mb-4">
              <div class="icon-wrapper bg-gradient-purple">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="white" stroke-width="2"/>
                  <circle cx="12" cy="12" r="8" stroke="white" stroke-width="2"/>
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="white" stroke-width="2"/>
                </svg>
              </div>
            </div>
            <h3 class="h4 mb-3">Big Data Solutions</h3>
            <p class="text-muted mb-4">
              Process and analyze massive datasets with distributed computing and advanced analytics.
            </p>
            <ul class="list-unstyled mb-4">
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Distributed Processing</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Spark & Hadoop</span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                <span class="small">Data Lake Solutions</span>
              </li>
            </ul>
            <a href="/services/bigdata" class="btn-link fw-semibold">
              Learn More <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-5">
        <a href="/services" class="btn btn-primary btn-lg px-5 py-3 rounded-pill">
          View All Services
          <i class="bi bi-arrow-right ms-2"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Service Card */
.service-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-10px);
}

.hover-shadow-lg:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
}

/* Icon Wrapper */
.icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-gradient-primary {
  background-color: #8b5cf6;
}

.bg-gradient-info {
  background-color: #3b82f6;
}

.bg-gradient-success {
  background-color: #059669;
}

.bg-gradient-danger {
  background-color: #dc2626;
}

.bg-gradient-warning {
  background-color: #d97706;
}

.bg-gradient-purple {
  background-color: #8b5cf6;
}

/* Button Link */
.btn-link {
  color: #8b5cf6;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-link:hover {
  color: #7c3aed;
  gap: 0.75rem;
}

/* Let Bootstrap theme handle dark mode automatically */

/* Button Primary */
.btn-primary {
  background-color: #000000;
  border: none;
  font-weight: 600;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

/* Utilities */
.transition-all {
  transition: all 0.3s ease;
}

.rounded-4 {
  border-radius: 1rem !important;
}
</style>