import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Switch } from '../src/Switch'

describe('Switch', () => {
  it('renders without crashing', () => {
    render(<Switch checked={false} />)
  })

  it('renders label text', async () => {
    const label = 'switch label'
    render(
      <Switch
        label={label}
        checked={false}
      />
    )

    expect(screen.getByRole('switch')).toHaveTextContent(label)
  })
})
