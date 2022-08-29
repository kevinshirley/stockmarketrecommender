import { render, screen } from '@testing-library/react'
import Home from '../pages'
import { wrapper } from '../src/store'

describe('Home', () => {
  it('renders Home component with redux provider', () => {
    const HomeWithRedux = wrapper.withRedux(Home)
    render(<HomeWithRedux />)
  })
})
