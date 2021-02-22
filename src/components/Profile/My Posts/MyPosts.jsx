import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
//разделяем на презентационные и контейнерные компоненты
const MyPosts = (props) => {

  let postsElements =
    props.postData.map(p => <Post message={p.message}
      likesCount={p.likesCount} />)
  //создаем ссылку на элемент

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostTextActionCreator(text)

  }

  return (

    <div className={classes.postBlock}>
      <h3>My posts</h3>
      <div>

        <textarea onChange={onPostChange}
          ref={newPostElement} 
          value = {props.newPostText}/>

      </div>
      <div>
        <button onClick={addPost}>Add Post</button>
      </div>

      <div className={classes.postData}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;