import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import MenuItemHeader from './MenuItemHeader'

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

it('renders the header with or without text', () => {
    act(() => {
        render(<MenuItemHeader title="" />, container)
    })

    expect(container.getElementsByClassName('menuItemHeader')[0].textContent).toBe('')

    act(() => {
        render(<MenuItemHeader title="Sample Header" />, container)
    })

    expect(container.getElementsByClassName('menuItemHeader')[0].textContent).toBe('Sample Header')
})
