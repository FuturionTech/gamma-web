<template>
  <li class="nav-item dropdown">
    <NuxtLink class="nav-link dropdown-toggle fw-semibold" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" role="button">
      Solutions
    </NuxtLink>
    <div class="dropdown-menu solutions-dropdown shadow-lg border-0" style="min-width: 600px;">
      <!-- Header Section -->
      <div class="dropdown-header-section">
        <h6 class="dropdown-header-title">Industry Solutions</h6>
        <p class="dropdown-header-subtitle">Specialized analytics for your sector</p>
      </div>

      <div class="row g-3">
        <!-- Industry Solutions Grid -->
        <div class="col-md-6">
          <NuxtLink class="solutions-dropdown-item" to="/solutions/financial-services">
            <div class="solution-icon-wrapper">
              <i class="fa fa-university solution-icon"></i>
            </div>
            <div class="solution-content">
              <div class="solution-title">Financial Services</div>
              <div class="solution-description">Risk analytics, fraud detection, regulatory compliance</div>
            </div>
            <div class="solution-arrow">
              <i class="fa fa-arrow-right"></i>
            </div>
          </NuxtLink>

          <NuxtLink class="solutions-dropdown-item" to="/solutions/healthcare-analytics">
            <div class="solution-icon-wrapper healthcare">
              <i class="fa fa-heartbeat solution-icon"></i>
            </div>
            <div class="solution-content">
              <div class="solution-title">Healthcare Analytics</div>
              <div class="solution-description">Patient insights, clinical data, predictive health</div>
            </div>
            <div class="solution-arrow">
              <i class="fa fa-arrow-right"></i>
            </div>
          </NuxtLink>

          <NuxtLink class="solutions-dropdown-item" to="/solutions/retail-intelligence">
            <div class="solution-icon-wrapper retail">
              <i class="fa fa-shopping-cart solution-icon"></i>
            </div>
            <div class="solution-content">
              <div class="solution-title">Retail Intelligence</div>
              <div class="solution-description">Customer analytics, inventory optimization, demand forecasting</div>
            </div>
            <div class="solution-arrow">
              <i class="fa fa-arrow-right"></i>
            </div>
          </NuxtLink>
        </div>

        <div class="col-md-6">
          <NuxtLink class="solutions-dropdown-item" to="/solutions/smart-government">
            <div class="solution-icon-wrapper government">
              <i class="fa fa-building solution-icon"></i>
            </div>
            <div class="solution-content">
              <div class="solution-title">Smart Government</div>
              <div class="solution-description">Public analytics, citizen services, policy insights</div>
            </div>
            <div class="solution-arrow">
              <i class="fa fa-arrow-right"></i>
            </div>
          </NuxtLink>

          <NuxtLink class="solutions-dropdown-item" to="/solutions/manufacturing-4-0">
            <div class="solution-icon-wrapper manufacturing">
              <i class="fa fa-cogs solution-icon"></i>
            </div>
            <div class="solution-content">
              <div class="solution-title">Manufacturing 4.0</div>
              <div class="solution-description">Predictive maintenance, supply chain, quality control</div>
            </div>
            <div class="solution-arrow">
              <i class="fa fa-arrow-right"></i>
            </div>
          </NuxtLink>

          <NuxtLink class="solutions-dropdown-item" to="/solutions/education-analytics">
            <div class="solution-icon-wrapper education">
              <i class="fa fa-graduation-cap solution-icon"></i>
            </div>
            <div class="solution-content">
              <div class="solution-title">Education Analytics</div>
              <div class="solution-description">Student performance, learning optimization, resource planning</div>
            </div>
            <div class="solution-arrow">
              <i class="fa fa-arrow-right"></i>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Core Capabilities -->
      <div class="capabilities-section">
        <div class="capabilities-header">
          <span class="capabilities-label">Core Capabilities</span>
        </div>
        <div class="capabilities-badges">
          <span class="capability-badge">
            <i class="fa fa-microchip"></i>
            AI & Machine Learning
          </span>
          <span class="capability-badge">
            <i class="fa fa-cloud"></i>
            Cloud Computing
          </span>
          <span class="capability-badge">
            <i class="fa fa-sitemap"></i>
            Data Engineering
          </span>
          <span class="capability-badge">
            <i class="fa fa-chart-line"></i>
            Business Intelligence
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
// Solutions Menu - Combined Services and Industries
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
.solutions-dropdown {
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
  min-width: 600px;
  max-width: 650px;
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

/* ===== SOLUTION ITEMS ===== */
.solutions-dropdown-item {
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

.solutions-dropdown-item::before {
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

.solutions-dropdown-item:hover {
  transform: translateY(-2px) scale(1.02);
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(139, 92, 246, 0.2);
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.15),
              0 4px 16px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: inherit;
}

.solutions-dropdown-item:hover::before {
  opacity: 1;
}

.solutions-dropdown-item:hover .solution-arrow {
  opacity: 1;
  transform: translateX(0);
}

.solutions-dropdown-item:hover .solution-icon {
  transform: scale(1.1);
}

/* ===== ICON WRAPPER ===== */
.solution-icon-wrapper {
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

.solution-icon-wrapper.healthcare {
  background: linear-gradient(135deg, #ef4444, #f87171);
  box-shadow: 0 4px 16px rgba(239, 68, 68, 0.25);
}

.solution-icon-wrapper.retail {
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.25);
}

.solution-icon-wrapper.government {
  background: linear-gradient(135deg, #06b6d4, #67e8f9);
  box-shadow: 0 4px 16px rgba(6, 182, 212, 0.25);
}

.solution-icon-wrapper.manufacturing {
  background: linear-gradient(135deg, #6b7280, #9ca3af);
  box-shadow: 0 4px 16px rgba(107, 114, 128, 0.25);
}

.solution-icon-wrapper.education {
  background: linear-gradient(135deg, #10b981, #34d399);
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.25);
}

.solution-icon {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  transition: transform 0.3s ease;
}

/* ===== CONTENT AREA ===== */
.solution-content {
  flex: 1;
  min-width: 0;
}

.solution-title {
  font-weight: 700;
  font-size: 1rem;
  color: #1f2937;
  margin-bottom: 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.solution-description {
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
.solution-arrow {
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.3s ease;
  color: #8b5cf6;
  font-size: 1rem;
  margin-left: 0.75rem;
}

/* ===== CAPABILITIES SECTION ===== */
.capabilities-section {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 2px solid rgba(139, 92, 246, 0.1);
  position: relative;
}

.capabilities-section::before {
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

.capabilities-header {
  text-align: center;
  margin-bottom: 1rem;
}

.capabilities-label {
  color: #374151;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.capabilities-badges {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.capability-badge {
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

.capability-badge:hover {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15));
  border-color: rgba(139, 92, 246, 0.3);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);
}

.capability-badge i {
  font-size: 0.875rem;
  opacity: 0.8;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 991.98px) {
  .solutions-dropdown {
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

  .solution-title {
    font-size: 0.9375rem;
  }

  .solution-description {
    font-size: 0.8rem;
  }

  .capabilities-badges {
    flex-direction: column;
    align-items: center;
  }

  .capability-badge {
    width: 100%;
    justify-content: center;
    max-width: 200px;
  }
}

@media (max-width: 575.98px) {
  .solutions-dropdown {
    padding: 1rem;
  }

  .solutions-dropdown-item {
    padding: 0.875rem;
  }

  .solution-icon-wrapper {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.75rem;
  }

  .solution-icon {
    font-size: 1.125rem;
  }
}

/* ===== DARK MODE COMPATIBILITY ===== */
@media (prefers-color-scheme: dark) {
  .solutions-dropdown {
    background: rgba(26, 26, 26, 0.98) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
  }

  .dropdown-header-title,
  .solution-title {
    color: #f9fafb;
  }

  .dropdown-header-subtitle,
  .solution-description {
    color: #d1d5db;
  }

  .capabilities-label {
    color: #e5e7eb;
  }

  .solutions-dropdown-item {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .solutions-dropdown-item:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(139, 92, 246, 0.3);
  }
}
</style>