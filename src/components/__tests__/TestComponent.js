import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/svelte"

import TestComponent from '../TestComponent.svelte'
import TestComponentWrapper from './TestComponentWrapper.svelte'

describe('TestComponent: Example tests', () => {
  it('Renders the component', async () => {
    const { container } = render(TestComponent)
    const el = container.querySelector('[data-test]')

    expect(el).toBeInTheDocument()
  })

  it('Renders the component with props and slots', async () => {
    render(TestComponentWrapper)

    expect(screen.getByText(/Test prop renders correctly/)).toBeInTheDocument()
    expect(screen.getByText(/Test slot renders correctly/)).toBeInTheDocument()
  })
})