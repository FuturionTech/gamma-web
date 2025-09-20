<template>
  <li class="nav-item dropdown">
    <NuxtLink class="nav-link dropdown-toggle fw-semibold" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" role="button">
      Resources
    </NuxtLink>
    <div class="dropdown-menu resources-dropdown shadow-lg border-0" style="min-width: 520px;">
      <!-- Header Section -->
      <div class="dropdown-header-section">
        <h6 class="dropdown-header-title">Knowledge Center</h6>
        <p class="dropdown-header-subtitle">Resources to accelerate your data journey</p>
      </div>

      <div class="row g-3">
        <!-- Learning & Documentation -->
        <div class="col-md-6">
          <div class="resource-category">
            <h6 class="resource-category-title">
              <i class="ai-book me-2"></i>
              Learning & Support
            </h6>

            <NuxtLink class="resource-dropdown-item" to="/resources/documentation">
              <div class="resource-icon-wrapper docs">
                <i class="ai-file-text"></i>
              </div>
              <div class="resource-content">
                <div class="resource-title">Documentation</div>
                <div class="resource-description">API guides, tutorials, and best practices</div>
              </div>
              <div class="resource-arrow">
                <i class="fa fa-arrow-right"></i>
              </div>
            </NuxtLink>

            <NuxtLink class="resource-dropdown-item" to="/resources/case-studies">
              <div class="resource-icon-wrapper case-studies">
                <i class="ai-chart"></i>
              </div>
              <div class="resource-content">
                <div class="resource-title">Case Studies</div>
                <div class="resource-description">Real-world success stories and insights</div>
              </div>
              <div class="resource-arrow">
                <i class="fa fa-arrow-right"></i>
              </div>
            </NuxtLink>

            <NuxtLink class="resource-dropdown-item" to="/resources/webinars">
              <div class="resource-icon-wrapper webinars">
                <i class="ai-video"></i>
              </div>
              <div class="resource-content">
                <div class="resource-title">Webinars</div>
                <div class="resource-description">Expert sessions and live demonstrations</div>
              </div>
              <div class="resource-arrow">
                <i class="fa fa-arrow-right"></i>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Downloads & Tools -->
        <div class="col-md-6">
          <div class="resource-category">
            <h6 class="resource-category-title">
              <i class="ai-download me-2"></i>
              Downloads & Tools
            </h6>

            <NuxtLink class="resource-dropdown-item" to="/resources/whitepapers">
              <div class="resource-icon-wrapper whitepapers">
                <i class="ai-open-book"></i>
              </div>
              <div class="resource-content">
                <div class="resource-title">Whitepapers</div>
                <div class="resource-description">Industry research and trend analysis</div>
              </div>
              <div class="resource-arrow">
                <i class="fa fa-arrow-right"></i>
              </div>
            </NuxtLink>

            <NuxtLink class="resource-dropdown-item" to="/resources/templates">
              <div class="resource-icon-wrapper templates">
                <i class="ai-layer"></i>
              </div>
              <div class="resource-content">
                <div class="resource-title">Templates</div>
                <div class="resource-description">Ready-to-use data models and dashboards</div>
              </div>
              <div class="resource-arrow">
                <i class="fa fa-arrow-right"></i>
              </div>
            </NuxtLink>

            <NuxtLink class="resource-dropdown-item" to="/resources/tools">
              <div class="resource-icon-wrapper tools">
                <i class="ai-tool"></i>
              </div>
              <div class="resource-content">
                <div class="resource-title">Free Tools</div>
                <div class="resource-description">Calculators, assessments, and utilities</div>
              </div>
              <div class="resource-arrow">
                <i class="fa fa-arrow-right"></i>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Support Section -->
      <div class="support-section">
        <div class="support-header">
          <span class="support-label">Need Help?</span>
        </div>
        <div class="support-links">
          <NuxtLink class="support-link" to="/resources/faq">
            <i class="ai-circle-help"></i>
            FAQ
          </NuxtLink>
          <NuxtLink class="support-link" to="/contact">
            <i class="ai-phone-call"></i>
            Contact Support
          </NuxtLink>
          <NuxtLink class="support-link" to="/resources/careers">
            <i class="ai-user-plus"></i>
            Careers
          </NuxtLink>
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
.resources-dropdown {
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
  min-width: 520px;
  max-width: 570px;
  /* Better alignment with parent menu item */
  right: 0 !important;
  left: auto !important;
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

/* ===== RESOURCE CATEGORIES ===== */
.resource-category {
  margin-bottom: 1rem;
}

.resource-category-title {
  color: #374151;
  font-weight: 700;
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(139, 92, 246, 0.1);
}

/* ===== RESOURCE ITEMS ===== */
.resource-dropdown-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 0.875rem;
  border-radius: 0.75rem;
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.resource-dropdown-item::before {
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

.resource-dropdown-item:hover {
  transform: translateY(-1px) scale(1.01);
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(139, 92, 246, 0.2);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.12),
              0 3px 10px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: inherit;
}

.resource-dropdown-item:hover::before {
  opacity: 1;
}

.resource-dropdown-item:hover .resource-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* ===== ICON WRAPPER ===== */
.resource-icon-wrapper {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.875rem;
  flex-shrink: 0;
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  box-shadow: 0 3px 12px rgba(139, 92, 246, 0.25);
  transition: all 0.3s ease;
}

.resource-icon-wrapper.docs {
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  box-shadow: 0 3px 12px rgba(59, 130, 246, 0.25);
}

.resource-icon-wrapper.case-studies {
  background: linear-gradient(135deg, #10b981, #34d399);
  box-shadow: 0 3px 12px rgba(16, 185, 129, 0.25);
}

.resource-icon-wrapper.webinars {
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  box-shadow: 0 3px 12px rgba(245, 158, 11, 0.25);
}

.resource-icon-wrapper.whitepapers {
  background: linear-gradient(135deg, #ef4444, #f87171);
  box-shadow: 0 3px 12px rgba(239, 68, 68, 0.25);
}

.resource-icon-wrapper.templates {
  background: linear-gradient(135deg, #06b6d4, #67e8f9);
  box-shadow: 0 3px 12px rgba(6, 182, 212, 0.25);
}

.resource-icon-wrapper.tools {
  background: linear-gradient(135deg, #6b7280, #9ca3af);
  box-shadow: 0 3px 12px rgba(107, 114, 128, 0.25);
}

.resource-icon-wrapper i {
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
}

/* ===== CONTENT AREA ===== */
.resource-content {
  flex: 1;
  min-width: 0;
}

.resource-title {
  font-weight: 700;
  font-size: 0.9375rem;
  color: #1f2937;
  margin-bottom: 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.resource-description {
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
.resource-arrow {
  opacity: 0;
  transform: translateX(-6px);
  transition: all 0.3s ease;
  color: #8b5cf6;
  font-size: 0.875rem;
  margin-left: 0.5rem;
}

/* ===== SUPPORT SECTION ===== */
.support-section {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 2px solid rgba(139, 92, 246, 0.1);
  position: relative;
}

.support-section::before {
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

.support-header {
  text-align: center;
  margin-bottom: 1rem;
}

.support-label {
  color: #374151;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.support-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.support-link {
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
  text-decoration: none;
  white-space: nowrap;
}

.support-link:hover {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15));
  border-color: rgba(139, 92, 246, 0.3);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);
  text-decoration: none;
  color: #8b5cf6;
}

.support-link i {
  font-size: 0.875rem;
  opacity: 0.8;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 991.98px) {
  .resources-dropdown {
    min-width: auto !important;
    max-width: none !important;
    width: calc(100vw - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1.25rem;
    right: auto !important;
    left: 0 !important;
  }

  .row {
    flex-direction: column;
  }

  .resource-title {
    font-size: 0.875rem;
  }

  .resource-description {
    font-size: 0.75rem;
  }

  .support-links {
    flex-direction: column;
    align-items: center;
  }

  .support-link {
    width: 100%;
    justify-content: center;
    max-width: 200px;
  }
}

@media (max-width: 575.98px) {
  .resources-dropdown {
    padding: 1rem;
  }

  .resource-dropdown-item {
    padding: 0.75rem;
  }

  .resource-icon-wrapper {
    width: 2.25rem;
    height: 2.25rem;
    margin-right: 0.75rem;
  }

  .resource-icon-wrapper i {
    font-size: 1rem;
  }
}

/* ===== DARK MODE COMPATIBILITY ===== */
@media (prefers-color-scheme: dark) {
  .resources-dropdown {
    background: rgba(26, 26, 26, 0.98) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
  }

  .dropdown-header-title,
  .resource-title,
  .resource-category-title,
  .support-label {
    color: #f9fafb;
  }

  .dropdown-header-subtitle,
  .resource-description {
    color: #d1d5db;
  }

  .resource-dropdown-item {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .resource-dropdown-item:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(139, 92, 246, 0.3);
  }
}
</style>
