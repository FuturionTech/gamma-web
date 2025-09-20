<template>
  <li class="nav-item dropdown" ref="dropdownContainer">
    <NuxtLink
      class="nav-link dropdown-toggle fw-semibold"
      href="#"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      aria-expanded="false"
      role="button"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      Solutions
    </NuxtLink>
    <div
      class="dropdown-menu solutions-dropdown shadow-elevated border-0"
      :class="{ 'animate-in': isAnimating }"
      ref="dropdownMenu"
    >
      <!-- Enhanced Header Section -->
      <div class="dropdown-header-section">
        <div class="header-content">
          <h6 class="dropdown-header-title">Industry Solutions</h6>
          <p class="dropdown-header-subtitle">AI-powered analytics tailored to your industry</p>
        </div>
        <div class="header-decoration">
          <div class="pulse-dot"></div>
          <div class="pulse-dot"></div>
          <div class="pulse-dot"></div>
        </div>
      </div>

      <div class="row g-3">
        <!-- Industry Solutions Grid with Enhanced Animations -->
        <div class="col-md-6">
          <NuxtLink
            v-for="(solution, index) in leftColumnSolutions"
            :key="solution.id"
            class="solutions-dropdown-item"
            :to="solution.path"
            :style="{ animationDelay: `${index * 100}ms` }"
            @mouseenter="handleItemHover(solution.id)"
            @mouseleave="handleItemLeave"
          >
            <div class="solution-icon-wrapper" :class="solution.iconClass">
              <i :class="solution.icon" class="solution-icon"></i>
              <div class="icon-glow"></div>
            </div>
            <div class="solution-content">
              <div class="solution-title">{{ solution.title }}</div>
              <div class="solution-description">{{ solution.description }}</div>
              <div class="solution-tags">
                <span v-for="tag in solution.tags" :key="tag" class="solution-tag">
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="solution-arrow">
              <i class="fa fa-arrow-right"></i>
            </div>
          </NuxtLink>
        </div>

        <div class="col-md-6">
          <NuxtLink
            v-for="(solution, index) in rightColumnSolutions"
            :key="solution.id"
            class="solutions-dropdown-item"
            :to="solution.path"
            :style="{ animationDelay: `${(index + 3) * 100}ms` }"
            @mouseenter="handleItemHover(solution.id)"
            @mouseleave="handleItemLeave"
          >
            <div class="solution-icon-wrapper" :class="solution.iconClass">
              <i :class="solution.icon" class="solution-icon"></i>
              <div class="icon-glow"></div>
            </div>
            <div class="solution-content">
              <div class="solution-title">{{ solution.title }}</div>
              <div class="solution-description">{{ solution.description }}</div>
              <div class="solution-tags">
                <span v-for="tag in solution.tags" :key="tag" class="solution-tag">
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="solution-arrow">
              <i class="fa fa-arrow-right"></i>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Enhanced Core Capabilities -->
      <div class="capabilities-section">
        <div class="capabilities-header">
          <span class="capabilities-label">Core Technologies</span>
          <div class="capabilities-indicator">
            <span class="indicator-dot active"></span>
            <span class="indicator-text">AI-Powered</span>
          </div>
        </div>
        <div class="capabilities-grid">
          <div
            v-for="(capability, index) in capabilities"
            :key="capability.id"
            class="capability-item"
            :style="{ animationDelay: `${600 + index * 150}ms` }"
            @mouseenter="handleCapabilityHover(capability.id)"
          >
            <div class="capability-icon">
              <i :class="capability.icon"></i>
            </div>
            <div class="capability-content">
              <span class="capability-title">{{ capability.title }}</span>
              <span class="capability-description">{{ capability.description }}</span>
            </div>
            <div class="capability-progress">
              <div class="progress-bar" :style="{ width: capability.proficiency + '%' }"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call-to-Action Footer -->
      <div class="dropdown-footer">
        <NuxtLink to="/solutions" class="btn btn-primary btn-sm">
          <i class="fa fa-rocket me-2"></i>
          Explore All Solutions
        </NuxtLink>
        <NuxtLink to="/contact" class="btn btn-outline-primary btn-sm">
          <i class="fa fa-comments me-2"></i>
          Discuss Your Needs
        </NuxtLink>
      </div>
    </div>
  </li>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// Reactive state
const isAnimating = ref(false)
const dropdownContainer = ref(null)
const dropdownMenu = ref(null)
const hoveredItem = ref(null)

// Solutions data with enhanced structure
const leftColumnSolutions = reactive([
  {
    id: 'financial',
    title: 'Financial Services',
    description: 'Risk analytics, fraud detection, regulatory compliance',
    path: '/solutions/financial-services',
    icon: 'fa fa-university',
    iconClass: 'financial',
    tags: ['Risk Management', 'Compliance', 'Fraud Detection']
  },
  {
    id: 'healthcare',
    title: 'Healthcare Analytics',
    description: 'Patient insights, clinical data, predictive health modeling',
    path: '/solutions/healthcare-analytics',
    icon: 'fa fa-heartbeat',
    iconClass: 'healthcare',
    tags: ['Patient Care', 'Clinical Data', 'Predictive Health']
  },
  {
    id: 'retail',
    title: 'Retail Intelligence',
    description: 'Customer analytics, inventory optimization, demand forecasting',
    path: '/solutions/retail-intelligence',
    icon: 'fa fa-shopping-cart',
    iconClass: 'retail',
    tags: ['Customer Analytics', 'Inventory', 'Forecasting']
  }
])

const rightColumnSolutions = reactive([
  {
    id: 'government',
    title: 'Smart Government',
    description: 'Public analytics, citizen services, policy insights',
    path: '/solutions/smart-government',
    icon: 'fa fa-building',
    iconClass: 'government',
    tags: ['Public Analytics', 'Citizen Services', 'Policy']
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing 4.0',
    description: 'Predictive maintenance, supply chain, quality control',
    path: '/solutions/manufacturing-4-0',
    icon: 'fa fa-cogs',
    iconClass: 'manufacturing',
    tags: ['IoT', 'Predictive Maintenance', 'Quality Control']
  },
  {
    id: 'education',
    title: 'Education Analytics',
    description: 'Student performance, learning optimization, resource planning',
    path: '/solutions/education-analytics',
    icon: 'fa fa-graduation-cap',
    iconClass: 'education',
    tags: ['Learning Analytics', 'Performance', 'Resources']
  }
])

const capabilities = reactive([
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Advanced algorithms',
    icon: 'fa fa-brain',
    proficiency: 95
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    description: 'Scalable infrastructure',
    icon: 'fa fa-cloud',
    proficiency: 90
  },
  {
    id: 'data',
    title: 'Data Engineering',
    description: 'Pipeline optimization',
    icon: 'fa fa-database',
    proficiency: 88
  },
  {
    id: 'bi',
    title: 'Business Intelligence',
    description: 'Actionable insights',
    icon: 'fa fa-chart-line',
    proficiency: 92
  }
])

// Enhanced interaction handlers
const handleMouseEnter = () => {
  isAnimating.value = true
}

const handleMouseLeave = () => {
  setTimeout(() => {
    isAnimating.value = false
  }, 300)
}

const handleItemHover = (itemId) => {
  hoveredItem.value = itemId
  // Add subtle haptic feedback for supported devices
  if (navigator.vibrate) {
    navigator.vibrate(10)
  }
}

const handleItemLeave = () => {
  hoveredItem.value = null
}

const handleCapabilityHover = (capabilityId) => {
  // Animate progress bar on hover
  const capability = capabilities.find(c => c.id === capabilityId)
  if (capability) {
    // Trigger progress animation
    setTimeout(() => {
      capability.proficiency = Math.min(capability.proficiency + 2, 100)
    }, 100)
  }
}

// Lifecycle hooks
onMounted(() => {
  // Initialize intersection observer for animations
  if (dropdownMenu.value) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    })
    observer.observe(dropdownMenu.value)
  }
})
</script>

<style scoped>
/* Enhanced Dropdown Toggle */
.dropdown-toggle {
  color: white !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.dropdown-toggle::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent);
  transition: left 0.5s ease;
}

.dropdown-toggle:hover::before {
  left: 100%;
}

.dropdown-toggle:hover,
.dropdown-toggle:focus {
  color: #8b5cf6 !important;
  transform: translateY(-1px);
}

/* Enhanced Dropdown Container */
.solutions-dropdown {
  background: rgba(255, 255, 255, 0.98) !important;
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-radius: 1.5rem !important;
  margin-top: 0.75rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  box-shadow:
    0 32px 80px rgba(0, 0, 0, 0.12),
    0 16px 40px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.5) !important;
  min-width: 680px;
  max-width: 720px;
  left: 50% !important;
  transform: translateX(-50%) translateY(-8px) scale(0.98) !important;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.solutions-dropdown.show {
  transform: translateX(-50%) translateY(0) scale(1) !important;
  opacity: 1;
  visibility: visible;
}

.solutions-dropdown.animate-in {
  animation: dropdownSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes dropdownSlideIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-12px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

/* Enhanced Header Section */
.dropdown-header-section {
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(139, 92, 246, 0.1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-content {
  flex: 1;
}

.dropdown-header-title {
  color: #1a1a1a;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.dropdown-header-subtitle {
  color: #6b7280;
  font-size: 0.9375rem;
  font-weight: 500;
  margin-bottom: 0;
  line-height: 1.4;
}

.header-decoration {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.pulse-dot:nth-child(2) {
  animation-delay: 0.5s;
}

.pulse-dot:nth-child(3) {
  animation-delay: 1s;
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

/* Enhanced Solution Items */
.solutions-dropdown-item {
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  color: inherit;
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  animation: itemSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes itemSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  transition: opacity 0.4s ease;
}

.solutions-dropdown-item:hover {
  transform: translateY(-4px) scale(1.02);
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(139, 92, 246, 0.25);
  box-shadow:
    0 20px 60px rgba(139, 92, 246, 0.15),
    0 8px 32px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: inherit;
}

.solutions-dropdown-item:hover::before {
  opacity: 1;
}

/* Enhanced Icon Wrapper */
.solution-icon-wrapper {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.25rem;
  flex-shrink: 0;
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.25);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.icon-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.solutions-dropdown-item:hover .icon-glow {
  opacity: 1;
}

/* Icon color variations */
.solution-icon-wrapper.healthcare {
  background: linear-gradient(135deg, #ef4444, #f87171);
  box-shadow: 0 8px 24px rgba(239, 68, 68, 0.25);
}

.solution-icon-wrapper.retail {
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.25);
}

.solution-icon-wrapper.government {
  background: linear-gradient(135deg, #06b6d4, #67e8f9);
  box-shadow: 0 8px 24px rgba(6, 182, 212, 0.25);
}

.solution-icon-wrapper.manufacturing {
  background: linear-gradient(135deg, #6b7280, #9ca3af);
  box-shadow: 0 8px 24px rgba(107, 114, 128, 0.25);
}

.solution-icon-wrapper.education {
  background: linear-gradient(135deg, #10b981, #34d399);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.25);
}

.solution-icon {
  color: white;
  font-size: 1.375rem;
  font-weight: 600;
  transition: transform 0.4s ease;
  z-index: 2;
}

.solutions-dropdown-item:hover .solution-icon {
  transform: scale(1.1) rotate(5deg);
}

/* Enhanced Content Area */
.solution-content {
  flex: 1;
  min-width: 0;
}

.solution-title {
  font-weight: 700;
  font-size: 1.0625rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.solution-description {
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 0.75rem;
}

.solution-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.solution-tag {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

/* Enhanced Arrow */
.solution-arrow {
  opacity: 0;
  transform: translateX(-12px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  color: #8b5cf6;
  font-size: 1.125rem;
  margin-left: 1rem;
  align-self: center;
}

.solutions-dropdown-item:hover .solution-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Enhanced Capabilities Section */
.capabilities-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid rgba(139, 92, 246, 0.1);
}

.capabilities-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.capabilities-label {
  color: #374151;
  font-weight: 700;
  font-size: 0.9375rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.capabilities-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6b7280;
  opacity: 0.3;
  transition: all 0.3s ease;
}

.indicator-dot.active {
  background: #10b981;
  opacity: 1;
  animation: pulse 2s ease-in-out infinite;
}

.indicator-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: #10b981;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.capability-item {
  padding: 1rem;
  background: rgba(139, 92, 246, 0.03);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: itemSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.capability-item:hover {
  background: rgba(139, 92, 246, 0.08);
  border-color: rgba(139, 92, 246, 0.2);
  transform: translateY(-2px);
}

.capability-icon {
  color: #8b5cf6;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.capability-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
}

.capability-title {
  font-weight: 600;
  font-size: 0.875rem;
  color: #374151;
}

.capability-description {
  font-size: 0.75rem;
  color: #6b7280;
}

.capability-progress {
  height: 4px;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #8b5cf6, #a855f7);
  border-radius: 2px;
  transition: width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Enhanced Footer */
.dropdown-footer {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(139, 92, 246, 0.1);
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.dropdown-footer .btn {
  font-size: 0.875rem;
  padding: 0.625rem 1.25rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.dropdown-footer .btn:hover {
  transform: translateY(-2px);
}

/* Mobile Responsiveness */
@media (max-width: 991.98px) {
  .solutions-dropdown {
    min-width: auto !important;
    max-width: none !important;
    width: calc(100vw - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1.5rem;
    left: 0 !important;
    transform: none !important;
  }

  .solutions-dropdown.show {
    transform: none !important;
  }

  .capabilities-grid {
    grid-template-columns: 1fr;
  }

  .dropdown-footer {
    flex-direction: column;
  }

  .dropdown-footer .btn {
    width: 100%;
  }
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .solutions-dropdown {
    background: rgba(17, 24, 39, 0.98) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
  }

  .dropdown-header-title,
  .solution-title,
  .capability-title {
    color: #f9fafb;
  }

  .dropdown-header-subtitle,
  .solution-description,
  .capability-description {
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

  .capability-item {
    background: rgba(139, 92, 246, 0.08);
    border-color: rgba(139, 92, 246, 0.2);
  }
}
</style>