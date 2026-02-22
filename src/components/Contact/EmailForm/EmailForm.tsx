'use client'

import React, { useState } from 'react'
import { LowerCaseTitle, TippedButton } from '@/design'
import {
  FormWrapper,
  FormTitle,
  FormHelpText,
  Form,
  TopRow,
  LeftColumn,
  RightColumn,
  Field,
  Input,
  TextArea,
  ButtonRow,
} from './EmailForm.styles'
import { EmailFormContent } from '@/types'
import { CONTACT_INFO } from '@/constants'

interface EmailFormProps {
  form: EmailFormContent
  recipientEmail?: string
}

const EmailForm = ({ form, recipientEmail }: EmailFormProps) => {
  const { title, subtitle, nameLabel, emailLabel, messageLabel, submit } = form
  const { email } = CONTACT_INFO

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent('Portfolio contact')
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )
    const to = recipientEmail || email
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <FormWrapper>
      <FormTitle>{title}</FormTitle>
      <FormHelpText>{subtitle}</FormHelpText>
      <Form onSubmit={handleSubmit}>
        <TopRow>
          <LeftColumn>
            <Field>
              <LowerCaseTitle tag="h3">{nameLabel}</LowerCaseTitle>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formState.name}
                onChange={handleChange}
              />
            </Field>
          </LeftColumn>

          <RightColumn>
            <Field>
              <LowerCaseTitle tag="h3">{emailLabel}</LowerCaseTitle>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formState.email}
                onChange={handleChange}
              />
            </Field>
          </RightColumn>
        </TopRow>

        <Field>
          <LowerCaseTitle tag="h3">{messageLabel}</LowerCaseTitle>
          <TextArea
            id="message"
            name="message"
            required
            value={formState.message}
            onChange={handleChange}
          />
        </Field>

        <ButtonRow>
          <TippedButton text="Submit" tip="right" type="submit">
            {submit}
          </TippedButton>
        </ButtonRow>
      </Form>
    </FormWrapper>
  )
}

export default EmailForm
