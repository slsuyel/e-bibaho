import { useState } from "react";

const useUserLogged = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return { loggedIn, login, logout };
};

export default useUserLogged;
