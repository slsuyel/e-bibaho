import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserLogged from "../../hooks/useUserLogged";

interface UserPrivateProps {
  children: React.ReactNode;
}

const UserPrivate = ({ children }: UserPrivateProps) => {
  const { loggedIn } = useUserLogged();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn, navigate]);

  if (!loggedIn) {
    return null;
  }

  return children;
};

export default UserPrivate;
