import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import App from './App'

let container = null
beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

it('renders the correct menu items', () => {
    act(() => {
        render(<App />, container)
    })

    expect(container.getElementsByClassName('menuItem').length).toBe(3)

    expect(container.getElementsByClassName('menuItem')[0].textContent).toBe('Salad')
    expect(container.getElementsByClassName('menuItem')[1].textContent).toBe('Entree')
    expect(container.getElementsByClassName('menuItem')[2].textContent).toBe('Soup')
})
