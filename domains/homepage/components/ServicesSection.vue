<template>
  <!-- Services Grid Section -->
  <section class="py-5 my-5">
    <div class="container">
      <!-- Section Header using shared component -->
      <SectionHeader
        title="Our Core Services"
        subtitle="Transform your business with our comprehensive data solutions"
        headingSize="h1"
        maxWidth="700px"
      />

      <!-- Services Grid -->
      <div class="row g-4">
        <!-- Service Cards using shared component -->
        <div class="col-lg-4 col-md-6" v-for="service in services" :key="service.title">
          <ServiceCard
            :title="service.title"
            :description="service.description"
            :features="service.features"
            :svgIcon="service.svgIcon"
            :gradientClass="service.gradientClass"
            :link="service.link"
          />
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
import { h } from 'vue'
import ServiceCard from '~/components/shared/cards/ServiceCard.vue'
import SectionHeader from '~/components/shared/sections/SectionHeader.vue'

// SVG Icon Components
const AIIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none' }, [
  h('path', { d: 'M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z', stroke: 'white', 'stroke-width': '2' }),
  h('path', { d: 'M12 8v8M8 12h8', stroke: 'white', 'stroke-width': '2' })
])

const DataEngIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none' }, [
  h('rect', { x: '3', y: '3', width: '18', height: '5', rx: '1', stroke: 'white', 'stroke-width': '2' }),
  h('rect', { x: '3', y: '10', width: '18', height: '5', rx: '1', stroke: 'white', 'stroke-width': '2' }),
  h('rect', { x: '3', y: '17', width: '18', height: '5', rx: '1', stroke: 'white', 'stroke-width': '2' })
])

const CloudIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none' }, [
  h('path', { d: 'M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z', stroke: 'white', 'stroke-width': '2' })
])

const SecurityIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none' }, [
  h('path', { d: 'M12 2L4 7v6c0 4.5 2.5 8.5 8 10 5.5-1.5 8-5.5 8-10V7l-8-5z', stroke: 'white', 'stroke-width': '2' }),
  h('path', { d: 'M9 12l2 2 4-4', stroke: 'white', 'stroke-width': '2' })
])

const BIIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none' }, [
  h('rect', { x: '3', y: '3', width: '7', height: '9', stroke: 'white', 'stroke-width': '2' }),
  h('rect', { x: '14', y: '3', width: '7', height: '5', stroke: 'white', 'stroke-width': '2' }),
  h('rect', { x: '14', y: '12', width: '7', height: '9', stroke: 'white', 'stroke-width': '2' }),
  h('rect', { x: '3', y: '16', width: '7', height: '5', stroke: 'white', 'stroke-width': '2' })
])

const BigDataIcon = () => h('svg', { width: '32', height: '32', viewBox: '0 0 24 24', fill: 'none' }, [
  h('circle', { cx: '12', cy: '12', r: '3', stroke: 'white', 'stroke-width': '2' }),
  h('circle', { cx: '12', cy: '12', r: '8', stroke: 'white', 'stroke-width': '2' }),
  h('path', { d: 'M12 1v6m0 6v6m11-7h-6m-6 0H1', stroke: 'white', 'stroke-width': '2' })
])

// Services Data
const services = [
  {
    title: 'AI & Machine Learning',
    description: 'Deploy intelligent systems that automate processes, predict outcomes, and unlock insights from your data.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
    svgIcon: AIIcon,
    gradientClass: 'bg-gradient-primary',
    link: '/services/ai'
  },
  {
    title: 'Data Engineering',
    description: 'Build robust data pipelines and architectures that ensure seamless data flow across your organization.',
    features: ['ETL/ELT Pipelines', 'Real-time Processing', 'Data Lake Design'],
    svgIcon: DataEngIcon,
    gradientClass: 'bg-gradient-info',
    link: '/services/data-engineering'
  },
  {
    title: 'Cloud Computing',
    description: 'Migrate and optimize your infrastructure with scalable cloud solutions from AWS, Azure, and GCP.',
    features: ['Cloud Migration', 'Serverless Architecture', 'Cost Optimization'],
    svgIcon: CloudIcon,
    gradientClass: 'bg-gradient-success',
    link: '/services/cloud'
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your data assets with enterprise-grade security solutions and compliance frameworks.',
    features: ['Threat Detection', 'Compliance Management', '24/7 Monitoring'],
    svgIcon: SecurityIcon,
    gradientClass: 'bg-gradient-danger',
    link: '/services/security'
  },
  {
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable insights with interactive dashboards and reports.',
    features: ['Interactive Dashboards', 'KPI Monitoring', 'Strategic Reporting'],
    svgIcon: BIIcon,
    gradientClass: 'bg-gradient-warning',
    link: '/services/bi'
  },
  {
    title: 'Big Data Solutions',
    description: 'Process and analyze massive datasets with distributed computing and advanced analytics.',
    features: ['Distributed Processing', 'Spark & Hadoop', 'Data Lake Solutions'],
    svgIcon: BigDataIcon,
    gradientClass: 'bg-gradient-purple',
    link: '/services/bigdata'
  }
]
</script>

<style scoped>
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
.rounded-4 {
  border-radius: 1rem !important;
}
</style>
