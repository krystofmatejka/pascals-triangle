import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {Header} from './header'

test(Header.name, async () => {
  render(<Header text='Hi from test'/>)

  const header = await screen.getByText('Hi from test')

  expect(header).toHaveTextContent('Hi from test')
})
