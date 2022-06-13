import React from 'react'
import { Routes, Route, } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

export default function NavigationRoutes() {
  return (
    <Routes>
      <Route exact path="/" component={ Home } />
      <Route exact="/login" component={ Login } />
      <Route exact="/registration" component={ Registration } />
      <Route path="/search" component={ "Search" } />
      <Route path="/album/:id" component={ "Album" } />
      <Route path="/favorites" component={ "Favorites" } />
      <Route exact path="/profile" component={ "Profile" } />
      <Route path="/profile/edit" component={ "ProfileEdit" } />
      <Route path="*" component={ "NotFound" } />
    </Routes>
  )
}
