import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Menu from './Menu'

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

it('renders the correct menu', () => {

    const menuItems = [
        { name: 'First Menu', children: [] },
        { name: 'Second Menu', children: [] },
        { name: 'Third Menu', children: [] },
    ]

    act(() => {
        render(<Menu menuItems={menuItems} />, container)
    })

    expect(container.getElementsByClassName('menuItem').length).toBe(3)

    for (let i = 0; i < menuItems.length; i++) {
        expect(container.getElementsByClassName('menuItem')[i].textContent).toBe(menuItems[i].name)
    }
})
