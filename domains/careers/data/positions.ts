export interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  type: string // Full-time, Part-time, Contract
  remote: boolean
  salary: string
  experience: string
  posted: string
  status: 'active' | 'closed'
  summary: string
  description: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
  benefits: string[]
  skills: string[]
}

export const jobPositions: JobPosition[] = [
  {
    id: 'senior-data-scientist',
    title: 'Senior Data Scientist',
    department: 'Data Science & AI',
    location: 'Toronto, ON (108 Redpath Ave)',
    type: 'Full-time',
    remote: false,
    salary: '$120,000 - $160,000 CAD',
    experience: '5+ years',
    posted: '2025-09-15',
    status: 'active',
    summary: 'Lead machine learning projects and mentor junior data scientists in developing innovative solutions for our Fortune 500 clients.',
    description: 'We are seeking an experienced Senior Data Scientist to join our growing team at Gamma Neutral Consulting. In this role, you will lead cutting-edge machine learning projects, develop predictive models, and work directly with clients to transform their data into actionable insights. You will also mentor junior team members and contribute to our research initiatives.',
    responsibilities: [
      'Lead end-to-end machine learning projects from conception to deployment',
      'Develop and implement advanced statistical models and algorithms',
      'Collaborate with clients to understand business requirements and translate them into data solutions',
      'Mentor junior data scientists and provide technical guidance',
      'Present findings and recommendations to executive stakeholders',
      'Contribute to research papers and thought leadership content',
      'Ensure model quality, accuracy, and compliance with industry standards',
      'Drive innovation in data science methodologies and best practices'
    ],
    requirements: [
      'Master\'s or PhD in Computer Science, Statistics, Mathematics, or related field',
      '5+ years of experience in data science or machine learning roles',
      'Expert proficiency in Python and R programming languages',
      'Deep understanding of machine learning algorithms and statistical methods',
      'Experience with deep learning frameworks (TensorFlow, PyTorch)',
      'Strong SQL skills and experience with big data technologies',
      'Excellent communication and presentation skills',
      'Proven track record of delivering successful ML projects'
    ],
    niceToHave: [
      'Experience in consulting or client-facing roles',
      'Publications in peer-reviewed journals or conferences',
      'Knowledge of cloud platforms (AWS, Azure, GCP)',
      'Experience with MLOps and model deployment',
      'Domain expertise in finance, healthcare, or retail'
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Comprehensive health and dental coverage',
      'RRSP matching up to 6%',
      'Professional development budget ($5,000/year)',
      'Flexible work arrangements',
      '4 weeks vacation plus personal days',
      'Latest MacBook Pro and tech equipment',
      'Access to conferences and training programs'
    ],
    skills: ['Python', 'Machine Learning', 'Deep Learning', 'Statistics', 'TensorFlow', 'PyTorch', 'SQL', 'Data Visualization']
  },
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    department: 'Engineering',
    location: 'Remote (Canada)',
    type: 'Full-time',
    remote: true,
    salary: '$100,000 - $140,000 CAD',
    experience: '3+ years',
    posted: '2025-09-18',
    status: 'active',
    summary: 'Design and implement scalable ML pipelines and deploy models to production environments.',
    description: 'Join our engineering team to build robust, scalable machine learning infrastructure. You will work on deploying models to production, optimizing performance, and ensuring reliability of our ML systems that process billions of data points daily.',
    responsibilities: [
      'Design and implement scalable ML pipelines and infrastructure',
      'Deploy and monitor machine learning models in production',
      'Optimize model performance and reduce latency',
      'Build automated testing and validation frameworks',
      'Collaborate with data scientists to productionize models',
      'Implement MLOps best practices and CI/CD pipelines',
      'Monitor model drift and implement retraining strategies',
      'Document technical specifications and deployment procedures'
    ],
    requirements: [
      'Bachelor\'s or Master\'s in Computer Science or related field',
      '3+ years of experience in ML engineering or similar role',
      'Strong programming skills in Python and/or Java',
      'Experience with ML frameworks (TensorFlow, PyTorch, scikit-learn)',
      'Proficiency in cloud platforms and containerization (Docker, Kubernetes)',
      'Experience with MLOps tools and practices',
      'Understanding of software engineering best practices',
      'Strong problem-solving and debugging skills'
    ],
    niceToHave: [
      'Experience with streaming data processing',
      'Knowledge of distributed computing frameworks',
      'Familiarity with monitoring tools (Prometheus, Grafana)',
      'Experience with A/B testing frameworks',
      'Contributions to open-source projects'
    ],
    benefits: [
      'Competitive remote salary',
      'Comprehensive health benefits',
      'RRSP matching',
      'Home office setup allowance',
      'Flexible working hours',
      'Professional development opportunities',
      'Annual company retreats',
      'Mental health and wellness programs'
    ],
    skills: ['TensorFlow', 'MLOps', 'Cloud', 'Python', 'Kubernetes', 'Docker', 'CI/CD', 'AWS']
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Toronto, ON (108 Redpath Ave)',
    type: 'Full-time',
    remote: false,
    salary: '$90,000 - $120,000 CAD',
    experience: '3+ years',
    posted: '2025-09-20',
    status: 'active',
    summary: 'Build modern web applications and APIs for data visualization and analytics platforms.',
    description: 'We\'re looking for a talented Full Stack Developer to join our engineering team. You will work on building intuitive web applications that make complex data accessible and actionable for our clients.',
    responsibilities: [
      'Develop responsive web applications using React and Node.js',
      'Build RESTful APIs and GraphQL endpoints',
      'Create interactive data visualizations and dashboards',
      'Implement authentication and authorization systems',
      'Optimize application performance and scalability',
      'Write clean, maintainable, and well-tested code',
      'Participate in code reviews and technical discussions',
      'Collaborate with designers and data scientists'
    ],
    requirements: [
      'Bachelor\'s degree in Computer Science or equivalent experience',
      '3+ years of full stack development experience',
      'Proficiency in JavaScript/TypeScript, React, and Node.js',
      'Experience with modern CSS and responsive design',
      'Knowledge of database design (PostgreSQL, MongoDB)',
      'Understanding of RESTful APIs and GraphQL',
      'Experience with version control (Git)',
      'Strong communication and teamwork skills'
    ],
    niceToHave: [
      'Experience with data visualization libraries (D3.js, Chart.js)',
      'Knowledge of Python for backend development',
      'Familiarity with cloud services (AWS, Azure)',
      'Experience with Docker and containerization',
      'Understanding of CI/CD pipelines'
    ],
    benefits: [
      'Competitive salary and bonuses',
      'Extended health and dental coverage',
      'RRSP matching program',
      'Learning and development budget',
      'Flexible work arrangements',
      'Modern office in downtown Toronto',
      'Team lunches and social events',
      'Annual performance reviews with growth opportunities'
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL', 'REST APIs', 'Git', 'CSS']
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Architect',
    department: 'Infrastructure',
    location: 'Remote (Canada)',
    type: 'Full-time',
    remote: true,
    salary: '$130,000 - $170,000 CAD',
    experience: '7+ years',
    posted: '2025-09-10',
    status: 'active',
    summary: 'Design and implement cloud infrastructure solutions for large-scale data processing.',
    description: 'Lead the design and implementation of cloud infrastructure that powers our data platforms. You will architect scalable, secure, and cost-effective solutions on AWS, Azure, and GCP.',
    responsibilities: [
      'Design cloud architecture for data-intensive applications',
      'Implement infrastructure as code using Terraform',
      'Optimize cloud costs and resource utilization',
      'Ensure security best practices and compliance',
      'Lead cloud migration projects',
      'Provide technical leadership and mentorship',
      'Collaborate with development and data teams',
      'Document architecture decisions and standards'
    ],
    requirements: [
      'Bachelor\'s in Computer Science or related field',
      '7+ years of experience in cloud architecture',
      'Expert knowledge of AWS, Azure, or GCP',
      'Strong experience with Infrastructure as Code',
      'Deep understanding of networking and security',
      'Experience with container orchestration (Kubernetes)',
      'Knowledge of DevOps practices and tools',
      'Cloud certifications (AWS Solutions Architect, etc.)'
    ],
    niceToHave: [
      'Experience with multi-cloud strategies',
      'Knowledge of data engineering tools',
      'Understanding of compliance frameworks (SOC2, ISO27001)',
      'Experience with serverless architectures',
      'Background in financial services or healthcare'
    ],
    benefits: [
      'Highly competitive salary',
      'Comprehensive benefits package',
      'RRSP matching',
      'Professional certification support',
      'Flexible remote work',
      'Equipment allowance',
      'Conference attendance',
      'Sabbatical opportunities'
    ],
    skills: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'DevOps', 'Security', 'Networking', 'IaC']
  },
  {
    id: 'data-strategy-consultant',
    title: 'Data Strategy Consultant',
    department: 'Consulting',
    location: 'Toronto, ON (108 Redpath Ave)',
    type: 'Full-time',
    remote: false,
    salary: '$95,000 - $130,000 CAD',
    experience: '4+ years',
    posted: '2025-09-12',
    status: 'active',
    summary: 'Help clients develop and implement comprehensive data strategies aligned with business goals.',
    description: 'Join our consulting team to help Fortune 500 companies transform their data capabilities. You will work directly with C-level executives to develop data strategies that drive business value.',
    responsibilities: [
      'Conduct data maturity assessments for client organizations',
      'Develop comprehensive data strategy roadmaps',
      'Lead client workshops and executive presentations',
      'Identify data monetization opportunities',
      'Design data governance frameworks',
      'Manage consulting engagements and deliverables',
      'Build long-term client relationships',
      'Contribute to business development activities'
    ],
    requirements: [
      'Bachelor\'s degree in Business, Computer Science, or related field',
      '4+ years of consulting or strategy experience',
      'Strong understanding of data analytics and AI',
      'Excellent presentation and communication skills',
      'Experience with data governance and compliance',
      'Proven project management capabilities',
      'Ability to travel up to 30%',
      'Business acumen and strategic thinking'
    ],
    niceToHave: [
      'MBA or advanced degree',
      'Management consulting background',
      'Industry expertise in specific verticals',
      'Change management certification',
      'Published thought leadership'
    ],
    benefits: [
      'Competitive base salary plus bonuses',
      'Comprehensive health coverage',
      'RRSP matching',
      'Professional development programs',
      'Mentorship opportunities',
      'Travel rewards program',
      'Downtown office location',
      'Career advancement paths'
    ],
    skills: ['Strategy', 'Analytics', 'Consulting', 'Data Governance', 'Project Management', 'Presentations', 'Business Analysis']
  },
  {
    id: 'product-manager',
    title: 'Product Manager - Data Platform',
    department: 'Product',
    location: 'Toronto, ON (108 Redpath Ave)',
    type: 'Full-time',
    remote: false,
    salary: '$110,000 - $150,000 CAD',
    experience: '5+ years',
    posted: '2025-09-08',
    status: 'active',
    summary: 'Drive product vision and roadmap for our data analytics platform and solutions.',
    description: 'Lead the product strategy for our data platform that serves hundreds of enterprise clients. You will define the product vision, prioritize features, and work with cross-functional teams to deliver exceptional data products.',
    responsibilities: [
      'Define product vision and strategy for data platform',
      'Manage product roadmap and prioritize features',
      'Conduct user research and gather requirements',
      'Work with engineering and data science teams',
      'Define success metrics and track KPIs',
      'Lead agile ceremonies and sprint planning',
      'Communicate with stakeholders and executives',
      'Drive product launches and go-to-market strategies'
    ],
    requirements: [
      'Bachelor\'s degree in relevant field',
      '5+ years of product management experience',
      'Experience with B2B SaaS or data products',
      'Strong analytical and problem-solving skills',
      'Understanding of data analytics and ML concepts',
      'Excellent communication and leadership abilities',
      'Experience with agile methodologies',
      'Track record of successful product launches'
    ],
    niceToHave: [
      'Technical background in engineering or data science',
      'MBA or advanced degree',
      'Experience in enterprise software',
      'Knowledge of data privacy regulations',
      'Product management certifications'
    ],
    benefits: [
      'Competitive salary with equity options',
      'Comprehensive benefits',
      'RRSP matching',
      'Professional development budget',
      'Flexible work arrangements',
      'Modern office space',
      'Team offsites',
      'Leadership development programs'
    ],
    skills: ['Product Strategy', 'Agile', 'Analytics', 'User Research', 'Roadmapping', 'Stakeholder Management', 'KPIs']
  }
]

export function getPositionById(id: string): JobPosition | undefined {
  return jobPositions.find(position => position.id === id)
}

export function getActivePositions(): JobPosition[] {
  return jobPositions.filter(position => position.status === 'active')
}

export function getPositionsByDepartment(department: string): JobPosition[] {
  return jobPositions.filter(position => position.department === department && position.status === 'active')
}