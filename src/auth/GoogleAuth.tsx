import React from "react";
import { GoogleLogin } from "react-google-login";

const GoogleSignInButton = () => {
  const clientId = "YOUR_CLIENT_ID.apps.googleusercontent.com";

  const onSuccess = (response: any) => {
    console.log("Login Success:", response);
  };

  const onFailure = (error: any) => {
    console.error("Login Failure:", error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleSignInButton;
