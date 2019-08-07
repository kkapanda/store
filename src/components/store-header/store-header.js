import React from 'react';
import './store-header.css';
import Menu from '../menu'
import { Link } from 'react-router-dom' 

const StoreHeader = () => {
    return (
        <header className='store-header row'>
            <Link to="/">
            <a className='logo text-dark' href='#'>GameStore <i className="fa fa-gamepad"></i> </a>
            </Link>
            <Menu />

        </header>
    )
}

export default StoreHeader;