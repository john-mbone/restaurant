import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import MenuItemHeader from './MenuItemHeader'

class MainMenu extends Component {

    state = {
        showMenuItems: false,
        showRelatedMenuItems: false,
        selectedOptions: []
    }

    showMenuItems = () => {
        this.setState({ 
            showMenuItems: !this.state.showMenuItems,
            showRelatedMenuItems: this.state.showMenuItems ? true : false,
            selectedOptions: this.state.showMenuItems ? [] : this.state.selectedOptions
        })
    }  

    showRelatedMenuItems = (menu, option) => {
        const selectedOptions = this.state.selectedOptions.slice()
        if (selectedOptions.indexOf(option) === -1) {
            selectedOptions.push(option)
        } else {
            selectedOptions.pop(selectedOptions.indexOf(option))
        }
        if (selectedOptions.length === 0) {
            this.setState({ showRelatedMenuItems: false, selectedOptions })
        } else {
            this.setState({ showRelatedMenuItems: true, selectedOptions })
        }
    }

    render() {
        const { menu } = this.props
        return (
            <Fragment>
                <MenuItem
                    name={menu.name}
                    choices={menu.choices}
                    onSelect={this.showMenuItems}
                    onSelectOption={this.showRelatedMenuItems} />
                {this.state.showRelatedMenuItems && this.state.showMenuItems && menu.related.length > 0 ? 
                    <div className="menuItemIndent">
                        <MenuItemHeader title="You might also want:" />
                        {menu.related.map(related => (
                            <MenuItem
                                key={`${menu.name}-${related.name}`}
                                name={related.name}
                                choices={related.choices} />
                        ))}
                    </div>
                : ''}
            </Fragment>
        )
    }
}

MainMenu.popTypes = {
    menu: PropTypes.object.isRequired,
}

export default MainMenu
