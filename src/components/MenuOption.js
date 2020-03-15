import React from 'react'
import PropTypes from 'prop-types'

const MenuOption = ({ name, onSelect }) => (
    <div className={`menuItem`}>
        <label>
            <input type="checkbox" onClick={onSelect ? onSelect : null} />
            {name}
        </label>
    </div>
)

MenuOption.propTypes = {
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func
}

export default MenuOption
