import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import classes from './ProfileInfo.module.css';
import { CreateField, Input, Textarea } from '../../common/formsControls/FormsControls';

const ProileDataForm = ({handleSubmit, profile, error}) => {
  return <form onSubmit = {handleSubmit}>
    <div><button >Save</button></div>
    {error && <div className={classes.formSummaryError}>
            {error}
        </div>
        }
    <div>
      <b> Full Name </b>: {CreateField("Full Name", "fullName", [], Input)}
    </div>
    <div>
      <b> Looking for a job </b>:
      {CreateField("", "lookingForAJob", [], Input, {type: "checkbox"})}
    </div>

      <div>
        <b> My skills </b>:  {CreateField("My skills", "lookingForAJobDescription", [], Textarea)}
      </div>
  

    <div>
      <b> About me</b>: {CreateField("About me", "aboutMe", [], Textarea)}
    </div>
  <div>
      <b> Contacts</b>:  {Object.keys(profile.contacts).map(key => {
        return <div className = {classes.contacts}>
          <b>{key}: {CreateField(key, "contacts."+key, [], Textarea)}</b>
        </div>
      })}
    </div>
  
  </form>
}

let ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProileDataForm)

export default ProfileDataFormReduxForm