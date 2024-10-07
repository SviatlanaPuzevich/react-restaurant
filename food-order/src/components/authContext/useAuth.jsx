import { useContext } from "react";
import { AuthContex } from ".";

export const useAuth = () => useContext(AuthContex);
