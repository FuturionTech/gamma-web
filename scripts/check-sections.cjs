#!/usr/bin/env node

/**
 * Professional Section Health Check
 * Verifies all homepage sections are properly structured
 */

const fs = require('fs');
const path = require('path');

const HOMEPAGE_PATH = path.join(__dirname, '../domains/homepage/pages/index.vue');
const COMPONENTS_DIR = path.join(__dirname, '../domains/homepage/components');

console.log('🔍 Checking homepage section structure...\n');

// Check if homepage exists
if (!fs.existsSync(HOMEPAGE_PATH)) {
    console.error('❌ Homepage not found at:', HOMEPAGE_PATH);
    process.exit(1);
}

// Read homepage content
const homepageContent = fs.readFileSync(HOMEPAGE_PATH, 'utf8');

// Check for SectionWrapper usage
const sectionWrapperCount = (homepageContent.match(/SectionWrapper/g) || []).length;
console.log(`✅ Found ${sectionWrapperCount} SectionWrapper instances`);

// Check for debug mode
const hasDebugMode = homepageContent.includes('debugMode');
console.log(`${hasDebugMode ? '✅' : '❌'} Debug mode ${hasDebugMode ? 'enabled' : 'missing'}`);

// Check component imports
const requiredComponents = [
    'HeroSection',
    'ServicesSection',
    'BenefitsSection',
    'StatsSection',
    'ProcessSection',
    'IndustriesSection',
    'TestimonialsSection',
    'ContactCTASection'
];

console.log('\n📋 Checking component references:');
requiredComponents.forEach(component => {
    const isReferenced = homepageContent.includes(component);
    console.log(`${isReferenced ? '✅' : '❌'} ${component}`);

    // Check if component file exists
    const componentPath = path.join(COMPONENTS_DIR, `${component}.vue`);
    const fileExists = fs.existsSync(componentPath);
    console.log(`   File exists: ${fileExists ? '✅' : '❌'}`);
});

// Check for proper spacing classes
const spacingClasses = homepageContent.match(/spacing="[^"]*"/g) || [];
console.log(`\n📏 Spacing configuration: ${spacingClasses.length} instances found`);
spacingClasses.forEach((spacing, index) => {
    console.log(`   ${index + 1}. ${spacing}`);
});

// Check for background configurations
const backgroundClasses = homepageContent.match(/backgroundColor="[^"]*"/g) || [];
console.log(`\n🎨 Background configuration: ${backgroundClasses.length} instances found`);
backgroundClasses.forEach((bg, index) => {
    console.log(`   ${index + 1}. ${bg}`);
});

console.log('\n✨ Section health check complete!');
console.log('\n💡 Pro tips:');
console.log('   - Use Ctrl+Shift+D to toggle debug mode in development');
console.log('   - Check browser console for any component loading errors');
console.log('   - Verify all section content is rendering properly');
console.log('   - Test responsive behavior on different screen sizes');