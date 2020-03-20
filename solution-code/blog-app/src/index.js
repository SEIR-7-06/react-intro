import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Post from './Post';
import * as serviceWorker from './serviceWorker';

const post = {
    title: "Avengers",
    author: "Nick Fury",
    body: "I have secretly recruited a group of superheroes to save our world.",
    comments: [
      "I love Avengers.",
      "Forget Avengers, we want the Witcher.",
      "Atleast let aliens destroy D&D after what they did to GOT!"
    ]
  }

ReactDOM.render(
    <Post 
        title={post.title} 
        author={post.author}
        body={post.body} 
        comments={post.comments}/>, 
    document.getElementById('root')
);

// ReactDOM.render(<App name={"ABC"} age={24}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
