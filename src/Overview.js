import React from 'react'
import "./Overview.css"
import CreateIcon from '@material-ui/icons/Create';
import MoodIcon from '@material-ui/icons/Mood';


function Repository() {
    return (
        <div className="overview">
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
    )
}

export default Repository
