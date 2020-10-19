import React from 'react'
import "./Underlinenav.css"
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import BookIcon from '@material-ui/icons/Book';
import ListAltIcon from '@material-ui/icons/ListAlt';
import StorageIcon from '@material-ui/icons/Storage';

function Underlinenav() {
    return (
        <div className="underlinenav">

            <div className="underline__option">
                <span><ImportContactsIcon fontSize="small"/></span>
                <span><h5>Overview</h5></span>
            </div>

            <div className="underline__option">
                <span>< BookIcon fontSize="small"/></span>
                <span><h5>Repositories</h5></span>
                <span><p className="underline__repo">14</p></span>
            </div>

            <div className="underline__option">
                <span>< ListAltIcon fontSize="small"/></span>
                <span><h5>Projects</h5></span>
            </div>

            <div className="underline__option">
                <span>< StorageIcon fontSize="small"/></span>
                <span><h5>Packages</h5></span>
            </div>

            
        </div>
    )
}

export default Underlinenav
