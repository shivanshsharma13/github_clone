import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./Header.css"
import { Avatar} from '@material-ui/core';

function Header() {
    return (
        <div className="header">

            <div className="header__left">

                <GitHubIcon fontSize="small" className="header__logo"/>

                <div className="header__search">
                    <input placeholder="Search or Jump to..."></input>
                </div>

            </div>
            

            <div className="header__middle">

                <div className="header__option">
                    <h5>Pull requests</h5>
                </div>

                <div className="header__option">
                    <h5>Issues</h5>
                </div>

                <div className="header__option">
                    <h5>Marketplace</h5>
                </div>

                <div className="header__option">
                    <h5>Explore</h5>
                </div>

            </div>

            <div className="header__right">

                <NotificationsNoneIcon fontSize="small" className="header__rightOption" />

                <div className="header__rightOption">
                <span><AddIcon fontSize="small"/></span>
                <span><ArrowDropDownIcon fontSize="small"/></span>
                </div>

                <div className="header__rightOption">
                <span><Avatar src="https://avatars0.githubusercontent.com/u/68982304?s=460&u=6b37f00eb36173e0f5f5bc04db9e63066d408d80&v=4"className="header__avatar" /></span>
                <span><ArrowDropDownIcon fontSize="small"/></span>
                </div>
                
            </div>
        </div>
        


    )
}

export default Header 
