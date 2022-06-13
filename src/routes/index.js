import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function NavigationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={ "Login" } />
        <Route path="/search" component={ "Search" } />
        <Route path="/album/:id" component={ "Album" } />
        <Route path="/favorites" component={ "Favorites" } />
        <Route exact path="/profile" component={ "Profile" } />
        <Route path="/profile/edit" component={ "ProfileEdit" } />
        <Route path="*" component={ "NotFound" } />
      </Routes>
    </BrowserRouter>
  )
}
