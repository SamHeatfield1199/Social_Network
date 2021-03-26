import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validator';
import { Textarea } from '../../common/formsControls/FormsControls';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength = maxLengthCreator(10)

//разделяем на презентационные и контейнерные компоненты
const MyPosts = React.memo(props => {
  let postsElements =
    [...props.postData].reverse().map(p => <Post key = {p.id} message={p.message}
      likesCount={p.likesCount} />)
  //создаем ссылку на элемент
  // let newPostElement = React.createRef();
let newPostElement = React.createRef()
  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }
  return (
    <div className={classes.postBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
})

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
          name="newPostText"
          placeholder="Enter your post"
          validate={[requiredField, maxLength]} />
      </div>
      <div>
        <button >Add Post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;