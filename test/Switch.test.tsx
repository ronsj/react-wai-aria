import * as React from 'react'
import { render } from '@testing-library/react'
import { Switch } from '../src/Switch'

describe('Switch', () => {
  it('renders without crashing', () => {
    render(
      <Switch
        checked={false}
        tabIndex={0}
      />
    )
  })
})
