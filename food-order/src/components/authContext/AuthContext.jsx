import { AuthContex } from ".";
import { useState } from "react";
const userNames = ["Admin", "Dany", "Helen", "Jhon"];

export function AuthContextProvider({ children }) {
  const [userName, setUserName] = useState(null);
  const login = () => {
    const name = prompt("Please, enter your name..", "");
    if (userNames.includes(name)) {
      setUserName(name);
    }
  };
  const logout = () => {
    setUserName(null);
  };
  return (
    <AuthContex.Provider
      value={{ isAuthorized: userName !== null, userName, login, logout }}
    >
      {children}
    </AuthContex.Provider>
  );
}
