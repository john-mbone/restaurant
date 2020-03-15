import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import MenuItem from './MenuItem'

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

it('renders the correct menu item', () => {

    const onSelect = jest.fn()
    const choices = [
        { name: "Minestrone"},
        { name: "Hot and Sour"},
        { name: "Miso"}
    ]

    act(() => {
        
        render(
            <MenuItem 
                name="Soup"
                choices={choices}
                onSelect={onSelect} />,
            container)
    })

    expect(container.getElementsByClassName('menuItem').length).toBe(1)

    // test checkbox click
    const checkbox = document.querySelector('input')

    act(() => {
        checkbox.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(container.getElementsByClassName('menuItem').length).toBe(4)

    for (let i = 0; i < choices.length; i++) {
        expect(container.getElementsByClassName('menuItem')[i+1].textContent).toBe(choices[i].name)
    }
})
