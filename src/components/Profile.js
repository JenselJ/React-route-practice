import React from "react";
import { useSelector } from "react-redux";
import { Route, Link, Redirect } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";
import EditProfileForm from "./EditProfileForm";
import { useRouteMatch } from "react-router-dom";

export default function Profile () {
  const currentUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);

  // call useRouteMatch() to get the url and path
  const { url, path } = useRouteMatch();


  // use loggedIn to return a Redirect
  if (!loggedIn) {
    return <Redirect to='/sign-up'/>
  }


  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={`${path}/edit`}>Edit</Link>
      <Route path={`${url}/edit`}>
        <EditProfileForm />
      </Route>
    </main>
  )
}
