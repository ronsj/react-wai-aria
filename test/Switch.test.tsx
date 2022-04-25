import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Switch } from '../src/Switch'

describe('Switch', () => {
  it('renders in "off" mode', () => {
    render(<Switch checked={false} />)
    const switchElement = screen.getByRole('switch')
    expect(switchElement.querySelector('.off')).toBeVisible()
    expect(switchElement.querySelector('.on')).not.toBeVisible()
  })

  it('renders in "on" mode', () => {
    render(<Switch checked={true} />)
    const switchElement = screen.getByRole('switch')
    expect(switchElement.querySelector('.on')).toBeVisible()
    expect(switchElement.querySelector('.off')).not.toBeVisible()
  })

  it('renders label text', async () => {
    const label = 'switch label'
    render(
      <Switch
        label={label}
        checked={false}
      />
    )
    const switchElement = screen.getByRole('switch')

    expect(switchElement).toHaveTextContent(label)
  })

  it('toggles on and off when clicked', () => {
    render(<Switch checked={false} />)
    const switchElement = screen.getByRole('switch')
    fireEvent.click(switchElement)

    expect(switchElement.querySelector('.on')).toBeVisible()
    expect(switchElement.querySelector('.off')).not.toBeVisible()

    fireEvent.click(switchElement)

    expect(switchElement.querySelector('.off')).toBeVisible()
    expect(switchElement.querySelector('.on')).not.toBeVisible()
  })

  it('toggles on and off when ENTER key is pressed', () => {
    render(<Switch checked={false} />)
    const switchElement = screen.getByRole('switch')
    const key = {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    }
    fireEvent.focus(switchElement)
    fireEvent.keyDown(switchElement, key)

    expect(switchElement.querySelector('.on')).toBeVisible()
    expect(switchElement.querySelector('.off')).not.toBeVisible()

    fireEvent.keyDown(switchElement, key)

    expect(switchElement.querySelector('.off')).toBeVisible()
    expect(switchElement.querySelector('.on')).not.toBeVisible()
  })

  it('toggles on and off when SPACE key is pressed', () => {
    render(<Switch checked={false} />)
    const switchElement = screen.getByRole('switch')
    const key = {
      key: ' ',
      code: 'Space',
      charCode: 32,
    }
    fireEvent.focus(switchElement)
    fireEvent.keyDown(switchElement, key)

    expect(switchElement.querySelector('.on')).toBeVisible()
    expect(switchElement.querySelector('.off')).not.toBeVisible()

    fireEvent.keyDown(switchElement, key)

    expect(switchElement.querySelector('.off')).toBeVisible()
    expect(switchElement.querySelector('.on')).not.toBeVisible()
  })
})
