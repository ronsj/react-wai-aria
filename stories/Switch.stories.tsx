import * as React from 'react'
import type { Story } from '@ladle/react'
import { Switch, SwitchProps } from '../src/Switch'

const defaultArgs = {
  checked: false,
}

export const Default: Story<SwitchProps> = ({ checked }) => (
  <Switch checked={checked} />
)
Default.args = defaultArgs

export const WithLabel: Story<SwitchProps> = ({ label, checked }) => (
  <Switch
    label={label}
    checked={checked}
  />
)
WithLabel.args = {
  label: 'Switch Label',
  ...defaultArgs,
}
