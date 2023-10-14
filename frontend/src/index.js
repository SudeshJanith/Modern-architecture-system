import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/index';
import {Provider} from 'react-redux';
import axios from "axios";
import cookie from 'js-cookie';
import jwt from 'jsonwebtoken';

const jwt_secret = 'Fd0vWmZQ5qqfmWs5aqO9lBaTLSpZ1nALVWyZag4vwpcotFsyqj2xxYzRnfuRrcOl';


let token = cookie.get("token");

if (token) {
  
  jwt.verify(token, jwt_secret, (err, decoded) => {
    // console.log(decoded.foo) // bar
    if(err) {
      cookie.remove('token');
      token = null;
    }else {
      if(decoded.iss !== 'http://localhost:8000/api/auth/login')
      {
        cookie.remove('token');
        token = null;
      }
    }
    console.log(decoded);
  });

}


const render = () =>{
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  
};

if(token){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  axios.post('http://localhost:8000/api/auth/me').then(res => {

      store.dispatch({type: "SET_LOGIN", payload: res.data});

      render();

    });

}
else{
  
  render();
  
  
}



serviceWorker.unregister();