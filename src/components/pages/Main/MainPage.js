import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Current location is ", location);
  }, [location]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigate("one", { replace: false })}>
              Page one
            </button>
          </li>
          <li>
            <button onClick={() => navigate("two", { replace: false })}>
              Page two
            </button>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};
