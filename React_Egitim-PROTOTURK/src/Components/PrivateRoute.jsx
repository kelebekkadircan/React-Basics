import React from "react";
import { useAuthRouter } from "../Context/RouterContext";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user } = useAuthRouter();
  const location = useLocation();

  console.log(location);
  if (!user) {
    return (
      <Navigate
        to="/auth/login"
        state={{
          return_url: location.pathname + location.search,
        }}
      />
    );
  }

  return { children };
}

export default PrivateRoute;
