import React from 'react';
import classes from './ProfileInfo.module.css';
const ProfileInfo = () => {
  return (
    <div>
      <div>     <img src="https://pix10.agoda.net/hotelImages/3375/-1/f73547b49eadee36c6346f52a5b4f4fe.jpg?s=1024x768" /></div>
      <div> <img src="https://outwardhound.com/furtropolis/wp-content/uploads/2020/03/Doggo-Lingo-Post.jpg" /></div>
      <div className={classes.descriptionBlock}>
        ava+description</div>

    </div>
  );
}

export default ProfileInfo;