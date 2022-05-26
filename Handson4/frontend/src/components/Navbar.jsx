import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='Navbar'>
            <div className='right-button'>
            <Link to="/login" className='btn btn-primary'>Login</Link>
            <Link to="/signup" className='btn btn-primary' >Register</Link>
            </div>
        </div>
    );
}

export default Navbar;