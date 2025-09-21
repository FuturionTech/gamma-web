<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-dark position-relative py-5">
      <div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255,255,255, .03);"></div>
      <div class="container position-relative z-2 py-5">
        <div class="row">
          <div class="col-lg-10 col-xl-9">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
                <li class="breadcrumb-item">
                  <NuxtLink to="/" class="text-white-50">Home</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                  <NuxtLink to="/about" class="text-white-50">About</NuxtLink>
                </li>
                <li class="breadcrumb-item text-white active" aria-current="page">Our Methodology</li>
              </ol>
            </nav>

            <h1 class="display-2 text-white pb-2 pb-sm-3">Our Proven Methodology</h1>
            <p class="fs-lg text-white-50 pb-4 mb-0" style="max-width: 700px;">
              A systematic, data-driven approach that ensures successful digital transformation
              and measurable business outcomes for every client engagement.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5-Step Process -->
    <section class="container py-5">
      <div class="text-center mb-5 pb-lg-4">
        <div class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">THE GAMMA METHOD</div>
        <h2 class="display-6 mb-3">Our 5-Step Data Transformation Process</h2>
        <p class="fs-lg text-muted mx-auto" style="max-width: 700px;">
          Each phase is carefully designed to build upon the previous, ensuring a comprehensive
          and sustainable transformation of your data capabilities.
        </p>
      </div>

      <!-- Process Steps -->
      <div class="position-relative">
        <!-- Connecting Line (visible on desktop) -->
        <div class="d-none d-lg-block position-absolute top-50 start-0 w-100" style="height: 2px; background: linear-gradient(90deg, #8b5cf6, #a855f7); transform: translateY(-50%); z-index: 0;"></div>

        <div class="row g-4 position-relative">
          <!-- Step 1: Discovery -->
          <div class="col-lg-12 mb-4">
            <div class="d-flex align-items-start">
              <div class="flex-shrink-0 position-relative z-2">
                <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style="width: 80px; height: 80px;">
                  <span class="fs-2 fw-bold">1</span>
                </div>
              </div>
              <div class="ps-4 flex-grow-1">
                <div class="card border-0 shadow-sm">
                  <div class="card-body p-4">
                    <h3 class="h4 mb-3">Discovery & Assessment</h3>
                    <p class="text-muted mb-4">
                      We begin by understanding your business objectives, current data landscape, and specific challenges.
                      This phase involves comprehensive stakeholder interviews, data audits, and opportunity identification.
                    </p>
                    <div class="row g-3">
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">Business Analysis</h6>
                            <p class="text-muted fs-sm mb-0">Understanding goals and KPIs</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">Data Audit</h6>
                            <p class="text-muted fs-sm mb-0">Assessing data quality and availability</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">Gap Analysis</h6>
                            <p class="text-muted fs-sm mb-0">Identifying improvement areas</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Strategy -->
          <div class="col-lg-12 mb-4">
            <div class="d-flex align-items-start">
              <div class="flex-shrink-0 position-relative z-2">
                <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style="width: 80px; height: 80px;">
                  <span class="fs-2 fw-bold">2</span>
                </div>
              </div>
              <div class="ps-4 flex-grow-1">
                <div class="card border-0 shadow-sm">
                  <div class="card-body p-4">
                    <h3 class="h4 mb-3">Strategy & Planning</h3>
                    <p class="text-muted mb-4">
                      Based on our findings, we develop a customized data strategy aligned with your business goals,
                      including technology recommendations, resource planning, and implementation roadmap.
                    </p>
                    <div class="row g-3">
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">Solution Design</h6>
                            <p class="text-muted fs-sm mb-0">Architecture and technology stack</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">Roadmap Creation</h6>
                            <p class="text-muted fs-sm mb-0">Phased implementation plan</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">Risk Assessment</h6>
                            <p class="text-muted fs-sm mb-0">Mitigation strategies</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3: Implementation -->
          <div class="col-lg-12 mb-4">
            <div class="d-flex align-items-start">
              <div class="flex-shrink-0 position-relative z-2">
                <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style="width: 80px; height: 80px;">
                  <span class="fs-2 fw-bold">3</span>
                </div>
              </div>
              <div class="ps-4 flex-grow-1">
                <div class="card border-0 shadow-sm">
                  <div class="card-body p-4">
                    <h3 class="h4 mb-3">Implementation & Development</h3>
                    <p class="text-muted mb-4">
                      Our team executes the strategy using agile methodologies, building and deploying solutions
                      iteratively while maintaining close collaboration with your stakeholders.
                    </p>
                    <div class="row g-3">
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">Agile Development</h6>
                            <p class="text-muted fs-sm mb-0">Iterative delivery approach</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">Quality Assurance</h6>
                            <p class="text-muted fs-sm mb-0">Rigorous testing protocols</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">Integration</h6>
                            <p class="text-muted fs-sm mb-0">Seamless system connectivity</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 4: Optimization -->
          <div class="col-lg-12 mb-4">
            <div class="d-flex align-items-start">
              <div class="flex-shrink-0 position-relative z-2">
                <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style="width: 80px; height: 80px;">
                  <span class="fs-2 fw-bold">4</span>
                </div>
              </div>
              <div class="ps-4 flex-grow-1">
                <div class="card border-0 shadow-sm">
                  <div class="card-body p-4">
                    <h3 class="h4 mb-3">Optimization & Scaling</h3>
                    <p class="text-muted mb-4">
                      We continuously monitor performance, optimize algorithms, and scale solutions to meet
                      growing demands while ensuring maximum efficiency and ROI.
                    </p>
                    <div class="row g-3">
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">Performance Tuning</h6>
                            <p class="text-muted fs-sm mb-0">Maximizing system efficiency</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">Scalability</h6>
                            <p class="text-muted fs-sm mb-0">Growing with your needs</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">Cost Optimization</h6>
                            <p class="text-muted fs-sm mb-0">Maximizing value delivery</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 5: Support -->
          <div class="col-lg-12">
            <div class="d-flex align-items-start">
              <div class="flex-shrink-0 position-relative z-2">
                <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style="width: 80px; height: 80px;">
                  <span class="fs-2 fw-bold">5</span>
                </div>
              </div>
              <div class="ps-4 flex-grow-1">
                <div class="card border-0 shadow-sm">
                  <div class="card-body p-4">
                    <h3 class="h4 mb-3">Support & Evolution</h3>
                    <p class="text-muted mb-4">
                      Our partnership continues with ongoing support, training, and continuous improvement
                      to ensure your data solutions evolve with your business needs.
                    </p>
                    <div class="row g-3">
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">24/7 Support</h6>
                            <p class="text-muted fs-sm mb-0">Round-the-clock assistance</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">Training</h6>
                            <p class="text-muted fs-sm mb-0">Knowledge transfer programs</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="d-flex align-items-start">
                          <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <div>
                            <h6 class="mb-1">Innovation</h6>
                            <p class="text-muted fs-sm mb-0">Continuous improvement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Principles -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <div class="text-center mb-5">
          <div class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">KEY PRINCIPLES</div>
          <h2 class="display-6 mb-3">Guiding Principles</h2>
          <p class="fs-lg text-muted mx-auto" style="max-width: 700px;">
            Our methodology is built on fundamental principles that ensure success in every engagement.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                    <i class="bi bi-person-check text-primary fs-4"></i>
                  </div>
                </div>
                <h5 class="mb-3">Client-Centric</h5>
                <p class="text-muted mb-0">
                  Every solution is tailored to meet specific client needs and business objectives.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                    <i class="bi bi-graph-up text-success fs-4"></i>
                  </div>
                </div>
                <h5 class="mb-3">Data-Driven</h5>
                <p class="text-muted mb-0">
                  Decisions backed by comprehensive analysis and measurable metrics.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="d-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                    <i class="bi bi-arrow-repeat text-warning fs-4"></i>
                  </div>
                </div>
                <h5 class="mb-3">Iterative</h5>
                <p class="text-muted mb-0">
                  Continuous refinement through feedback loops and agile methodologies.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="d-flex align-items-center justify-content-center bg-info bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                    <i class="bi bi-shield-check text-info fs-4"></i>
                  </div>
                </div>
                <h5 class="mb-3">Secure</h5>
                <p class="text-muted mb-0">
                  Enterprise-grade security and compliance at every stage.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="d-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                    <i class="bi bi-layers text-danger fs-4"></i>
                  </div>
                </div>
                <h5 class="mb-3">Scalable</h5>
                <p class="text-muted mb-0">
                  Solutions designed to grow and evolve with your business.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="d-flex align-items-center justify-content-center bg-purple bg-opacity-10 rounded-3" style="width: 56px; height: 56px; background-color: rgba(139, 92, 246, 0.1);">
                    <i class="bi bi-lightbulb text-primary fs-4"></i>
                  </div>
                </div>
                <h5 class="mb-3">Innovative</h5>
                <p class="text-muted mb-0">
                  Leveraging latest technologies and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="container py-5">
      <div class="card border-0 bg-dark text-white p-5">
        <div class="card-body text-center">
          <h2 class="display-6 text-white mb-3">Ready to start your data transformation?</h2>
          <p class="fs-lg text-white-50 mb-4 mx-auto" style="max-width: 600px;">
            Let's discuss how our proven methodology can help you achieve your business goals.
          </p>
          <div class="d-flex flex-wrap justify-content-center gap-3">
            <NuxtLink to="/contact" class="btn btn-primary btn-lg px-5">
              Get Started
              <i class="bi bi-arrow-right ms-2"></i>
            </NuxtLink>
            <NuxtLink to="/resources/case-studies" class="btn btn-outline-light btn-lg px-5">
              View Case Studies
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'Our Methodology - Gamma Neutral',
  meta: [
    {
      name: 'description',
      content: 'Discover Gamma Neutral\'s proven 5-step methodology for data transformation. Our systematic approach ensures successful digital transformation and measurable results.'
    }
  ]
})
</script>

<style scoped>
/* Breadcrumb styles for dark background */
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

/* Card hover effects */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
}

/* Process step cards */
.card-body {
  position: relative;
}

/* Badge styles */
.badge {
  font-weight: 600;
  letter-spacing: 0.05em;
}
</style>