export interface Solution {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  icon: string
  iconColor: string
  heroImage: string
  features: {
    title: string
    description: string
    icon: string
  }[]
  benefits: {
    title: string
    description: string
    icon: string
  }[]
  useCases: string[]
  technologies: string[]
  processSteps: {
    number: string
    title: string
    description: string
  }[]
  testimonial?: {
    quote: string
    author: string
    position: string
    company: string
    image?: string
  }
  cta: {
    title: string
    description: string
    buttonText: string
  }
}

export const solutions: Solution[] = [
  {
    id: 'financial-services',
    slug: 'financial-services',
    title: 'Financial Services',
    subtitle: 'Transform your financial operations with intelligent data solutions',
    description: 'Our comprehensive suite of financial data solutions helps banks, investment firms, and fintech companies leverage advanced analytics to enhance decision-making, reduce risk, and improve operational efficiency.',
    icon: 'fa-university',
    iconColor: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
    heroImage: '/img/solutions/financial-services-hero.jpg',
    features: [
      {
        title: 'Risk Analytics',
        description: 'Advanced risk modeling and assessment using machine learning algorithms to predict and mitigate financial risks in real-time.',
        icon: 'fa-shield-alt'
      },
      {
        title: 'Fraud Detection',
        description: 'Intelligent fraud detection systems that identify suspicious patterns and anomalies across millions of transactions.',
        icon: 'fa-exclamation-triangle'
      },
      {
        title: 'Regulatory Compliance',
        description: 'Automated compliance monitoring and reporting to ensure adherence to financial regulations and standards.',
        icon: 'fa-balance-scale'
      },
      {
        title: 'Portfolio Optimization',
        description: 'Data-driven portfolio management strategies that maximize returns while minimizing risk exposure.',
        icon: 'fa-chart-line'
      }
    ],
    benefits: [
      {
        title: 'Reduced Operational Risk',
        description: 'Minimize financial losses through predictive analytics and early warning systems.',
        icon: 'fa-check-circle'
      },
      {
        title: 'Enhanced Decision Making',
        description: 'Make informed decisions with real-time insights and comprehensive data analysis.',
        icon: 'fa-brain'
      },
      {
        title: 'Improved Compliance',
        description: 'Stay ahead of regulatory requirements with automated compliance tracking.',
        icon: 'fa-certificate'
      },
      {
        title: 'Cost Efficiency',
        description: 'Reduce operational costs through process automation and optimization.',
        icon: 'fa-dollar-sign'
      }
    ],
    useCases: [
      'Credit risk assessment and scoring',
      'Anti-money laundering (AML) detection',
      'Customer churn prediction',
      'Market trend analysis',
      'Algorithmic trading strategies',
      'Customer 360 analytics'
    ],
    technologies: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Time Series Analysis',
      'Apache Spark',
      'Python',
      'R',
      'TensorFlow'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Data Integration',
        description: 'Consolidate data from multiple financial systems and external sources into a unified platform.'
      },
      {
        number: '02',
        title: 'Data Cleansing',
        description: 'Ensure data quality through validation, standardization, and enrichment processes.'
      },
      {
        number: '03',
        title: 'Model Development',
        description: 'Build and train custom ML models tailored to your specific financial use cases.'
      },
      {
        number: '04',
        title: 'Implementation',
        description: 'Deploy solutions seamlessly into your existing infrastructure with minimal disruption.'
      },
      {
        number: '05',
        title: 'Monitoring & Optimization',
        description: 'Continuously monitor performance and optimize models for maximum effectiveness.'
      }
    ],
    testimonial: {
      quote: 'Gamma Neutral transformed our risk management capabilities. We now detect potential issues 60% faster and have reduced false positives by 40%.',
      author: 'Sarah Chen',
      position: 'Chief Risk Officer',
      company: 'Global Finance Corp'
    },
    cta: {
      title: 'Ready to Transform Your Financial Operations?',
      description: 'Discover how our data solutions can help you make smarter financial decisions.',
      buttonText: 'Schedule a Consultation'
    }
  },
  {
    id: 'healthcare-analytics',
    slug: 'healthcare-analytics',
    title: 'Healthcare Analytics',
    subtitle: 'Empowering healthcare with data-driven insights',
    description: 'Leverage the power of advanced analytics to improve patient outcomes, optimize operations, and reduce healthcare costs through intelligent data solutions.',
    icon: 'fa-heartbeat',
    iconColor: 'linear-gradient(135deg, #ef4444, #f87171)',
    heroImage: '/img/solutions/healthcare-hero.jpg',
    features: [
      {
        title: 'Patient Insights',
        description: 'Comprehensive patient analytics for personalized treatment plans and improved care delivery.',
        icon: 'fa-user-md'
      },
      {
        title: 'Clinical Data Analysis',
        description: 'Transform clinical data into actionable insights for better medical decision-making.',
        icon: 'fa-microscope'
      },
      {
        title: 'Predictive Health',
        description: 'AI-powered predictions for disease risk, readmission rates, and treatment outcomes.',
        icon: 'fa-chart-area'
      },
      {
        title: 'Operational Excellence',
        description: 'Optimize hospital operations, resource allocation, and workflow efficiency.',
        icon: 'fa-hospital'
      }
    ],
    benefits: [
      {
        title: 'Improved Patient Outcomes',
        description: 'Enhance care quality through data-driven treatment decisions and preventive care.',
        icon: 'fa-heart'
      },
      {
        title: 'Cost Reduction',
        description: 'Lower healthcare costs through efficient resource utilization and waste reduction.',
        icon: 'fa-coins'
      },
      {
        title: 'Research Acceleration',
        description: 'Speed up medical research and drug discovery with advanced analytics.',
        icon: 'fa-flask'
      },
      {
        title: 'Regulatory Compliance',
        description: 'Ensure HIPAA compliance and maintain data privacy standards.',
        icon: 'fa-shield-virus'
      }
    ],
    useCases: [
      'Disease prediction and prevention',
      'Treatment effectiveness analysis',
      'Patient readmission risk assessment',
      'Medical imaging analysis',
      'Drug discovery and development',
      'Population health management'
    ],
    technologies: [
      'Healthcare ML Models',
      'FHIR Standards',
      'HL7 Integration',
      'Medical NLP',
      'Computer Vision',
      'Apache Kafka',
      'Snowflake',
      'Docker'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Data Collection',
        description: 'Securely gather healthcare data from EHR systems, medical devices, and clinical sources.'
      },
      {
        number: '02',
        title: 'Data Standardization',
        description: 'Normalize healthcare data using industry standards like FHIR and HL7.'
      },
      {
        number: '03',
        title: 'Analytics Development',
        description: 'Build custom healthcare analytics models tailored to specific medical use cases.'
      },
      {
        number: '04',
        title: 'Clinical Integration',
        description: 'Integrate analytics seamlessly into clinical workflows and decision support systems.'
      },
      {
        number: '05',
        title: 'Continuous Improvement',
        description: 'Monitor outcomes and refine models based on clinical feedback and results.'
      }
    ],
    testimonial: {
      quote: 'The predictive analytics platform helped us reduce readmission rates by 25% and improve patient satisfaction scores significantly.',
      author: 'Dr. Michael Roberts',
      position: 'Chief Medical Officer',
      company: 'Regional Health Network'
    },
    cta: {
      title: 'Transform Healthcare with Data',
      description: 'Learn how our analytics solutions can improve patient care and operational efficiency.',
      buttonText: 'Get Started'
    }
  },
  {
    id: 'retail-intelligence',
    slug: 'retail-intelligence',
    title: 'Retail Intelligence',
    subtitle: 'Smart retail solutions for the modern marketplace',
    description: 'Harness customer data and market insights to drive sales, optimize inventory, and deliver personalized shopping experiences across all channels.',
    icon: 'fa-shopping-cart',
    iconColor: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    heroImage: '/img/solutions/retail-hero.jpg',
    features: [
      {
        title: 'Customer Analytics',
        description: 'Deep customer insights for personalization, segmentation, and lifetime value optimization.',
        icon: 'fa-users'
      },
      {
        title: 'Inventory Optimization',
        description: 'Smart inventory management with demand forecasting and supply chain analytics.',
        icon: 'fa-boxes'
      },
      {
        title: 'Price Optimization',
        description: 'Dynamic pricing strategies based on market conditions, competition, and demand.',
        icon: 'fa-tags'
      },
      {
        title: 'Omnichannel Analytics',
        description: 'Unified view of customer journey across online, mobile, and physical stores.',
        icon: 'fa-store'
      }
    ],
    benefits: [
      {
        title: 'Increased Revenue',
        description: 'Boost sales through personalized marketing and optimized product placement.',
        icon: 'fa-chart-up'
      },
      {
        title: 'Reduced Inventory Costs',
        description: 'Minimize stockouts and overstock situations with accurate demand forecasting.',
        icon: 'fa-warehouse'
      },
      {
        title: 'Enhanced Customer Experience',
        description: 'Deliver personalized experiences that increase customer satisfaction and loyalty.',
        icon: 'fa-smile'
      },
      {
        title: 'Competitive Advantage',
        description: 'Stay ahead with real-time market insights and competitive intelligence.',
        icon: 'fa-trophy'
      }
    ],
    useCases: [
      'Customer segmentation and targeting',
      'Product recommendation engines',
      'Demand forecasting',
      'Market basket analysis',
      'Customer churn prevention',
      'Store location optimization'
    ],
    technologies: [
      'Recommendation Systems',
      'Computer Vision',
      'IoT Analytics',
      'Apache Spark',
      'Elasticsearch',
      'Redis',
      'Tableau',
      'Power BI'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Data Aggregation',
        description: 'Collect data from POS systems, e-commerce platforms, and customer touchpoints.'
      },
      {
        number: '02',
        title: 'Customer Profiling',
        description: 'Build comprehensive customer profiles and behavioral patterns.'
      },
      {
        number: '03',
        title: 'Predictive Modeling',
        description: 'Develop models for demand forecasting, customer behavior, and market trends.'
      },
      {
        number: '04',
        title: 'Solution Deployment',
        description: 'Implement analytics solutions across retail channels and systems.'
      },
      {
        number: '05',
        title: 'Performance Tracking',
        description: 'Monitor KPIs and optimize strategies based on real-time performance data.'
      }
    ],
    testimonial: {
      quote: 'Our conversion rates increased by 35% after implementing the personalized recommendation system. Customer retention has never been better.',
      author: 'Jennifer Martinez',
      position: 'VP of Digital Commerce',
      company: 'National Retail Chain'
    },
    cta: {
      title: 'Revolutionize Your Retail Strategy',
      description: 'Discover how data intelligence can transform your retail business.',
      buttonText: 'Learn More'
    }
  },
  {
    id: 'smart-government',
    slug: 'smart-government',
    title: 'Smart Government',
    subtitle: 'Building smarter, data-driven public services',
    description: 'Enable government agencies to leverage data analytics for improved citizen services, policy making, and operational efficiency.',
    icon: 'fa-building',
    iconColor: 'linear-gradient(135deg, #06b6d4, #67e8f9)',
    heroImage: '/img/solutions/government-hero.jpg',
    features: [
      {
        title: 'Public Analytics',
        description: 'Comprehensive analytics for public service optimization and resource allocation.',
        icon: 'fa-chart-pie'
      },
      {
        title: 'Citizen Services',
        description: 'Improve citizen engagement and service delivery through data insights.',
        icon: 'fa-user-friends'
      },
      {
        title: 'Policy Insights',
        description: 'Data-driven policy recommendations and impact analysis.',
        icon: 'fa-gavel'
      },
      {
        title: 'Smart City Solutions',
        description: 'IoT and analytics for traffic management, utilities, and urban planning.',
        icon: 'fa-city'
      }
    ],
    benefits: [
      {
        title: 'Improved Service Delivery',
        description: 'Enhance citizen satisfaction through efficient and responsive public services.',
        icon: 'fa-handshake'
      },
      {
        title: 'Cost Savings',
        description: 'Reduce operational costs through process optimization and automation.',
        icon: 'fa-piggy-bank'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Make informed policy decisions based on comprehensive data analysis.',
        icon: 'fa-lightbulb'
      },
      {
        title: 'Transparency',
        description: 'Increase government transparency with open data initiatives and dashboards.',
        icon: 'fa-eye'
      }
    ],
    useCases: [
      'Crime prediction and prevention',
      'Traffic flow optimization',
      'Public health monitoring',
      'Resource allocation planning',
      'Citizen sentiment analysis',
      'Emergency response optimization'
    ],
    technologies: [
      'GIS Analytics',
      'IoT Platforms',
      'Big Data Processing',
      'Cloud Computing',
      'Predictive Analytics',
      'Hadoop',
      'MongoDB',
      'AWS GovCloud'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Assessment',
        description: 'Evaluate current systems and identify opportunities for data-driven improvements.'
      },
      {
        number: '02',
        title: 'Data Integration',
        description: 'Integrate data from various government departments and public sources.'
      },
      {
        number: '03',
        title: 'Platform Development',
        description: 'Build secure, scalable analytics platforms for government use.'
      },
      {
        number: '04',
        title: 'Training & Adoption',
        description: 'Train government staff and ensure smooth adoption of new systems.'
      },
      {
        number: '05',
        title: 'Continuous Support',
        description: 'Provide ongoing support and system enhancements.'
      }
    ],
    testimonial: {
      quote: 'The smart city analytics platform helped us reduce traffic congestion by 30% and improve emergency response times significantly.',
      author: 'Robert Thompson',
      position: 'City Manager',
      company: 'Metropolitan City Government'
    },
    cta: {
      title: 'Build a Smarter Government',
      description: 'Learn how data analytics can transform public services.',
      buttonText: 'Explore Solutions'
    }
  },
  {
    id: 'manufacturing-4-0',
    slug: 'manufacturing-4-0',
    title: 'Manufacturing 4.0',
    subtitle: 'Industry 4.0 solutions for smart manufacturing',
    description: 'Transform your manufacturing operations with IoT, AI, and advanced analytics to achieve operational excellence and competitive advantage.',
    icon: 'fa-cogs',
    iconColor: 'linear-gradient(135deg, #6b7280, #9ca3af)',
    heroImage: '/img/solutions/manufacturing-hero.jpg',
    features: [
      {
        title: 'Predictive Maintenance',
        description: 'AI-powered maintenance predictions to minimize downtime and extend equipment life.',
        icon: 'fa-wrench'
      },
      {
        title: 'Supply Chain Analytics',
        description: 'End-to-end supply chain visibility and optimization for improved efficiency.',
        icon: 'fa-truck'
      },
      {
        title: 'Quality Control',
        description: 'Advanced quality analytics and defect detection using computer vision and ML.',
        icon: 'fa-check-double'
      },
      {
        title: 'Production Optimization',
        description: 'Real-time production monitoring and optimization for maximum efficiency.',
        icon: 'fa-industry'
      }
    ],
    benefits: [
      {
        title: 'Reduced Downtime',
        description: 'Minimize unplanned downtime through predictive maintenance.',
        icon: 'fa-clock'
      },
      {
        title: 'Improved Quality',
        description: 'Enhance product quality with real-time monitoring and control.',
        icon: 'fa-star'
      },
      {
        title: 'Cost Efficiency',
        description: 'Reduce operational costs through process optimization.',
        icon: 'fa-chart-down'
      },
      {
        title: 'Increased Productivity',
        description: 'Boost production efficiency with data-driven insights.',
        icon: 'fa-rocket'
      }
    ],
    useCases: [
      'Equipment failure prediction',
      'Production line optimization',
      'Quality defect detection',
      'Supply chain risk management',
      'Energy consumption optimization',
      'Workforce productivity analysis'
    ],
    technologies: [
      'Industrial IoT',
      'Edge Computing',
      'Computer Vision',
      'Digital Twins',
      'SCADA Systems',
      'OPC UA',
      'MQTT',
      'Azure IoT'
    ],
    processSteps: [
      {
        number: '01',
        title: 'IoT Integration',
        description: 'Connect machinery and sensors to collect real-time production data.'
      },
      {
        number: '02',
        title: 'Data Processing',
        description: 'Process and analyze data from multiple sources in real-time.'
      },
      {
        number: '03',
        title: 'AI Model Development',
        description: 'Build custom AI models for specific manufacturing challenges.'
      },
      {
        number: '04',
        title: 'System Integration',
        description: 'Integrate analytics with existing MES and ERP systems.'
      },
      {
        number: '05',
        title: 'Optimization',
        description: 'Continuously optimize processes based on insights and feedback.'
      }
    ],
    testimonial: {
      quote: 'Predictive maintenance reduced our unplanned downtime by 45% and saved us millions in maintenance costs.',
      author: 'David Lee',
      position: 'Plant Manager',
      company: 'Advanced Manufacturing Inc.'
    },
    cta: {
      title: 'Modernize Your Manufacturing',
      description: 'Discover how Industry 4.0 solutions can transform your operations.',
      buttonText: 'Request Demo'
    }
  },
  {
    id: 'education-analytics',
    slug: 'education-analytics',
    title: 'Education Analytics',
    subtitle: 'Empowering education through data insights',
    description: 'Transform educational outcomes with data-driven insights for personalized learning, institutional effectiveness, and student success.',
    icon: 'fa-graduation-cap',
    iconColor: 'linear-gradient(135deg, #10b981, #34d399)',
    heroImage: '/img/solutions/education-hero.jpg',
    features: [
      {
        title: 'Student Performance',
        description: 'Track and analyze student performance to identify areas for improvement.',
        icon: 'fa-user-graduate'
      },
      {
        title: 'Learning Optimization',
        description: 'Personalize learning experiences based on individual student needs and patterns.',
        icon: 'fa-book-open'
      },
      {
        title: 'Resource Planning',
        description: 'Optimize resource allocation and curriculum planning with data insights.',
        icon: 'fa-calendar-alt'
      },
      {
        title: 'Institutional Analytics',
        description: 'Comprehensive analytics for institutional effectiveness and decision-making.',
        icon: 'fa-university'
      }
    ],
    benefits: [
      {
        title: 'Improved Outcomes',
        description: 'Enhance student success rates through personalized interventions.',
        icon: 'fa-chart-line'
      },
      {
        title: 'Early Intervention',
        description: 'Identify at-risk students early for timely support.',
        icon: 'fa-bell'
      },
      {
        title: 'Resource Efficiency',
        description: 'Optimize resource utilization and reduce operational costs.',
        icon: 'fa-coins'
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Make informed decisions based on comprehensive analytics.',
        icon: 'fa-database'
      }
    ],
    useCases: [
      'Student retention prediction',
      'Learning path optimization',
      'Course recommendation systems',
      'Performance prediction models',
      'Attendance tracking and analysis',
      'Curriculum effectiveness analysis'
    ],
    technologies: [
      'Learning Analytics',
      'Educational Data Mining',
      'Natural Language Processing',
      'Predictive Modeling',
      'LMS Integration',
      'xAPI',
      'Python',
      'R'
    ],
    processSteps: [
      {
        number: '01',
        title: 'Data Collection',
        description: 'Gather data from LMS, SIS, and other educational platforms.'
      },
      {
        number: '02',
        title: 'Analysis Framework',
        description: 'Develop comprehensive analytics framework for educational insights.'
      },
      {
        number: '03',
        title: 'Model Development',
        description: 'Build predictive models for student success and intervention.'
      },
      {
        number: '04',
        title: 'Dashboard Creation',
        description: 'Create intuitive dashboards for educators and administrators.'
      },
      {
        number: '05',
        title: 'Impact Measurement',
        description: 'Measure and optimize the impact of interventions.'
      }
    ],
    testimonial: {
      quote: 'The analytics platform helped us increase graduation rates by 20% and improve student engagement significantly.',
      author: 'Dr. Emily Johnson',
      position: 'Dean of Academic Affairs',
      company: 'State University'
    },
    cta: {
      title: 'Transform Education with Data',
      description: 'Learn how analytics can improve educational outcomes.',
      buttonText: 'Discover More'
    }
  }
]

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find(s => s.slug === slug)
}

export function getAllSolutions(): Solution[] {
  return solutions
}