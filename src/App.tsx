import axios from 'axios';
import React, { useState } from 'react';
import {useEffect} from 'react'
import './App.css';
const url = "https://robby-bank.herokuapp.com/users"
type Response = {
  email: any;
};
const App = () => {
  const [usuario, setUsuario] = useState()


  useEffect(() => {
    axios
    .get<Response>(url)
    .then((res) => {
      setUsuario(res.data.email);
    })
  
  })
  
  return (
    <div className="container">
      <div className="login-menu">
        <div className="top-menu">
          <p>{usuario}</p>
          <p>{usuario}</p>
          <input type="email" name="" id="" />
        </div>
        <div className="bottom-menu">
          <p>Senha</p>
          <input type="password" name="" id="" />
        </div>
      </div>
    </div>
  );
}

export default App;
