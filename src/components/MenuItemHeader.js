import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

const MenuItemHeader = ({ title }) => (
    <div className="menuItemHeader">{title}</div>
)

MenuItemHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default MenuItemHeader
