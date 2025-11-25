import { useEffect, useState } from "react"
import { getProfileStatus } from "../api/userAPI";
import { Navigate } from "react-router-dom";

export const ProtectRoute = () => {
  const [completed, setCompleted] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProfileStatus();
      setCompleted(res.completed);
    })();
  },[]);

  if(completed === null) return null;

  if (completed) {
    return <Navigate to="/main" replace />;
  }
  return children
}
