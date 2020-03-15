import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import MenuOption from './MenuOption'

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

it('renders the correct menu option', () => {
    act(() => {
        render(<MenuOption name="Salad" />, container)
    })

    expect(container.getElementsByClassName('menuItem').length).toBe(1)

    expect(container.getElementsByClassName('menuItem')[0].textContent).toBe("Salad")
})
