export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  socialLinks: {
    linkedin?: string
  }
}

export const teamMembers: TeamMember[] = [
  {
    id: 'founder',
    name: 'Philip Savane',
    role: 'Founder & CEO',
    bio: 'Founder of Gamma Neutral Consulting with extensive experience in technology consulting, data engineering, and AI strategy across financial services and government sectors.',
    image: 'https://ui-avatars.com/api/?name=Philip+Savane&size=400&background=8b5cf6&color=fff',
    socialLinks: {
    }
  }
]

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id)
}
