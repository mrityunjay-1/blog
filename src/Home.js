import React, {useContext} from 'react';
import {Context} from './App';
import LandingPage from './Components/LandingPage';
import LoginPage from './AuthComponents/LoginPage';

const Home = () => {
  const {data, logOut} = useContext(Context);

  return (
    <>
      <h1 style={{textAlign: 'center', color: 'orange'}} > Welcome to examscuriosity.com </h1>
      <button onClick={logOut}> logout </button>
      {data.isLoggedIn ? <LandingPage /> : <LoginPage /> }
    </>
  );
};

export default Home;