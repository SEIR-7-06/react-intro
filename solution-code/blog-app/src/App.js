import React from 'react';
import logo from './logo.svg';
import './App.css';

function Hello(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>You are {props.age} years old</p>
    </div>
  );
}

export default Hello;
