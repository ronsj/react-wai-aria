import * as React from 'react'
import { render } from '@testing-library/react'
import { Thing } from '../src'

describe('Thing', () => {
  it('renders without crashing', () => {
    render(<Thing />)
  })
})
