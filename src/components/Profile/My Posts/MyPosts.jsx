import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
//разделяем на презентационные и контейнерные компоненты
const MyPosts = (props) => {
  let postsElements =
    props.postData.map(p => <Post message={p.message}
      likesCount={p.likesCount} />)
  //создаем ссылку на элемент
 // let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }
  return (
    <div className={classes.postBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit = {onAddPost}/>
      <div className={classes.postData}>
        {postsElements}
      </div>
    </div>
  );
}

let AddNewPostForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <div>
        <Field component ='textarea'
         name="newPostText"
         placeholder="Enter your post"/>
      </div>
      <div>
        <button >Add Post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;