"use client";
import { AuthContex } from ".";
import { useState } from "react";
import { useGetUsersQuery } from "../../redux/services/api/api";

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const { isLoading, data: users } = useGetUsersQuery();
  if (isLoading) return;
  const login = () => {
    const name = prompt("Please, enter your name..", "");
    const authUser = getUserByName(users, name);
    if (authUser) {
      setUser(authUser);
    }
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContex.Provider
      value={{
        isAuthorized: user !== null,
        userName: user?.name,
        userId: user?.id,
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
