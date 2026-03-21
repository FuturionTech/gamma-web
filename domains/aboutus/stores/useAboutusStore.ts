import { defineStore } from 'pinia'

interface SocialMediaLink {
  platform_name: string
  url: string
}

interface TeamMember {
  id: string
  name: string
  role: string
  email: string | null
  biography: string | null
  profile_picture_url: string | null
  is_active: boolean
  socialMediaLinks: SocialMediaLink[]
}

interface Certification {
  id: string
  name: string
  issuing_organization: string | null
  issue_date: string | null
  file_url: string | null
  is_active: boolean
}

export const useAboutusStore = defineStore('aboutusStore', {
  state: () => ({
    teams: [] as TeamMember[],
    certifications: [] as Certification[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchTeams(limit = 10) {
      this.loading = true
      this.error = null
      try {
        const { query } = useGraphql()
        const data = await query<{ team: TeamMember[] }>(`
          query Team($limit: Int) {
            team(limit: $limit) {
              id name role email biography profile_picture_url is_active
              socialMediaLinks { platform_name url }
            }
          }
        `, { limit })
        this.teams = data.team ?? []
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch team members.'
        this.teams = []
      } finally {
        this.loading = false
      }
    },

    async fetchCertifications() {
      this.loading = true
      this.error = null
      try {
        const { query } = useGraphql()
        const data = await query<{ certifications: Certification[] }>(`
          query Certifications($limit: Int) {
            certifications(limit: $limit) {
              id name issuing_organization issue_date file_url is_active
            }
          }
        `, { limit: 20 })
        this.certifications = data.certifications ?? []
      } catch (e: any) {
        this.error = e.message || 'Failed to fetch certifications.'
        this.certifications = []
      } finally {
        this.loading = false
      }
    },
  },
})
