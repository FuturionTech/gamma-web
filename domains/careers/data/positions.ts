export interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  type: string
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

// No current openings
export const jobPositions: JobPosition[] = []

export function getPositionById(id: string): JobPosition | undefined {
  return jobPositions.find(position => position.id === id)
}

export function getActivePositions(): JobPosition[] {
  return jobPositions.filter(position => position.status === 'active')
}

export function getPositionsByDepartment(department: string): JobPosition[] {
  return jobPositions.filter(position => position.department === department && position.status === 'active')
}
