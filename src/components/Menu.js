import React from 'react'
import PropTypes from 'prop-types'
import MainMenu from './MainMenu'

const Menu = ({ menuItems }) => {
    return (
        <div className="menu">
            {menuItems.map((item) => (
                <MainMenu
                    key={item.name} 
                    menu={item} />
            ))}
        </div>
    )
}

Menu.propTypes = {
    menuItems: PropTypes.array.isRequired
}

export default Menu
