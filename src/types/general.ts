export interface ProductionUrl {
  title: string
  url: string
}

export interface TippedButton {
  href: string
  label: string
  tip?: 'left' | 'right'
  variant?: 'filled' | 'outlined'
}
