import React from 'react'
import Menu from './components/Menu'
import MenuItems from './utils/menu.json'// we can as well call data from an API
import './App.css'

function App() {
    return (
        <div className="pageWrapper">
            <Menu menuItems={MenuItems} />
        </div>
    )
}

export default App;
