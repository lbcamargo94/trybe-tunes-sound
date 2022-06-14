import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

export default function NavigationRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact="/login" element={ <Login /> } />
      <Route exact="/registration" element={ <Registration /> } />
      <Route path="/search" element={ "Search" } />
      <Route path="/album/:id" element={ "Album" } />
      <Route path="/favorites" element={ "Favorites" } />
      <Route exact path="/profile" element={ "Profile" } />
      <Route path="/profile/edit" element={ "ProfileEdit" } />
      <Route path="*" element={ "NotFound" } />
    </Routes>
  );
}
