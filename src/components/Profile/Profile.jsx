import React from 'react';
import MyPostsContainer from './My Posts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile}
        status={props.status}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        updateUserStatus={props.updateUserStatus}
        saveProfile={props.saveProfile} />
      <MyPostsContainer />
    </div>

  );
}
export default Profile;