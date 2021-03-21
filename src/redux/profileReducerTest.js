import profileReducer, { addPostActionCreator } from "./profileReducer";


import { render, screen } from '@testing-library/react';
import App from './App';
/*
test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
});
*/

test('length of posts should be incremented', () => {
    //test data
    let action = addPostActionCreator('meow')
    let state = {
        postData: [
          { id: 1, message: "Hi, how are you?", likesCount: "1" },
          { id: 2, message: "HIt`s my first post", likesCount: "23" },
        ],
        profile: null,
        status: "",
      };
    //action
    let newState = profileReducer(state, action)
    //expectation
      expect(newState.postData.length).toBe(5)

});
