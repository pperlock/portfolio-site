import React from 'react'
import { SelectWrapper, NativeSelect, SelectArrow } from './Select.styles'

export type Option = {
  value: string
  label: string
}

export type SelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'children'
> & {
  options: Option[]
  placeholder?: string
}

const Select: React.FC<SelectProps> = ({ options, placeholder, ...rest }) => {
  return (
    <SelectWrapper>
      <NativeSelect {...rest}>
        {placeholder && (
          <option value="" disabled={rest.value !== ''}>
            {placeholder}
          </option>
        )}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </NativeSelect>
      <SelectArrow />
    </SelectWrapper>
  )
}

export default Select

