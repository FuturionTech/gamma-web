<template>
  <li class="nav-item dropdown">
    <NuxtLink class="nav-link dropdown-toggle fw-semibold" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" role="button">
      About
    </NuxtLink>
    <div class="dropdown-menu about-dropdown shadow-lg border-0" style="min-width: 580px;">
      <!-- Header Section -->
      <div class="dropdown-header-section">
        <h6 class="dropdown-header-title">About Gamma Neutral</h6>
        <p class="dropdown-header-subtitle">Your trusted partner in data innovation and analytics excellence</p>
      </div>

      <div class="row g-3">
        <!-- Company Information -->
        <div class="col-md-6">
          <NuxtLink class="about-dropdown-item" to="/about">
            <div class="about-icon-wrapper company">
              <i class="fa fa-building about-icon"></i>
            </div>
            <div class="about-content">
              <div class="about-title">Our Company</div>
              <div class="about-description">Mission, vision, values, and our commitment to excellence</div>
            </div>
            <div class="about-arrow">
              <i class="fa fa-arrow-right"></i>
            </div>
          </NuxtLink>

          <NuxtLink class="about-dropdown-item" to="/about/team">
            <div class="about-icon-wrapper team">
              <i class="fa fa-users about-icon"></i>
            </div>
            <div class="about-content">
              <div class="about-title">Leadership Team</div>
              <div class="about-description">Meet our experienced data scientists and industry experts</div>
            </div>
            <div class="about-arrow">
              <i class="fa fa-arrow-right"></i>
            </div>
          </NuxtLink>

          <NuxtLink class="about-dropdown-item" to="/about/careers">
            <div class="about-icon-wrapper careers">
              <i class="fa fa-briefcase about-icon"></i>
            </div>
            <div class="about-content">
              <div class="about-title">Careers</div>
              <div class="about-description">Join our team of innovative data professionals</div>
            </div>
            <div class="about-arrow">
              <i class="fa fa-arrow-right"></i>
            </div>
          </NuxtLink>
        </div>

        <div class="col-md-6">
          <NuxtLink class="about-dropdown-item" to="/about/methodology">
            <div class="about-icon-wrapper methodology">
              <i class="fa fa-cogs about-icon"></i>
            </div>
            <div class="about-content">
              <div class="about-title">Our Methodology</div>
              <div class="about-description">Proven 5-step approach to data transformation</div>
            </div>
            <div class="about-arrow">
              <i class="fa fa-arrow-right"></i>
            </div>
          </NuxtLink>

          <NuxtLink class="about-dropdown-item" to="/about/certifications">
            <div class="about-icon-wrapper certifications">
              <i class="fa fa-certificate about-icon"></i>
            </div>
            <div class="about-content">
              <div class="about-title">Certifications</div>
              <div class="about-description">Industry credentials, compliance, and quality standards</div>
            </div>
            <div class="about-arrow">
              <i class="fa fa-arrow-right"></i>
            </div>
          </NuxtLink>

          <NuxtLink class="about-dropdown-item" to="/contact">
            <div class="about-icon-wrapper contact">
              <i class="fa fa-envelope about-icon"></i>
            </div>
            <div class="about-content">
              <div class="about-title">Contact Us</div>
              <div class="about-description">Get in touch with our team for consultation</div>
            </div>
            <div class="about-arrow">
              <i class="fa fa-arrow-right"></i>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Core Values Section -->
      <div class="values-section">
        <div class="values-header">
          <span class="values-label">Our Core Values</span>
        </div>
        <div class="values-badges">
          <span class="value-badge">
            <i class="fa fa-shield-alt"></i>
            Data Security
          </span>
          <span class="value-badge">
            <i class="fa fa-rocket"></i>
            Innovation
          </span>
          <span class="value-badge">
            <i class="fa fa-handshake"></i>
            Partnership
          </span>
          <span class="value-badge">
            <i class="fa fa-trophy"></i>
            Excellence
          </span>
        </div>
      </div>
    </div>
  </li>
</template>
  
  <script setup>
  // Removed useLocalePath as it's not needed with current routing setup
  </script>
  
<style scoped>
/* ===== DROPDOWN TOGGLE STYLES ===== */
.dropdown-toggle {
  color: white !important;
  transition: color 0.2s ease-in-out;
}

.dropdown-toggle:hover,
.dropdown-toggle:focus {
  color: #8b5cf6 !important;
}

/* ===== DROPDOWN CONTAINER ===== */
.about-dropdown {
  background: rgba(255, 255, 255, 0.98) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 1.5rem !important;
  margin-top: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15),
              0 8px 32px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;
  min-width: 580px;
  max-width: 620px;
  /* Better alignment with parent menu item */
  left: 50% !important;
  transform: translateX(-50%) !important;
  position: absolute !important;
}

/* ===== HEADER SECTION ===== */
.dropdown-header-section {
  margin-bottom: 1.5rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(139, 92, 246, 0.1);
  position: relative;
}

.dropdown-header-section::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #8b5cf6, #a855f7);
  border-radius: 1px;
}

.dropdown-header-title {
  color: #1a1a1a;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  letter-spacing: -0.02em;
}

.dropdown-header-subtitle {
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0;
  line-height: 1.4;
}

/* ===== ABOUT ITEMS ===== */
.about-dropdown-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 1rem;
  border-radius: 0.875rem;
  margin-bottom: 0.75rem;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.about-dropdown-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.02), rgba(168, 85, 247, 0.02));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.about-dropdown-item:hover {
  transform: translateY(-2px) scale(1.02);
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(139, 92, 246, 0.2);
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.15),
              0 4px 16px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: inherit;
}

.about-dropdown-item:hover::before {
  opacity: 1;
}

.about-dropdown-item:hover .about-arrow {
  opacity: 1;
  transform: translateX(0);
}

.about-dropdown-item:hover .about-icon {
  transform: scale(1.1);
}

/* ===== ICON WRAPPER ===== */
.about-icon-wrapper {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.25);
  transition: all 0.3s ease;
}

.about-icon-wrapper.company {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.25);
}

.about-icon-wrapper.team {
  background: linear-gradient(135deg, #10b981, #059669);
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.25);
}

.about-icon-wrapper.careers {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.25);
}

.about-icon-wrapper.methodology {
  background: linear-gradient(135deg, #6b7280, #4b5563);
  box-shadow: 0 4px 16px rgba(107, 114, 128, 0.25);
}

.about-icon-wrapper.certifications {
  background: linear-gradient(135deg, #dc2626, #b91c1c);
  box-shadow: 0 4px 16px rgba(220, 38, 38, 0.25);
}

.about-icon-wrapper.contact {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.25);
}

.about-icon {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  transition: transform 0.3s ease;
}

/* ===== CONTENT AREA ===== */
.about-content {
  flex: 1;
  min-width: 0;
}

.about-title {
  font-weight: 700;
  font-size: 1rem;
  color: #1f2937;
  margin-bottom: 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.about-description {
  color: #6b7280;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ===== ARROW INDICATOR ===== */
.about-arrow {
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.3s ease;
  color: #8b5cf6;
  font-size: 1rem;
  margin-left: 0.75rem;
}

/* ===== VALUES SECTION ===== */
.values-section {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 2px solid rgba(139, 92, 246, 0.1);
  position: relative;
}

.values-section::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #8b5cf6, #a855f7);
  border-radius: 1px;
}

.values-header {
  text-align: center;
  margin-bottom: 1rem;
}

.values-label {
  color: #374151;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.values-badges {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.value-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(168, 85, 247, 0.08));
  color: #8b5cf6;
  font-weight: 600;
  font-size: 0.75rem;
  padding: 0.5rem 0.875rem;
  border-radius: 2rem;
  border: 1px solid rgba(139, 92, 246, 0.15);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.value-badge:hover {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15));
  border-color: rgba(139, 92, 246, 0.3);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);
}

.value-badge i {
  font-size: 0.875rem;
  opacity: 0.8;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 991.98px) {
  .about-dropdown {
    min-width: auto !important;
    max-width: none !important;
    width: calc(100vw - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1.25rem;
  }

  .row {
    flex-direction: column;
  }

  .about-title {
    font-size: 0.9375rem;
  }

  .about-description {
    font-size: 0.8rem;
  }

  .values-badges {
    flex-direction: column;
    align-items: center;
  }

  .value-badge {
    width: 100%;
    justify-content: center;
    max-width: 200px;
  }
}

@media (max-width: 575.98px) {
  .about-dropdown {
    padding: 1rem;
  }

  .about-dropdown-item {
    padding: 0.875rem;
  }

  .about-icon-wrapper {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.75rem;
  }

  .about-icon {
    font-size: 1.125rem;
  }
}

/* ===== DARK MODE COMPATIBILITY ===== */
@media (prefers-color-scheme: dark) {
  .about-dropdown {
    background: rgba(26, 26, 26, 0.98) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
  }

  .dropdown-header-title,
  .about-title {
    color: #f9fafb;
  }

  .dropdown-header-subtitle,
  .about-description {
    color: #d1d5db;
  }

  .values-label {
    color: #e5e7eb;
  }

  .about-dropdown-item {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .about-dropdown-item:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(139, 92, 246, 0.3);
  }
}
</style>
  