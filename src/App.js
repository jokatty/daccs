/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React from 'react';
import UserName from './components/UserName';
import UserDetails from './components/UserDetails';
import EditProfile from './components/EditProfileModal';

function App() {
  return (
    <>
      <UserName />
      <UserDetails />
      <EditProfile />
    </>
  );
}

export default App;
