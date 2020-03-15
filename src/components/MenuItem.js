import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import MenuOption from './MenuOption'

class MenuItem extends Component {

    state = {
        showMenuItems: false
    }

    showMenuItems = () => {
        this.setState({ showMenuItems: !this.state.showMenuItems })
        if (typeof this.props.onSelect === 'function') {
            this.props.onSelect(this.state.showMenuItems)
        }
    }

    render() {
        const { name, choices, onSelectOption } = this.props
        return (
            <Fragment>
                <MenuOption 
                    name={name} 
                    onSelect={this.showMenuItems} />
                    <div className="menuItemIndent">
                        {this.state.showMenuItems ? 
                            choices.map((choice) => (
                                <MenuOption
                                    key={choice.name}
                                    name={choice.name}
                                    onSelect={() => ( onSelectOption ? onSelectOption(name, choice.name) : null )} />
                            ))
                        : ''}
                    </div>
            </Fragment>
        )
    }
}

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func,
    onSelectOption: PropTypes.func
}

export default MenuItem
