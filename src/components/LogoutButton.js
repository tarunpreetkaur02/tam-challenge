import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
    Button
  } from "reactstrap";

const LogoutButton = () => {
  const { loginWithRedirect,logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });
  return( <Button onClick={() => logoutWithRedirect()}>Log Out</Button>);
};

export default LogoutButton;