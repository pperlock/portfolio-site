import { CONTACT_INFO } from '@/constants'

export const contactContent = {
  title: 'Say Hello!',
  subtitle:
    "I'm always looking for new opportunities to collaborate and learn. Whether you have a project in mind, a question about my work, or just want to say hi, I'd love to hear from you.",
  form: {
    title: "Don't be shy! Shoot Me a Message ...",
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    submit: 'Say Hello!',
  },
}

/** Link id -> { href, label }. Used by Socials when you pass linkIds. */
export const socialLinkConfig = {
  linkedin: { href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
  github: { href: CONTACT_INFO.github, label: 'GitHub' },
}
