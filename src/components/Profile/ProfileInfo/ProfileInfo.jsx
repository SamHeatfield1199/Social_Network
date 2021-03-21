import React from 'react';
import preloader from '../../../images/2.gif';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return (
      <div><img src={preloader} /></div>
    )
  }
  return (
    <div>
      {/*<div><img src="https://pix10.agoda.net/hotelImages/3375/-1/f73547b49eadee36c6346f52a5b4f4fe.jpg?s=1024x768" />
      </div> */}
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatusWithHooks status ={props.status}
        updateUserStatus = {props.updateUserStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;