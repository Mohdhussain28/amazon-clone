import React from 'react'
import { Link } from "react-router-dom";
import './header.css'
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <nav className='header'>
            <Link to="/">
                <img className='header__logo'
                    src='https://static.vecteezy.com/system/resources/previews/019/017/542/original/amazon-logo-free-png.png' />
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' type="text" />
                <SearchIcon />
            </div>


            <div className='header__nav'>
                <Link className="header__link">
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Hello hussain</span>
                        <span className='header__optionLineTwo'>Sign In</span>
                    </div>
                </Link>

                <Link className="header__link">
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Return</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                <Link className="header__link">
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>

                {/* <Link className="header__link">
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello hussain</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                    </div>
                </Link> */}
            </div>
        </nav>

    )
}

export default Header