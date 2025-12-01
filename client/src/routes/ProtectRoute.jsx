import { useEffect, useState } from "react";
import { getProfileStatus } from "../api/userAPI";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectRoute = ({ children }) => {
  const [completed, setCompleted] = useState(null);
  const location = useLocation();
  const path = location.pathname;

  const localCompleted = sessionStorage.getItem("profileCompleted") === "true";

  useEffect(() => {
    (async () => {
      const res = await getProfileStatus();
      setCompleted(res.completed);
    })();
  }, []);

  if (completed === null) return null;

  if (localCompleted) {
    if (path === "/main") return children;
    if (path === "/intro" || path === "/profile")
      return <Navigate to="/main" replace />;
  }

  if (completed === true && (path === "/intro" || path === "/profile")) {
    return <Navigate to="/main" replace />;
  }
  if (completed === false && path === "/main") {
    return <Navigate to="/intro" replace />;
  }

  return children;
};
