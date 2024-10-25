"use client";
import { AuthContex } from ".";
import { useRef, useState } from "react";
import { useGetUsersQuery } from "../../redux/services/api/api";

export function AuthContextProvider({ children }) {
  const [userName, setUserName] = useState(null);
  const userId = useRef(null);
  const { isLoading, data: users } = useGetUsersQuery();
  if (isLoading) return;
  const login = () => {
    const name = prompt("Please, enter your name..", "");
    const user = getUserByName(users, name);
    if (user) {
      setUserName(user.name);
      userId.current = user.id;
    }
  };
  const logout = () => {
    setUserName(null);
    userId.current = null;
  };
  return (
    <AuthContex.Provider
      value={{
        isAuthorized: userName !== null,
        userName,
        userId: userId.current,
        login,
        logout,
      }}
    >
      {children}
    </AuthContex.Provider>
  );
}

function getUserByName(users, name) {
  return users.find((user) => user.name == name);
}
