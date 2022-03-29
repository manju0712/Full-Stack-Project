import React from 'react';

import {GoogleLogin} from 'react-google-login';
import axios from 'axios'

import './App.css';



function App() {
 const responseGoogle = async (response: any) => {
    console.log(response)
    const tokenId = response?.tokenId
    const res = await axios.post('/google-login', { id_token: tokenId })
    const { user, token } = res.data
    localStorage.setItem('access_token', token)
  }

  axios.get('/users')

  return (
    <div className='App'>
      <GoogleLogin
        clientId='104783596370-96g6dv3j1sf7n295k5dho4sspl0rcrem.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
