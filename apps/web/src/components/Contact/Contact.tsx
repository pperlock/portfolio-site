'use client'

import React from 'react'
import EmailForm from './EmailForm/EmailForm'
import { SimpleHero, PageSection, Socials } from '@portfolio/design'
import { CONTACT_INFO } from '@/constants'

import {
  ContactLayout,
  ContactInfoCard,
  ContactInfoTitle,
  ContactInfoList,
  ContactInfoItem,
  ContactInfoItemSocials,
  ContactInfoLabel,
  ContactInfoValue,
  ContactInfoText,
  FormColumn,
} from './Contact.styles'

const Contact = ({ content }) => {
  if (!content?.form) return null
  const { title, subtitle, form } = content
  const { email, phone, linkedin, github } = CONTACT_INFO
  return (
    <>
      <SimpleHero
        paddingSize="md"
        title={title}
        subtitle={subtitle}
        image="/contact-transparent.png"
        imageLink={linkedin}
      />
      <PageSection id="contact" variant="inset">
        <ContactLayout>
          <ContactInfoCard>
            <ContactInfoTitle>Get in touch</ContactInfoTitle>
            <ContactInfoList>
              <ContactInfoItem>
                <ContactInfoLabel>Email</ContactInfoLabel>
                <ContactInfoValue href={`mailto:${email}`}>{email}</ContactInfoValue>
              </ContactInfoItem>
              <ContactInfoItem>
                <ContactInfoLabel>Phone</ContactInfoLabel>
                <ContactInfoText>{phone}</ContactInfoText>
              </ContactInfoItem>
              <ContactInfoItemSocials>
                <Socials
                  linkIds={['linkedin']}
                  showLeftBorder={false}
                  iconSize={40}
                  growIconOnHover
                />
              </ContactInfoItemSocials>
            </ContactInfoList>
          </ContactInfoCard>
          <FormColumn>
            <EmailForm form={form} recipientEmail={email} />
          </FormColumn>
        </ContactLayout>
      </PageSection>
    </>
  )
}

export default Contact
