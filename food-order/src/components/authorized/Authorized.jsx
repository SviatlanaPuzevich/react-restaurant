import { useAuth } from "../authContext/useAuth";

export function Authorized({ children }) {
  const { isAuthorized } = useAuth();
  return isAuthorized ? children : null;
}
