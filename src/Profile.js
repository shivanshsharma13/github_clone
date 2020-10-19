import React from 'react'
import "./Profile.css"
import { Avatar, IconButton } from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CreateIcon from '@material-ui/icons/Create';
import MoodIcon from '@material-ui/icons/Mood';
import Underlinenav from './Underlinenav';


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
                    

                    <div className="profile__rightBody">

                        <div className="profile__mainhead">
                            <span>< MoodIcon fontSize="small"/></span>
                            <span>shivkaansh / README.md</span>
                            
                            <div className="profile__edit">
                            < CreateIcon fontSize="small"/>
                            </div>
                            
                        </div>
                    
                        <h1>Hello welcome to github</h1>
                        <p>This is a github clone made with react js. Backend is still on hold!!</p>

                        <img src="https://img.shields.io/badge/-React-blue?style=for-the-badge&amp;logo=react&amp;logoColor=white" alt="React"/>
                        <img src="https://img.shields.io/badge/-%2B-white?color=white&amp;style=for-the-badge" alt="+"/>
                        <img src="https://img.shields.io/badge/-Firebase-F6820D?style=for-the-badge&amp;logo=materialui&amp;logoColor=white" alt="firebase"/>
                    </div>

                </div>
            </div>
    )
}

export default Profile
