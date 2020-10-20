import React from 'react'
import "./Profile.css"
import { Avatar} from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Underlinenav from './Underlinenav';
import Overview from "./Overview";

function Profile() {

    return (
        <div className="profile">

                <div className="profile__left">

                    <Avatar src="https://avatars0.githubusercontent.com/u/68982304?s=460&u=6b37f00eb36173e0f5f5bc04db9e63066d408d80&v=4" className="profile__avatar"/>

                    <div className="profile__name">
                    <span><h4>Shivansh Sharma</h4></span>
                    <span><p>shivkaansh</p></span>
                    </div>
                
                    <button>Edit profile</button>

                    <div className="profile_leftFollow">

                        <div className="profile__options">
                        <span>< PeopleAltIcon fontSize="small" /></span>
                        <span>1 follower</span>
                        </div>

                        <p>4 following</p>
                        
                        <div className="profile__options">
                        <span>< StarBorderIcon fontSize="small"/></span>
                        <span>3</span>
                        </div>

                    </div>

                    <div className="profile_leftLoc">
                        <span>< LocationOnIcon fontSize="small" /></span>
                        <span>India</span>      
                    </div>

                </div>

                

                <div className="profile__right">

                <div className="profile__rightupper">
                <Underlinenav/>

                </div> 
                
                    <Overview />
                </div>
            </div>
    )
}

export default Profile
