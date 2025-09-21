export interface TeamMember {
  id: string
  name: string
  position: string
  department: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
  email?: string
  expertise: string[]
  education: string[]
  experience: string
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    position: 'Chief Executive Officer',
    department: 'Executive',
    bio: 'Dr. Chen brings over 20 years of experience in data science and AI, having led transformative projects at Fortune 500 companies. She holds a Ph.D. in Computer Science from MIT and is passionate about democratizing data analytics.',
    image: '/assets/img/team/ceo.jpg',
    linkedin: 'https://linkedin.com/in/sarahchen',
    twitter: 'https://twitter.com/sarahchen',
    email: 'sarah.chen@gammaneutral.com',
    expertise: ['Machine Learning', 'Strategic Planning', 'Data Governance', 'Digital Transformation'],
    education: ['Ph.D. Computer Science, MIT', 'MBA, Harvard Business School', 'B.S. Mathematics, Stanford University'],
    experience: '20+ years'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    position: 'Chief Technology Officer',
    department: 'Technology',
    bio: 'Michael is a visionary technologist with expertise in cloud architecture and scalable AI systems. He has architected data platforms processing billions of transactions daily.',
    image: '/assets/img/team/cto.jpg',
    linkedin: 'https://linkedin.com/in/michaelrodriguez',
    email: 'michael.rodriguez@gammaneutral.com',
    expertise: ['Cloud Architecture', 'Big Data', 'DevOps', 'System Design'],
    education: ['M.S. Computer Engineering, Carnegie Mellon', 'B.S. Computer Science, UC Berkeley'],
    experience: '18 years'
  },
  {
    id: '3',
    name: 'Dr. Amara Okonkwo',
    position: 'Chief Data Scientist',
    department: 'Data Science',
    bio: 'Dr. Okonkwo leads our data science initiatives, specializing in predictive analytics and deep learning. She has published over 30 papers on machine learning applications.',
    image: '/assets/img/team/cds.jpg',
    linkedin: 'https://linkedin.com/in/amaraokonkwo',
    twitter: 'https://twitter.com/amaraokonkwo',
    email: 'amara.okonkwo@gammaneutral.com',
    expertise: ['Deep Learning', 'Predictive Analytics', 'NLP', 'Computer Vision'],
    education: ['Ph.D. Data Science, Oxford University', 'M.S. Statistics, Imperial College London', 'B.S. Mathematics, University of Lagos'],
    experience: '15 years'
  },
  {
    id: '4',
    name: 'Jessica Park',
    position: 'VP of Engineering',
    department: 'Engineering',
    bio: 'Jessica leads our engineering teams, ensuring delivery of robust and scalable solutions. She is an advocate for agile methodologies and continuous improvement.',
    image: '/assets/img/team/vp-eng.jpg',
    linkedin: 'https://linkedin.com/in/jessicapark',
    email: 'jessica.park@gammaneutral.com',
    expertise: ['Software Engineering', 'Agile Methodologies', 'Team Leadership', 'Quality Assurance'],
    education: ['M.S. Software Engineering, Stanford', 'B.S. Computer Science, UCLA'],
    experience: '12 years'
  },
  {
    id: '5',
    name: 'David Thompson',
    position: 'Head of AI Research',
    department: 'Research',
    bio: 'David leads our AI research division, focusing on developing next-generation machine learning algorithms and their practical applications in business.',
    image: '/assets/img/team/ai-head.jpg',
    linkedin: 'https://linkedin.com/in/davidthompson',
    email: 'david.thompson@gammaneutral.com',
    expertise: ['Artificial Intelligence', 'Neural Networks', 'Reinforcement Learning', 'Research & Development'],
    education: ['Ph.D. Artificial Intelligence, Stanford', 'M.S. Computer Science, MIT'],
    experience: '14 years'
  },
  {
    id: '6',
    name: 'Rachel Kumar',
    position: 'Director of Client Success',
    department: 'Client Success',
    bio: 'Rachel ensures our clients achieve maximum value from our solutions. She has a track record of building strong client relationships and driving successful implementations.',
    image: '/assets/img/team/client-success.jpg',
    linkedin: 'https://linkedin.com/in/rachelkumar',
    email: 'rachel.kumar@gammaneutral.com',
    expertise: ['Client Relations', 'Project Management', 'Business Analysis', 'Change Management'],
    education: ['MBA, Wharton School', 'B.A. Business Administration, NYU'],
    experience: '10 years'
  }
]

export function getTeamByDepartment(department: string): TeamMember[] {
  return teamMembers.filter(member => member.department === department)
}

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id)
}