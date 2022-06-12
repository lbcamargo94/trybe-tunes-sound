import React from 'react'
import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ "Login" } />
        {/* <Route path="/search" component={ Search } />
        <Route path="/album/:id" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path="*" component={ NotFound } /> */}
      </Switch>
    </div>
  )
}
