import React, { useCallback, useEffect, useState } from "react";

const initialState = {
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
};

const AuthContext = React.createContext(initialState);

let timeout;

const getStoredExpirationTimeAndToken = () => {
  const token = localStorage.getItem("token");
  const expirationTime = calculateExpirationTime(
    localStorage.getItem("expirationTime")
  );

  if (expirationTime <= 0) {
    localStorage.clear();
    return null;
  } else {
    return {
      token,
      expirationTime,
    };
  }
};

const calculateExpirationTime = (expiresIn) => {
  const currentTime = new Date().getTime();
  const expiresAt = new Date(expiresIn).getTime();

  return expiresAt - currentTime;
};

export const AuthContextProvider = (props) => {
  const tokenData = getStoredExpirationTimeAndToken();
  const initialToken = tokenData ? tokenData.token : null;
  const [token, setToken] = useState(initialToken);

  const isLoggedIn = !!token;

  const loginHandler = (token, expiresIn) => {
    setToken(token);

    const expiresDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const expires = calculateExpirationTime(expiresDate);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expiresDate.toISOString());
    timeout = setTimeout(logoutHandler, expires);
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.clear();
    if (timeout) {
      clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    if (tokenData) {
      timeout = setTimeout(logoutHandler, tokenData.expirationTime);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const fireBaseApiKey = "AIzaSyBgt1ZThfuT6kGeSvi4gFX6Mjvem6up8FI";

export default AuthContext;
