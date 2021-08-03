import React from 'react';
import Button from '@material-ui/core/Button';
import { logoUrl } from '../constants'



const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='flex-item' className='logo'>
                <a href="#">
                    <img src={logoUrl} alt='logo' />
                </a>
            </div>
            <div className='flex-item'>
                <a href="#" className="item">
                    HOW TO USE
                </a>
                <a href="#" className="item">
                    ABOUT US
                </a>
                <a
                    href="#"
                    className="item"
                >
                    CONTACT US
                </a>
            </div>
            <div className='auth flex-item'>
                <a to="#" className="item">
                    LOGIN
                </a>
                <a to="#">
                    <Button variant="contained" color="primary" className='button'>
                        GET STARTED
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
