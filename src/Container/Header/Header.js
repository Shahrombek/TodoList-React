import React, { useEffect, useState } from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

var classNames = require('classnames');

function Header() {
    const [dark, setDark] = useState(false);
    const darkmode = () => {
        setDark(dark)
    }
    return (
        <header className='header p-4 '>
            <div style={{ fontSize: '25px' }} className={dark ? 'darkmode' : ''} >TODO</div>
            <button onClick={() => darkmode(dark)}>
                {dark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
            </button>
        </header>
    )
}

export default Header