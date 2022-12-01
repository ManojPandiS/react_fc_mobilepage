import React from 'react'

export default function ProfileCard( props ) {

    const userData = props.userData;

    function getFormatedTime() {
        let seconds = Math.floor((new Date().getTime() - userData.updated) / 1000);

        let interval = seconds / 86400;
        if (interval > 1) {
            if (interval > 365) {
                return Math.floor(interval / 365) + " Years ago";
            }
            if (interval > 30) {
                return Math.floor(interval / 30) + " Months ago";
            }
            return Math.floor(interval) + " days ago";
        }
        return "Just now";
    }
    
    function getPhotoURL() {
        return 'https://message-list.appspot.com' + userData.photoUrl;
    }

    return (
        <div className="li_hdr">
            <img src={ getPhotoURL() } alt="user_photo" className="user_img" />
            <div className="textleft">
                <div className="user_name">{ userData.name }</div>
                <span className="user_date">{ getFormatedTime() }</span>
            </div>
        </div>
    )
}

