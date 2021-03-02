import React from 'react';
import classes from './ProfileInfo.module.css';
import preloader from '../../../images/2.gif'
const ProfileInfo = (props) => {

  if (!props.profile){
    return(
      <div><img src = {preloader}/></div>
    )
  }

  return (
    <div>
      <div>     <img src="https://pix10.agoda.net/hotelImages/3375/-1/f73547b49eadee36c6346f52a5b4f4fe.jpg?s=1024x768" /></div>
  
      <div className={classes.descriptionBlock}>
        <img src ={props.profile.photos.large}/>
        ava+description</div>

    </div>
  );
}

export default ProfileInfo;