export const NAME = 'Patti Perlock'

export const CONTACT_INFO = {
  email: 'pattiperlock@gmail.com',
  phone: '705-262-8679',
  linkedin: 'https://www.linkedin.com/in/pattiperlock/',
  github: 'https://github.com/pperlock',
}

export type NavLink = {
  label: string
  href: string
  activeColor: string
  isSubtle?: boolean
}

export const NAV_LINKS: Record<string, NavLink> = {
  about: { label: 'about', href: '/about', activeColor: 'BrushStrokeOne' },
  portfolio: { label: 'portfolio', href: '/portfolio', activeColor: 'BrushStrokeTwo' },
  resume: { label: 'resume', href: '/resume', activeColor: 'BrushStrokeThree' },
  contact: { label: 'contact', href: '/contact', activeColor: 'BrushStrokeOne' },
  devCorner: { label: 'dev corner', href: '/dev-corner', activeColor: 'BrushStrokeThree' },
}

export * from './skills'
export * from './github'
