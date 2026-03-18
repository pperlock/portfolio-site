export interface GitHubIssueItem {
  id: number
  number?: number
  html_url: string
  title: string
  labels?: { name: string }[]
  project_status?: string
}
