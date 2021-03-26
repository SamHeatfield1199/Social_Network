import React, { useState } from 'react';
import preloader from '../../../images/2.gif';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataFormReduxForm from './ProfileForm';

const ProfileInfo = (profile, saveProfile, ...props) => {

  let [editMode, setEditMode] = useState(false)


  if (!profile) {
    return (
      <div><img src={preloader} /></div>
    )
  }

  const omMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files(0))
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })

  }

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large
          || "https://www.pngfind.com/pngs/m/292-2924858_user-icon-business-man-flat-png-transparent-png.png"
        } className={classes.mainphoto} />
        {props.isOwner && <input type={'file'} onChange={omMainPhotoSelected} />}

        {editMode
          ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : <ProfileData profile={profile}
            isOwner={props.isOwner}
            toEditMode={() => { setEditMode(true) }} />}

        <ProfileStatusWithHooks status={props.status}
          updateUserStatus={props.updateUserStatus} />
      </div>
    </div>
  );
}


const ProfileData = (profile, isOwner, toEditMode) => {
  return <div>
    {isOwner && <div>
      <button onClick={toEditMode}>Edit</button>
    </div>}
    <div>
      <b> Full Name </b>: {profile.fullName}
    </div>
    <div>
      <b> Looking for a job </b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b> My skills </b>: {profile.lookingForAJobDescription}
      </div>
    }

    <div>
      <b> About me</b>: {profile.aboutMe}
    </div>
    <div>
      <b> Contacts</b>:  {Object.keys(profile.contacts).map(key => {
        return <Contacts key={key} contatTitle={key} contactValue={profile.contacts(key)} />
      })}
    </div>
  </div>
}



const Contacts = ({ contatTitle, contactValue }) => {
  return <div>
    <b>{contatTitle}</b>: {contactValue}
  </div>
}


export default ProfileInfo;