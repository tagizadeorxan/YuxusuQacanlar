import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import * as serviceWorker from './serviceWorker';


const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyDa1C8Ro6hDX8lcqnkx_KLmkv8kyimxTAQ",
    authDomain: "yuxuqacanchat.firebaseapp.com",
    databaseURL: "https://yuxuqacanchat.firebaseio.com",
    projectId: "yuxuqacanchat",
    storageBucket: "yuxuqacanchat.appspot.com",
    messagingSenderId: "563059507706",
    appId: "1:563059507706:web:8312a5af11fe5053fe6443",
    measurementId: "G-8K4SS8MNHM"
});

ReactDOM.render(
  <React.StrictMode>
    <div>hello</div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
