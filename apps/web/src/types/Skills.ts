export interface SkillItem {
  skill: string
  logo: string
  projects: string[]
}

export type Skills = SkillItem[]

export interface EmailFormContent {
  title: string
  subtitle: string
  nameLabel: string
  emailLabel: string
  messageLabel: string
  submit: string
}
